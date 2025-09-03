import type { Grid } from "../features/types";

export default function PatternGrid({
  grid,
  cellSize = 24,
}: {
  grid: Grid;
  cellSize?: number;
}) {
  const rows = grid.length;
  const cols = rows ? grid[0].length : 0;

  if (!rows || !cols) {
    return null;
  }

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
