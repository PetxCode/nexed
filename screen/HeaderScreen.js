import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../ults/AuthProvider";

const MyHeader = () => {
  const { show, currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  const [auth, setAuth] = useState(false);

  const onAuth = () => {
    setAuth(!auth);
  };

  return (
    <Container>
      <Wrapper>
        <Image
          alt="Logo"
          src={"/shape.png"}
          width={50}
          height={50}
          style={{ objectFit: "contain", margin: "0 20px" }}
        />

        {auth ? <Name>Welcome Back Peter: {currentUser?.uid} </Name> : null}

        {auth ? (
          <Navigation>
            <Avatar src={"/babe.jfif"} />
            <Nav
              onClick={() => {
                app.auth().signOut();
              }}
            >
              <span>LogOut</span>
            </Nav>
          </Navigation>
        ) : (
          <Navigation>
            <Link href="/register">
              <a>
                <Nav1>
                  <span>Register</span>
                </Nav1>
              </a>
            </Link>
          </Navigation>
        )}
      </Wrapper>
    </Container>
  );
};

export default MyHeader;

const Name = styled.div``;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  background: gray;
  margin-right: 10px;
`;

const Icon = styled.div`
  margin-right: 5px;
  margin-top: 5px;
`;

const Nav1 = styled.div`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  padding: 7px 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 3px;

  :hover {
    cursor: pointer;
  }

  span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 20px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 3px;

  :hover {
    cursor: pointer;
  }

  span {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const Logo = styled(Image)`
  margin: 0 20px;
  width: 80px;
  height: 40px;
  border-radius: 3px;
  object-fit: contain;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #004080;
  color: white;
`;
