# Shadoll Animated Placeholder

An animated, configurable placeholder page featuring dynamic gradient backgrounds and interactive logo animations. Designed to work as a standalone static site deployable on GitHub Pages with full mobile support.

The logo represents the letters "s" and "d" from "shadoll" ({s}ha{d}oll), designed as geometric shapes that can animate independently or together.

## Features

- **6 Color Palettes**: Default, Blue-Yellow, Dark, Light, Fire, and Nature themes
- **Dynamic Gradient Backgrounds**: Smoothly transitioning gradients with 3 types (linear, radial, conic)
- **Logo Animations**:
  - Full-body animations: shake, rotate, tilt, interactive (cursor/gyroscope), mixed mode
  - Internal SVG element animations: neon blinking, color changing, explosion effects, fly animations
  - Interactive mode: Logo follows cursor on desktop or device orientation on mobile
  - Mixed mode: Auto tilt animation that becomes interactive on movement
  - Full-page animation space optimized for all screen sizes
- **Real-time Configuration**:
  - URL parameter support for all settings
  - Keyboard controls with live liquid glass toast notifications
  - Touchable help buttons for mobile devices
  - Animation speed control (0.1x to 5x)
- **Mobile-First Design**:
  - Responsive logo sizing (60% of screen on mobile)
  - Touch-friendly controls
  - Gyroscope support for interactive animations
- **Modern UI**:
  - Apple-style liquid glass design for help window and toasts
  - Smooth animations with hardware acceleration
  - Beautiful modal help system
- **Zero Backend**: Pure HTML/CSS/JavaScript implementation
- **GitHub Pages Ready**: Deploy directly as a static site

## Quick Start

1. Open [index.html](index.html) in your browser
2. Press `H`, `?`, or `/` for keyboard controls (or tap the `?` button on mobile)
3. Customize using URL parameters or keyboard shortcuts

See [USAGE.md](USAGE.md) for detailed configuration examples and keyboard controls.

### Quick Examples

- **Minimal**: `index.html?bg=static&logo=static`
- **Interactive Mode**: `index.html?logoAnim=interactive`
- **Mixed Mode** (default): `index.html?logoAnim=mixed`
- **Dark Palette**: `index.html?palette=dark`
- **Blue-Yellow Theme**: `index.html?palette=blue-yellow`
- **Full Chaos**: `index.html?logoAnim=all&elementAnim=all&palette=fire`
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

## License

MIT License

## Author

sHa
