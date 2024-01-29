import styled from "styled-components"
import { FlexWrapper } from "../components/FlexWrapper"
import logo from "../assets/img/logo.png"
import { Container } from "../components/Container"

const MenuItemsContent: string[] = ["Skills", "Projects", "Contact me"]

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo src={logo} />

          <Menu>
            {MenuItemsContent.map((val) => (
              <MenuItem key={val}>
                <MenuLink href="#">{val}</MenuLink>
              </MenuItem>
            ))}
          </Menu>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 24px 100px;
  position: fixed;
  background: #fcfcfc;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 2px 1px 0px rgba(0, 0, 0, 0.12),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14);
`

const Logo = styled.img`
  width: 90px;
  height: 35px;
`

const MenuItem = styled.li`
  & + & {
    margin-left: 50px;
  }
`

const MenuLink = styled.a`
  color: #000;
  font-size: 18px;
  font-weight: 400;
`

const Menu = styled.ul`
  ${MenuItem}:nth-of-type(2) ${MenuLink} {
    color: #e84949;
  }
`
