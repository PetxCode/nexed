import HeaderScreen from "../screen/HeaderScreen";
import Registeration from "./Registeration";
import data from "../data/Data";
import styled from "styled-components";
import { useRouter } from "next/router";

const index = (props) => {
  const router = useRouter();
  console.log(router);
  return (
    <Container>
      <Wrapper>
        <Holder>
          {props.newData.map((props) => (
            <Card
              onClick={() => {
                router.push(`/${props.slug}`);
              }}
              key={props.id}
            >
              <Image src={props.image} alt="image" />
              <Content>
                <Name>{props.name}</Name>
                <Title>{props.course}</Title>
              </Content>
            </Card>
          ))}
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default index;

export async function getServerSideProps(context) {
  const { req, res } = context;

  return {
    props: {
      newData: data,
      // revalidate: 50,
    },
  };
}

// export async function getStaticProps() {
//   return {
//     props: {
//       newData: data,
//       // revalidate: 50,
//     },
//   };
// }

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
  min-height: calc(100vh - 80px);
  height: 100%;
  background: lightgray;
`;
