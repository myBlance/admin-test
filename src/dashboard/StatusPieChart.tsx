import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import api from "../services/api";

const COLORS = ["#0035e5", "#2870ff", "#6db5dc", "#ca543f"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
    const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="none"
            fontSize={12}
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${((percent ?? 0) * 100).toFixed(0)}%`}
        </text>
    );
};

export default function StatusPieChart() {
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
        if (!cordId) return;

        const fetchData = async () => {
            try {
                const res = await api.get("/api/Dashboards/GetTopDevicesByCordId", {
                    params: {
                        id: cordId,
                        FromAt: "2025-09-01T00:00:00Z",
                        ToAt: "2025-09-24T23:59:59Z",
                    },
                    headers: {
                        Accept: "application/json",
                    },
                });

                console.log("TopDevices API Response:", res.data);

                let dataArray: any[] = [];

                if (
                    res.data &&
                    typeof res.data === "object" &&
                    "data" in res.data &&
                    res.data.data &&
                    typeof res.data.data === "object" &&
                    "pagedData" in res.data.data &&
                    Array.isArray((res.data.data as { pagedData?: any[] }).pagedData)
                ) {
                    dataArray = (res.data.data as { pagedData: any[] }).pagedData;
                }

                const transformed = dataArray.map((item: any) => ({
                    name: item.statusName || "Unknown",
                    value: item.count || 0,
                }));

                setData(transformed);
            } catch (err) {
                console.error("Error fetching top devices", err);
            }
        };

        fetchData();
    }, [cordId]);


    return (
        <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        startAngle={235}   //  bắt đầu từ hướng 12 giờ
                        endAngle={-270}    //  quay ngược chiều kim đồng hồ
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={130}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                        <Cell
                            key={`cell-${entry.name}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                        ))}
                    </Pie>
                    <Tooltip />
                    {/* Legend có thể đổi icon */}
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
                                <span>{entry.value}</span>
                                </div>
                            ))}
                            </div>
                        )}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
