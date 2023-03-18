import styled from "styled-components";
import Modal from "../Modal/Modal";

export default function BackCard({ commerce, setShow }) {
  const commerceName = commerce.commerce + " " + commerce.subTitleCommerce;

  return (
    <Back>
      <Title>{commerce.proprierty}</Title>
      <Subtitle>{commerceName}</Subtitle>

      <BoxInfo>
        <Info>{commerce.phone}</Info>
        <Info>{commerce.email}</Info>
        <Info>
          {commerce.address}, {commerce.addressNumber}
        </Info>
        <Info>{commerce.city}</Info>
      </BoxInfo>
      <Link>{commerce.link}</Link>

      <Button
        onClick={(e) => {
          setShow(true);
          e.stopPropagation();
        }}
      >
        UPDATE
      </Button>
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

const Button = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;

  font-size: 12px;
  letter-spacing: 1px;

  border: 1px solid #000000;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 8px;

  cursor: pointer;
`;
