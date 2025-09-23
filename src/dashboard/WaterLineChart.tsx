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

const data = [
    { month: "T1", water: 0 },
    { month: "T2", water: 20 },
    { month: "T3", water: 45 },
    { month: "T4", water: 20 },
    { month: "T5", water: 20 },
    { month: "T6", water: 25 },
    { month: "T7", water: 45 },
    { month: "T8", water: 30 },
    { month: "T9", water: 30 },
    { month: "T10", water: 60 },
    { month: "T11", water: 60 },
    { month: "T12", water: 60 },
];

export default function WaterLineChart() {
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
