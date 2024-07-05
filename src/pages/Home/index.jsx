import { useState } from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
flex direction: column;
`;

const Baloon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #5843e4;
  transform: scale(${(props) => props.size});
`;
function Home() {
  const [size, setSize] = useState(1);
  return (
    <HomeContainer>
      <h1 onClick={() => setSize(size + 0.1)}>
        <span>Home 🏠</span>
      </h1>
      <Baloon onClick={() => setSize(1)} size={size} />
    </HomeContainer>
  );
}

export default Home;
