@import "@fontsource/inter/400.css";
@import "@fontsource/inter/500.css";
@import "@fontsource/inter/600.css";
@import "@fontsource/inter/700.css";
@import "@fontsource/manrope/500.css";
@import "@fontsource/manrope/600.css";
@import "@fontsource/manrope/700.css";
@import "@fontsource/ibm-plex-mono/400.css";
@import "@fontsource/ibm-plex-mono/500.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-inter: "Inter", sans-serif;
  --font-manrope: "Manrope", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
}

html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

body {
  background: #F8F9FB;
  color: #0F1A2E;
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}

::selection {
  background: #E0B563;
  color: #0F1A2E;
}

/* Focus visibility for accessibility */
a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible,
select:focus-visible {
  outline: 2px solid #C8912F;
  outline-offset: 2px;
  border-radius: 4px;
}

.container-content {
  max-width: 1180px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
}

@media (min-width: 768px) {
  .container-content {
    padding-left: 40px;
    padding-right: 40px;
  }
}
