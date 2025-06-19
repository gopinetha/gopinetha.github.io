
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const EducationSection: React.FC = () => {
  const [selectedEducation, setSelectedEducation] = useState<any>(null);

  const education = [
    {
      id: 'ms-mis',
      degree: "Master's in Management Information Systems",
      institution: 'Concordia University',
      location: 'Milwaukee, WI',
      date: 'Expected May 2025',
      status: 'In Progress',
      description: 'Focusing on data-driven decision-making, business intelligence, and strategic technology implementation.',
      details: [
        'Coursework in Business Intelligence and Data Analytics',
        'Project Management and IT Strategy',
        'Database Management and Data Warehousing',
        'Enterprise Architecture and System Integration',
        'Current GPA: 3.8/4.0',
        'Expected graduation: May 2025'
      ],
      relevantCourses: [
        'Business Intelligence Systems',
        'Data Analytics and Visualization',
        'IT Project Management',
        'Enterprise System Architecture',
        'Database Management Systems'
      ]
    },
    {
      id: 'btech-mechanical',
      degree: 'Bachelor of Technology in Mechanical Engineering',
      institution: 'Guru Nanak Institute of Technology',
      location: 'Hyderabad, India',
      date: 'June 2019',
      status: 'Completed',
      description: 'Strong foundation in engineering principles, problem-solving, and analytical thinking.',
      details: [
        'Graduated with First Class Honors',
        'Final Year Project on Automation Systems',
        'Active member of Technical Society',
        'Participated in engineering competitions',
        'Developed strong analytical and problem-solving skills',
        'Foundation in mathematics and engineering principles'
      ],
      relevantCourses: [
        'Engineering Mathematics',
        'Computer Programming',
        'Automation and Control Systems',
        'Project Management',
        'Quality Management'
      ]
    }
  ];

  return (
    <section id="education" className="section-padding bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">Continuous learning and academic excellence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu) => (
            <Dialog key={edu.id}>
              <DialogTrigger asChild>
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover-scale cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <GraduationCap className="text-primary" size={24} />
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          edu.status === 'In Progress' 
                            ? 'bg-accent text-white' 
                            : 'bg-secondary text-white'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-primary font-medium mb-4">{edu.institution}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{edu.date}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm">
                      {edu.description}
                    </p>
                    
                    <div className="mt-4 text-primary text-sm font-medium">
                      Click to view details →
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-neutral-dark">
                    {edu.degree}
                  </DialogTitle>
                  <p className="text-primary font-medium">{edu.institution}</p>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </span>
                    <span className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{edu.date}</span>
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-3">Key Highlights</h4>
                    <ul className="space-y-2">
                      {edu.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-secondary mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevantCourses.map((course, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-neutral-light rounded-full text-sm text-muted-foreground"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Education Stats */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-neutral-dark mb-6 text-center">Academic Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-2xl font-bold text-primary">2</h4>
              <p className="text-muted-foreground">Degrees</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-secondary">6+</h4>
              <p className="text-muted-foreground">Years of Study</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-accent">2025</h4>
              <p className="text-muted-foreground">MS Graduation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
