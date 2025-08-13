import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/DipayanSaha007", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/dipayan-saha-79abba257/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:sahadipayan555@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand/Logo Section */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              Dipayan <span className="text-accent">Saha</span>
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Machine Learning & Deep Learning enthusiast passionate about 
              building intelligent systems that solve real-world problems. 
              Let's turn data into impactful solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-primary-foreground/80 text-sm">
              sahadipayan555@gmail.com<br />
              Sheoraphuli, India
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © {currentYear} Dipayan Saha. All rights reserved.
          </p>
          <p className="text-primary-foreground/80 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;