import styled from "styled-components"
import { FlexWrapper } from "../components/FlexWrapper"
// @ts-ignore
import logo from "../logo.png"

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <FlexWrapper justify="space-between">
        <Logo src={logo} />
      </FlexWrapper>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 24px 100px;
  position: fixed;
`

const Logo = styled.img`
  width: 90px;
  height: 35px;
`
