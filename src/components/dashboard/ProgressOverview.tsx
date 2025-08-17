import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const subjects = [
  { name: "Mathematics", progress: 85, grade: "A", color: "bg-education-primary" },
  { name: "English", progress: 72, grade: "B", color: "bg-info" },
  { name: "Physics", progress: 68, grade: "B", color: "bg-success" },
  { name: "Chemistry", progress: 91, grade: "A*", color: "bg-warning" },
  { name: "Biology", progress: 76, grade: "B", color: "bg-accent" },
];

export function ProgressOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Subject Progress
          <Badge variant="outline">Form 4 - Cambridge</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {subjects.map((subject) => (
          <div key={subject.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                <span className="font-medium">{subject.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                <Badge variant={subject.grade.includes("A") ? "default" : "secondary"}>
                  {subject.grade}
                </Badge>
              </div>
            </div>
            <Progress value={subject.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}