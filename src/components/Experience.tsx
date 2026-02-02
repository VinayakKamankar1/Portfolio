import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, CheckCircle, Users, Trophy, Lightbulb, Award } from "lucide-react";

const Experience = () => {
  const workExperience = {
    company: "Maceltron Machines Pvt. Ltd., Nashik",
    position: "Electrical Intern",
    period: "Jan 2024 – Apr 2024",
    duration: "4 months",
    responsibilities: [
      "Assisted in designing and wiring control panels",
      "Tested and debugged PLC-based automation systems", 
      "Handled documentation and setup for industrial machines"
    ]
  };

  const achievements = [
    {
      title: "IIT Guwahati Event (Techniche)",
      description: "First Rank in Micromouse Competition (Maze Solving Robot)",
      icon: Trophy
    },
    {
      title: "IIT Bombay Techfest",
      description: "Participated in Robotics Competition (Line Maze Solving Robot)",
      icon: Award
    }
  ];

  const extraCurricular = [
    {
      activity: "Vice President – AIML Club",
      description: "Leading initiatives under the Innovation Cell to promote AI/ML knowledge, hands-on projects, and innovative problem-solving.",
      icon: Lightbulb
    },
    {
      activity: "Cricket Team Member",
      description: "Active member of the college cricket team with participation in multiple inter-departmental and college-level tournaments",
      icon: Trophy
    },
    {
      activity: "Tech Event Volunteer",
      description: "Volunteered in tech fests and workshops, helping organize events and support technical demonstrations",
      icon: Users
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Experience & Activities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Gaining hands-on experience in industrial automation while actively 
            participating in sports and technical communities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Work Experience */}
          <Card className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:tech-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Professional Experience</CardTitle>
                  <p className="text-muted-foreground">Industrial Automation Internship</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-primary">{workExperience.position}</h3>
                <div className="flex items-center text-muted-foreground mb-1">
                  <Building className="h-4 w-4 mr-2" />
                  {workExperience.company}
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {workExperience.period}
                </div>
                <Badge variant="secondary">{workExperience.duration}</Badge>
              </div>
            </CardHeader>

            <CardContent>
              <h4 className="font-semibold mb-3 text-primary">Key Responsibilities</h4>
              <ul className="space-y-3">
                {workExperience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:tech-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Achievements</CardTitle>
                  <p className="text-muted-foreground">Competition Success</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <achievement.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Extra-Curricular Activities */}
          <Card className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:tech-shadow">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Extra-Curricular</CardTitle>
                  <p className="text-muted-foreground">Activities & Leadership</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {extraCurricular.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <activity.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">{activity.activity}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Achievement Highlight */}
        <Card className="mt-8 card-gradient border-primary/20 text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Building <span className="text-gradient">Real-World Impact</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Through internships and project work, I've gained valuable experience in industrial automation, 
              PLC systems, and control panel design. My involvement in sports and technical communities 
              has strengthened my leadership and teamwork abilities, essential for collaborative tech projects.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;