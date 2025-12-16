Visual Design Principles:
- High contrast for visibility in bright sunlight (common in rural areas)
- Large touch targets (minimum 44px) for easy tapping
- Clear visual hierarchy with bold headings
- Generous spacing to reduce cognitive load
- Familiar patterns from popular apps (WhatsApp, YouTube) for easier adoption

---

### Color System (OKLCH)

Understanding OKLCH:
OKLCH is a perceptual color space that ensures colors look consistent across devices and lighting conditions - crucial for rural areas with varying screen qualities and bright outdoor lighting.
- L (Lightness): 0-100% (0 = black, 100 = white)
- C (Chroma): 0-0.4 (0 = grayscale, higher = more vibrant)
- H (Hue): 0-360 degrees (color wheel position)

---

#### Primary Brand Color - Saffron Orange

Color Value: oklch(68% 0.19 50)
Text on Primary: oklch(100% 0 0) - White

Rationale: Warm saffron orange represents optimism, energy, and cultural connection (reminiscent of Punjab's vibrant culture and Indian flag). The color stands out on low-quality screens and remains visible in bright sunlight.

- Usage: Primary CTAs ("Start Learning", "Submit Quiz"), important buttons, progress indicators, active states, brand moments
- Meaning: Energy, enthusiasm for learning, achievement, forward progress
- Accessibility: Contrast ratio with base-100: 4.8:1 (WCAG AA compliant)

Color Variations:
- Lighter hover: oklch(75% 0.17 50) - Hover states, backgrounds
- Darker active: oklch(58% 0.21 50) - Active/pressed states, emphasis
- Pale background: oklch(95% 0.05 50) - Subtle section backgrounds

---

#### Secondary Brand Color - Peaceful Green

Color Value: oklch(60% 0.15 140)
Text on Secondary: oklch(100% 0 0) - White

Rationale: Calm green represents growth, nature (agricultural roots), and success. Creates balance with energetic orange.

- Usage: Secondary actions ("Save Progress", "View More"), success states, completed lessons, supportive UI elements
- Meaning: Growth, learning progress, agricultural heritage, calmness
- Accessibility: Contrast ratio with base-100: 4.6:1 (WCAG AA compliant)

Color Variations:
- Lighter: oklch(72% 0.13 140) - Hover, light backgrounds
- Darker: oklch(48% 0.17 140) - Active states

---

#### Accent Color - Royal Blue

Color Value: oklch(58% 0.18 250)
Text on Accent: oklch(100% 0 0) - White

Rationale: Strong blue for highlights and important information. Represents knowledge, trust, and digital technology.

- Usage: Badges, achievements, notifications, special features, links, information highlights
- Meaning: Knowledge, trust, digital learning, achievement milestones
- Accessibility: Contrast ratio with base-100: 5.2:1 (WCAG AA compliant)

---

#### Neutral Colors

Neutral Base: oklch(35% 0.02 250)
Neutral Content: oklch(95% 0.01 250)

Rationale: Dark neutral for text and borders. Slightly cool-toned to complement warm primary color.

- Usage: Primary text, icons, borders, subtle UI elements, dividers
- Meaning: Foundation for readable, accessible interface

---

#### Base Colors (Backgrounds & Surfaces)

Base-100 (Main Background): oklch(98% 0.005 80) - Warm white
Base-200 (Card/Panel Background): oklch(94% 0.01 80) - Light gray
Base-300 (Borders/Dividers): oklch(88% 0.015 80) - Medium gray
Base-Content (Primary Text): oklch(25% 0.015 250) - Dark text

Rationale: Slightly warm base colors reduce eye strain and create welcoming atmosphere. High lightness values ensure readability in bright sunlight.

Light Theme Characteristics:
- Warm white background reduces harshness on eyes
- Sufficient contrast for outdoor visibility
- Gentle shadows for depth perception

---

#### Semantic Colors

Info:
- Color: oklch(60% 0.16 240)
- Text: oklch(100% 0 0)
- Usage: Info messages, help tooltips, instructions, lesson details
- Meaning: Educational information, guidance

Success:
- Color: oklch(65% 0.17