import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { MotionConfig } from "framer-motion";
import App from "./App.jsx";
import "./index.css";

const app = (
  <StrictMode>
    {/* "user" honours the visitor's reduced-motion setting for every animation. */}
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </StrictMode>
);

const root = document.getElementById("root");
// Production HTML is pre-rendered, so attach to it; `npm run dev` starts empty.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
