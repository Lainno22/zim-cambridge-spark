import { AppLayout } from "@/components/layout/AppLayout";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { ProgressOverview } from "@/components/dashboard/ProgressOverview";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { UpcomingSchedule } from "@/components/dashboard/UpcomingSchedule";

const Index = () => {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Student!</h1>
          <p className="text-muted-foreground">
            Here's your learning overview for today. Ready to continue your journey?
          </p>
        </div>
        
        <StatsCards />
        
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <ProgressOverview />
            <RecentActivity />
          </div>
          <div>
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Index;
