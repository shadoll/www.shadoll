/**
 * Shadoll Animated Placeholder
 * Configuration and animation control system
 */

(function() {
    'use strict';

    // ===== Configuration =====
    const DEFAULT_CONFIG = {
        bg: 'animated',           // static | animated
        gradient: 'linear',       // linear | radial | conic
        logo: 'full',            // static | animated | full
        logoAnim: 'tilt',         // shake | rotate | tilt | all
        elementAnim: 'neon',      // neon | color | explosion | fly | all
        speed: 0.5                 // 0.5 (slow) - 3 (fast)
    };

    // ===== URL Parameter Parsing =====
    function getURLParams() {
        const params = new URLSearchParams(window.location.search);
        const speed = parseFloat(params.get('speed')) || DEFAULT_CONFIG.speed;
        return {
            bg: params.get('bg') || DEFAULT_CONFIG.bg,
            gradient: params.get('gradient') || DEFAULT_CONFIG.gradient,
            logo: params.get('logo') || DEFAULT_CONFIG.logo,
            logoAnim: params.get('logoAnim') || DEFAULT_CONFIG.logoAnim,
            elementAnim: params.get('elementAnim') || DEFAULT_CONFIG.elementAnim,
            speed: Math.max(0.1, Math.min(5, speed)) // Clamp between 0.1 and 5
        };
    }

    // ===== Element References =====
    const elements = {
        background: document.getElementById('background'),
        logo: document.getElementById('logo'),
        logoL: document.getElementById('shadoll_l'),
        logoS: document.getElementById('shadoll_s'),
        sPath1: document.querySelector('.s-path-1'),
        sPath2: document.querySelector('.s-path-2'),
        toast: document.getElementById('toast'),
        toastTitle: document.getElementById('toast-title'),
        toastMessage: document.getElementById('toast-message'),
        helpButton: document.getElementById('help-button'),
        helpWindow: document.getElementById('help-window'),
        helpClose: document.getElementById('help-close')
    };

    // ===== Toast Notification System =====
    let toastTimeout = null;

    function showToast(title, message) {
        // Clear any existing timeout
        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }

        // Set toast content
        elements.toastTitle.textContent = title;
        elements.toastMessage.textContent = message;

        // Show toast
        elements.toast.classList.add('show');

        // Hide after 2.5 seconds
        toastTimeout = setTimeout(() => {
            elements.toast.classList.remove('show');
        }, 2500);
    }

    // ===== Help System =====
    function toggleHelp() {
        elements.helpWindow.classList.toggle('show');
    }

    function hideHelp() {
        elements.helpWindow.classList.remove('show');
    }

    // Setup help button click handler
    function setupHelpSystem() {
        elements.helpButton.addEventListener('click', toggleHelp);
        elements.helpClose.addEventListener('click', hideHelp);

        // Close help when clicking outside
        elements.helpWindow.addEventListener('click', (e) => {
            if (e.target === elements.helpWindow) {
                hideHelp();
            }
        });

        // Close help with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.helpWindow.classList.contains('show')) {
                hideHelp();
            }
        });
    }

    // ===== Background Configuration =====
    function configureBackground(config) {
        const { bg, gradient } = config;

        // Remove all background classes
        elements.background.className = 'background';

        // Apply gradient type
        elements.background.classList.add(`background--${gradient}`);

        // Apply animation state
        if (bg === 'animated') {
            elements.background.classList.add('background--animated');
        }
    }

    // ===== Logo Full-Body Animation Configuration =====
    function configureLogoAnimation(config) {
        const { logo, logoAnim } = config;

        // Remove all logo animation classes
        elements.logo.classList.remove('logo--shake', 'logo--rotate', 'logo--tilt', 'logo--all');

        // Apply logo animation if not static
        if (logo !== 'static') {
            if (logoAnim === 'all') {
                elements.logo.classList.add('logo--all');
            } else if (logoAnim === 'shake') {
                elements.logo.classList.add('logo--shake');
            } else if (logoAnim === 'rotate') {
                elements.logo.classList.add('logo--rotate');
            } else if (logoAnim === 'tilt') {
                elements.logo.classList.add('logo--tilt');
            }
        }
    }

    // ===== Logo Element Animation Configuration =====
    function configureElementAnimation(config) {
        const { logo, elementAnim } = config;

        // Remove all element animation classes
        const removeClasses = (element) => {
            if (!element) return;
            element.classList.remove(
                'logo-element--neon',
                'logo-element--pulse',
                'logo-element--all',
                'logo-element-l--color',
                'logo-element-s--color',
                'logo-element-l--explosion',
                'logo-element-s--explosion',
                'logo-element-l--all',
                'logo-element-s--all'
            );
        };

        removeClasses(elements.logoL);
        removeClasses(elements.logoS);

        // Remove path-specific classes
        if (elements.sPath1) {
            elements.sPath1.classList.remove('s-path-1--fly');
        }
        if (elements.sPath2) {
            elements.sPath2.classList.remove('s-path-2--fly');
        }

        // Apply element animations if logo is animated or full
        if (logo === 'animated' || logo === 'full') {
            switch (elementAnim) {
                case 'neon':
                    elements.logoL?.classList.add('logo-element--neon');
                    elements.logoS?.classList.add('logo-element--neon');
                    break;

                case 'color':
                    elements.logoL?.classList.add('logo-element-l--color');
                    elements.logoS?.classList.add('logo-element-s--color');
                    break;

                case 'explosion':
                    elements.logoL?.classList.add('logo-element-l--explosion');
                    elements.logoS?.classList.add('logo-element-s--explosion');
                    break;

                case 'fly':
                    elements.sPath1?.classList.add('s-path-1--fly');
                    elements.sPath2?.classList.add('s-path-2--fly');
                    elements.logoL?.classList.add('logo-element--pulse');
                    break;

                case 'all':
                    elements.logoL?.classList.add('logo-element-l--all');
                    elements.logoS?.classList.add('logo-element-s--all');
                    break;

                default:
                    // Default to neon if unknown
                    elements.logoL?.classList.add('logo-element--neon');
                    elements.logoS?.classList.add('logo-element--neon');
            }
        }
    }

    // ===== Speed Configuration =====
    function configureSpeed(speed) {
        // Update CSS custom property for speed multiplier
        document.documentElement.style.setProperty('--speed-multiplier', speed);
    }

    // ===== Apply All Configurations =====
    function applyConfiguration(config, showNotification = false) {
        console.log('Applying configuration:', config);

        configureBackground(config);
        configureLogoAnimation(config);
        configureElementAnimation(config);
        configureSpeed(config.speed);

        // Show notification if requested (for keyboard controls)
        if (showNotification) {
            const messages = [];

            if (config.bg === 'static') {
                messages.push(`Background: Static ${config.gradient}`);
            } else {
                messages.push(`Background: Animated ${config.gradient}`);
            }

            if (config.logo === 'static') {
                messages.push('Logo: Static');
            } else if (config.logo === 'animated') {
                messages.push(`Logo: Elements (${config.elementAnim})`);
            } else {
                messages.push(`Logo: Full (${config.logoAnim} + ${config.elementAnim})`);
            }

            messages.push(`Speed: ${config.speed}x`);

            showToast('Configuration Updated', messages.join(' • '));
        }
    }

    // ===== Performance Optimization =====
    function optimizePerformance() {
        // Add will-change hint for animated elements
        if (elements.background.classList.contains('background--animated')) {
            elements.background.style.willChange = 'background-position, filter';
        }

        if (elements.logo.classList.length > 1) {
            elements.logo.style.willChange = 'transform';
        }
    }

    // ===== Keyboard Controls =====
    function setupKeyboardControls() {
        let currentConfig = getURLParams();

        document.addEventListener('keydown', (e) => {
            switch(e.key.toLowerCase()) {
                case 'b':
                    // Toggle background animation
                    currentConfig.bg = currentConfig.bg === 'animated' ? 'static' : 'animated';
                    break;
                case 'g':
                    // Cycle gradient types
                    const gradients = ['linear', 'radial', 'conic'];
                    const currentIndex = gradients.indexOf(currentConfig.gradient);
                    currentConfig.gradient = gradients[(currentIndex + 1) % gradients.length];
                    break;
                case 'l':
                    // Cycle logo animations
                    const logoStates = ['static', 'animated', 'full'];
                    const logoIndex = logoStates.indexOf(currentConfig.logo);
                    currentConfig.logo = logoStates[(logoIndex + 1) % logoStates.length];
                    break;
                case 'a':
                    // Cycle logo body animations
                    const logoAnims = ['shake', 'rotate', 'tilt', 'all'];
                    const animIndex = logoAnims.indexOf(currentConfig.logoAnim);
                    currentConfig.logoAnim = logoAnims[(animIndex + 1) % logoAnims.length];
                    break;
                case 'e':
                    // Cycle element animations
                    const elemAnims = ['neon', 'color', 'explosion', 'fly', 'all'];
                    const elemIndex = elemAnims.indexOf(currentConfig.elementAnim);
                    currentConfig.elementAnim = elemAnims[(elemIndex + 1) % elemAnims.length];
                    break;
                case '+':
                case '=':
                    // Increase speed
                    currentConfig.speed = Math.min(5, currentConfig.speed + 0.25);
                    break;
                case '-':
                case '_':
                    // Decrease speed
                    currentConfig.speed = Math.max(0.1, currentConfig.speed - 0.25);
                    break;
                case '0':
                    // Reset speed to 1x
                    currentConfig.speed = 1;
                    break;
                case 'r':
                    // Reset to defaults
                    currentConfig = { ...DEFAULT_CONFIG };
                    break;
                case 'h':
                case '?':
                case '/':
                    // Toggle help
                    toggleHelp();
                    return;
                default:
                    return;
            }

            applyConfiguration(currentConfig, true); // Show toast notification
            updateURL(currentConfig);
        });
    }

    // ===== Update URL without reload =====
    function updateURL(config) {
        const params = new URLSearchParams();
        Object.keys(config).forEach(key => {
            if (config[key] !== DEFAULT_CONFIG[key]) {
                params.set(key, config[key]);
            }
        });

        const newURL = params.toString()
            ? `${window.location.pathname}?${params.toString()}`
            : window.location.pathname;

        window.history.replaceState({}, '', newURL);
    }


    // ===== Check Browser Support =====
    function checkBrowserSupport() {
        // Check for CSS animation support
        const testElement = document.createElement('div');
        const hasAnimationSupport = 'animation' in testElement.style ||
                                   'webkitAnimation' in testElement.style;

        if (!hasAnimationSupport) {
            console.warn('CSS animations are not supported in this browser');
        }

        return hasAnimationSupport;
    }

    // ===== Initialization =====
    function init() {
        console.log('Shadoll Animated Placeholder - Initializing...');

        // Check browser support
        const isSupported = checkBrowserSupport();

        if (!isSupported) {
            console.warn('Some features may not work correctly');
        }

        // Get configuration from URL
        const config = getURLParams();

        // Apply configuration
        applyConfiguration(config);

        // Optimize performance
        optimizePerformance();

        // Setup keyboard controls
        setupKeyboardControls();

        // Setup help system
        setupHelpSystem();

        console.log('Initialization complete. Press H for help.');
    }

    // ===== Start when DOM is ready =====
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // ===== Expose config updater for external use =====
    window.ShadollConfig = {
        update: applyConfiguration,
        getCurrent: getURLParams,
        getDefaults: () => ({ ...DEFAULT_CONFIG })
    };

})();
