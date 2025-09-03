import { saveSvgAsPng } from "save-svg-as-png";

export function saveGrid() {
    const svg = document.getElementById("knittingSVG") as SVGSVGElement | null;

    if (!svg) {
        return;
    }

    saveSvgAsPng(svg, "your-text.png", {
        scale: 3, // 해상도
        backgroundColor: "#ffffff"
    });
}