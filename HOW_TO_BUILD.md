# How to Build Efeosa's 3D Portfolio

This documentation provides step-by-step instructions to build, run, and update the "Map-Based" portfolio for Efeosa Aizesogie.

## 1. Prerequisites

Before starting, ensure you have the following installed:
*   **Node.js** (v18 or higher recommended)
*   **npm** or **yarn**

## 2. Project Initialization

Open your terminal and create a new project using Vite (a fast build tool).

```bash
# Create project
npm create vite@latest efeosa-portfolio -- --template react-ts

# Navigate into directory
cd efeosa-portfolio

# Install dependencies
npm install
```

## 3. Installing Specific Libraries

We need specific libraries for the 3D globe, icons, and animations.

```bash
# Install required packages
npm install react-globe.gl three lucide-react framer-motion
```
*   `react-globe.gl`: The library used to create the interactive globe.
*   `three`: The 3D engine powering the globe.
*   `lucide-react`: For the UI icons.

## 4. Setting up Tailwind CSS

Tailwind is used for styling. Initialize it in your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Edit `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Space Grotesk', 'sans-serif'],
        }
    },
  },
  plugins: [],
}
```

Add the font import to `index.html` (inside `<head>`):
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Add Tailwind directives to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: black;
  color: white;
}
```

## 5. Adding the Code

Copy the file contents provided in the code generation output into your `src/` folder.

1.  **`types.ts`**: Create this file in `src/`.
2.  **`data.ts`**: Create this file in `src/`. This contains your CV data and Projects.
3.  **`components/`**: Create this folder.
    *   Create `GlobeViz.tsx`
    *   Create `InfoPanel.tsx`
    *   Create `Overlay.tsx`
4.  **`App.tsx`**: Overwrite the existing `App.tsx`.
5.  **`main.tsx` (or `index.tsx`)**: Ensure it mounts the App correctly.

## 6. Running the Application

```bash
npm run dev
```
Open the local host link (usually `http://localhost:5173`) in your browser. You should see the 3D globe.

## 7. How to Update Content

The portfolio is data-driven. You do not need to touch the complex 3D code to update your text.

### Updating About Me (Persona)
1.  Open `src/data.ts`.
2.  Locate the `PROFILE` object at the top.
3.  Edit the `about` array to refine your "Category of One" story.

### Updating Work Experience & Projects
1.  Open `src/data.ts`.
2.  Locate the `MILESTONES` array.
3.  Add or Edit an object.

**Example Project Entry:**
```typescript
{
  id: 'my-cool-project',
  lat: 35.0, // Arbitrary lat for project island
  lng: -40.0, // Arbitrary lng for project island
  label: 'My Cool Project',
  role: 'Creator',
  company: 'Project',
  period: '2025',
  location: 'The Digital Ocean', // Display location
  description: [
    'Description line 1.',
    'Description line 2.'
  ],
  techStack: ['React', 'Node.js'],
  type: 'project',
  repoUrl: 'https://github.com/...', // Optional
  liveUrl: 'https://myproject.com'    // Optional
}
```

### Updating Skills
1.  Open `src/data.ts`.
2.  Edit the `SKILLS` array at the bottom of the file.

## 8. Deployment

To publish this live (e.g., on Vercel or Netlify):

1.  Push your code to GitHub.
2.  Go to Vercel.com -> "Add New Project".
3.  Import your repository.
4.  Framework Preset: **Vite**.
5.  Click **Deploy**.

## 9. Troubleshooting

**The Globe is black?**
Ensure your internet connection is active. The globe texture maps (`globeImageUrl`) are loaded from a CDN (`unpkg.com`). If you are offline, they won't load. You can download these images and store them in your `public/` folder for offline support.
