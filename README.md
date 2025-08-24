# Abhilash Hamsa - Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases professional projects, skills, and achievements in a clean, interactive design.

## 🚀 Features

### Design & Layout
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, and animated components
- **Accessibility**: Proper focus states and semantic HTML structure

### Sections
1. **Navigation Bar**: Sticky navigation with mobile menu toggle
2. **Hero Section**: Personal introduction with contact information
3. **Statistics**: Key metrics display (skills, projects, DSA problems)
4. **Skills Section**: Visual representation of technical skills
5. **Projects Section**: Detailed project cards with descriptions
6. **GitHub Contributions**: Visual contribution graph
7. **Call-to-Action Cards**: Interactive prompts for portfolio enhancement
8. **Footer**: Social links and copyright information

### Interactive Features
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Animated navigation between sections
- **Typing Effect**: Animated text for hero name
- **Stats Animation**: Counter animation for statistics
- **Hover Effects**: Interactive project and skill cards
- **Scroll to Top**: Floating button for easy navigation
- **Share Functionality**: Native sharing or clipboard copy
- **Preview Mode**: Toggle for different view modes

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Inter font family for typography

## 📁 File Structure

```
public/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
└── script.js           # JavaScript functionality
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: `#2563eb` - Main brand color
- **Secondary Blue**: `#1d4ed8` - Darker shade for gradients
- **Accent Orange**: `#f59e0b` - Call-to-action elements
- **Neutral Grays**: Various shades for text and backgrounds

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately across devices

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Navigation**: Sticky header with smooth transitions
- **Animations**: Fade-in effects and micro-interactions

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `public/index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve public
   ```

### Customization

#### Personal Information
Edit the following in `index.html`:
- Name and title in the hero section
- Contact information
- Project details and descriptions
- Skills list

#### Styling
Modify `style.css` to:
- Change color scheme
- Adjust typography
- Modify layout and spacing
- Add custom animations

#### Functionality
Update `script.js` to:
- Add new interactive features
- Modify animations
- Integrate with external APIs
- Add form handling

## 🎯 Key Features Explained

### Mobile Menu
The mobile menu uses CSS transforms and JavaScript to create a smooth slide-in animation from the left side of the screen.

### Smooth Scrolling
Navigation links use `scroll-behavior: smooth` and JavaScript to provide smooth scrolling to sections with proper offset for the fixed header.

### Typing Effect
The hero name animates character by character using a custom typewriter function that triggers when the element comes into view.

### Stats Animation
Statistics cards animate from 0 to their target values when scrolled into view, creating an engaging counting effect.

### GitHub Contributions
A visual representation of GitHub contribution activity using CSS Grid and JavaScript-generated squares with different color intensities.

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices and browsers
5. Submit a pull request

## 📞 Contact

For questions or support, please reach out:
- Email: abhilashhamsa9@gmail.com
- Phone: 918096585052

---

**Built with ❤️ by Abhilash Hamsa**
