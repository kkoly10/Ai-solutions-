/**
 * Crecy AI — Design System Tokens (Tailwind v3 / v4-compatible theme.extend)
 *
 * Theme: Trustworthy & professional · Warm-neutral canvas + one bold accent (emerald)
 *        · Light, spacious, rounded.
 *
 * Usage: merge `theme.extend` into the app's tailwind.config. The same tokens are
 * mirrored as CSS variables in design/tokens.css for the embeddable widget (which
 * runs in a shadow root and does not load Tailwind).
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm-neutral canvas ("sand") — the foundation. Warm-tinted, never cold gray.
        sand: {
          50:  '#FAF8F4', // app canvas / page background
          100: '#F4F1EA', // muted surface, hover fill
          200: '#ECE7DD', // subtle border / divider
          300: '#DED7C9', // border
          400: '#C3BAAA', // disabled / placeholder
          500: '#9C9180', // subtle text
          600: '#6F665A', // muted text
          700: '#4A4339', // body text
          800: '#2E2922', // strong text
          900: '#1B1813', // headings / warm near-black
        },
        // Bold accent ("brand") — emerald. Primary actions + success/lead-captured.
        brand: {
          50:  '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981', // focus ring
          600: '#059669', // primary button, links-on-light
          700: '#047857', // hover / active
          800: '#065F46',
          900: '#064E3B', // text on brand-tinted surfaces
        },
        // Semantic — kept minimal so the one accent stays dominant.
        warning: { 50: '#FFFBEB', 100: '#FEF3C7', 500: '#F59E0B', 600: '#D97706', 700: '#B45309' },
        danger:  { 50: '#FEF2F2', 100: '#FEE2E2', 500: '#EF4444', 600: '#DC2626', 700: '#B91C1C' },
        // Surfaces
        canvas:  '#FAF8F4',
        surface: '#FFFFFF',
      },
      fontFamily: {
        // Marketing headlines — warm optical serif for personality/trust.
        display: ['Fraunces', 'Georgia', 'serif'],
        // App UI + body — humanist sans.
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        sm: '8px',
        DEFAULT: '12px', // default control radius (rounded feel)
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px', // cards, chat bubbles
        full: '9999px', // pills, widget launcher, avatars
      },
      boxShadow: {
        // Warm-tinted, soft, low-contrast (uses warm near-black 28,24,19 not pure black).
        xs: '0 1px 2px rgba(28,24,19,0.05)',
        sm: '0 2px 8px rgba(28,24,19,0.06)',
        md: '0 6px 20px rgba(28,24,19,0.08)',
        lg: '0 16px 40px rgba(28,24,19,0.10)',
        widget: '0 12px 48px rgba(28,24,19,0.18)', // floating widget panel
      },
      ringColor: { DEFAULT: '#10B981' },
      ringOffsetColor: { DEFAULT: '#FAF8F4' },
      maxWidth: { content: '72rem' }, // spacious page container
    },
  },
  plugins: [],
};
