import Link from "next/link";
import styled from "styled-components";

const NavStyled = styled.div`
  background: yellow;
`
const Nav = () => (
  <NavStyled>
    <Link href="/shots/new">
      <a>Upload</a>
    </Link>
  </NavStyled>
);

export default Nav;
