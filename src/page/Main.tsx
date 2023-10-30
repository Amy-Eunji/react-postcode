import styled from "styled-components";

import PostCode from "src/components/PostCode";

const Main = () => {
  return (
    <Container>
      <Title>우편번호 검색 서비스</Title>
      <PostCode />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 50px;
  margin: 20px 0 40px;
`;

export default Main;
