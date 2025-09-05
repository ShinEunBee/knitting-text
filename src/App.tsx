import { useState } from "react";
import type { Grid } from "./features/types";
import { saveGrid } from "./features/saveGrid";
import { renderGrid } from "./features/renderGrid";
import PatternGrid from "./components/PatternGrid";
import {
  Header,
  LogoBox,
  Title,
  Container,
  Meta,
  InputRow,
  Button,
  Controls,
  SvgContainer,
  TextInput,
  Footer,
} from "./styles/ui";
import "./App.css";
import logo from "./assets/main-image.png";

export default function App() {
  const [inputText, setInputText] = useState<string>("");
  const [grid, setGrid] = useState<Grid>([]);

  const handleUpdate = () => {
    setGrid(renderGrid(inputText));
  };

  return (
    <>
      <Header>
        <LogoBox>
          <img src={logo} alt="logo" />
          <Title>뜨개로운 인생</Title>
        </LogoBox>
      </Header>

      <Container>
        <Controls>
          <InputRow>
            <TextInput
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="지원 문자 : 영어(대문자, 소문자), 숫자, 특수문자(₩ 제외)"
            />
            <Button onClick={handleUpdate}>만들기</Button>
            <Button variant="ghost" onClick={saveGrid}>
              이미지 저장
            </Button>
          </InputRow>

          <Meta>
            <span>
              도안 크기: {grid.length} × {grid[0]?.length ?? 0}
            </span>
          </Meta>
        </Controls>

        <SvgContainer>
          <PatternGrid grid={grid} cellSize={24} />
        </SvgContainer>
      </Container>

      <Footer>© {new Date().getFullYear()} ggang2</Footer>
    </>
  );
}

/**
 *
 * 추가 개발
 *
 * 1. 상하좌우 여백 추가
 * 2. 여러 줄 입력 / 도안 생성
 */
