import { BarChart } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { ResponsiveContainer, Pie, PieChart, Cell } from "recharts";

const data = [
  {
    product: "Pepperoni",
    amount: 40,
  },
  {
    product: "Mussarela",
    amount: 20,
  },
  {
    product: "Portuguesa",
    amount: 30,
  },
  {
    product: "Frango com queijo",
    amount: 50,
  },
  {
    product: "4 Queijos",
    amount: 70,
  },
];
export function PopularProductsChart() {
  const COLORS = ["#8884d8", "#83d4ff", "#ffccff", "#ffffb3", "#ef3835"];
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="w-4 h-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <PieChart style={{ fontSize: "12" }}>
            <Pie
              data={data}
              dataKey="amount"
              cx="50%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              stroke=""
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180;
                const radius = 12 + innerRadius + (outerRadius - innerRadius);
                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                const y = cy + radius * Math.sin(-midAngle * RADIAN);

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? "start" : "end"}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat("...")
                      : data[index].product}{" "}
                    ({value})
                  </text>
                );
              }}
            >
              {data.map((_, index) => {
                return <Cell key={index} fill={COLORS[index]} />;
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
