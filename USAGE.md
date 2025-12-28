# Usage Guide

## Quick Start

1. Open [index.html](index.html) in your browser
2. Press `H`, `?`, or `/` to see keyboard controls (or tap the `?` button on mobile)
3. Use URL parameters to configure the page
4. On mobile: Tap any kbd button in the help window to trigger that action

## URL Parameters Reference

### Background Configuration

**bg** - Background animation state
- `static` - Static gradient (no animation)
- `animated` - Animated gradient (default)

**gradient** - Gradient type
- `linear` - Linear gradient (default)
- `radial` - Radial gradient
- `conic` - Conic gradient

**palette** - Color palette theme
- `default` - Purple, pink, and blue tones (default)
- `blue-yellow` - Ocean sunset with deep blues and golden yellows
- `dark` - Deep space with moody dark tones
- `light` - Pastel dream with soft colors
- `fire` - Vibrant warm colors (red, orange, yellow)
- `nature` - Fresh natural tones (green, teal)

### Logo Configuration

**logo** - Logo animation state
- `static` - No animations
- `animated` - Element animations only
- `full` - Full-body + element animations (default)

**logoAnim** - Full-body logo animation
- `shake` - Gentle shaking motion
- `rotate` - Continuous rotation
- `tilt` - 3D tilting effect
- `interactive` - Logo follows cursor (desktop) or device orientation (mobile)
- `mixed` - Auto tilt animation that becomes interactive on movement (default)
- `all` - All animations combined

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

### Color Palettes
```
index.html?palette=blue-yellow
index.html?palette=dark
index.html?palette=fire&logoAnim=all
index.html?palette=nature&gradient=radial
```

### Interactive Mode
```
index.html?logoAnim=interactive
```

### Mixed Mode (Default)
```
index.html?logoAnim=mixed
```

## Keyboard Controls

While on the page, you can use these keys to change settings in real-time:

- `B` - Toggle background animation (animated ↔ static)
- `G` - Cycle gradient types (linear → radial → conic)
- `P` - Cycle color palettes (default → blue-yellow → dark → light → fire → nature)
- `L` - Cycle logo states (static → animated → full)
- `A` - Cycle logo body animations (shake → rotate → tilt → interactive → mixed → all)
- `E` - Cycle element animations (neon → color → explosion → fly → all)
- `+` or `=` - Increase animation speed (+0.25x)
- `-` or `_` - Decrease animation speed (-0.25x)
- `0` - Reset speed to 1x
- `R` - Reset all to default configuration
- `H`, `?`, or `/` - Show help dialog
- `ESC` - Close help dialog

**Mobile Users:** Tap any kbd button in the help window to trigger that keyboard shortcut.

**Note:** A liquid glass toast notification will appear showing your current configuration when you change settings.

## Mobile Features

### Touch Controls
- Tap the `?` button at bottom-right to open help window
- Tap any kbd button in help to trigger that keyboard shortcut
- Touch-friendly larger buttons on small screens

### Gyroscope Support
- Interactive and mixed modes use device orientation on mobile
- Logo tilts based on how you tilt your phone/tablet
- ±35° tilt range for dramatic movement
- iOS 13+ requires permission (automatically requested)

### Responsive Design
- Logo sized at ~60% of screen height for visibility
- Mobile-first unified viewBox approach
- Same great experience on all screen sizes
- Optimized touch targets

## Performance Tips

1. **Reduced Motion**: The page respects `prefers-reduced-motion` system settings
2. **Browser Compatibility**: Best viewed in modern browsers (Chrome, Firefox, Safari, Edge)
3. **Mobile Browsers**: Fully supported on iOS Safari and Chrome Mobile
4. **Performance**: All animations use CSS transforms and opacity for 60fps performance
5. **Hardware Acceleration**: GPU-accelerated animations for smooth playback

## Customization

### Using Color Palettes

The easiest way to change colors is using the built-in palettes via URL parameter or P key:

```
?palette=blue-yellow  # Ocean sunset theme
?palette=fire         # Warm red/orange/yellow
?palette=nature       # Green/teal natural tones
?palette=dark         # Deep space dark theme
?palette=light        # Soft pastel colors
```

### Creating Custom Palettes

Add a new palette class in [css/styles.css](css/styles.css):

```css
.palette--custom {
    --gradient-color-1: #your-color-1;
    --gradient-color-2: #your-color-2;
    --gradient-color-3: #your-color-3;
    --gradient-color-4: #your-color-4;
}
```

Then use `?palette=custom` in the URL.

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

Logo size is controlled via the SVG viewBox for optimal mobile-first responsive design. To adjust, edit the viewBox in [js/app.js](js/app.js):

```javascript
function setupViewBox() {
    const logo = elements.logo;
    // Smaller viewBox = larger logo (510 logo units / 900 viewBox = ~57% screen)
    logo.setAttribute('viewBox', '-200 -200 900 900');
}
```

For example:
- `viewBox="-200 -200 900 900"` - Logo at ~57% (current)
- `viewBox="-300 -300 1100 1100"` - Logo at ~46%
- `viewBox="-100 -100 700 700"` - Logo at ~73%

## Troubleshooting

### Animations not working
- Check browser console for errors
- Verify JavaScript is enabled
- Try a different browser
- Check if reduced motion is enabled in system settings

### Page looks broken
- Clear browser cache

### Slow performance
- Try simpler animation combinations
- Reduce animation speed in CSS or use `?speed=0.5`
- Use static background: `?bg=static`
- Use simpler logo animations: `?logoAnim=tilt`
- Close other browser tabs
- Disable element animations: `?elementAnim=neon` or `?logo=animated&logoAnim=mixed`

### Interactive mode not working on mobile
- Grant gyroscope permission when prompted (iOS 13+)
- Try tilting your device more dramatically (±35° range)
- Check if device has gyroscope sensor
- Fallback to cursor mode if gyroscope unavailable

### Help button not visible
- Check bottom-right corner of screen
- Button is always positioned at bottom on all devices
- Try refreshing the page if it's missing
