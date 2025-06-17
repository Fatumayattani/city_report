import type { Report } from '../types';

const STORAGE_KEY = 'cityreport_data';

export const getAllReports = async (): Promise<Report[]> => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error loading reports:', error);
    return [];
  }
};

export const saveReport = async (report: Omit<Report, 'id'>): Promise<Report> => {
  try {
    const reports = await getAllReports();
    const newReport: Report = {
      ...report,
      id: generateId()
    };
    
    reports.unshift(newReport); // Add to beginning for newest first
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
    
    return newReport;
  } catch (error) {
    console.error('Error saving report:', error);
    throw error;
  }
};

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// Initialize with some sample data for demonstration
export const initializeSampleData = async () => {
  const existing = await getAllReports();
  if (existing.length === 0) {
    const sampleReports: Omit<Report, 'id'>[] = [
      {
        description: "Large pothole on Main Street near the intersection with Oak Avenue. Vehicle damage risk.",
        category: "pothole",
        photo: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=400",
        location: { lat: 40.7128, lng: -74.0060 },
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        status: "pending"
      },
      {
        description: "Streetlight has been out for over a week. Safety concern for pedestrians at night.",
        category: "streetlight",
        photo: "https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=400",
        location: { lat: 40.7150, lng: -74.0080 },
        timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        status: "in-progress"
      },
      {
        description: "Overflowing garbage bins and litter scattered around the bus stop area.",
        category: "garbage",
        photo: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg?auto=compress&cs=tinysrgb&w=400",
        location: { lat: 40.7100, lng: -74.0040 },
        timestamp: new Date(Date.now() - 259200000).toISOString(), // 3 days ago
        status: "resolved"
      }
    ];

    for (const report of sampleReports) {
      await saveReport(report);
    }
  }
};

// Initialize sample data when the module loads
initializeSampleData();