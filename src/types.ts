export interface Report {
  id: string;
  description: string;
  category: string;
  photo: string;
  location: {
    lat: number;
    lng: number;
  };
  timestamp: string;
  status: 'pending' | 'in-progress' | 'resolved';
}