import styled from "styled-components"

type FlexWrapperPropsType = {
  justify?: string
  align?: string
  direction?: string
  wrap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  height: 100%;
  display: flex;
  justify-content: ${(p) => p.justify || "flex-start"};
  align-items: ${(p) => p.align || "flex-start"};
  flex-direction: ${(p) => p.direction || "row"};
  flex-wrap: ${(p) => p.wrap || "no-wrap"};
`
