
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Mail, Phone } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">Get to know the person behind the code</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bio Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-neutral-dark mb-4">My Story</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Java Software Developer with 4+ years of experience, passionate about 
                  microservices, cloud platforms, and data-driven solutions. My journey in 
                  technology has been driven by a desire to create scalable, efficient systems 
                  that solve real-world problems.
                </p>
                <p>
                  Currently pursuing a Master's in Management Information Systems at Concordia 
                  University (graduating May 2025), I'm expanding my expertise in business 
                  intelligence and strategic technology implementation.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to 
                  open-source projects, and staying updated with the latest industry trends.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Card */}
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-neutral-dark mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-primary" size={20} />
                  <span className="text-muted-foreground">Milwaukee, WI</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-primary" size={20} />
                  <a 
                    href="mailto:gopichand@example.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gopichand@example.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-primary" size={20} />
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="mt-6">
                  <a
                    href="https://www.linkedin.com/in/narani-gopichand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors hover-scale"
                  >
                    View LinkedIn Profile
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Overview */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-neutral-dark mb-6">Core Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Java Development',
              'Spring Boot',
              'Google Cloud Platform',
              'Microservices Architecture',
              'Data Analytics',
              'Agile Methodologies',
              'System Design',
              'Business Intelligence'
            ].map((skill) => (
              <div key={skill} className="bg-neutral-light rounded-lg p-4 hover:bg-primary hover:text-white transition-all duration-300 hover-scale">
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
