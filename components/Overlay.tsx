import React, { useState } from 'react';
import { SKILLS, MILESTONES, PROFILE } from '../data';
import { Milestone } from '../types';
import { Map, Code, Linkedin, Mail, Layers, Rocket, ExternalLink, User } from 'lucide-react';

interface OverlayProps {
  onSelectProject: (milestone: Milestone) => void;
}

const Overlay: React.FC<OverlayProps> = ({ onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'none' | 'skills' | 'projects' | 'about'>('none');

  const projects = MILESTONES.filter(m => m.type === 'project');

  const toggleTab = (tab: 'skills' | 'projects' | 'about') => {
    setActiveTab(activeTab === tab ? 'none' : tab);
  };

  return (
    <>
      {/* Top Left Branding */}
      <div className="absolute top-0 left-0 p-6 z-10 pointer-events-none w-full md:w-auto">
        <div className="pointer-events-auto">
          <h1 className="text-4xl font-bold text-white tracking-tighter mb-1 shadow-black drop-shadow-lg">
            {PROFILE.name}
          </h1>
          <div className="flex items-center space-x-2 text-cyan-400 mb-4 bg-black/40 w-fit px-2 py-1 rounded backdrop-blur-sm">
            <Layers size={18} />
            <span className="text-lg font-medium tracking-wide">{PROFILE.title}</span>
          </div>
          
          <div className="flex gap-3 flex-wrap">
            <a 
              href="https://www.linkedin.com/in/efe-aizesogie" 
              target="_blank" 
              rel="noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full text-white transition-all border border-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:efeaizesogie@gmail.com" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-2 rounded-full text-white transition-all border border-white/10"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            
            {/* About Toggle */}
            <button
              onClick={() => toggleTab('about')}
              className={`backdrop-blur-md px-4 py-2 rounded-full font-medium text-sm transition-all flex items-center gap-2 border ${
                activeTab === 'about' 
                ? 'bg-emerald-500/40 text-emerald-200 border-emerald-400' 
                : 'bg-white/10 text-white border-white/10 hover:bg-white/20'
              }`}
            >
              <User size={16} />
              About
            </button>

            {/* Skills Toggle */}
            <button
              onClick={() => toggleTab('skills')}
              className={`backdrop-blur-md px-4 py-2 rounded-full font-medium text-sm transition-all flex items-center gap-2 border ${
                activeTab === 'skills' 
                ? 'bg-cyan-500/40 text-cyan-200 border-cyan-400' 
                : 'bg-white/10 text-white border-white/10 hover:bg-white/20'
              }`}
            >
              <Code size={16} />
              Skills
            </button>

            {/* Projects Toggle */}
            <button
              onClick={() => toggleTab('projects')}
              className={`backdrop-blur-md px-4 py-2 rounded-full font-medium text-sm transition-all flex items-center gap-2 border ${
                activeTab === 'projects' 
                ? 'bg-purple-500/40 text-purple-200 border-purple-400' 
                : 'bg-white/10 text-white border-white/10 hover:bg-white/20'
              }`}
            >
              <Rocket size={16} />
              Projects
            </button>
          </div>
        </div>
      </div>

      {/* About Modal */}
      {activeTab === 'about' && (
        <div className="absolute top-44 left-6 z-20 w-80 md:w-96 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 animate-in fade-in slide-in-from-left-4 duration-300">
          <div className="flex items-start gap-3 mb-4">
             <div className="p-2 bg-emerald-500/20 rounded-lg">
                <User size={20} className="text-emerald-400"/>
             </div>
             <div>
               <h3 className="text-white font-bold text-lg leading-none">The Architect</h3>
               <p className="text-emerald-400 text-xs mt-1 uppercase tracking-wider">Category of One</p>
             </div>
          </div>
          <p className="text-white/90 text-sm font-medium italic mb-4 border-l-2 border-emerald-500 pl-3">
            "{PROFILE.tagline}"
          </p>
          <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
            {PROFILE.about.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}

      {/* Skills Modal */}
      {activeTab === 'skills' && (
        <div className="absolute top-44 left-6 z-20 w-72 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 animate-in fade-in slide-in-from-left-4 duration-300">
          <h3 className="text-white font-bold mb-3 flex items-center gap-2">
            <Map size={16} className="text-cyan-400"/> Technical Arsenal
          </h3>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span key={skill} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects List Modal */}
      {activeTab === 'projects' && (
        <div className="absolute top-44 left-6 z-20 w-80 bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl p-0 animate-in fade-in slide-in-from-left-4 duration-300 overflow-hidden">
          <div className="p-4 border-b border-white/10">
            <h3 className="text-white font-bold flex items-center gap-2">
              <Rocket size={16} className="text-purple-400"/> Project Gallery
            </h3>
            <p className="text-xs text-gray-400 mt-1">Select a project to fly to its location.</p>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {projects.map((proj) => (
              <button
                key={proj.id}
                onClick={() => onSelectProject(proj)}
                className="w-full text-left p-4 border-b border-white/5 hover:bg-white/5 transition-colors group"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-gray-200 group-hover:text-purple-300 transition-colors">{proj.label}</span>
                  <ExternalLink size={12} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-gray-400 line-clamp-1">{proj.description[0]}</p>
                <div className="flex gap-1 mt-2">
                  {proj.techStack.slice(0, 2).map(t => (
                    <span key={t} className="text-[10px] px-1.5 py-0.5 bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">{t}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Legend / Instruction */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-0 w-full flex justify-center px-4">
        <div className="flex flex-col items-center gap-2">
           <div className="flex gap-4 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400"></span>
                <span className="text-xs text-gray-300">Work</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="text-xs text-gray-300">Education</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <span className="text-xs text-gray-300">Projects</span>
              </div>
           </div>
           <p className="text-white/50 text-xs text-center">
            Drag to rotate • Click points for details
          </p>
        </div>
      </div>
    </>
  );
};

export default Overlay;