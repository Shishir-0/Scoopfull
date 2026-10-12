# Scoopful Editorial Premium — Design System Specification
**Brand:** Scoopful (Scoops N Swirls Ice Cream LLP, Bengaluru)  
**System Name:** Scoopful Editorial Premium  
**Version:** 1.0.0  

---

## 1. Visual Direction & Philosophy
Scoopful is an artisanal, small-batch ice cream brand based in Bengaluru. The aesthetic direction — **Scoopful Editorial Premium** — is inspired by luxury European and artisanal Japanese food and hospitality editorials.

Key tenets:
1. **Warmth & Authenticity Over Clinical Minimalism:** We use warm vanilla backgrounds (`#FFFBF3`) instead of cold sterile whites, paired with rich organic plum (`#3E2350`) and soft cocoa (`#3B2418`).
2. **Editorial Typography:** Dramatic, expressive serif typography (`Fraunces`) for hero headlines and section anchors, supported by ultra-legible modern sans (`Work Sans`) for dense product descriptions and data points.
3. **Restrained, Purposeful Color Accents:** Artisanal gold (`#FFB800`) is reserved for high-intent conversion actions (e.g., ordering and submitting qualified inquiries). Lilac and mauve provide gentle category and status accents without visual clutter.
4. **Authentic Imagery First:** Every product photo, outlet shot, and kitchen scene is authentic Scoopful photography. Zero synthetic AI placeholders or generic stock photography.
5. **No Decorative Clutter:** No floating gradient blobs, no artificial glassmorphism, no generic card repetition, and zero emoji characters in UI elements.

---

## 2. Design Tokens

### 2.1 Color Tokens
```css
:root {
  /* Brand Core */
  --color-plum: #3E2350;        /* Primary deep plum: headings, brand marks, primary buttons */
  --color-mauve: #7A4E8C;       /* Secondary mauve: link accents, active indicators */
  --color-lavender: #C9A0DC;    /* Gentle lavender: focus rings, light highlights */
  --color-lilac: #F4ECF8;       /* Subtle lilac: chip backgrounds, hover states */
  --color-vanilla: #FFFBF3;     /* Warm vanilla: page canvas */
  --color-paper: #FFFFFF;       /* Pure paper: card surfaces, modal sheets */
  
  /* Text & Inks */
  --color-cocoa: #3B2418;       /* Rich cocoa: primary body text */
  --color-soft: #54434E;        /* Soft slate: secondary text (5.4:1 contrast on vanilla) */
  --color-muted: #7E6B78;       /* Muted caption text */
  
  /* Conversion & Accents */
  --color-gold: #FFB800;        /* Artisanal gold: primary consumer CTA button */
  --color-gold-hover: #F2AE00;  /* Gold hover state */
  --color-gold-ink: #7A5600;    /* Contrast ink on gold accents */
  --color-cream: #FFF4D6;       /* Warm cream: subtle callout badges */
  
  /* Structural & Functional */
  --color-line: #E5DAEA;        /* Subtle hairline borders */
  --color-line-dark: #C8B9D0;   /* Stronger divider rules */
  --color-success: #1E7E4E;     /* Verified / qualified lead green */
  --color-success-bg: #E8F5EE;  /* Success banner background */
  --color-warning: #C07512;     /* Pending / review status amber */
  --color-warning-bg: #FFF5E6;  /* Warning banner background */
  --color-danger: #BD2B2B;      /* Error alert crimson */
  --color-danger-bg: #FDE8E8;   /* Error badge background */
}
```

### 2.2 Typography Scale
- **Display Family:** `'Fraunces', Georgia, serif` (Google Fonts: opsz 9..144, weights 500, 600, 700)
- **Body Family:** `'Work Sans', system-ui, -apple-system, sans-serif` (Google Fonts: weights 400, 500, 600)

