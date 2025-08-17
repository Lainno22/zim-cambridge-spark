import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Video, Calendar, Clock } from "lucide-react";

const schedule = [
  {
    time: "10:00 AM",
    title: "Live Chemistry Class",
    subject: "Chemistry",
    type: "live",
    duration: "1 hour",
    teacher: "Dr. Smith",
  },
  {
    time: "2:00 PM", 
    title: "Mathematics Tutorial",
    subject: "Mathematics",
    type: "tutorial",
    duration: "45 mins",
    teacher: "Mr. Johnson",
  },
  {
    time: "4:30 PM",
    title: "Physics Lab Session",
    subject: "Physics", 
    type: "lab",
    duration: "1.5 hours",
    teacher: "Mrs. Brown",
  },
];

export function UpcomingSchedule() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Today's Schedule
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {schedule.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">{item.time}</Badge>
                <Badge 
                  variant={item.type === "live" ? "default" : "secondary"}
                  className="text-xs capitalize"
                >
                  {item.type}
                </Badge>
              </div>
              <h4 className="font-medium">{item.title}</h4>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {item.duration}
                </span>
                <span>{item.teacher}</span>
              </div>
            </div>
            <Button size="sm" className="gap-2">
              <Video className="h-4 w-4" />
              Join
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}