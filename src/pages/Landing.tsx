import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Trophy, 
  Clock, 
  Globe, 
  Video, 
  Brain,
  Target,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Play
} from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-education-primary" />
              <div>
                <h1 className="text-xl font-bold text-foreground">Smart School</h1>
                <p className="text-xs text-muted-foreground">Zimbabwe & Cambridge</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
              <a href="#courses" className="text-muted-foreground hover:text-foreground transition-colors">Courses</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            </nav>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm">Sign In</Button>
              <Button size="sm" className="bg-education-primary hover:bg-education-primary/90">
                <a href="/dashboard">Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-education-primary/5 via-background to-education-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge variant="outline" className="mb-4">
              🎓 Trusted by 10,000+ Students Worldwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Master Your
              <span className="text-education-primary"> ZIMSEC </span>
              & 
              <span className="text-education-secondary"> Cambridge </span>
              Exams
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join Zimbabwe's leading online school. Interactive lessons, AI-powered practice, 
              and expert teachers for Form 1-4 and A-Level success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button size="lg" className="bg-education-primary hover:bg-education-primary/90 text-lg px-8">
                <a href="/dashboard" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-education-primary">98%</div>
                <div className="text-sm text-muted-foreground">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-education-secondary">15+</div>
                <div className="text-sm text-muted-foreground">Subjects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-info">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">500+</div>
                <div className="text-sm text-muted-foreground">Expert Teachers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive platform combines traditional excellence with cutting-edge technology
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-education-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-education-primary/10 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-education-primary" />
                </div>
                <CardTitle>Live Interactive Classes</CardTitle>
                <CardDescription>
                  Join real-time lessons with expert teachers, interactive whiteboards, and peer collaboration
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-education-secondary/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-education-secondary/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-education-secondary" />
                </div>
                <CardTitle>AI-Powered Learning</CardTitle>
                <CardDescription>
                  Personalized study plans, adaptive practice questions, and intelligent performance tracking
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-info/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-info" />
                </div>
                <CardTitle>Exam Preparation</CardTitle>
                <CardDescription>
                  ZIMSEC & Cambridge past papers, mock exams, and timed practice sessions
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-success/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-success" />
                </div>
                <CardTitle>Gamified Learning</CardTitle>
                <CardDescription>
                  Earn XP points, unlock badges, and compete on leaderboards for motivation
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-warning/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <CardTitle>Flexible Schedule</CardTitle>
                <CardDescription>
                  Learn at your own pace with recorded lessons available 24/7 alongside live classes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-accent/50 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Parent Dashboard</CardTitle>
                <CardDescription>
                  Track your child's progress, attendance, and performance with detailed analytics
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Curriculum</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive Subject Coverage
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master all subjects for both ZIMSEC and Cambridge syllabi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">ZIMSEC Curriculum</CardTitle>
                  <Badge className="bg-education-primary text-education-primary-foreground">
                    Form 1-4
                  </Badge>
                </div>
                <CardDescription>
                  Complete coverage of Zimbabwe School Examinations Council syllabus
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Mathematics", "English Language", "Science", "Geography", 
                  "History", "Shona/Ndebele", "Business Studies"
                ].map((subject) => (
                  <div key={subject} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-education-primary" />
                    <span>{subject}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">Cambridge Curriculum</CardTitle>
                  <Badge className="bg-education-secondary text-education-secondary-foreground">
                    O & A Level
                  </Badge>
                </div>
                <CardDescription>
                  International Cambridge Assessment curriculum for global recognition
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Mathematics", "Physics", "Chemistry", "Biology",
                  "English Literature", "Economics", "Computer Science"
                ].map((subject) => (
                  <div key={subject} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-education-secondary" />
                    <span>{subject}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Success Stories</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our Students Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-4">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Smart School helped me improve my Mathematics from a C to an A*. The AI practice questions were perfectly tailored to my weak areas!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-education-primary/10 flex items-center justify-center">
                    <span className="font-semibold text-education-primary">T</span>
                  </div>
                  <div>
                    <p className="font-semibold">Tanaka Moyo</p>
                    <p className="text-sm text-muted-foreground">Form 4 Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-4">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The live chemistry classes were amazing! Dr. Smith made complex concepts so easy to understand. Got 5 As in my Cambridge exams!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-education-secondary/10 flex items-center justify-center">
                    <span className="font-semibold text-education-secondary">C</span>
                  </div>
                  <div>
                    <p className="font-semibold">Chipo Mufandaedza</p>
                    <p className="text-sm text-muted-foreground">A-Level Graduate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-4">
                <div className="flex items-center gap-1 mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "As a parent, I love the progress tracking. I can see exactly how my daughter is performing and where she needs help."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-info/10 flex items-center justify-center">
                    <span className="font-semibold text-info">M</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mrs. Mukamuri</p>
                    <p className="text-sm text-muted-foreground">Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-education-primary to-education-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Transform Your Education?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of successful students who chose Smart School for their academic journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                <a href="/dashboard" className="flex items-center">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-education-primary">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6 text-education-primary" />
                <span className="font-bold">Smart School</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering Zimbabwean students with world-class online education
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-foreground transition-colors">Dashboard</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Courses</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Practice Exams</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Progress Tracking</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-foreground transition-colors">Help Center</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Community</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Blog</a></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div><a href="#" className="hover:text-foreground transition-colors">About Us</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></div>
                <div><a href="#" className="hover:text-foreground transition-colors">Careers</a></div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Smart School Zimbabwe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}