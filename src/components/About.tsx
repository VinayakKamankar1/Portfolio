import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, Target, Users } from "lucide-react";

const About = () => {
  const strengths = [
    { icon: Brain, title: "Quick Learner", description: "Adaptable to new technologies" },
    { icon: Target, title: "Strong Work Ethic", description: "Dedicated and results-driven" },
    { icon: Lightbulb, title: "Innovative Thinking", description: "Creative problem-solving approach" },
    { icon: Users, title: "Team Player", description: "Collaborative and supportive" }
  ];

  return (
    <section id="about" className="py-20 px-6 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building the <span className="text-gradient">Future</span> with Tech
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about creating intelligent and sustainable technology solutions 
            that make a real-world impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 scroll-animate-left stagger-1">
            <h3 className="text-2xl font-semibold mb-4">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              B.Tech student specializing in <strong className="text-primary">Artificial Intelligence and Machine Learning</strong>, 
              with a strong background in IoT, Embedded Systems, and Software Development. 
              Proficient in Python, Java, and Web Technologies with hands-on project experience 
              in smart systems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I'm passionate about building intelligent and sustainable tech solutions, 
              with a quick learning mindset and strong problem-solving abilities combined 
              with excellent teamwork and leadership skills.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 scroll-animate-right stagger-2">
            {strengths.map((strength, index) => (
              <Card key={index} className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:tech-shadow">
                <CardContent className="p-6 text-center">
                  <strength.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">{strength.title}</h4>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="card-gradient border-primary/20 scroll-animate stagger-3">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Personal Details</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="font-semibold text-primary mb-2">Location</h4>
                <p className="text-muted-foreground">Nashik, Maharashtra</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Languages</h4>
                <p className="text-muted-foreground">English, Hindi, Marathi</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Date of Birth</h4>
                <p className="text-muted-foreground">November 4, 2005</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;