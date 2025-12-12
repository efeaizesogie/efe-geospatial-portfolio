export interface Milestone {
  id: string;
  lat: number;
  lng: number;
  label: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  techStack: string[];
  type: 'work' | 'education' | 'project';
  repoUrl?: string;
  liveUrl?: string;
}

export interface AppState {
  selectedMilestone: Milestone | null;
  isGlobeReady: boolean;
}