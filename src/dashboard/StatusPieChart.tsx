import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import api from "../services/api";
import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore";
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

const COLORS = ["#0035e5", "#2870ff", "#6db5dc", "#ca543f"];
const RADIAN = Math.PI / 180;

const STATUS_MAP: Record<number, string> = {
    1: "Mới",
    2: "Đã kích hoạt",
    3: "Đang hoạt động",
    4: "Không hoạt động",
};

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

interface StatusPieChartProps {
    selectedDeviceId: string; 
    startDate: Dayjs | null;
    endDate: Dayjs | null;
}

export default function StatusPieChart({
    selectedDeviceId,
    startDate,
    endDate,
}: StatusPieChartProps) {
    const [data, setData] = useState<any[]>([]);
    const [cordId, setCordId] = useState<string | null>(null);

    // Lấy cordId
    useEffect(() => {
        const fetchCordId = async () => {
            try {
                const res = await api.get<{
                    data?: {
                        pagedData?: { id?: string | null }[];
                    };
                }>("/api/Accounts/GetCorByUser", {
                    headers: { Accept: "application/json" },
                });

                console.log("CordId API Response:", res.data);

                let id: string | null = null;
                if (res.data && res.data.data?.pagedData?.length && res.data.data.pagedData.length > 0) {
                    id = res.data.data.pagedData[0].id ?? null;
                }

                setCordId(id);
            } catch (err) {
                console.error("Error fetching cordId", err);
            }
        };

        fetchCordId();
    }, []);

    // Lấy danh sách thiết bị theo cordId + lọc theo device + ngày
    useEffect(() => {
        if (!cordId) return;

        const fetchDevices = async () => {
            try {
                const res = await api.get("/api/Devices/GetAllDevicebyCorId", {
                    params: { id: cordId },
                    headers: { Accept: "application/json" },
                });

                console.log("Devices API Response:", res.data);

                let devices: any[] = (res.data as { data?: any[] })?.data ?? [];

                // Lọc theo deviceId
                if (selectedDeviceId !== "all") {
                    devices = devices.filter((d) => d.id === selectedDeviceId);
                }

                // Lọc theo khoảng thời gian
                if (startDate && endDate) {
                    devices = devices.filter((d) => {
                    if (!d.createdAt) return false;
                    const created = dayjs(d.createdAt);
                    return (
                        created.isSameOrAfter(startDate, "day") &&
                        created.isSameOrBefore(endDate, "day")
                    );
                    });
                }

                if (!devices.length) {
                    setData([]);
                    return;
                }

                // Đếm số lượng theo status
                const statusCount: Record<number, number> = {};
                devices.forEach((device: any) => {
                    const st = device.status ?? 0;
                    statusCount[st] = (statusCount[st] || 0) + 1;
                });

                // Map thành chart data
                const chartData = Object.entries(statusCount).map(([key, value]) => ({
                    name: STATUS_MAP[Number(key)] || `Status ${key}`,
                    value,
                }));

                setData(chartData);
            } catch (err) {
                console.error("Error fetching devices", err);
            }
        };

        fetchDevices();
    }, [cordId, selectedDeviceId, startDate, endDate]);
    return (
        <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        startAngle={235}
                        endAngle={-270}
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
                    <Legend
                        verticalAlign="bottom"
                        height={50}
                        content={({ payload }) => (
                            <div
                                style={{ display: "flex", justifyContent: "center", gap: 20 }}
                            >
                                {payload?.map((entry: any, index: number) => (
                                    <div
                                        key={`item-${index}`}
                                        style={{ display: "flex", alignItems: "center", gap: 10 }}
                                    >
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
