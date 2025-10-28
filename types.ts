
export interface TeamMember {
  name: string;
  role: string;
  category: 'Director' | 'Coordinator';
  state?: string;
  details: string[];
  imageUrl: string;
}
