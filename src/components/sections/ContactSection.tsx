
import React, { useState } from 'react';
import ContactFormInput from '../ContactFormInput';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: 'Email',
      value: 'gopichand@example.com',
      href: 'mailto:gopichand@example.com'
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      label: 'Phone',
      value: '+1 (234) 567-8900',
      href: 'tel:+1234567890'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      label: 'Location',
      value: 'Milwaukee, WI',
      href: null
    },
    {
      icon: <Linkedin className="text-primary" size={24} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/narani-gopichand',
      href: 'https://www.linkedin.com/in/narani-gopichand/'
    }
  ];

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    } else if (formData.message.length > 500) {
      newErrors.message = 'Message must be less than 500 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission (replace with actual submission logic)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Success
      toast({
        title: "Message Sent!",
        description: "Thank you! I'll respond soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
    } catch (error) {
      // Error
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="section-padding bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            Let's discuss opportunities, collaborations, or just connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-neutral-dark mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      {info.icon}
                      <div>
                        <p className="font-medium text-neutral-dark">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            target={info.label === 'LinkedIn' ? '_blank' : undefined}
                            rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-neutral-dark mb-4">Let's Connect</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or potential collaborations. Whether you have a job opportunity, want to 
                  discuss technology, or just want to connect, I'd love to hear from you!
                </p>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Open to full-time opportunities</p>
                  <p className="text-sm text-muted-foreground">• Available for consulting projects</p>
                  <p className="text-sm text-muted-foreground">• Interested in tech discussions</p>
                  <p className="text-sm text-muted-foreground">• Looking to expand my network</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-neutral-dark mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <ContactFormInput
                  type="text"
                  name="name"
                  label="Name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(value) => handleInputChange('name', value)}
                  required
                  validation={{ min: 2, max: 50 }}
                  error={errors.name}
                />

                <ContactFormInput
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(value) => handleInputChange('email', value)}
                  required
                  validation={{ pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$" }}
                  error={errors.email}
                />

                <ContactFormInput
                  type="textarea"
                  name="message"
                  label="Message"
                  placeholder="Your message (e.g., job opportunity, collaboration, or just saying hello)"
                  value={formData.message}
                  onChange={(value) => handleInputChange('message', value)}
                  required
                  validation={{ min: 10, max: 500 }}
                  error={errors.message}
                />

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg hover-scale"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="micro-copy">
                  I typically respond within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
