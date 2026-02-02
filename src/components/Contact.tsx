import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Download, MessageCircle, Users } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "kamankarvinayak1@gmail.com",
      href: "mailto:kamankarvinayak1@gmail.com",
      description: "Best for project discussions"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 7083571601",
      href: "tel:+917083571601",
      description: "Available for calls"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nashik, Maharashtra",
      href: "#",
      description: "Open to remote work"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@VinayakKamankar1",
      href: "https://github.com/VinayakKamankar1",
      description: "Check out my code"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Vinayak Kamankar",
      href: "https://linkedin.com/in/vinayak-kamankar-541770349",
      description: "Professional network"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build <span className="text-gradient">Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm always excited to discuss new opportunities, innovative projects, 
            or potential collaborations in AI/ML and IoT development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="card-gradient border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageCircle className="h-6 w-6 text-primary mr-3" />
                Contact Information
              </CardTitle>
              <p className="text-muted-foreground">
                Reach out through any of these channels
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <method.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">{method.label}</h4>
                    <a 
                      href={method.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                    >
                      {method.value}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="card-gradient border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Users className="h-6 w-6 text-primary mr-3" />
                Connect Online
              </CardTitle>
              <p className="text-muted-foreground">
                Follow my work and connect professionally
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                    <social.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">{social.label}</h4>
                    <a 
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors font-mono text-sm"
                    >
                      {social.value}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">{social.description}</p>
                  </div>
                </div>
              ))}
              
              {/* Resume Download */}
              <div className="pt-4 border-t border-primary/20">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                  onClick={() => window.open('/Vinayak Kamankar.pdf', '_blank')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="card-gradient border-primary/20 text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to <span className="text-gradient">Collaborate?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Whether you have a project idea, internship opportunity, or just want to discuss 
              the latest in AI/ML and IoT technology, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                className="tech-shadow hover:glow-shadow transition-all duration-300"
                onClick={() => window.location.href = 'mailto:kamankarvinayak1@gmail.com'}
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
                onClick={() => window.location.href = 'tel:+917083571601'}
              >
                <Phone className="h-5 w-5 mr-2" />
                Schedule Call
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;