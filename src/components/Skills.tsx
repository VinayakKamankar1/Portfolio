import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cpu, Globe, Wrench, Users, Lightbulb, MessageCircle, Target } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { icon: Code, title: "Programming Languages", skills: ["Python", "Java"] },
    { icon: Cpu, title: "Embedded Systems", skills: ["Embedded Systems Development", "Microcontroller Programming"] },
    { icon: Globe, title: "Web Development", skills: ["HTML", "CSS", "JavaScript"] },
    { icon: Wrench, title: "Engineering Design", skills: ["CAD & Engineering Design"] }
  ];

  const softSkills = [
    { icon: Users, title: "Leadership & Teamwork", description: "Strong leadership and teamwork abilities" },
    { icon: Target, title: "Problem Solving", description: "Problem-solving mindset with analytical approach" },
    { icon: Lightbulb, title: "Creative Thinking", description: "Innovative thinking for creative solutions" },
    { icon: MessageCircle, title: "Communication", description: "Strong communication skills" }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/20 scroll-animate">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Skills & Expertise
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive skill set spanning from low-level embedded programming 
            to high-level AI/ML solutions.
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16 scroll-animate stagger-1">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:tech-shadow">
                <CardHeader className="text-center">
                  <category.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="block text-center py-2">
                      {skill}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="scroll-animate stagger-2">
          <h3 className="text-2xl font-semibold mb-8 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:tech-shadow">
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;