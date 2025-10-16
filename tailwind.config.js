/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
        },
      colors: {
        dark: {
          primary: '#111111',     // Main background
          secondary: '#1a1a1a',  // Slightly lighter background
          accent: '#8B5CF6',     // Purple accent color
          text: '#F3F4F6',       // Light text
          muted: '#9CA3AF',      // Subdued text
          highlight: '#10B981',  // Highlight color
          border: '#333333',     // Border color
          card: '#1E1E1E',       // Card background
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slideIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'circle-move-1': 'circleMove1 30s linear infinite',
        'circle-move-2': 'circleMove2 40s linear infinite', 
        'circle-move-3': 'circleMove3 25s linear infinite',
        'circle-move-4': 'circleMove4 20s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.85 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideIn: {
          from: { transform: 'translateY(50px)', opacity: 0 },
          to: { transform: 'translateY(0)', opacity: 1 },
        },
        slideInLeft: {
          from: { transform: 'translateX(-50px)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          from: { transform: 'translateX(50px)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
        zoomIn: {
          from: { transform: 'scale(0.95)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)' },
          '50%': { boxShadow: '0 0 15px rgba(139, 92, 246, 0.8)' },
        },
        // Circle movement animations
        circleMove1: {
          '0%': { top: '5%', left: '10%', opacity: 0.8 },
          '25%': { top: '20%', left: '60%', opacity: 0.4 },
          '50%': { top: '80%', left: '70%', opacity: 0.7 },
          '75%': { top: '60%', left: '20%', opacity: 0.5 },
          '100%': { top: '5%', left: '10%', opacity: 0.8 },
        },
        circleMove2: {
          '0%': { bottom: '10%', right: '10%', opacity: 0.7 },
          '25%': { bottom: '40%', right: '30%', opacity: 0.5 },
          '50%': { bottom: '20%', right: '70%', opacity: 0.3 },
          '75%': { bottom: '70%', right: '50%', opacity: 0.6 },
          '100%': { bottom: '10%', right: '10%', opacity: 0.7 },
        },
        circleMove3: {
          '0%': { top: '15%', right: '25%', opacity: 0.6 },
          '33%': { top: '45%', right: '15%', opacity: 0.3 },
          '66%': { top: '75%', right: '45%', opacity: 0.4 },
          '100%': { top: '15%', right: '25%', opacity: 0.6 },
        },
        circleMove4: {
          '0%': { top: '85%', left: '75%', opacity: 0.5 },
          '50%': { top: '35%', left: '25%', opacity: 0.4 },
          '100%': { top: '85%', left: '75%', opacity: 0.5 },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}