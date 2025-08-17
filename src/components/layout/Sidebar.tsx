import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Home, 
  Users, 
  FileText,
  Trophy,
  Settings,
  HelpCircle
} from "lucide-react";
import {
  Sidebar as SidebarPrimitive,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    icon: Home,
    url: "/dashboard",
  },
  {
    title: "Virtual Classroom",
    icon: Users,
    url: "/classroom",
  },
  {
    title: "My Courses",
    icon: BookOpen,
    url: "/courses",
  },
  {
    title: "Assignments",
    icon: FileText,
    url: "/assignments",
  },
  {
    title: "Practice & Exams",
    icon: GraduationCap,
    url: "/exams",
  },
  {
    title: "Achievements",
    icon: Trophy,
    url: "/achievements",
  },
  {
    title: "Schedule",
    icon: Calendar,
    url: "/schedule",
  },
];

export function Sidebar() {
  return (
    <SidebarPrimitive>
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-education-primary" />
          <div>
            <h2 className="text-lg font-bold text-sidebar-foreground">Smart School</h2>
            <p className="text-sm text-sidebar-foreground/60">Zimbabwe & Cambridge</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors">
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/help" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors">
                <HelpCircle className="h-5 w-5" />
                <span>Help & Support</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent transition-colors">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </SidebarPrimitive>
  );
}