# CityReport - Public Issue Reporting App

A modern, mobile-friendly web application that empowers citizens to report public issues in their community. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Report Issues
- **Photo Evidence**: Take photos directly with your camera or upload existing images
- **Issue Categories**: Categorize reports (potholes, broken streetlights, garbage, graffiti, sidewalk issues, etc.)
- **Location Detection**: Automatic GPS location detection for accurate issue positioning
- **Detailed Descriptions**: Add comprehensive descriptions of the problems
- **Real-time Validation**: Form validation ensures all required information is provided

### Dashboard & Management
- **Visual Dashboard**: Clean, card-based layout displaying all submitted reports
- **Advanced Filtering**: Filter by category, status, or search through descriptions
- **Status Tracking**: Track issue status (pending, in-progress, resolved)
- **Detailed View**: Click any report to view full details in a modal
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### User Experience
- **Intuitive Navigation**: Tab-based interface switching between reporting and dashboard
- **Real-time Feedback**: Success/error messages and loading states
- **Mobile-First Design**: Touch-friendly interface with proper spacing and sizing
- **Accessibility**: Semantic HTML and proper ARIA labels

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fatumayattani/city_report.git
   cd city_report
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for consistent iconography
- **Build Tool**: Vite for fast development and building
- **Storage**: Local Storage (for demo purposes)
- **Location Services**: Browser Geolocation API

## 📱 Usage

### Reporting an Issue

1. **Navigate to "Report Issue" tab**
2. **Select issue category** from the dropdown menu
3. **Add photo evidence**:
   - Click "Take Photo" to use your device camera
   - Click "Upload Photo" to select from your device
4. **Enter description** of the issue in detail
5. **Get location** by clicking "Use Current Location"
6. **Submit report** - all fields are required

### Viewing Reports

1. **Navigate to "Dashboard" tab**
2. **Browse all reports** in the card-based layout
3. **Use filters** to find specific reports:
   - Search by description keywords
   - Filter by category
   - Filter by status
4. **Click any report** to view detailed information
5. **View location coordinates** and submission timestamps

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Dashboard.tsx      # Reports dashboard with filtering
│   └── ReportForm.tsx     # Issue reporting form
├── utils/
│   └── storage.ts         # Local storage utilities
├── types.ts               # TypeScript type definitions
├── App.tsx                # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design with subtle shadows and rounded corners
- **Color System**: Consistent blue accent color with proper contrast ratios
- **Typography**: Clear hierarchy with appropriate font weights and sizes
- **Spacing**: 8px grid system for consistent spacing throughout
- **Animations**: Smooth transitions and hover effects for better UX
- **Status Indicators**: Color-coded status badges (yellow for pending, blue for in-progress, green for resolved)

## 📊 Sample Data

The application includes sample reports for demonstration purposes:
- Pothole report with realistic description and location
- Broken streetlight report marked as "in-progress"
- Garbage issue marked as "resolved"

## 🔧 Configuration

### Environment Setup
The application uses Vite's built-in environment variable support. No additional configuration is required for basic usage.

### Customization
- **Categories**: Modify the `categories` array in `ReportForm.tsx` to add/remove issue types
- **Status Types**: Update the `statuses` array in `Dashboard.tsx` to change available status options
- **Styling**: Customize colors and spacing in `tailwind.config.js`

## 🚀 Deployment

This application can be deployed to any static hosting service:

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Import project for seamless deployment
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **AWS S3**: Upload built files to S3 bucket with static hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing issues in the repository
2. Create a new issue with detailed description
3. Include steps to reproduce any bugs
