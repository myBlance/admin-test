import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Kỹ thuật, công nghệ (B)", value: 30 },
  { name: "Kinh doanh (A)", value: 30 },
  { name: "Cá nhân có ảnh hưởng (I)", value: 30 },
  { name: "Liên minh, hiệp hội (H)", value: 30 },
  { name: "Khách hàng (G)", value: 30 },
  { name: "Cơ quan NN (F)", value: 30 },
  { name: "Nghiên cứu phát triển và Đối tượng sáng tạo (E)", value: 30 },
  { name: "Nhân sự, văn hóa (D)", value: 30 },
  { name: "Tài chính, kế toán (C)", value: 30 },
];

// Data mới để vẽ các vòng tròn
const dataCircle = [
  { name: "Ban kế hoạch - Chiến lược", value: 50, color: "red" },
  { name: "Ban, Văn phòng, BU, Phòng", value: 80, color: "blue" },
  { name: "Đơn vị trực thuộc", value: 110, color: "green" },
  { name: "Chi nhánh; Mobifone Tỉnh/Thành phố", value: 150, color: "black" },
];

const COLORS = [
  "#fe0000", 
  "#c46900", 
  "#e6ff28", 
  "#48ff42", 
  "#00cffe", 
  "#0045c4", 
  "#8528ff", 
  "#ff42d3", 
  "#00fedc"
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, index }: any) => {
  if (index === undefined) return null;
  const radius = outerRadius * 1.1;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={12} fontWeight="bold">
      {data[index].name}
    </text>
  );
};

const PieChartWithDynamicCircles: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", position: "relative"}}>
      <ResponsiveContainer width="80%" height={400}>
        <PieChart>
        
          <Pie 
            data={data} 
            cx="50%" 
            cy="50%" 
            labelLine={false} 
            label={renderCustomizedLabel} 
            outerRadius={150} 
            dataKey="value" 
            stroke="#000" 
            strokeWidth={1}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 20 }}>
            <rect width="100%" height="100%" fill="rgba(255, 255, 255, 0.6)" />
          </svg>

          <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none", zIndex: 10 }}>
            {dataCircle.map((circle, index) => (
              <circle
                key={index}
                cx="50%"
                cy="50%"
                r={circle.value}
                stroke={circle.color}
                strokeWidth="2"
                fill="none"
              />
            ))}
          </svg>

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartWithDynamicCircles;
