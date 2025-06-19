
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Target, Cloud, Code, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const GoalsSection: React.FC = () => {
  const goals = [
    {
      id: 'backend-java',
      title: 'Senior Backend Java Developer',
      icon: <Code className="text-primary" size={24} />,
      description: 'Advance to senior-level backend development role with focus on scalable enterprise applications.',
      progress: 75,
      timeframe: '6-12 months',
      status: 'In Progress',
      actionPlan: [
        'Complete advanced Spring Boot certification',
        'Build portfolio of microservices projects',
        'Study system design patterns and architecture',
        'Contribute to open-source Java projects',
        'Practice technical interview questions'
      ],
      skills: ['Advanced Spring Boot', 'System Design', 'Microservices', 'Performance Optimization']
    },
    {
      id: 'cloud-engineer',
      title: 'Cloud Solutions Architect',
      icon: <Cloud className="text-secondary" size={24} />,
      description: 'Transition to cloud engineering role specializing in AWS and Kubernetes orchestration.',
      progress: 35,
      timeframe: '12-18 months',
      status: 'Planning',
      actionPlan: [
        'Enroll in AWS Certified Developer course',
        'Complete Kubernetes administrator certification',
        'Build cloud-native application projects',
        'Learn infrastructure as code (Terraform)',
        'Gain hands-on experience with container orchestration'
      ],
      skills: ['AWS Services', 'Kubernetes', 'Docker', 'Terraform', 'CloudFormation']
    },
    {
      id: 'tech-lead',
      title: 'Technical Team Lead',
      icon: <Target className="text-accent" size={24} />,
      description: 'Develop leadership skills to guide development teams and make architectural decisions.',
      progress: 50,
      timeframe: '18-24 months',
      status: 'Developing',
      actionPlan: [
        'Complete leadership and communication courses',
        'Mentor junior developers in current role',
        'Lead technical design discussions',
        'Study agile methodologies and team management',
        'Practice stakeholder communication'
      ],
      skills: ['Team Leadership', 'Agile Coaching', 'Technical Communication', 'Project Management']
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning & Innovation',
      icon: <TrendingUp className="text-primary" size={24} />,
      description: 'Stay current with emerging technologies and contribute to the tech community.',
      progress: 60,
      timeframe: 'Ongoing',
      status: 'Active',
      actionPlan: [
        'Attend tech conferences and workshops',
        'Write technical blog posts and articles',
        'Contribute to open-source projects',
        'Learn emerging technologies (AI/ML, Blockchain)',
        'Build and maintain professional network'
      ],
      skills: ['Emerging Technologies', 'Technical Writing', 'Community Engagement', 'Innovation']
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 70) return 'bg-secondary';
    if (progress >= 40) return 'bg-accent';
    return 'bg-primary';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress': return 'bg-secondary text-white';
      case 'Planning': return 'bg-primary text-white';
      case 'Developing': return 'bg-accent text-white';
      case 'Active': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <section id="goals" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Career Goals</h2>
          <p className="text-lg text-muted-foreground">
            Aspiring to excel in backend development and cloud engineering, mastering AWS and Kubernetes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {goals.map((goal) => (
            <Dialog key={goal.id}>
              <DialogTrigger asChild>
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover-scale cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        {goal.icon}
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(goal.status)}`}>
                          {goal.status}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{goal.timeframe}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-neutral-dark mb-3">
                      {goal.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {goal.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-neutral-dark">Progress</span>
                        <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(goal.progress)}`}
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-primary text-sm font-medium">
                      View action plan →
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-neutral-dark flex items-center space-x-3">
                    {goal.icon}
                    <span>{goal.title}</span>
                  </DialogTitle>
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(goal.status)}`}>
                      {goal.status}
                    </span>
                    <span className="text-sm text-muted-foreground">Timeline: {goal.timeframe}</span>
                  </div>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-muted-foreground">{goal.description}</p>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-neutral-dark">Current Progress</span>
                      <span className="text-sm text-muted-foreground">{goal.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(goal.progress)}`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-3">Action Plan</h4>
                    <ul className="space-y-2">
                      {goal.actionPlan.map((action, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-sm text-muted-foreground">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-neutral-dark mb-3">Target Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {goal.skills.map((skill, index) => (
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

        {/* Overall Progress Summary */}
        <div className="mt-12 bg-neutral-light rounded-lg p-8">
          <h3 className="text-xl font-semibold text-neutral-dark mb-6 text-center">Career Development Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-2xl font-bold text-primary">{goals.length}</h4>
              <p className="text-muted-foreground text-sm">Active Goals</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-secondary">
                {Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length)}%
              </h4>
              <p className="text-muted-foreground text-sm">Average Progress</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-accent">2025</h4>
              <p className="text-muted-foreground text-sm">Target Year</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-neutral-dark">24</h4>
              <p className="text-muted-foreground text-sm">Months Timeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
