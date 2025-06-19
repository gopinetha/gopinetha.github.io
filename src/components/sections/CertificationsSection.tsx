
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge, Award, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      id: 'java-se8',
      name: 'Java SE 8 Programmer I',
      code: '1Z0-808',
      issuer: 'Oracle',
      date: 'March 2020',
      status: 'Active',
      description: 'Validates expertise in Java SE 8 programming fundamentals, object-oriented concepts, and core Java APIs.',
      skills: ['Java Fundamentals', 'OOP Concepts', 'Exception Handling', 'Collections Framework'],
      details: [
        'Comprehensive understanding of Java SE 8 syntax and semantics',
        'Proficiency in object-oriented programming principles',
        'Knowledge of Java core libraries and APIs',
        'Exception handling and debugging techniques',
        'Understanding of collections framework and generics'
      ]
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics Certificate',
      code: 'DA-2021',
      issuer: 'Deloitte',
      date: 'August 2021',
      status: 'Active',
      description: 'Professional certification in data analytics, covering statistical analysis, data visualization, and business intelligence.',
      skills: ['Statistical Analysis', 'Data Visualization', 'Business Intelligence', 'SQL'],
      details: [
        'Statistical analysis and hypothesis testing',
        'Data visualization techniques and tools',
        'Business intelligence and reporting',
        'Advanced SQL for data analysis',
        'Data-driven decision making processes'
      ]
    },
    {
      id: 'problem-solving',
      name: 'Problem Solving Certificate',
      code: 'PS-ADV',
      issuer: 'HackerRank',
      date: 'December 2020',
      status: 'Active',
      description: 'Advanced problem-solving certification demonstrating algorithmic thinking and programming problem resolution skills.',
      skills: ['Algorithms', 'Data Structures', 'Logical Thinking', 'Code Optimization'],
      details: [
        'Advanced algorithmic problem solving',
        'Data structures implementation and usage',
        'Time and space complexity optimization',
        'Logical reasoning and analytical thinking',
        'Code efficiency and best practices'
      ]
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Certifications</h2>
          <p className="text-lg text-muted-foreground">Professional credentials validating technical expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <Dialog key={cert.id}>
              <DialogTrigger asChild>
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover-scale cursor-pointer animate-fade-in">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Award className="text-accent" size={32} />
                      <span className="bg-secondary text-white px-2 py-1 rounded-full text-xs font-medium">
                        {cert.status}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-neutral-dark mb-2">
                      {cert.name}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-primary font-medium">{cert.issuer}</p>
                      <p className="text-sm text-muted-foreground">
                        Code: {cert.code}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Issued: {cert.date}
                      </p>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 2).map((skill, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-neutral-light rounded text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="px-2 py-1 bg-primary text-white rounded text-xs">
                          +{cert.skills.length - 2} more
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-4 text-primary text-sm font-medium">
                      View details →
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-neutral-dark flex items-center space-x-3">
                    <Award className="text-accent" size={28} />
                    <span>{cert.name}</span>
                  </DialogTitle>
                  <div className="flex items-center justify-between">
                    <p className="text-primary font-medium">{cert.issuer}</p>
                    <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
                      {cert.status}
                    </span>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-muted-foreground">Certification Code:</span>
                      <p className="text-neutral-dark">{cert.code}</p>
                    </div>
                    <div>
                      <span className="font-medium text-muted-foreground">Issue Date:</span>
                      <p className="text-neutral-dark">{cert.date}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-2">Description</h4>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-3">Key Competencies</h4>
                    <ul className="space-y-2">
                      {cert.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-3">Skills Validated</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-primary text-white rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-12 bg-neutral-light rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary">{certifications.length}</h3>
              <p className="text-muted-foreground">Active Certifications</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-secondary">100%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent">2024</h3>
              <p className="text-muted-foreground">Latest Certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
