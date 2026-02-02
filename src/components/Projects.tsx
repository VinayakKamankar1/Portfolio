import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Shield, Droplets, Factory, Eye, Lock } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Eye,
      title: "Traffic Violation Detection System",
      description: "To reduce urban traffic congestion and enhance road safety through real-time adaptive signal control and automated violation detection.",
      technologies: ["NodeMCU", "Ultrasonic Sensors", "IR Sensors", "Python", "OpenCV", "ANPR Camera", "Cloud Services"],
      features: [
        "Dynamic signal timing adapting to real-time vehicle density",
        "Computer vision module for red-light violation detection", 
        "License plate logging and cloud-based dashboard",
        "Traffic flow and violation data monitoring"
      ],
      gradient: "from-yellow-500/20 to-orange-500/20"
    },
    {
      icon: Droplets,
      title: "AgroSense – Smart Crop Analysis & AI Agronomy Assistant",
      description: "To provide farmers with data-driven agricultural decisions by recommending optimal crops using ML and offering expert consultation on pest control and farm management using a multimodal AI.",
      technologies: ["Python", "Flask", "Scikit-learn (Random Forest)", "Pandas", "Google Gemini API", "HTML", "CSS", "JavaScript"],
      features: [
        "ML model (RandomForestClassifier) for crop recommendations",
        "Analyzes 7 soil/environmental factors (N, P, K, pH, temperature, humidity, rainfall)",
        "Gemini-powered AI assistant for expert advice",
        "Irrigation, fertilizers, and pest management recommendations"
      ],
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Shield,
      title: "Fire Fighting Robot with Web Integration",
      description: "To design and build an autonomous robot capable of detecting and suppressing fires in indoor environments, with a web-based manual override.",
      technologies: ["ESP32-CAM", "Flame Sensor", "Ultrasonic Sensors", "Motor Driver", "Web Interface (HTML/JS)", "WebSocket"],
      features: [
        "Autonomous navigation with obstacle avoidance",
        "Real-time fire detection using flame sensors",
        "Automated water pump activation",
        "Web-based UI for live video streaming and manual control"
      ],
      gradient: "from-red-500/20 to-pink-500/20"
    },
    {
      icon: Lock,
      title: "Cyber Shield – Advanced URL Security Analyzer",
      description: "To protect users from phishing, malware, and malicious websites by analyzing URLs using AI-based threat intelligence and heuristic security scoring.",
      technologies: ["React", "Node.js", "Express", "Axios", "TailwindCSS", "Chart.js", "Google Safe Browsing API", "JavaScript", "LocalStorage"],
      features: [
        "Real-time URL analysis with instant security scores",
        "Google Safe Browsing API integration for AI-driven threat intelligence",
        "Blended threat scoring combining AI signals and heuristics",
        "Batch evaluation with Precision, Recall, F1-Score, and ROC-AUC metrics"
      ],
      gradient: "from-purple-500/20 to-indigo-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 scroll-animate">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Featured Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Innovation in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real-world solutions addressing traffic management, safety, agriculture, 
            and industrial challenges through smart technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:tech-shadow overflow-hidden scroll-animate-${index % 2 === 0 ? 'left' : 'right'} stagger-${Math.min(index + 1, 8)}`}>
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;