# Changelog

All notable changes to the Shadoll Animated Placeholder project will be documented in this file.

## [1.1.0] - 2025-12-27

### Added
- **Toast Notification System**: Visual feedback when changing settings via keyboard
  - Appears bottom-center with configuration summary
  - Auto-dismisses after 2.5 seconds
  - Responsive sizing for mobile devices
  - Backdrop blur effect for better visibility

- **Animation Speed Control**: Full control over animation speed
  - New `speed` URL parameter (range: 0.1x to 5x)
  - Keyboard shortcuts: `+`/`=` (increase), `-`/`_` (decrease), `0` (reset)
  - Affects all animations simultaneously
  - Speed adjustments in 0.25x increments

- **Speed Test Suite**: Added 6 speed test examples in [test.html](test.html)
  - Ultra Slow (0.25x)
  - Slow Motion (0.5x)
  - Normal Speed (1x)
  - Double Speed (2x)
  - Triple Speed (3x)
  - Ultra Slow Chaos Mode

### Changed
- **SVG Structure Improvement**: Restructured logo SVG for better organization
  - Moved L path into a group (consistent with S structure)
  - Set fill colors on groups instead of individual paths
  - Both L and S groups now have identical structure
  - Colors: `#222` (L group), `#dc2108` (S group)

- **Full-Page Logo Animation**: Logo now animates across entire viewport
  - Container changed from fixed size to full viewport (100vw × 100vh)
  - Logo remains centered and same visual size
  - Animations no longer restricted to small block
  - Added `pointer-events: none` to prevent interaction issues

- **CSS Architecture**: Improved animation timing system
  - Introduced `--speed-multiplier` CSS custom property
  - All animation durations now use `calc()` with multiplier
  - Easier to control all animations from single source

- **Documentation Updates**: All documentation files updated
  - [README.md](README.md): Added speed control to features, added speed examples
  - [USAGE.md](USAGE.md): New Performance Configuration section, speed examples
  - [SUMMARY.md](SUMMARY.md): Updated technical details and testing instructions
  - [test.html](test.html): Added Speed Tests category

### Fixed
- SVG color inheritance now properly set at group level
- Logo animation space no longer confined to small area
- Toast notifications provide clear feedback for all configuration changes

### Technical Details
- **Files Modified**: 7 files ([index.html](index.html), [css/styles.css](css/styles.css), [js/app.js](js/app.js), [README.md](README.md), [USAGE.md](USAGE.md), [SUMMARY.md](SUMMARY.md), [test.html](test.html))
- **New CSS**: 35 lines for toast notifications
- **New JS**: ~60 lines for toast and speed control
- **Total Size**: ~24 KB (HTML + CSS + JS combined)

---

## [1.0.0] - 2025-12-27

### Initial Release

#### Core Features
- Dynamic gradient backgrounds (linear, radial, conic)
- Logo full-body animations (shake, rotate, tilt)
- Logo element animations (neon, color, explosion, fly)
- URL parameter configuration system
- Keyboard controls (B, G, L, A, E, R, H)
- Responsive design for all devices
- Accessibility support (reduced motion)
- Zero dependencies (vanilla JavaScript)

#### Files Included
- [index.html](index.html) - Main entry point
- [css/styles.css](css/styles.css) - All styles and animations
- [js/app.js](js/app.js) - Configuration and control system
- [images/shadoll.svg](images/shadoll.svg) - Logo file
- [README.md](README.md) - Project overview
- [USAGE.md](USAGE.md) - Detailed usage guide
- [TODO.md](TODO.md) - Development roadmap
- [CLAUDE.md](CLAUDE.md) - AI assistant instructions
- [SUMMARY.md](SUMMARY.md) - Project summary
- [deploy.md](deploy.md) - Deployment guide
- [test.html](test.html) - Interactive test suite

#### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Format
This changelog follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format.

## Version Format
- **Major.Minor.Patch** (Semantic Versioning)
- Major: Breaking changes
- Minor: New features (backward compatible)
- Patch: Bug fixes (backward compatible)
