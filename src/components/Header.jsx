import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <h1>Commerces</h1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 70px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #ffffff;

  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);

  padding: 0px 150px;

  h1 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 22px;
  }
`;
