# Changelog

All notable changes to the Shadoll Animated Placeholder project will be documented in this file.

## [1.2.0] - 2025-12-28

### Major New Features

- **6 Color Palettes**: Complete color theming system
  - Default (Purple/Pink/Blue) - original colors
  - Blue-Yellow (Ocean Sunset) - deep blues with golden yellows
  - Dark (Deep Space) - moody dark tones
  - Light (Pastel Dream) - soft pastel colors
  - Fire (Red/Orange/Yellow) - vibrant warm colors
  - Nature (Green/Teal) - fresh natural tones
  - New keyboard shortcut: `P` cycles through palettes
  - URL parameter: `?palette=blue-yellow`

- **Interactive Logo Mode**: Logo responds to user input
  - **Desktop**: Logo tilts based on cursor/mouse position
  - **Mobile**: Logo tilts based on device orientation (gyroscope)
  - Auto-switching between cursor and gyroscope inputs
  - ±35° tilt range for dramatic effect
  - iOS 13+ permission handling for gyroscope
  - URL parameter: `?logoAnim=interactive`

- **Mixed Mode** (NEW DEFAULT): Best of both worlds
  - Starts with automatic tilt animation
  - Becomes interactive when cursor/device moves
  - Returns to auto tilt after 2 seconds of inactivity
  - Seamless transitions between modes
  - URL parameter: `?logoAnim=mixed`

- **Apple-Style Liquid Glass UI**: Modern, vibrant design system
  - Help window with frosted glass effect
  - Toast notifications with glass styling
  - Heavy blur (40px) with color saturation (180%)
  - Multi-layered shadows for depth
  - Smooth bouncy animations
  - Gradient backgrounds with inset highlights

### Mobile-First Improvements

- **Responsive Logo Sizing**: Logo optimized for all devices
  - Mobile: ~60% of screen height (was ~10%)
  - Unified viewBox approach (900×900) for all devices
  - No more separate mobile/desktop scaling
  - Maintains animation space while prioritizing visibility

- **Touch-Friendly Controls**:
  - All kbd buttons clickable on touch devices
  - Simulates keyboard events when tapped
  - Help button repositioned to bottom-right on all devices
  - Larger touch targets on mobile

- **Enhanced Interactive Sensitivity**:
  - Increased tilt range: ±20° → ±35°
  - Improved gyroscope sensitivity (60-100% more responsive)
  - More dramatic, visible movements on mobile

### UI/UX Enhancements

- **Help System Improvements**:
  - Multiple help toggles: `H`, `?`, `/` keys
  - `ESC` key closes help window
  - Toast notifications moved to top with higher z-index (1002)
  - Toast always appears above help window on mobile
  - Help button always at bottom-right corner
  - Removed duplicate/conflicting media query styles

- **Toast Notification Highlighting**:
  - Changed settings are highlighted in bold in toast messages
  - Provides clear visual feedback on what was modified
  - Uses HTML formatting for emphasis

- **Footer**: Added copyright notice at bottom center
  - Semi-transparent white text
  - Subtle shadow for visibility
  - Responsive sizing

- **Logo Documentation**: Added description of logo design
  - Logo represents "s" and "d" from "shadoll" word
  - Documented in README.md and CLAUDE.md

### Changed

- **Default Animation**: Changed from `tilt` to `mixed`
- **ViewBox Strategy**: Unified single viewBox for all devices (mobile-first)
- **Help Button Position**: Fixed to bottom-right on all screen sizes
- **Palette Display**: Toast now shows current palette name

### Technical Improvements

- Removed CSS transform scaling conflicts
- Cleaner responsive media queries (removed duplicates)
- Improved JavaScript viewBox management
- Better auto-detection of input methods
- Enhanced idle detection for mixed mode

### Files Modified
- [index.html](index.html) - Added palette param, footer, data-key attributes
- [css/styles.css](css/styles.css) - 6 palettes, liquid glass styles, mobile fixes, toast z-index
- [js/app.js](js/app.js) - Interactive controller, viewBox setup, palette cycling, toast highlighting
- [README.md](README.md) - Updated features, examples, and logo description
- [TODO.md](TODO.md) - Marked completed tasks
- [USAGE.md](USAGE.md) - Updated with all new features and examples
- [CLAUDE.md](CLAUDE.md) - Added logo design documentation and architectural decisions
- [CHANGELOG.md](CHANGELOG.md) - This file

---

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
