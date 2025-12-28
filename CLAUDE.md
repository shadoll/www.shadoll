# Claude AI Instructions

This document contains instructions for AI assistants working on this project.

## Project Overview

This is a static, animated placeholder page for the Shadoll project. It features configurable gradient backgrounds and SVG logo animations, designed to be deployed on GitHub Pages without any backend infrastructure.

## Core Principles

1. **Pure Frontend**: No backend dependencies, all functionality in HTML/CSS/JavaScript
2. **GitHub Pages Compatible**: Must work as a static site
3. **Performance First**: Smooth 60fps animations, minimal resource usage
4. **Configuration Flexibility**: URL parameters for customization
5. **Progressive Enhancement**: Works without JavaScript, enhanced with it
6. **Mobile-First Design**: Unified approach for all devices, optimized for touch and small screens

## File Structure Rules

- `index.html` - Main entry point, minimal inline code
- `css/styles.css` - All styles and CSS animations
- `js/app.js` - Configuration parsing and JavaScript animation logic
- `images/` - Static assets (SVG logo)
- `*.md` files - Documentation (always keep updated)

## Documentation Requirements

**IMPORTANT**: Always update `*.md` files to reflect actual project state:

- **README.md**: Update when adding features, changing usage, or modifying deployment process
- **TODO.md**: Update when completing tasks, adding new tasks, or changing priorities
- **CLAUDE.md**: Update when adding new coding patterns, architectural decisions, or AI instructions

## Code Style Guidelines

### HTML
- Semantic HTML5 elements
- Minimal inline styles or scripts
- Accessible markup (ARIA labels where needed)
- Meta tags for SEO and social sharing

### CSS
- BEM naming convention for classes
- CSS custom properties for theming (palettes, animation speed)
- Mobile-first responsive design (single unified solution for all devices)
- Prefer CSS animations over JavaScript where possible
- Use `transform` and `opacity` for performant animations
- Liquid glass UI: `backdrop-filter: blur(40px) saturate(180%)`
- Never use conflicting transform properties in media queries

### JavaScript
- Vanilla JavaScript (no frameworks)
- ES6+ syntax
- Modular code organization
- Comments for complex logic
- URL parameter parsing for configuration
- Fallbacks for missing parameters
- Event delegation for touch-enabled controls
- Clean up event listeners on controller stop
- Use closures for stateful controllers (interactive tilt)
- Auto-detection of input methods (cursor vs gyroscope)

## Animation Guidelines

### CSS Animations
- Use `@keyframes` for repeating animations
- Use `transition` for state changes
- Combine `transform` properties in single declaration
- Use `will-change` sparingly for performance hints

### JavaScript Animations
- Use `requestAnimationFrame` for smooth animations (not currently used)
- Throttle/debounce event handlers
- Clean up animations on page unload
- Provide reduced-motion alternatives
- Interactive animations: Direct style manipulation for real-time responsiveness
- Idle detection: Use `setTimeout` to return to default state after inactivity
- Controller pattern: Return object with `start()` and `stop()` methods

## SVG Logo Structure

### Logo Design
The logo represents the letters "s" and "d" extracted from "shadoll" ({s}ha{d}oll), designed as geometric shapes divided into sections:
- Left element: "s" shape (represented by `#shadoll_s` in SVG)
- Right element: "d" shape (represented by `#shadoll_l` in SVG)

**Note**: The naming convention reflects the letter shapes - `l` in the path name comes from "{d}oll", while `s` comes from "{s}ha".

### SVG Elements
- `#shadoll_l` - Single path element for the right "d" shape (default: `#222` black)
- `#shadoll_s` - Group containing 2 path elements for the left "s" shape (default: `#dc2108` red)

### Color Guidelines
- **Two-color scheme** (recommended): The "s" paths (`#shadoll_s`) should use one consistent color, the "d" path (`#shadoll_l`) uses another
- **Single-color scheme**: Both elements can use the same color for monochrome effect
- When creating color palettes, maintain color consistency within the "s" element (both paths same color)

### Animation Structure
- Full-body animations apply to the entire SVG container (`#logo`)
- Internal animations target individual elements (`#shadoll_s`, `#shadoll_l`)
- Element animations can target individual paths within `#shadoll_s` group
- Maintain aspect ratio and viewBox proportions
- Use CSS classes for animation states

### ViewBox Approach (Mobile-First)
**CRITICAL**: Logo sizing uses a unified viewBox for all devices:
- Single `viewBox="-200 -200 900 900"` for all screen sizes
- Logo paths are ~510 units → 510/900 = ~57% of screen
- **Never** use CSS `scale()` transforms for sizing (conflicts with animations)
- **Never** use separate viewBoxes for mobile/tablet/desktop
- Adjust viewBox size to change logo size: smaller viewBox = larger logo
- Set viewBox dynamically via JavaScript in `setupViewBox()` function

## Configuration System

URL parameters should follow this pattern:
```
?bg=animated&gradient=linear&palette=default&logo=full&logoAnim=mixed&elementAnim=neon&speed=0.5
```

Default values when parameters are missing:
- `bg`: `animated`
- `gradient`: `linear`
- `palette`: `default`
- `logo`: `full`
- `logoAnim`: `mixed` (changed from `tilt` in v2.0.0)
- `elementAnim`: `neon`
- `speed`: `0.5` (range: 0.1-5.0)

### Available Options

**Palettes**: `default`, `blue-yellow`, `dark`, `light`, `fire`, `nature`

