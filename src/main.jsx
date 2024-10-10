import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Svgifier } from "@sumcode/svgify";
import "@sumcode/svgify/styles";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Svgifier version={3}>
            <App />
        </Svgifier>
    </StrictMode>
);
