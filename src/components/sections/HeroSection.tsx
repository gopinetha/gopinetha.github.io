
import React from 'react';
import ProfileCard from '../ProfileCard';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-light to-white section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <ProfileCard />
        
        <div className="mt-8 space-y-4">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hi, I'm Gopi Chand Narani, a Java Developer crafting scalable solutions with Spring Boot and GCP.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAbout}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg hover-scale"
              size="lg"
            >
              Explore My Work
              <ArrowDown className="ml-2" size={20} />
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg hover-scale"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="micro-copy">Discover my journey</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
