import { fonts, renderPixels } from "js-pixel-fonts";
import type { Grid } from "./types";

export function renderGrid(text: string): Grid {
    if (!text) {
        return [];
    }

    const raw: (boolean | number)[][] = renderPixels(
        text,
        fonts.sevenPlus
    );

    return raw.map((row) => row.map(Boolean));
}