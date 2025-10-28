
import React from 'react';
import type { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img className="w-full h-56 object-cover object-center" src={member.imageUrl} alt={member.name} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-brand-green">{member.name}</h3>
        <p className="text-sm font-semibold text-gray-600 mb-2">{member.role} {member.state && `- ${member.state}`}</p>
        <div className="w-16 h-0.5 bg-brand-yellow my-2"></div>
        <ul className="text-sm text-gray-500 list-disc list-inside space-y-1 mt-3">
          {member.details.slice(0, 4).map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
