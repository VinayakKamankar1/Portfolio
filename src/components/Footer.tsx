import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-3">Vinayak Kamankar</h3>
            <p className="text-muted-foreground leading-relaxed">
              AI/ML Engineer & IoT Developer passionate about building intelligent 
              and sustainable technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:kamankarvinayak1@gmail.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                kamankarvinayak1@gmail.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://github.com/VinayakKamankar1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a 
                  href="https://linkedin.com/in/vinayak-kamankar-541770349" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Vinayak Kamankar © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;