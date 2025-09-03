import { useState } from "react";
import type { Grid } from "./features/types";
import { saveGrid } from "./features/saveGrid";
import { renderGrid } from "./features/renderGrid";
import PatternGrid from "./components/patternGrid";
import "./App.css";
import MainLogo from "./components/MainLogo";

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [grid, setGrid] = useState<Grid>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleUpdate = () => {
    setGrid(renderGrid(inputText));
  };

  return (
    <div className="container">
      <MainLogo />

      <p>글자를 입력해 주세요.</p>
      <p>지원 문자 : 영어(대문자, 소문자), 숫자, 특수문자(₩ 제외)</p>
      <input type="text" value={inputText} onChange={handleChange} />
      <button onClick={handleUpdate}>만들기</button>

      <p>
        {grid.length} X {grid[0]?.length ?? 0}
      </p>

      <PatternGrid grid={grid} cellSize={24} />

      <button onClick={saveGrid}>이미지 저장</button>
    </div>
  );
}
