# Design Tokens Reference

Quick reference for Executive Dark Mode implementation.

## Colors (HSL for Tailwind)

### Backgrounds

```
--background:           0 0% 2%         /* #050505 deep black */
--background-secondary: 215 19% 7%      /* #0D1117 contrast */
```

### Accent

```
--primary:              160 84% 39%     /* #10B981 emerald */
--primary-foreground:   0 0% 100%       /* white */
```

### Text

```
--foreground:           0 0% 100%       /* white */
--foreground-secondary: 0 0% 100% / 0.7 /* white/70 */
--foreground-muted:     0 0% 100% / 0.5 /* white/50 */
```

### Borders & Surfaces

```
--border:               0 0% 100% / 0.1 /* white/10 */
--card:                 0 0% 100% / 0.05 /* white/5 */
--card-hover:           0 0% 100% / 0.08 /* white/8 */
```

## Typography

### Font Families

```css
--font-inter: 'Inter', system-ui, sans-serif;
--font-mono: 'Geist Mono', monospace;
```

### Heading Scale

```
H1: text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight
H2: text-3xl md:text-4xl font-semibold tracking-tight
H3: text-xl md:text-2xl font-medium
H4: text-lg font-medium
```

### Body Text

```
Lead:   text-xl text-white/70
Body:   text-base text-white/70
Small:  text-sm text-white/50
```

### Mono Labels

```
Label: font-mono text-xs uppercase tracking-widest text-white/50
Tag:   font-mono text-xs uppercase tracking-wider text-emerald-500
```

## Spacing

### Section Padding

```
Default: py-20 md:py-28
Compact: py-12 md:py-16
Hero:    pt-32 md:pt-40 pb-20 md:pb-28
```

### Container

```
Default: max-w-3xl
Wide:    max-w-5xl
Full:    max-w-7xl
```

## Components

### Glass Card

```css
bg-white/5
backdrop-blur-xl
border border-white/10
rounded-xl          /* 12px */
p-6 md:p-8
```

### Glass Card (Elevated)

```css
bg-white/[0.08]
backdrop-blur-xl
border border-white/[0.15]
rounded-xl
shadow-[0_8px_32px_rgba(0,0,0,0.3)]
```

### Primary Button

```css
bg-emerald-500
hover:bg-emerald-600
text-white
font-medium
px-6 py-3
rounded-lg
transition-colors
```

### Secondary Button (Ghost)

```css
bg-transparent
border border-white/20
hover:bg-white/5
hover:border-white/30
text-white
font-medium
px-6 py-3
rounded-lg
transition-colors
```

### Section Label

```css
font-mono
text-xs
uppercase
tracking-[0.2em]
text-white/40
mb-4
```

## Layout Patterns

### Two Column Split

```jsx
<div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
  <div>{/* Left content */}</div>
  <div>{/* Right content */}</div>
</div>
```

### Two Column 60-40

```jsx
<div className="grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-16 items-start">
  <div>{/* Larger left */}</div>
  <div>{/* Smaller right */}</div>
</div>
```

### Three Column Grid

```jsx
<div className="grid md:grid-cols-3 gap-6">
  {items.map((item) => (
    <GlassCard>{item}</GlassCard>
  ))}
</div>
```

### Asymmetric Featured

```jsx
<div className="grid md:grid-cols-[2fr_1fr] gap-6">
  <div className="md:row-span-2">{/* Featured large */}</div>
  <div>{/* Small 1 */}</div>
  <div>{/* Small 2 */}</div>
</div>
```

## Transitions

### Entrance Animation (Framer Motion)

```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
```

### Stagger Children

```jsx
transition={{ staggerChildren: 0.1 }}
```

## Icon Style

- Lucide React icons
- `strokeWidth={1.5}` for elegance
- Size: `w-5 h-5` default, `w-6 h-6` for emphasis
- Color: `text-emerald-500` for accent, `text-white/50` for muted

## Tailwind Class Reference

### Common Utilities

```
bg-[#050505]         /* primary bg */
bg-[#0D1117]         /* contrast bg */
bg-emerald-500       /* accent */
text-white           /* primary text */
text-white/70        /* secondary text */
text-white/50        /* muted text */
border-white/10      /* borders */
backdrop-blur-xl     /* glass effect */
rounded-xl           /* 12px radius */
tracking-tight       /* headings */
tracking-[0.2em]     /* mono labels */
```
