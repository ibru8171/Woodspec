import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { MotionConfig } from "framer-motion";
import App from "./App.jsx";

/** Renders the whole page to HTML at build time (see scripts/prerender.js). */
export function render() {
  return renderToString(
    <StrictMode>
      <MotionConfig reducedMotion="user">
        <App />
      </MotionConfig>
    </StrictMode>,
  );
}
