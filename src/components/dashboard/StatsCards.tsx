import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Trophy, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Courses Enrolled",
    value: "8",
    icon: BookOpen,
    description: "Active subjects",
    color: "text-education-primary",
  },
  {
    title: "Study Hours",
    value: "24.5",
    icon: Clock,
    description: "This week",
    color: "text-info",
  },
  {
    title: "Assignments",
    value: "12",
    icon: TrendingUp,
    description: "Completed this month",
    color: "text-success",
  },
  {
    title: "XP Points",
    value: "1,247",
    icon: Trophy,
    description: "Total earned",
    color: "text-warning",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}