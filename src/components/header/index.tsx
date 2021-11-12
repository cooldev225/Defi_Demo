import styled from "styled-components";
import "./style.scss";
import React, { useState } from "react";

const Container = styled.header``;
export const DefaultHeader: React.FC = () => {
  const [state, setState] = useState<any>(false);
  return (
    <Container className="header">
      <div className="title container"></div>
    </Container>
  );
};
