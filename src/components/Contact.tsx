import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Replace these with your EmailJS credentials
  const SERVICE_ID = "service_2n743ge";
  const TEMPLATE_ID = "template_ip5dmo9";
  const PUBLIC_KEY = "fOPo-aDwZIeKrsAms";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sahadipayan555@gmail.com",
      href: "mailto:sahadipayan555@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9062425840",
      href: "tel:+919062425840"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Sheoraphuli, India",
      href: "https://maps.app.goo.gl/16VVtPf6mKyYD2jH8"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DipayanSaha007",
      username: "DipayanSaha007"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/dipayan-saha-79abba257/",
      username: "/in/dipayan-saha"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/Dipayan30793201",
      username: "Dipayan30793201"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-2xl font-semibold text-primary mb-8">
              Get In Touch
            </h3>
            
            {/* Contact details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 bg-navy-light rounded-lg hover-lift group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    className="group flex items-center gap-3 p-3 bg-white rounded-lg card-shadow hover-lift"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {social.username}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in-delay">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input name="firstName" id="firstName" required className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input name="lastName" id="lastName" className="mt-1" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input name="email" id="email" type="email" required className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input name="subject" id="subject" className="mt-1" />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  name="message"
                  id="message" 
                  required 
                  className="mt-1 min-h-[120px]"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
