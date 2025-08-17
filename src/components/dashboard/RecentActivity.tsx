import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle2, AlertCircle, BookOpen } from "lucide-react";

const activities = [
  {
    type: "assignment",
    title: "Physics Lab Report",
    subject: "Physics",
    status: "completed",
    time: "2 hours ago",
    icon: CheckCircle2,
    color: "text-success",
  },
  {
    type: "quiz",
    title: "Algebra Practice Quiz",
    subject: "Mathematics", 
    status: "pending",
    time: "Due in 3 hours",
    icon: Clock,
    color: "text-warning",
  },
  {
    type: "lesson",
    title: "Organic Chemistry Chapter 5",
    subject: "Chemistry",
    status: "in-progress",
    time: "Started 1 hour ago",
    icon: BookOpen,
    color: "text-info",
  },
  {
    type: "assignment",
    title: "English Literature Essay",
    subject: "English",
    status: "overdue",
    time: "2 days overdue",
    icon: AlertCircle,
    color: "text-destructive",
  },
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <activity.icon className={`h-5 w-5 ${activity.color}`} />
            <div className="flex-1 space-y-1">
              <p className="font-medium leading-none">{activity.title}</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">{activity.subject}</Badge>
                <span className="text-xs text-muted-foreground">{activity.time}</span>
              </div>
            </div>
            <Badge 
              variant={activity.status === "completed" ? "default" : 
                      activity.status === "overdue" ? "destructive" : 
                      "secondary"}
              className="capitalize"
            >
              {activity.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}