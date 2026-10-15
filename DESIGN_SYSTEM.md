# 🎨 Design System — Uosef Talaat Engineering & QC Portfolio

> Adapted from the architectural literary editorial design system of `Uosef_talaat_books`, elevated with Apple Fluid Interface Principles and Impeccable Craft standards.

---

## 1. Palette & Surface Architecture

### Primary Palette (Warm Paper & Sumi Ink)

```css
:root {
  /* Warm Architectural Paper Surfaces */
  --color-bg:             #F5F1EB;   /* Warm Japanese paper — primary page ground */
  --color-bg-alt:         #EBE5DC;   /* Muted paper alt ground */
  --color-surface:        #FFFFFF;   /* Crisp white card surface */
  --color-surface-hover:  #FAF7F2;   /* Subtle surface hover tint */
  --color-border:         #DDD8CF;   /* Architectural stone border */
  --color-border-subtle:  #E8E3DA;   /* Soft hairline divider */

  /* Deep Midnight Gallery Sections (High Contrast) */
  --color-dark:           #121417;   /* Sumi ink midnight ground */
  --color-dark-surface:   #1C1E24;   /* Midnight gallery card surface */
  --color-dark-border:    #2D3139;   /* Midnight border */
  --color-dark-text:      #F5F1EB;   /* High-contrast paper white on dark */
  --color-dark-muted:     #A39D93;   /* Muted metadata on dark */

  /* Inks & Text (AAA Contrast Certified) */
  --color-text:           #1C1A17;   /* Deep warm sumi ink — primary headings & body */
  --color-text-secondary: #4A453E;   /* Secondary descriptive text */
  --color-text-muted:     #7A7367;   /* Muted metadata, captions */
  --color-text-faint:     #B5AFA5;   /* Faint borders & timestamps */

  /* Accents & Signatures */
  --color-accent:         #C0392B;   /* Deep cinnabar lacquer vermilion */
  --color-accent-hover:   #9E2B1F;   /* Dark lacquer on hover */
  --color-accent-dim:     rgba(192, 57, 43, 0.08); /* Soft lacquer wash */
  --color-gold:           #855C00;   /* Antique brass / warm gold for credentials */
  --color-gold-faint:     #F8F4EA;   /* Warm gold surface tint */

  /* Translucent Materials & Shadows */
  --glass-bg:             rgba(245, 241, 235, 0.88);
  --glass-bg-scrolled:    rgba(245, 241, 235, 0.96);
  --shadow-card:          0 4px 20px rgba(28, 26, 23, 0.06);
  --shadow-lift:          0 12px 32px rgba(28, 26, 23, 0.12);
}
```

---

## 2. Typography & Editorial Hierarchy

### Google Fonts
- **Display Headlines**: `Reem Kufi` & `Playfair Display` / `Amiri`
- **Editorial Subtitles & Quotes**: `Amiri`, `Georgia`, serif
- **Body & UI**: `Tajawal`, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Data & Metrics**: `JetBrains Mono`, monospace

---

## 3. Apple Fluid Motion & Tactility

1. **Immediate Pointer-Down Response**: All interactive elements use `touch-action: manipulation` and immediate tactile compression (`whileTap={{ scale: 0.975 }}`).
2. **Spring Physics**: Critically damped springs (`damping: 26, stiffness: 260`) for navigation pills, card hover elevation, and interactive modals.
3. **Interruptible Transitions**: Modal dialogues and segmented filter controls smoothly hand off motion without locking input.
4. **Translucent Materials**: Floating header with `backdrop-filter: blur(16px)` and a subtle light-catching hairline edge (`1px solid var(--color-border)`).
5. **Accessibility**: Strict obedience to `prefers-reduced-motion: reduce` and `prefers-reduced-transparency: reduce`.
