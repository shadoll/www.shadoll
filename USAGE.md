# Usage Guide

## Quick Start

1. Open [index.html](index.html) in your browser
2. Press `H` or `?` to see keyboard controls
3. Use URL parameters to configure the page

## URL Parameters Reference

### Background Configuration

**bg** - Background animation state
- `static` - Static gradient (no animation)
- `animated` - Animated gradient (default)

**gradient** - Gradient type
- `linear` - Linear gradient (default)
- `radial` - Radial gradient
- `conic` - Conic gradient

### Logo Configuration

**logo** - Logo animation state
- `static` - No animations
- `animated` - Element animations only
- `full` - Full-body + element animations (default)

**logoAnim** - Full-body logo animation
- `shake` - Gentle shaking motion
- `rotate` - Continuous rotation
- `tilt` - 3D tilting effect
- `all` - All animations combined (default)

**elementAnim** - Internal SVG element animation
- `neon` - Neon blinking effect
- `color` - Color changing animation
- `explosion` - Explosion/implosion effect
- `fly` - Paths fly out and return
- `all` - All animations combined (default)

### Performance Configuration

**speed** - Animation speed multiplier
- Range: `0.1` (very slow) to `5` (very fast)
- Default: `1` (normal speed)
- Examples: `0.5` (half speed), `2` (double speed), `3` (triple speed)

## Example URLs

### Minimal Animation
```
index.html?bg=static&logo=static
```

### Neon Effect Only
```
index.html?bg=animated&gradient=radial&logo=animated&elementAnim=neon
```

### Full Chaos Mode
```
index.html?bg=animated&gradient=conic&logo=full&logoAnim=all&elementAnim=all
```

### Gentle Rotation
```
index.html?bg=animated&gradient=linear&logo=full&logoAnim=rotate&elementAnim=color
```

### Explosion Effect
```
index.html?bg=static&gradient=radial&logo=animated&elementAnim=explosion
```

### Slow Motion
```
index.html?speed=0.5
```

### Fast Mode
```
index.html?speed=2.5&logoAnim=all&elementAnim=all
```

### Ultra Slow Chaos
```
index.html?speed=0.25&bg=animated&gradient=conic&logo=full&logoAnim=all&elementAnim=all
```

## Keyboard Controls

While on the page, you can use these keys to change settings in real-time:

- `B` - Toggle background animation (animated ↔ static)
- `G` - Cycle gradient types (linear → radial → conic)
- `L` - Cycle logo states (static → animated → full)
- `A` - Cycle logo body animations (shake → rotate → tilt → all)
- `E` - Cycle element animations (neon → color → explosion → fly → all)
- `+` or `=` - Increase animation speed (+0.25x)
- `-` or `_` - Decrease animation speed (-0.25x)
- `0` - Reset speed to 1x
- `R` - Reset all to default configuration
- `H` or `?` - Show help dialog

**Note:** A toast notification will appear showing your current configuration when you change settings.

## Performance Tips

1. **Reduced Motion**: The page respects `prefers-reduced-motion` system settings
2. **Browser Compatibility**: Best viewed in modern browsers (Chrome, Firefox, Safari, Edge)
3. **Performance**: All animations use CSS transforms and opacity for 60fps performance

## Customization

### Changing Colors

Edit the CSS custom properties in [css/styles.css](css/styles.css:4-7):

```css
:root {
    --gradient-color-1: #667eea;
    --gradient-color-2: #764ba2;
    --gradient-color-3: #f093fb;
    --gradient-color-4: #4facfe;
}
```

### Changing Animation Speed

Edit the timing variables in [css/styles.css](css/styles.css:10-16):

```css
:root {
    --gradient-duration: 15s;
    --logo-shake-duration: 3s;
    --logo-rotate-duration: 8s;
    --logo-tilt-duration: 4s;
    --neon-duration: 2s;
    --color-change-duration: 5s;
    --explosion-duration: 3s;
}
```

### Changing Logo Size

Edit the logo container width/height in [css/styles.css](css/styles.css:90-91):

```css
.logo-container {
    width: 40vmin;  /* Adjust this */
    height: 40vmin; /* Adjust this */
}
```

## Troubleshooting

### Animations not working
- Check browser console for errors
- Verify JavaScript is enabled
- Try a different browser
- Check if reduced motion is enabled in system settings

### Page looks broken
- Clear browser cache
- Ensure all files are in correct directories
- Check that `images/shadoll.svg` exists

### Slow performance
- Try simpler animation combinations
- Reduce animation speed in CSS
- Use static background: `?bg=static`
- Close other browser tabs

## Development

See [CLAUDE.md](CLAUDE.md) for development guidelines and [TODO.md](TODO.md) for planned features.
