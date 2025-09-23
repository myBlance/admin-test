import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
    { name: "Mới", value: 7 },
    { name: "Đang kích hoạt", value: 3 },
    { name: "Đang hoạt động", value: 4 },
    { name: "Không hoạt động", value: 3 },
];

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
