import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ActiveStyle from "../ults/ActiveStyle";
const HeaderComp = () => {
  return (
    <Container>
      <Wrapper>
        <Logo alt="Logo" src={"/shape.png"} width={50} height={50} />
        <Navigation>
          {/* <ActiveStyle> */}
          <Link href="/">
            <a>
              <Nav>
                <span>Home</span>
              </Nav>
            </a>
          </Link>
          {/* </ActiveStyle>

          <ActiveStyle> */}
          {/* <Link href="/registeration">
            <a>
              <Nav>
                <span>Register</span>
              </Nav>
            </a>
          </Link> */}
          <Link href="/newCourse">
            <a>
              <Nav>
                <span>New Course</span>
              </Nav>
            </a>
          </Link>
          {/* </ActiveStyle> */}
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default HeaderComp;

const Logo = styled.img`
  object-fit: contain;
  margin: 0 30px;
`;
const Nav = styled.div`
  margin: 0 20px;
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background: #004080;
  color: white;
`;
