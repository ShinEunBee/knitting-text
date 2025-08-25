import { useState } from "react";
import { fonts, renderPixels } from "js-pixel-fonts";
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
      console.log(inputText);


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

  return (
    <>
      <p>글자를 입력해 주세요.</p>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleUpdate}>만들기</button>

      {/* 디버그: 결과 그리드 확인 */}
      {/* <pre style={{ fontSize: 12 }}>{JSON.stringify(grid, null, 2)}</pre> */}

      {/* 간단 SVG 미리보기 (선택) */}
      <SVGPreview grid={grid} cellSize={24} />
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