**Logo Animations**: `shake`, `rotate`, `tilt`, `interactive`, `mixed`, `all`
- `interactive`: Logo follows cursor (desktop) or gyroscope (mobile)
- `mixed`: Auto tilt + interactive on movement (2s idle timeout)

## Git Workflow

- Commit related changes together
- Write descriptive commit messages
- Keep commits atomic and focused
- Don't commit generated files or dependencies

## Testing Checklist

Before considering a feature complete:
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on mobile devices (iOS Safari, Chrome Mobile)
- [ ] Test gyroscope on real mobile device (not emulator)
- [ ] Test touch controls (tap kbd buttons in help)
- [ ] Verify smooth 60fps performance
- [ ] Check with reduced motion preferences
- [ ] Validate HTML/CSS
- [ ] Test all URL parameter combinations
- [ ] Verify help button is at bottom-right on all screen sizes
- [ ] Check logo visibility on mobile (~60% of screen)
- [ ] Update all documentation (README, TODO, CHANGELOG, USAGE, CLAUDE)

## Performance Targets

- First paint: < 100ms
- Time to interactive: < 500ms
- Animation frame rate: 60fps
- No layout thrashing
- Minimal repaints/reflows

## Future Considerations

When adding new features:
- Maintain backwards compatibility with existing URL parameters
- Keep bundle size minimal (no large dependencies)
- Ensure accessibility (keyboard navigation, screen readers)
- Add feature detection/progressive enhancement
- Document new parameters in README.md

## Common Tasks

### Adding a New Animation
1. Create CSS `@keyframes` in [styles.css](css/styles.css)
2. Add animation class that applies keyframes
3. Add JavaScript logic in [app.js](js/app.js) to toggle class based on config
4. Update URL parameter documentation in [README.md](README.md)
5. Add task completion to [TODO.md](TODO.md)

### Adding a New Color Palette
1. Create `.palette--name` class in [styles.css](css/styles.css)
2. Define 4 CSS custom properties: `--gradient-color-1` through `--gradient-color-4`
3. Add palette name to `palettes` array in [app.js](js/app.js) keyboard controls
4. Add palette to `paletteNames` mapping in toast message function
5. Document new palette in [README.md](README.md) and [USAGE.md](USAGE.md)

### Adding a New Gradient Type
1. Create CSS custom properties for gradient
2. Add gradient class in [styles.css](css/styles.css)
3. Update configuration logic in [app.js](js/app.js)
4. Document new gradient type in [README.md](README.md)

### Adding Interactive Controls (Cursor/Gyroscope)
1. Create controller function with closure pattern (returns `{start, stop}`)
2. Store state variables: `isActive`, `mode`, timing trackers
3. Implement auto-switching logic with timeout (1s default)
4. Add `mousemove` handler for cursor tracking
5. Add `deviceorientation` handler for gyroscope
6. Request iOS permission if needed (`DeviceOrientationEvent.requestPermission`)
7. For mixed mode: Add idle detection with `setTimeout` (2s default)
8. Clean up all event listeners in `stop()` method
9. Store controller globally: `window.interactiveTiltController`

### Debugging Animation Performance
1. Open Chrome DevTools > Performance
2. Record animation sequence
3. Look for long frames (>16ms)
4. Check for forced reflows/repaints
5. Optimize by using `transform`/`opacity` only
6. Add `will-change` if needed

## Architectural Decisions (v2.0.0)

### Mobile-First ViewBox Strategy
- **Problem**: Logo was tiny on mobile (~10% of screen) with CSS scaling
- **Solution**: Unified `viewBox="-200 -200 900 900"` for all devices via JavaScript
- **Why**: CSS `scale()` conflicts with animations; single viewBox simplifies codebase
- **Result**: Logo at ~57% of screen (510 units / 900 viewBox) on all devices

### Interactive Mode Auto-Switching
- **Problem**: Need both cursor (desktop) and gyroscope (mobile) in one mode
- **Solution**: Time-based auto-switching with 1-second timeout
- **Why**: Detects active input method without manual switching
- **Implementation**: Track `lastCursorTime` and `lastGyroTime`, switch to most recent

### Mixed Mode Idle Detection
- **Problem**: Users want auto animation but also interactive control
- **Solution**: Tilt animation by default, becomes interactive on movement, returns after 2s idle
- **Why**: Best of both worlds - attractive animation + user engagement
- **Implementation**: Class toggling (`logo--tilt` ↔ `logo--interactive`) with `setTimeout`

### Touch-Enabled kbd Elements
- **Problem**: Mobile users can't use keyboard shortcuts
- **Solution**: Make kbd buttons clickable, dispatch synthetic keyboard events
- **Why**: Consistent UX across desktop and mobile
- **Implementation**: `data-key` attributes + click handlers + `KeyboardEvent` dispatch

### Liquid Glass UI Design
- **Decision**: Apple-style frosted glass for help and toasts
- **Why**: Modern, premium feel that matches animated aesthetic
- **Implementation**: `backdrop-filter: blur(40px) saturate(180%)` + gradient backgrounds

## AI Assistant Best Practices

When working on this project:
- Always read existing files before suggesting changes
- Maintain consistency with existing code style
- Update all relevant documentation (README, TODO, CHANGELOG, USAGE, CLAUDE)
- Test changes in browser if possible
- Ask for clarification on ambiguous requirements
- Suggest performance optimizations
- Consider mobile and accessibility (touch targets, gyroscope, screen readers)
- Keep solutions simple and maintainable
- **NEVER** use CSS `scale()` for logo sizing - use viewBox instead
- **NEVER** add duplicate/conflicting position properties in media queries
- **ALWAYS** clean up event listeners when stopping controllers
