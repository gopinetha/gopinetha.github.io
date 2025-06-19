
import React, { useState } from 'react';
import SkillTag from '../SkillTag';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const skills = [
    { skill: 'Java', proficiency: 'Expert', category: 'Languages' },
    { skill: 'Python', proficiency: 'Intermediate', category: 'Languages' },
    { skill: 'SQL', proficiency: 'Advanced', category: 'Languages' },
    { skill: 'JavaScript', proficiency: 'Intermediate', category: 'Languages' },
    
    { skill: 'Spring Boot', proficiency: 'Expert', category: 'Frameworks' },
    { skill: 'Spring Framework', proficiency: 'Advanced', category: 'Frameworks' },
    { skill: 'Hibernate', proficiency: 'Advanced', category: 'Frameworks' },
    { skill: 'JUnit', proficiency: 'Advanced', category: 'Frameworks' },
    
    { skill: 'Google Cloud Platform', proficiency: 'Advanced', category: 'Tools' },
    { skill: 'Docker', proficiency: 'Intermediate', category: 'Tools' },
    { skill: 'Git', proficiency: 'Advanced', category: 'Tools' },
    { skill: 'Jenkins', proficiency: 'Intermediate', category: 'Tools' },
    { skill: 'Maven', proficiency: 'Advanced', category: 'Tools' },
    { skill: 'IntelliJ IDEA', proficiency: 'Expert', category: 'Tools' },
    
    { skill: 'Microservices', proficiency: 'Advanced', category: 'Concepts' },
    { skill: 'REST APIs', proficiency: 'Expert', category: 'Concepts' },
    { skill: 'Agile/Scrum', proficiency: 'Advanced', category: 'Concepts' },
    { skill: 'Data Analytics', proficiency: 'Intermediate', category: 'Concepts' },
    { skill: 'System Design', proficiency: 'Intermediate', category: 'Concepts' },
    { skill: 'CI/CD', proficiency: 'Intermediate', category: 'Concepts' }
  ];

  const categories = ['All', 'Languages', 'Frameworks', 'Tools', 'Concepts'];

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const skillsByCategory = categories.slice(1).map(category => ({
    category,
    skills: skills.filter(skill => skill.category === category),
    count: skills.filter(skill => skill.category === category).length
  }));

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground">
            Proficient in Java, cloud platforms, and Agile methodologies, with a focus on scalable solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 hover-scale ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-neutral-light text-neutral-dark hover:bg-primary hover:text-white'
              }`}
              aria-label={`Filter skills by ${category}`}
            >
              {category}
              {category !== 'All' && (
                <span className="ml-2 text-xs opacity-75">
                  ({skills.filter(s => s.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="space-y-8">
          {selectedCategory === 'All' ? (
            // Show skills grouped by category
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillsByCategory.map(({ category, skills: categorySkills }) => (
                <Card key={category} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-neutral-dark mb-4 text-center">
                      {category}
                    </h3>
                    <div className="space-y-2">
                      {categorySkills.map((skill) => (
                        <div key={skill.skill} className="flex justify-center">
                          <SkillTag {...skill} />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Show filtered skills
            <div className="flex flex-wrap justify-center gap-4">
              {filteredSkills.map((skill) => (
                <SkillTag key={skill.skill} {...skill} />
              ))}
            </div>
          )}
        </div>

        {/* Proficiency Legend */}
        <div className="mt-12 bg-neutral-light rounded-lg p-6">
          <h3 className="text-lg font-semibold text-neutral-dark mb-4 text-center">Proficiency Levels</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Expert (5+ years)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Advanced (3-4 years)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm text-muted-foreground">Intermediate (1-2 years)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
