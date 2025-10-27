# Copilot Instructions for navya-solutions-website

## Project Overview
- This is a Vite-based React (TypeScript) web app for Navya Solutions AB, focused on IT consulting and AI innovation.
- Uses **Material-UI (MUI)** for components and **styled-components** for custom styling.
- React and dependencies are installed via npm and bundled by Vite.

## Key Files & Structure
- `index.html`: Entry point, sets up fonts and meta tags.
- `index.tsx`: Main React entry, wraps app with MUI ThemeProvider and CssBaseline.
- `App.tsx`: Top-level component using MUI Box, imports and composes all page sections.
- `components/`: Contains all major UI sections as individual React components (e.g., `Header.tsx`, `Hero.tsx`, `Footer.tsx`).
- `theme.ts`: Exports MUI theme created with `createTheme()` - defines colors, typography, and component overrides.
- `constants.ts`, `types.ts`: Centralized constants and TypeScript types.

## Developer Workflows
- **Install dependencies:** `npm install` (installs MUI, styled-components, Vite tooling)
- **Run locally:** `npm run dev` (starts Vite dev server with hot reload)
- **API Keys:** Set `GEMINI_API_KEY` in `.env.local` for Gemini API integrations.
- **Build:** `npm run build` (produces optimized production build)

## Project-Specific Conventions
- **Component Structure:** Each section is a separate file in `components/`, imported in `App.tsx`.
- **Styling:** Use MUI components (Box, Container, Typography, Grid, Button, etc.) with `sx` prop or styled-components.
- **Custom Styles:** Create styled-components using `styled()` from `styled-components` library.
- **Theme:** All colors, typography, and component defaults defined in `theme.ts`. Access via MUI's theme system or import `colors` object.
- **Icons:** Use `@mui/icons-material` for icons (e.g., `<MenuIcon />`, `<CloudIcon />`).
- **TypeScript:** All components use TypeScript types from `types.ts` where applicable.

## Styling Patterns
- **Sections:** Use styled `Box` component with padding responsive to screen size.
- **Responsive Design:** Use MUI's `sx` prop with breakpoints or media queries in styled-components.
- **Color Usage:** Reference `colors.primary`, `colors.secondary`, `colors.light`, `colors.dark` from `theme.ts`.
- **Typography:** Use MUI Typography variants (`h1`, `h2`, `h6`, `body1`, etc.) with custom styling as needed.

## External Integrations
- **React & React-DOM:** Installed via npm, bundled by Vite.
- **MUI:** Installed via npm, imported from `@mui/material` and `@mui/icons-material`.
- **Styled-components:** Installed via npm for custom component styling.
- **Fonts:** Google Fonts (Inter) loaded via `<link>` in `index.html`.

## Example Patterns
- **Add new section:** Create component in `components/`, use styled-components + MUI, import in `App.tsx`.
- **Update theme:** Edit `theme.ts` palette, typography, or component overrides.
- **Create styled component:**
  ```tsx
  import styled from 'styled-components';
  import { Box } from '@mui/material';
  import { colors } from '../theme';
  
  const StyledSection = styled(Box)`
    background-color: ${colors.light};
    padding: 80px 0;
  `;
  ```

## Migration Notes
- **From Tailwind to MUI:** The project was migrated from Tailwind CSS to MUI + styled-components.
- **From CDN to npm:** React dependencies moved from CDN imports to npm packages.
- All lucide-react icons have been replaced with MUI icons.
- Follow existing patterns in Header.tsx, Hero.tsx, Footer.tsx, Consulting.tsx, Technology.tsx, Outsourcing.tsx, About.tsx for consistency.

## References
- See `README.md` for setup and run instructions.
- See `index.html` for global config and fonts.
- See `theme.ts` for MUI theme structure and color palette.
- See existing components (Header, Hero, Footer, Consulting, Technology, Outsourcing, About) for styling patterns.

---

For questions about MUI components or styling conventions, review `Header.tsx`, `Hero.tsx`, and `theme.ts` for canonical usage patterns.
