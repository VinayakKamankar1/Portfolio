import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="order-2 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 tech-shadow animate-float">
                <img 
                  src="/lovable-uploads/022a206f-8b4a-4289-a46a-ee766ae10988.png"
                  alt="Vinayak Kamankar - AI/ML Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 animate-bounce-slow">
                <Badge variant="default" className="bg-primary text-primary-foreground">
                  Available for Work
                </Badge>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
                AI/ML Engineer & IoT Developer
              </Badge>
          
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-in-left">
                <span className="block">Vinayak</span>
                <span className="block text-gradient">Kamankar</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in">
                Building Intelligent Systems with IoT & AI/ML
              </p>
          
              
              <p className="text-base text-muted-foreground/80 mb-8 leading-relaxed animate-fade-in">
                B.Tech AIML student passionate about creating sustainable tech solutions 
                through IoT, Embedded Systems, and Smart Automation.
              </p>
              
              {/* Contact Buttons */}
              <div className="flex flex-wrap gap-4 mb-8 animate-fade-in justify-center lg:justify-start">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="tech-shadow hover:glow-shadow transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:kamankarvinayak1@gmail.com'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/30 hover:bg-primary/10 transition-all duration-300"
                  onClick={() => window.location.href = 'tel:+917083571601'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +91 7083571601
                </Button>
              </div>
              
              {/* Social Links */}
              <div className="flex gap-6 animate-fade-in justify-center lg:justify-start">
                <a 
                  href="https://github.com/VinayakKamankar1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:tech-glow"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/vinayak-kamankar-541770349" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:tech-glow"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:kamankarvinayak1@gmail.com"
                  className="p-3 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:tech-glow"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;