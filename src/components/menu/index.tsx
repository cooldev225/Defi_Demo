import styled from "styled-components";
import "./style.scss";
import { Button, Icon, DropMenuIcon } from "src/widgets";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
const Container = styled.menu``;
export const DefaultMenu: React.FC = () => {
  const history = useHistory();
  const gotoPage = (url) => {
    history.push(url);
  };
  const [toggle, setToggle] = useState<any>({
    home: window.location.pathname === "/" ? true : false,
    page1: window.location.pathname === "/page1" ? true : false,
    page2: window.location.pathname === "/page2" ? true : false,
  });
  return (
    <Container>
      <div className="logo">
        <Icon name="logo" />
      </div>
      <ul className="main-menu">
        <li
          onClick={(e) => {
            setToggle({ ...toggle, home: true, page1: false, page2: false });
            gotoPage("/");
          }}
          className={toggle.home ? "active" : ""}
        >
          <img src="m1.png" />
          <img src="mg.png" />
        </li>
        <li
          onClick={(e) => {
            setToggle({ ...toggle, home: false, page1: true, page2: false });
            gotoPage("/page1");
          }}
          className={toggle.page1 ? "active" : ""}
        >
          <img src="m2.png" />
          <img src="mg.png" />
        </li>
        <li className="li-hr"></li>
        <li
          onClick={(e) => {
            setToggle({ ...toggle, home: false, page1: false, page2: true });
            gotoPage("/page2");
          }}
          className={toggle.page2 ? "active" : ""}
        >
          <img src="m3.png" />
          <img src="mg.png" />
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
