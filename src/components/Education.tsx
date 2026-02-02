import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology – AIML",
      institution: "Sanjivani University, Kopargaon",
      period: "2024 – 2027",
      status: "Current",
      description: "Specializing in Artificial Intelligence and Machine Learning with focus on practical applications in IoT and embedded systems.",
      icon: "🎓"
    },
    {
      degree: "Diploma in Mechatronics",
      institution: "Government Polytechnic, Nashik",
      period: "2021 – 2024",
      status: "Completed",
      grade: "80%",
      description: "Comprehensive study of mechanical, electrical, and computer engineering principles with hands-on experience in automation.",
      icon: "⚙️"
    }
  ];

  const certifications = [
    "Power BI Data Modelling Basics",
    "SQL and Relational Database 101 – IBM",
    "Building Cloud and Multicloud Applications – IBM"
  ];

  return (
    <section id="education" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Education & Certifications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building a strong foundation in AI/ML and mechatronics with continuous 
            learning through industry certifications.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:tech-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{edu.icon}</div>
                      <div>
                        <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                        <div className="flex items-center text-muted-foreground mb-2">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.institution}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex gap-2">
                        <Badge variant={edu.status === "Current" ? "default" : "secondary"}>
                          {edu.status}
                        </Badge>
                        {edu.grade && (
                          <Badge variant="outline" className="border-primary/30 text-primary">
                            <Award className="h-3 w-3 mr-1" />
                            {edu.grade}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="card-gradient border-primary/20">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Professional Certifications</CardTitle>
            </div>
            <p className="text-muted-foreground">
              Continuous learning through industry-recognized programs
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors">
                  <CardContent className="p-4 text-center">
                    <Badge variant="outline" className="border-primary/30 text-primary mb-2">
                      Certified
                    </Badge>
                    <p className="text-sm font-medium">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;