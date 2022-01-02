import HeaderScreen from "../screen/HeaderScreen";
import Registeration from "./Registeration";
import data from "../data/Data";
import styled from "styled-components";

const detail = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Card>
            <Image src="" alt="image" />
            <Content>
              <Name>props.name</Name>
              <Title>props.course</Title>
            </Content>
          </Card>
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default detail;

const Title = styled.div``;

const Name = styled.div`
  flex: 1;
`;
const Content = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Card = styled.div`
  width: 500px;
  height: 350px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;

const Holder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  background: lightgray;
`;
