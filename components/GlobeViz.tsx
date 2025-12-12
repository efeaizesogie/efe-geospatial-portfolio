import React, { useRef, useEffect, useState, useMemo } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import { Milestone } from '../types';
import { MILESTONES } from '../data';

interface GlobeVizProps {
  onSelectMilestone: (milestone: Milestone) => void;
  selectedId: string | null;
}

const GlobeViz: React.FC<GlobeVizProps> = ({ onSelectMilestone, selectedId }) => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initial fly-in
  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 20, lng: -20, altitude: 2.5 }, 0);
      setTimeout(() => {
        globeEl.current?.pointOfView({ lat: 20, lng: -20, altitude: 1.8 }, 2000); // Fly to center view
      }, 500);
    }
  }, []);

  // Fly to selected marker
  useEffect(() => {
    if (selectedId && globeEl.current) {
      const target = MILESTONES.find(m => m.id === selectedId);
      if (target) {
        globeEl.current.pointOfView({
          lat: target.lat,
          lng: target.lng,
          altitude: 0.5 // Zoom in level
        }, 1500);
      }
    }
  }, [selectedId]);

  // Memoize data to prevent re-renders
  const pointsData = useMemo(() => MILESTONES, []);
  
  // Rings for highlighting selected
  const ringsData = useMemo(() => {
    return selectedId ? MILESTONES.filter(m => m.id === selectedId) : [];
  }, [selectedId]);

  const getPointColor = (d: any) => {
    if (d.id === selectedId) return '#ef4444'; // Red if selected
    if (d.type === 'project') return '#a855f7'; // Purple for projects
    if (d.type === 'education') return '#f59e0b'; // Amber for education
    return '#38bdf8'; // Blue for work
  };

  return (
    <div className="absolute inset-0 cursor-move">
      <Globe
        ref={globeEl}
        width={dimensions.width}
        height={dimensions.height}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundImageUrl="https://unpkg.com/three-globe/example/img/night-sky.png"
        
        // Points (Markers)
        pointsData={pointsData}
        pointLat="lat"
        pointLng="lng"
        pointColor={getPointColor}
        pointAltitude={0.1}
        pointRadius={(d: any) => d.id === selectedId ? 0.8 : 0.4}
        onPointClick={(point: any) => onSelectMilestone(point as Milestone)}
        pointLabel="label"
        
        // Rings (Selection Effect)
        ringsData={ringsData}
        ringColor={() => '#ef4444'}
        ringMaxRadius={5}
        ringPropagationSpeed={2}
        ringRepeatPeriod={1000}

        // Atmosphere
        atmosphereColor="#3b82f6"
        atmosphereAltitude={0.15}
      />
    </div>
  );
};

export default GlobeViz;