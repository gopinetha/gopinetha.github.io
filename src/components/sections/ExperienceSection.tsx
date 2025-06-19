
import React from 'react';
import TimelineItem from '../TimelineItem';

const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: 'java-developer',
      title: 'Java Developer',
      subtitle: 'Aarav Solutions',
      date: '2021 - 2023',
      description: 'Built scalable Java applications with Spring Boot and GCP, achieving 95% accuracy in data transformations.',
      details: [
        'Developed and maintained microservices using Spring Boot and Java 8+',
        'Implemented data transformation pipelines on Google Cloud Platform',
        'Achieved 95% accuracy in legacy system data migrations',
        'Collaborated with cross-functional teams using Agile methodologies',
        'Optimized application performance reducing response times by 40%',
        'Designed RESTful APIs serving 10,000+ daily requests'
      ]
    },
    {
      id: 'trainee-developer',
      title: 'Trainee Developer BRM',
      subtitle: 'Aarav Solutions',
      date: '2019 - 2021',
      description: 'Streamlined BRM system testing with automation tools and gained foundational experience in enterprise software development.',
      details: [
        'Automated testing procedures for Business Rules Management system',
        'Reduced manual testing time by 60% through automation scripts',
        'Participated in code reviews and learned best practices',
        'Assisted in debugging and resolving production issues',
        'Documented system processes and created user manuals',
        'Supported senior developers in application maintenance'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-neutral-light">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground">4+ years of Java development expertise</p>
        </div>

        {/* Experience Summary */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary">4+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-secondary">95%</h3>
              <p className="text-muted-foreground">Data Accuracy Achieved</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-accent">10K+</h3>
              <p className="text-muted-foreground">Daily API Requests</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((experience) => (
            <TimelineItem
              key={experience.id}
              {...experience}
              type="experience"
            />
          ))}
        </div>

        {/* Technologies Used */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-xl font-semibold text-neutral-dark mb-6 text-center">Technologies & Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Java 8+',
              'Spring Boot',
              'Google Cloud',
              'Microservices',
              'REST APIs',
              'Agile/Scrum',
              'Git',
              'Jenkins',
              'Docker',
              'SQL',
              'JUnit',
              'Maven'
            ].map((tech) => (
              <div key={tech} className="bg-neutral-light rounded-lg p-3 text-center hover:bg-primary hover:text-white transition-all duration-300 hover-scale">
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
