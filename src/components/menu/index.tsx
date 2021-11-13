import styled from "styled-components";
import "./style.scss";
import { Button, Icon, DropMenuIcon } from "src/widgets";
import { useSelector } from "react-redux";
const Container = styled.menu``;
export const DefaultMenu: React.FC = () => {
  const location = useSelector((state: any) => state.router.location.pathname);
  return (
    <Container>
      <div className="logo">
        <Icon name="logo" />
      </div>
      <ul>
        <li>
          <a href="/">
            <img src="m1.png" />
          </a>
          {location === "/" && <img src="mg.png" />}
        </li>
        <li className="li-hr">
          <a href="/page1">
            <img src="m2.png" />
          </a>
          {location === "/page1" && <img src="mg.png" />}
        </li>
        <li>
          <a href="/page2">
            <img src="m3.png" />
          </a>
          {location === "/page2" && <img src="mg.png" />}
        </li>
      </ul>

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
    </Container>
  );
};
