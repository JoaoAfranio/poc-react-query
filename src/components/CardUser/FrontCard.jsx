import styled from "styled-components";

export default function FrontCard() {
  return (
    <Front>
      <Title>Julie</Title>
      <Subtitle>Beauty Salon</Subtitle>
    </Front>
  );
}

const Front = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background: linear-gradient(70deg, #f4d5d6 60%, rgb(255, 255, 255) 60%);

  backface-visibility: hidden;
  position: absolute;
`;

const Title = styled.h1`
  font-size: 62px;
  font-family: "Roboto";
`;

const Subtitle = styled.h2`
  font-family: "Roboto";
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
`;