| Token | Size | Line Height | Weight | Font | Usage |
|---|---|---|---|---|---|
| `--font-display-hero` | `clamp(2.5rem, 5.5vw, 4.25rem)` | `1.1` | `700` | Fraunces | Main Hero Headline |
| `--font-display-h1` | `clamp(2.0rem, 4vw, 3.0rem)` | `1.15` | `600` | Fraunces | Page Titles (`/franchise`, `/partners`) |
| `--font-display-h2` | `clamp(1.65rem, 3vw, 2.25rem)` | `1.2` | `600` | Fraunces | Major Section Headings |
| `--font-display-h3` | `1.375rem (22px)` | `1.3` | `600` | Fraunces | Card Titles, Flavour Titles |
| `--font-display-h4` | `1.125rem (18px)` | `1.35` | `600` | Fraunces | Sub-item Titles |
| `--font-body-lead` | `1.1875rem (19px)` | `1.55` | `400` | Work Sans | Section Introductions / Lede |
| `--font-body-base` | `1.0625rem (17px)` | `1.6` | `400` | Work Sans | Standard Paragraphs |
| `--font-body-sm` | `0.9375rem (15px)` | `1.5` | `400/500` | Work Sans | Secondary Details, Table Cells |
| `--font-caption` | `0.8125rem (13px)` | `1.4` | `500` | Work Sans | Badges, Micro-labels, Disclaimers |

### 2.3 Spacing Scale
- `--space-2xs`: `4px`
- `--space-xs`: `8px`
- `--space-sm`: `12px`
- `--space-md`: `16px`
- `--space-lg`: `24px`
- `--space-xl`: `32px`
- `--space-2xl`: `48px`
- `--space-3xl`: `64px`
- `--space-4xl`: `96px`

### 2.4 Layout & Containers
- `--max-width-content`: `1180px`
- `--max-width-editorial`: `780px`
- `--max-width-wide`: `1340px`
- `--container-padding`: `clamp(1rem, 4vw, 2rem)`

### 2.5 Radii System
- `--radius-full`: `9999px` (Primary interactive pill buttons, active chips)
- `--radius-lg`: `16px` (Product cards, interactive panels)
- `--radius-md`: `10px` (Input fields, dropdowns, table cards)
- `--radius-sm`: `6px` (Micro tags, inline badges)

### 2.6 Shadows & Depth
- `--shadow-sm`: `0 2px 4px rgba(62, 35, 80, 0.04)`
- `--shadow-md`: `0 6px 18px rgba(62, 35, 80, 0.07)`
- `--shadow-lg`: `0 14px 34px rgba(62, 35, 80, 0.11)`

---

## 3. Core Component Conventions

### 3.1 Buttons
- **`.btn-gold`**: Primary action (High conversion intent). Background: `--color-gold`, Text: `--color-plum`. Hover: smooth subtle lift + color warm.
- **`.btn-plum`**: Corporate / Brand action. Background: `--color-plum`, Text: `#FFFFFF`. Hover: slight lighten.
- **`.btn-outline`**: Secondary discovery. Border: `1.5px solid var(--color-plum)`, Text: `--color-plum`. Hover: fill with `--color-lilac`.
- **`.btn-ghost`**: Subtle text link with icon. Padding: `8px 12px`, no border.

### 3.2 Form Controls
- **Input / Select:** Background `#FFFFFF`, Border `1.5px solid var(--color-line)`, Text `--color-cocoa`.
- **Focus:** Outline `3px solid var(--color-lavender)` with `outline-offset: 2px`.
- **Error state:** Border `1.5px solid var(--color-danger)`, descriptive helper text in red with role="alert".

### 3.3 Cards & Lists
- Never uniform white boxes with identical drop shadows.
- Flavour cards highlight the scoop photography with deliberate aspect ratios (`4:5`), subtle hover zoom (`scale(1.02)`), ingredient tag chips, and direct WhatsApp / Swiggy actions.
- Franchise cards use editorial column alignments with bold typography facts (`--font-display-h3`) and side-by-side metric tables.
