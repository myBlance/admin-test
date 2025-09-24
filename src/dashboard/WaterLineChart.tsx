import { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    LabelList,
} from "recharts";
import api from "../services/api";
import dayjs from "dayjs";

export default function WaterLineChart() {
    const [data, setData] = useState<any[]>([]);
    const [cordId, setCordId] = useState<string | null>(null);


    useEffect(() => {
        const fetchCordId = async () => {
            try {
                const res = await api.get("/api/Accounts/GetCorByUser", {
                    headers: { Accept: "application/json" },
                });

                console.log("CordId API Response:", res.data);

                let id: string | null = null;

                // Kiểm tra dữ liệu trả về
                if (res.data && typeof res.data === "object" && "data" in res.data) {
                    const dataObj = res.data.data ?? {};
                    const pagedData = Array.isArray((dataObj as any).pagedData) ? (dataObj as any).pagedData : [];
                    if (pagedData.length > 0 && "id" in pagedData[0]) {
                        id = pagedData[0].id;
                    }
                }

                setCordId(id);
            } catch (err) {
                console.error("Error fetching cordId", err);
            }
        };

        fetchCordId();
    }, []);

    useEffect(() => {
        if (!cordId) return; // chưa có id thì bỏ qua

        const fetchData = async () => {
            try {
                const res = await api.get("/api/Dashboards/GetDailyUsageByCorId", {
                    params: {
                        id: cordId,
                        FromAt: "2025-01-01T00:00:00Z",
                        ToAt: "2025-12-31T23:59:59Z",
                    },
                });

                console.log("DailyUsage API Response:", res.data);

                let apiData: any[] = [];
                if (
                    res.data &&
                    typeof res.data === "object" &&
                    "data" in res.data &&
                    res.data.data &&
                    typeof res.data.data === "object" &&
                    "pagedData" in res.data.data &&
                    Array.isArray(res.data.data.pagedData)
                ) {
                    apiData = res.data.data.pagedData;
                }

                const transformed = apiData.map((item: any) => ({
                    month: dayjs(item.date).format("MM/YYYY"),
                    water: item.usage,
                }));

                setData(transformed);
            } catch (err) {
                console.error("Error fetching data", err);
            }
        };

        fetchData();
    }, [cordId]);

    return (
        <div style={{ width: "100%", height: 400}}>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 50, right: 80, left: 20, bottom: 20 }}>
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        horizontal={true} // Nét ngang
                        vertical={false}  // Bỏ nét dọc
                    />
                    <XAxis 
                        dataKey="month" 
                    />
                    <YAxis 
                        domain={[0, 100]} 
                        ticks={[0, 20, 40, 60, 80, 100, 120]} 
                        label={{ 
                            value: "m³", 
                            angle: 0, 
                            position: "insideTop", 
                            offset: -25,
                            dx: 15,
                        }} 
                    />
                    <Tooltip />
                    <Line
                        type="linear"
                        dataKey="water"
                        stroke="#0088FE"
                        strokeWidth={2}
                        dot={false}
                    >
                        <LabelList dataKey="water" position="top" color="#0088FE"/>
                    </Line>
                    <Legend
                        verticalAlign="bottom"
                        height={50}
                        content={({ payload }) => (
                            <div style={{ display: "flex", justifyContent: "center", gap: 20 }}>
                                {payload?.map((entry: any, index: number) => (
                                    <div key={`item-${index}`} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    {/* Ô chữ nhật dài */}
                                        <div
                                            style={{
                                            width: 20,
                                            height: 13,
                                            backgroundColor: entry.color,
                                            borderRadius: 1,
                                            }}
                                        />
                                        <span>Lượng nước tiêu thụ</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
