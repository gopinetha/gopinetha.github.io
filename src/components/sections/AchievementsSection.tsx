
import React from 'react';
import TimelineItem from '../TimelineItem';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, Zap } from 'lucide-react';

const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      id: 'data-transformation',
      title: 'Data Transformation Excellence',
      subtitle: 'Legacy System Migration',
      date: '2022',
      description: 'Achieved 95% accuracy in legacy data transformations on Google Cloud Platform, exceeding industry standards.',
      details: [
        'Migrated 10TB+ of legacy data with 95% accuracy rate',
        'Implemented automated validation processes',
        'Reduced data processing time by 60%',
        'Zero critical data loss incidents',
        'Established new data quality benchmarks'
      ]
    },
    {
      id: 'cicd-implementation',
      title: 'CI/CD Pipeline Implementation',
      subtitle: 'DevOps Optimization',
      date: '2021',
      description: 'Successfully implemented CI/CD pipeline reducing deployment time by 70% and improving code quality.',
      details: [
        'Automated build and deployment processes',
        'Reduced deployment time from 4 hours to 1.2 hours',
        'Implemented automated testing at multiple stages',
        'Achieved 99.5% deployment success rate',
        'Established code quality gates and standards'
      ]
    },
    {
      id: 'performance-optimization',
      title: 'Application Performance Optimization',
      subtitle: 'System Enhancement',
      date: '2020',
      description: 'Optimized Java application performance, achieving 40% improvement in response times and better user experience.',
      details: [
        'Reduced average response time by 40%',
        'Optimized database queries and indexing',
        'Implemented caching strategies',
        'Improved memory management and garbage collection',
        'Enhanced concurrent processing capabilities'
      ]
    },
    {
      id: 'automation-testing',
      title: 'Test Automation Framework',
      subtitle: 'Quality Assurance',
      date: '2020',
      description: 'Developed comprehensive test automation framework reducing manual testing effort by 60%.',
      details: [
        'Created reusable test automation framework',
        'Reduced manual testing time by 60%',
        'Improved test coverage to 85%',
        'Implemented continuous integration testing',
        'Standardized testing practices across teams'
      ]
    }
  ];

  const keyMetrics = [
    {
      icon: <Target className="text-primary" size={32} />,
      value: '95%',
      label: 'Data Accuracy',
      description: 'Achieved in critical data transformations'
    },
    {
      icon: <Zap className="text-secondary" size={32} />,
      value: '70%',
      label: 'Time Reduction',
      description: 'In deployment and testing processes'
    },
    {
      icon: <Trophy className="text-accent" size={32} />,
      value: '4+',
      label: 'Major Projects',
      description: 'Successfully delivered with measurable impact'
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Key Achievements</h2>
          <p className="text-lg text-muted-foreground">Delivering measurable impact through technical excellence</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-3xl font-bold text-neutral-dark mb-2">{metric.value}</h3>
                <p className="text-lg font-semibold text-muted-foreground mb-2">{metric.label}</p>
                <p className="text-sm text-muted-foreground">{metric.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-neutral-dark mb-8 text-center">Project Highlights</h3>
          {achievements.map((achievement) => (
            <TimelineItem
              key={achievement.id}
              {...achievement}
              type="achievement"
            />
          ))}
        </div>

        {/* Impact Summary */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-neutral-dark mb-6 text-center">Impact Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-primary">10TB+</h4>
              <p className="text-sm text-muted-foreground">Data Migrated</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-secondary">99.5%</h4>
              <p className="text-sm text-muted-foreground">Deployment Success</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-accent">85%</h4>
              <p className="text-sm text-muted-foreground">Test Coverage</p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-neutral-dark">0</h4>
              <p className="text-sm text-muted-foreground">Critical Incidents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
