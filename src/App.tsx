import { useState } from "react";
import { fonts, renderPixels } from "js-pixel-fonts";
import { saveSvgAsPng } from "save-svg-as-png";
import "./App.css";

type Grid = boolean[][];

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [grid, setGrid] = useState<Grid>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleUpdate = () => {
    if (!inputText) {
      setGrid([]);
      return;
    }

    try {
      const raw: (boolean | number)[][] = renderPixels(
        inputText,
        fonts.sevenPlus
      );

      const next: Grid = raw.map((row) => row.map(Boolean));

      setGrid(next);
    } catch (err) {
      console.error("renderPixels failed:", err);
      setGrid([]);
    }
  };

  const handleSave = () => {
    const svg = document.getElementById("knittingSVG") as SVGSVGElement | null;
    if (!svg) return;

    saveSvgAsPng(svg, "your-text.png", {
      scale: 3, // 해상도
      backgroundColor: "#ffffff"
    });
  };

  return (
    <>
      <p>글자를 입력해 주세요.</p>
      <p>지원 문자 : 영어(대문자, 소문자), 숫자, 특수문자(₩ 제외)</p>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleUpdate}>만들기</button>

      <p>
        {grid.length} X {grid[0]?.length ?? 0}
      </p>

      <SVGPreview grid={grid} cellSize={24} />

      <button onClick={handleSave}>아미지 저장</button>
    </>
  );
}

function SVGPreview({
  grid,
  cellSize = 24,
}: {
  grid: Grid;
  cellSize?: number;
}) {
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;
  if (!rows || !cols) return null;

  return (
    <svg
      id="knittingSVG"
      width={cols * cellSize}
      height={rows * cellSize}
      viewBox={`0 0 ${cols * cellSize} ${rows * cellSize}`}
      shapeRendering="crispEdges"
      style={{
        display: "block",
        background: "#fff",
        marginTop: 12,
        border: "1px solid #eee",
      }}
    >
      {grid.map((row, r) =>
        row.map((v, c) => (
          <rect
            key={`${r}-${c}`}
            x={c * cellSize}
            y={r * cellSize}
            width={cellSize}
            height={cellSize}
            fill={v ? "#000" : "#fff"}
            stroke="#bfbfbf"
            strokeWidth={1}
          />
        ))
      )}
    </svg>
  );
}
