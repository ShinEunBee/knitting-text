import styled, { css } from "styled-components";

const border = "#e5e7eb";
const card = "#ffffff";
const text = "#2b2b2b";
const muted = "#6b7280";
const accent = "#ff7aa2";

const radius = "12px";
const maxSize = "840px";
const space = {
  1: "8px",
  2: "12px",
  3: "16px",
  4: "20px",
  6: "24px",
};

/* 레이아웃 */
export const Container = styled.main`
  background: ${card};
  width: min(92vw, ${maxSize});
  margin: 40px auto;
  padding: ${space[4]};
  border-radius: ${radius};
  border: 1px solid ${border};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const Header = styled.header`
  align-items: center;
  gap: ${space[3]};
  width: min(92vw, ${maxSize});
  margin: 24px auto 0;
`;

export const LogoBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${space[2]};
  img {
    display: block;
    height: 100px;
    width: auto;
  }
`;

export const Controls = styled.section`
  display: grid;
  gap: ${space[3]};
  margin-bottom: ${space[4]};
`;

export const InputRow = styled.div`
  display: flex;
  gap: ${space[2]};
  flex-wrap: wrap;
`;

/* 인풋 */
export const TextInput = styled.input.attrs({ type: "text" })`
  flex: 1 1 260px;
  min-width: 220px;
  padding: 10px 12px;
  border: 1px solid ${border};
  border-radius: ${radius};
  background: #fff;
  color: ${text};
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: ${accent};
    /* color-mix 대체: 투명도 있는 box-shadow */
    box-shadow: 0 0 0 3px rgba(255, 122, 162, 0.25);
  }
`;

/* 버튼 */
export const Button = styled.button<{ variant?: "solid" | "ghost" }>`
  height: 40px;
  padding: 0 14px;
  border-radius: ${radius};
  cursor: pointer;
  transition: background-color 0.2s, transform 0.04s;
  border: 1px solid transparent;

  ${({ variant = "solid" }) =>
    variant === "solid"
      ? css`
          background: ${accent};
          color: #fff;
          &:hover {
            background: "#ff5c8d";
          }
          &:active {
            transform: translateY(1px);
          }
        `
      : css`
          background: "#fff0f5";
          color: ${accent};
          &:hover {
            /* 가벼운 hover 톤 */
            background: #ffe6ef;
          }
        `}
`;

/* 메타 정보 */
export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: ${space[3]};
  color: ${muted};
  font-size: 14px;
`;

/* SVG 컨테이너 */
export const SvgContainer = styled.div`
  max-width: 100%;
  overflow-x: auto;
  padding-bottom: ${space[2]};
  scrollbar-gutter: stable; /* 스크롤바 공간 */

  &::-webkit-scrollbar {
    height: 10px; /* 가로 스크롤바 높이 */
  }
  &::-webkit-scrollbar-track {
    background: #f2f2f2;
    border-radius: 9999px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d0d0d0;
    border-radius: 9999px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #bcbcbc;
  }

  svg {
    display: block;
    margin: 0 auto;
    background: #fff;
    border: 1px solid ${border};
    border-radius: 8px;
  }
`;

/* 푸터 */
export const Footer = styled.footer`
  width: min(92vw, ${maxSize});
  margin: 12px auto 40px;
  color: ${muted};
  font-size: 12px;
  text-align: center;
`;
