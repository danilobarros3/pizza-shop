import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid } from "recharts";

const data = [
  {
    date: "01/01",
    revenue: 100,
  },
  {
    date: "01/07",
    revenue: 20,
  },
  {
    date: "06/08",
    revenue: 100,
  },
  {
    date: "10/12",
    revenue: 100,
  },
];
export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <LineChart data={data} style={{ fontSize: "12" }}>
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
              }
            />
            <Line
              type="linear"
              dataKey="revenue"
              stroke="#8884d8"
              strokeWidth={2}
            />
            <CartesianGrid vertical={false} className="stroke-muted"/>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
