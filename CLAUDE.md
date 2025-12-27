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
- CSS custom properties for theming
- Mobile-first responsive design
- Prefer CSS animations over JavaScript where possible
- Use `transform` and `opacity` for performant animations

### JavaScript
- Vanilla JavaScript (no frameworks)
- ES6+ syntax
- Modular code organization
- Comments for complex logic
- URL parameter parsing for configuration
- Fallbacks for missing parameters

## Animation Guidelines

### CSS Animations
- Use `@keyframes` for repeating animations
- Use `transition` for state changes
- Combine `transform` properties in single declaration
- Use `will-change` sparingly for performance hints

### JavaScript Animations
- Use `requestAnimationFrame` for smooth animations
- Throttle/debounce event handlers
- Clean up animations on page unload
- Provide reduced-motion alternatives

## SVG Logo Structure

The logo consists of two main elements:
- `#shadoll_l` - The "L" shape (black, `#222`)
- `#shadoll_s` - The "S" shape (red, `#dc2108`, contains 2 path elements)

When animating:
- Full-body animations apply to the entire SVG container
- Internal animations target individual paths within the SVG
- Maintain aspect ratio and viewBox
- Use CSS classes for animation states

## Configuration System

URL parameters should follow this pattern:
```
?bg=animated&gradient=linear&logo=full&logoAnim=shake&elementAnim=neon
```

Default values when parameters are missing:
- `bg`: `animated`
- `gradient`: `linear`
- `logo`: `animated`
- `logoAnim`: `all`
- `elementAnim`: `neon`

## Git Workflow

- Commit related changes together
- Write descriptive commit messages
- Keep commits atomic and focused
- Don't commit generated files or dependencies

## Testing Checklist

Before considering a feature complete:
- [ ] Test in Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Verify smooth 60fps performance
- [ ] Check with reduced motion preferences
- [ ] Validate HTML/CSS
- [ ] Test all URL parameter combinations
- [ ] Update documentation

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

### Adding a New Gradient Type
1. Create CSS custom properties for gradient
2. Add gradient class in [styles.css](css/styles.css)
3. Update configuration logic in [app.js](js/app.js)
4. Document new gradient type in [README.md](README.md)

### Debugging Animation Performance
1. Open Chrome DevTools > Performance
2. Record animation sequence
3. Look for long frames (>16ms)
4. Check for forced reflows/repaints
5. Optimize by using `transform`/`opacity` only
6. Add `will-change` if needed

## AI Assistant Best Practices

When working on this project:
- Always read existing files before suggesting changes
- Maintain consistency with existing code style
- Update all relevant documentation
- Test changes in browser if possible
- Ask for clarification on ambiguous requirements
- Suggest performance optimizations
- Consider mobile and accessibility
- Keep solutions simple and maintainable
