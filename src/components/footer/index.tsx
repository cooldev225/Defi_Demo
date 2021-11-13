import styled from "styled-components";
import "./style.scss";

const Container = styled.footer``;
export const DefaultFooter: React.FC = () => {
  return (
    <Container className="">
      <div className="container">
        © 2021 POP. All rights reserved. Powered by Faculty Group.
      </div>
    </Container>
  );
};
