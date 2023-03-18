import styled from "styled-components";

export default function BackCard() {
  return (
    <Back>
      <Title>Julie Carlson</Title>
      <Subtitle>Beauty Salon</Subtitle>

      <BoxInfo>
        <Info>123-456-7890</Info>
        <Info>julliecarlson.email</Info>
        <Info>123 Anywhere St.,</Info>
        <Info>Any City, 12345</Info>
      </BoxInfo>
      <Link>www.juliecarlson.web</Link>
    </Back>
  );
}

const Back = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  backface-visibility: hidden;

  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;
  height: 100%;
  background: linear-gradient(70deg, #f5e3d5 70%, rgb(255, 255, 255) 70%);

  padding: 40px;

  h1 {
    font-family: "Roboto";
    font-weight: bold;
  }
`;

const Title = styled.h1`
  font-size: 28px;
`;

const Subtitle = styled.h1`
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 2px;
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0px;
`;

const Info = styled.h1`
  font-size: 12px;
`;

const Link = styled.h1`
  font-size: 16px;
`;
