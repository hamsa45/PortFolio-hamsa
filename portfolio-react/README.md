# Abhilash Hamsa - Portfolio

A modern, responsive portfolio website built with React and TypeScript, featuring real-time GitHub contributions and professional design.

## 🚀 Features

- **Modern React**: Built with React 19 and TypeScript
- **Real GitHub Data**: Live GitHub contributions heatmap
- **Responsive Design**: Works perfectly on all devices
- **Professional UI**: Clean, modern design with smooth animations
- **SEO Optimized**: Meta tags and proper structure
- **Fast Performance**: Optimized build and loading

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: CSS3 with modern features
- **Icons**: Font Awesome, Lucide React
- **GitHub Integration**: react-github-calendar
- **Animations**: Framer Motion
- **Hosting**: Firebase Hosting
- **CI/CD**: GitHub Actions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hamsa45/PortFolio-hamsa.git
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project is configured with GitHub Actions for automatic deployment to Firebase Hosting.

**How it works:**
1. Push code to the `main` branch
2. GitHub Actions automatically:
   - Installs dependencies
   - Builds the React app
   - Deploys to Firebase Hosting

**No manual steps required!** Just push to main and your site will be live.

### Manual Deployment

If you need to deploy manually:

```bash
npm run deploy
```

## 🔧 Configuration

### Firebase Setup

The project is already configured for Firebase Hosting:

- **Project ID**: `portfolio-hamsa`
- **Public Directory**: `build`
- **Single Page App**: Yes (React Router ready)

### GitHub Integration

- **Username**: `hamsa45`
- **Real-time contributions**: Automatically fetched
- **No API tokens needed**: Uses public GitHub API

## 📁 Project Structure

```
portfolio-react/
├── public/
│   ├── images/          # Profile pictures
│   └── index.html       # Main HTML file
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── GitHubContributions.tsx
│   │   └── Footer.tsx
│   ├── App.tsx          # Main app component
│   ├── App.css          # Global styles
│   └── index.tsx        # App entry point
├── .github/workflows/   # GitHub Actions
├── firebase.json        # Firebase configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Adding Your Images

1. Place your profile pictures in `public/images/`:
   - `profile-icon.jpg` (navigation icon)
   - `profile-pic.jpg` (hero section)

### Updating Content

- **Personal Info**: Edit `Hero.tsx`
- **Skills**: Modify `Skills.tsx`
- **Projects**: Update `Projects.tsx`
- **GitHub Username**: Change in `GitHubContributions.tsx`

### Styling

- **Colors**: Modify CSS variables in `App.css`
- **Layout**: Adjust grid and flexbox properties
- **Animations**: Add Framer Motion components

## 🔄 Dependencies Management

### Automatic Dependency Updates

GitHub Actions automatically handles:
- **Node.js version**: 18.x
- **npm cache**: Optimized for faster builds
- **Dependency installation**: `npm ci` for consistent builds

### Adding New Dependencies

1. **Install locally**:
   ```bash
   npm install package-name
   ```

2. **Push to main**: Dependencies are automatically installed in CI/CD

### Common Dependencies

- `react-github-calendar`: GitHub contributions
- `framer-motion`: Animations
- `lucide-react`: Modern icons
- `@types/*`: TypeScript definitions

## 🐛 Troubleshooting

### Build Issues

1. **Clear cache**:
   ```bash
   npm run build -- --reset-cache
   ```

2. **Reinstall dependencies**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

### Deployment Issues

1. **Check Firebase project**:
   ```bash
   firebase projects:list
   ```

2. **Verify GitHub secrets**:
   - Go to repository settings → Secrets
   - Ensure `FIREBASE_SERVICE_ACCOUNT_PORTFOLIO_HAMSA` exists

### GitHub Actions Issues

1. **Check workflow logs**: Go to Actions tab in GitHub
2. **Verify branch name**: Ensure you're pushing to `main`
3. **Check secrets**: Verify Firebase service account is configured

## 📈 Performance

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with React Scripts
- **Loading Speed**: Fast with optimized assets
- **SEO**: Meta tags and proper structure

## 🔮 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Contact form with validation
- [ ] Blog section
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Social media feeds
- [ ] Resume download
- [ ] Project filtering

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Push to the branch
5. Create a Pull Request

---

**Built with ❤️ by Abhilash Hamsa**
