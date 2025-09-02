# UM Finance Quiz - Financial Mindset Assessment Platform

A modern, responsive web application designed to assess users' financial mindset through an interactive 15-question quiz. Built with React, TypeScript, and Vite for optimal performance and developer experience.

## 🚀 Features

### Core Functionality
- **Interactive Quiz Flow**: 15 carefully crafted questions to assess financial mindset
- **Multi-step Navigation**: Seamless progression through gender selection, quiz, results, contact, and success screens
- **Responsive Design**: Fully adaptive layout for desktop, tablet, and mobile devices
- **Real-time Progress Tracking**: Visual progress indicator throughout the quiz
- **Dynamic Content**: Mix of text-based and card-based questions with images

### Question Types
- **Text Questions**: Standard multiple-choice questions with text options
- **Card Questions**: Visual questions with images and descriptions (animals, elements, values, etc.)

### User Experience
- **Smooth Animations**: Hover effects and transitions for enhanced interactivity
- **Accessibility**: Proper semantic HTML and keyboard navigation support
- **Modern UI**: Clean, professional design with consistent branding
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: CSS3 with responsive design principles
- **Icons**: Custom SVG icons and icon components
- **Fonts**: Google Fonts (Open Sans, Playfair Display, and others)
- **Development**: ESLint for code quality

## 📱 Responsive Breakpoints

The application is designed to work seamlessly across all device sizes:

- **Extra Small Mobile**: ≤ 320px (20rem)
- **Mobile**: ≤ 360px (22.5rem)
- **Tablet**: ≤ 768px (48rem)
- **Medium Screen**: ≤ 1024px (64rem)
- **Large Screen**: ≤ 1200px (75rem)
- **Desktop**: > 1200px

## 🎨 Design System

### Color Palette
- **Primary Blue**: #132A4D
- **Secondary Gold**: #FFD700
- **Text Dark**: #1C1C1C
- **Text Light**: #9E9E9E
- **Background**: #FFFFFF
- **Card Background**: #F8F8F8

### Typography
- **Primary Font**: Open Sans (400-700 weights)
- **Display Font**: Playfair Display (500 weight)
- **Monospace**: JetBrains Mono (for technical elements)

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Consistent styling with hover effects
- **Input Fields**: Clean design with proper focus states
- **Navigation**: Intuitive header with logo and menu

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd umfinance_quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
umfinance_quiz/
├── public/
│   ├── icons/           # SVG icons and images
│   └── images/          # Question images and assets
├── src/
│   ├── shared/
│   │   └── icons/       # Reusable icon components
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.tsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🎯 Quiz Flow

1. **Gender Selection**: Users choose their gender to begin
2. **Quiz Questions**: 15 questions covering various financial mindset aspects
3. **Results Screen**: Personalized results with insights
4. **Contact Form**: Email collection for detailed results
5. **Success Screen**: Confirmation of quiz completion

### Question Categories
- **Morning Routines**: How users start their day
- **Risk Tolerance**: Attitudes toward financial risk
- **Decision Making**: Preferred decision-making styles
- **Animal Archetypes**: Personality traits through animal metaphors
- **Elemental Preferences**: Natural element associations
- **Value Systems**: Time, money, or opportunity priorities

## 🎨 Customization

### Adding New Questions
1. Update the `quizQuestions` object in `App.tsx`
2. Add corresponding images to the `public/images/` directory
3. Ensure proper TypeScript typing for new question types

### Styling Modifications
- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Responsive breakpoints: Media queries in `App.css`

### Icon Management
- Add new SVG icons to `public/icons/`
- Create corresponding components in `src/shared/icons/`
- Update the icon index file for easy imports

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Quality
- TypeScript for type safety
- ESLint for code consistency
- Prettier for code formatting (recommended)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

The application can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `dist` folder as the source
- **AWS S3**: Upload the `dist` folder to an S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern financial platforms
- Icon designs from various open-source icon libraries
- Google Fonts for typography
- React and Vite communities for excellent tooling

## 📞 Support

For questions or support, please contact the development team or create an issue in the repository.

---

**Built with ❤️ for better financial education and awareness**
