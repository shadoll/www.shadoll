# Shadoll Animated Placeholder

An animated, configurable placeholder page featuring dynamic gradient backgrounds and logo animations. Designed to work as a standalone static site deployable on GitHub Pages.

## Features

- **Dynamic Gradient Backgrounds**: Smoothly transitioning gradients with configurable colors, orientations, and types (linear, radial, conic)
- **Logo Animations**:
  - Full-body animations: shake, rotate, tilt
  - Internal SVG element animations: neon blinking, color changing, explosion effects
  - Full-page animation space (logo animates across entire viewport)
- **Real-time Configuration**:
  - URL parameter support for all settings
  - Keyboard controls with live toast notifications
  - Animation speed control (0.1x to 5x)
- **Zero Backend**: Pure HTML/CSS/JavaScript implementation
- **GitHub Pages Ready**: Deploy directly as a static site

## Quick Start

1. Open [index.html](index.html) in your browser
2. Press `H` or `?` for keyboard controls
3. Customize using URL parameters

See [USAGE.md](USAGE.md) for detailed configuration examples and keyboard controls.

### Quick Examples

- **Minimal**: `index.html?bg=static&logo=static`
- **Neon Effect**: `index.html?elementAnim=neon`
- **Full Chaos**: `index.html?logoAnim=all&elementAnim=all`
- **Slow Motion**: `index.html?speed=0.5`
- **Fast Mode**: `index.html?speed=2.5`

## Project Structure

```
www.shadoll/
├── index.html          # Main page
├── css/
│   └── styles.css      # Styles and animations
├── js/
│   └── app.js          # Configuration and animation logic
├── images/
│   └── shadoll.svg     # Logo file
├── README.md           # This file
├── USAGE.md            # Detailed usage guide
├── TODO.md             # Development tasks
├── CHANGELOG.md        # Version history
└── CLAUDE.md           # AI assistant instructions
```

## Deployment

See [deploy.md](deploy.md) for detailed deployment instructions.

### Quick Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select the branch (usually `main`) and root folder
4. Save and wait for deployment
5. Access at `https://yourusername.github.io/repository-name/`

## License

MIT License

## Author

Shadoll
