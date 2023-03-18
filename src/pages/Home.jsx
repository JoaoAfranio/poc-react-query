import styled from "styled-components";
import CardUser from "../components/CardUser/CardUser";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Container>
        <CardUser />
        <CardUser />
        <CardUser />
        <CardUser />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  height: 100vh;

  padding-top: 100px;

  background-color: #e6e6e6;
`;
