# Brand Guidelines - CSD Website

This document outlines the visual identity and design standards for the LeorMedia Website. Adhering to these guidelines ensures consistency across all pages and components.

## 1. Colors

### Brand Colors
The color palette represents Energy (Primary) and Stability (Secondary).

| Category | Role | Hex Value | Preview |
| :--- | :--- | :--- | :--- |
| **Primary** | Main Action / Accent | `#FFB624` | ![#FFB624](https://via.placeholder.com/15/FFB624?text=+) |
| **Primary 100** | Secondary Accent | `#f37a20` | ![#f37a20](https://via.placeholder.com/15/f37a20?text=+) |
| **Secondary** | Neutral Base | `#E8D9C0` | ![#E8D9C0](https://via.placeholder.com/15/E8D9C0?text=+) |
| **Secondary 100**| Lighter Neutral | `#F4EEE2` | ![#F4EEE2](https://via.placeholder.com/15/F4EEE2?text=+) |
| **Secondary 200**| Darker Neutral | `#CBBCA1` | ![#CBBCA1](https://via.placeholder.com/15/CBBCA1?text=+) |

### Backgrounds
- **Primary Page Background**: White (`#FFFFFF`)
- Default text color on white backgrounds should maintain high contrast for readability.

---

## 2. Typography

### Font Family
- **Main Font**: `TuskerGrotesk` (Sans-serif)
  - Used for headings and branding.
  - Fallback: `sans-serif`.

### Standardized Font Sizes
Use the following font sizes to maintain a consistent visual hierarchy:

| Size (px) | Application (Suggested) |
| :--- | :--- |
| **12px** | Captions / Metadata |
| **14px** | Small Body Text |
| **16px** | Standard Body Text |
| **18px** | Large Body Text |
| **22px** | Sub-headings / Large Lead |
| **24px** | Section Headings |
| **28px** | Major Headings |
| **32px** | Feature Headings |
| **34px** | Hero Sub-titles |
| **36px** | Hero Titles / XL Display |

---

## 3. UI Components

### Buttons
Buttons follow a rounded-full design with smooth transitions (`0.3s ease`).

#### .button1 (Primary)
- **Background**: `#FFB624`
- **Text**: `#000000`
- **Hover**: Scale `1.05`, slight shadow.

#### .button1black (Dark Theme)
- **Background**: `#000000`
- **Text**: `#FFB624`
- **Hover**: Background White, Text Black, Scale `1.05`.

#### .button2 (Outline)
- **Border**: `#FFB624`
- **Text**: `#FFB624`
- **Hover**: Background White, Text Black, Scale `1.05`.

---

## 4. Layout & Section Structures

### Process Section
The standard Process Section (`HOW WE WORK` / `Our Process`) should follow this exact structure to maintain a unified premium aesthetic:

**Container Requirements:**
- **Background & Padding**: `bg-white py-24 px-4 overflow-hidden`
- **Max Width Wrapper**: `max-w-7xl mx-auto`

**Section Header:**
- **Eyebrow Text (Subtitle)**: `text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block`
- **Main Title**: `text-3xl md:text-5xl font-bold mb-6 text-gray-900`

**Background Step Numbers (Watermark Effect):**
- **Container**: `absolute top-1/2 left-0 w-full flex justify-between px-10 -translate-y-1/2 hidden lg:flex z-0`
- **Typography**: `opacity-5 select-none text-[150px] font-bold font-TuskerGrotesk`

**Step Cards Grid:**
- **Grid Layout**: `grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10` (Adjust columns based on the number of steps)
- **Card Wrapper**: `flex flex-col items-center text-center group`
- **Icon Container**: `w-20 h-20 rounded-full bg-white border-4 border-gray-50 shadow-lg flex items-center justify-center text-3xl text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110`
- **Step Title**: `text-xl font-bold mb-3 text-gray-900 uppercase tracking-wide`
- **Step Description**: `text-gray-600 text-sm leading-relaxed`
