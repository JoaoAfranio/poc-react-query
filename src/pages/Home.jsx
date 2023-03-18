import { useQuery } from "react-query";
import styled from "styled-components";
import { api } from "../api/api";
import CardCommerce from "../components/CardCommerce/CardCommerce";
import Header from "../components/Header";

export default function Home() {
  const { data, isLoading, isError } = useQuery("list-commerce", api.getCommerces);

  return (
    <>
      <Header />
      <Container>
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>An error has occurred</h1>}
        {data?.map((commerce) => (
          <CardCommerce commerce={commerce} />
        ))}
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
  height: 100%;

  padding: 100px 30px;

  background-color: #e6e6e6;
`;
