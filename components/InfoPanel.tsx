import React from 'react';
import { Milestone } from '../types';
import { X, Calendar, MapPin, Building2, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface InfoPanelProps {
  milestone: Milestone | null;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ milestone, onClose }) => {
  if (!milestone) return null;

  const isProject = milestone.type === 'project';
  const headerColor = isProject ? 'bg-gradient-to-br from-purple-900 to-indigo-900' 
    : milestone.type === 'education' ? 'bg-gradient-to-br from-yellow-900/80 to-orange-900/80'
    : 'bg-gradient-to-br from-cyan-900 to-blue-900';

  const badgeColor = isProject ? 'bg-purple-500/20 text-purple-300'
    : milestone.type === 'education' ? 'bg-yellow-500/20 text-yellow-300'
    : 'bg-cyan-500/20 text-cyan-300';

  return (
    <div className="absolute top-0 right-0 h-full w-full md:w-[450px] bg-black/80 backdrop-blur-xl border-l border-white/10 z-20 shadow-2xl overflow-y-auto transform transition-transform duration-300 ease-in-out">
      
      {/* Header Image / Pattern */}
      <div className={`h-40 ${headerColor} relative p-6 flex flex-col justify-end`}>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
        >
          <X size={20} />
        </button>
        <div className="absolute top-6 left-6">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${badgeColor}`}>
            {milestone.type}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-white leading-tight mt-4">{milestone.role}</h2>
        <div className="flex items-center text-lg text-white/70 font-light mt-1">
          <Building2 size={16} className="mr-2" />
          {milestone.company}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        
        {/* Project Links */}
        {isProject && (milestone.repoUrl || milestone.liveUrl) && (
          <div className="flex gap-3 mb-8">
            {milestone.liveUrl && (
              <a 
                href={milestone.liveUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors"
              >
                <ExternalLink size={18} /> View Live
              </a>
            )}
            {milestone.repoUrl && (
              <a 
                href={milestone.repoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors border border-white/10"
              >
                <Github size={18} /> Code
              </a>
            )}
          </div>
        )}

        <div className="space-y-4 mb-8 border-b border-white/10 pb-8">
          <div className="flex items-center text-gray-300">
            <Calendar size={16} className={`mr-3 ${isProject ? 'text-purple-400' : 'text-cyan-500'}`} />
            <span className="text-sm">{milestone.period}</span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin size={16} className={`mr-3 ${isProject ? 'text-purple-400' : 'text-cyan-500'}`} />
            <span className="text-sm">{milestone.location}</span>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
              {isProject ? 'Project Details' : 'Key Contributions'}
            </h3>
            <ul className="space-y-3">
              {milestone.description.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-300 text-sm leading-relaxed group">
                  <ChevronRight size={16} className={`mr-2 mt-1 ${isProject ? 'text-purple-500' : 'text-cyan-500'} group-hover:translate-x-1 transition-transform`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {milestone.techStack.map((tech) => (
                <span key={tech} className={`px-3 py-1 rounded-md text-xs border ${
                  isProject 
                  ? 'bg-purple-500/10 border-purple-500/20 text-purple-200' 
                  : 'bg-cyan-500/10 border-cyan-500/20 text-cyan-200'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;