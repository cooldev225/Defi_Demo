import styled from "styled-components";
import "./style.scss";
import { Icon } from "src/widgets";

const Container = styled.footer``;
export const DefaultFooter: React.FC = () => {
  return (
    <Container className="">
      <ul className="social-link">
        <li>
          <Icon name="t1" />
        </li>
        <li>
          <Icon name="t2" />
        </li>
        <li>
          <Icon name="t3" />
        </li>
      </ul>
      <div className="container">
        © 2021 POP. All rights reserved. <br className="sp"></br>Powered by
        Faculty Group.
      </div>
    </Container>
  );
};
