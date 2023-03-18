import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import styled from "styled-components";
import { api } from "../../api/api";

export default function Modal({ show, setShow, commerce }) {
  const [form, setForm] = useState({
    proprierty: commerce.proprierty,
    commerce: commerce.commerce,
    subTitleCommerce: commerce.subTitleCommerce,
    phone: commerce.phone,
    address: commerce.address,
    addressNumber: commerce.addressNumber,
    city: commerce.city,
    email: commerce.email,
    link: commerce.link,
  });

  const queryClient = useQueryClient();

  function handleInput(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  const { mutate, isLoading } = useMutation(() => api.updateCommerce(commerce.id, form), {
    onSuccess: () => {
      queryClient.invalidateQueries("list-commerce");
      setShow(false);
    },
  });

  return (
    <ModalBackground>
      <Container>
        <Title>Update Informations</Title>
        <Form>
          <BoxInput>
            <p>Proprierty</p>
            <Input onChange={handleInput} name="proprierty" value={form.proprierty} />
          </BoxInput>
          <BoxInput>
            <p>Commerce</p>
            <Input onChange={handleInput} name="commerce" value={form.commerce} />
          </BoxInput>
          <BoxInput>
            <p>Subtitle Commerce</p>
            <Input onChange={handleInput} name="subTitleCommerce" value={form.subTitleCommerce} />
          </BoxInput>
          <BoxInput>
            <p>Phone</p>
            <Input onChange={handleInput} name="phone" value={form.phone} />
          </BoxInput>
          <BoxInput>
            <p>Address</p>
            <Input onChange={handleInput} name="address" value={form.address} />
          </BoxInput>
          <BoxInput>
            <p>Address Number</p>
            <Input onChange={handleInput} name="addressNumber" value={form.addressNumber} />
          </BoxInput>
          <BoxInput>
            <p>City</p>
            <Input onChange={handleInput} name="city" value={form.city} />
          </BoxInput>
          <BoxInput>
            <p>Email</p>
            <Input onChange={handleInput} name="email" value={form.email} />
          </BoxInput>
          <BoxInput>
            <p>Link</p>
            <Input onChange={handleInput} name="link" value={form.link} />
          </BoxInput>

          <BoxButton>
            <button
              onClick={() => {
                setShow(!show);
              }}
            >
              Cancel
            </button>
            <button onClick={() => mutate()} className="save">
              {isLoading ? "Loading..." : "Save"}
            </button>
          </BoxButton>
        </Form>
      </Container>
    </ModalBackground>
  );
}

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

const Container = styled.div`
  width: 800px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 40px;
`;

const Title = styled.h1`
  text-transform: uppercase;
  font-size: 24px;
  letter-spacing: 1px;
  margin-bottom: 20px; ;
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  gap: 10px;
`;

const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border-radius: 10px;
  background-color: #e6e6e6;
  border: none;
  padding-left: 20px;
`;

const BoxButton = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-end;

  button {
    height: 50px;
    width: 80px;

    border: none;
    border-radius: 8px;

    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;

    cursor: pointer;

    &.save {
      background-color: #2e8b57;
      color: white;
    }
  }
`;
