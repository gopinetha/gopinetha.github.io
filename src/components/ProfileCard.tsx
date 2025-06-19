
import React from 'react';

interface ProfileCardProps {
  size?: 'small' | 'large';
  showBio?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ size = 'large', showBio = true }) => {
  const imageSize = size === 'large' ? 'w-32 h-32' : 'w-20 h-20';
  
  return (
    <div className="flex flex-col items-center text-center animate-fade-in">
      <div className={`${imageSize} rounded-full bg-gradient-to-br from-primary to-secondary mb-4 flex items-center justify-center text-white font-semibold text-2xl shadow-lg`}>
        GN
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-2">
        Gopi Chand Narani
      </h1>
      <h2 className="text-xl text-primary font-medium mb-4">
        Java Software Developer
      </h2>
      {showBio && (
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Java Developer crafting scalable solutions with Spring Boot and GCP. 
          4+ years of experience in microservices and cloud platforms.
        </p>
      )}
    </div>
  );
};

export default ProfileCard;
