import React, { useState } from 'react';
import GlobeViz from './components/GlobeViz';
import Overlay from './components/Overlay';
import InfoPanel from './components/InfoPanel';
import { Milestone } from './types';

const App: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone | null>(null);

  const handleMilestoneSelect = (milestone: Milestone) => {
    setSelectedMilestone(milestone);
  };

  const handleClosePanel = () => {
    setSelectedMilestone(null);
  };

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* 3D Visualization */}
      <GlobeViz 
        onSelectMilestone={handleMilestoneSelect} 
        selectedId={selectedMilestone?.id || null}
      />
      
      {/* Static UI */}
      <Overlay onSelectProject={handleMilestoneSelect} />
      
      {/* Dynamic Slide-out Panel */}
      <InfoPanel 
        milestone={selectedMilestone} 
        onClose={handleClosePanel} 
      />
    </div>
  );
};

export default App;