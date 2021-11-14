import { DefaultHeader, DefaultMenu, DefaultFooter } from "src/components";
import "./style.scss";
export const DefaultLayout: React.FC = (props) => {
  return (
    <div className="defi-default-layout">
      <DefaultHeader />
      <DefaultMenu />
      <div className="main-content">{props.children}</div>
      <DefaultFooter />
      <div className="ellipse150"></div>
      <div className="ellipse142"></div>

      <div className="test-fixed">sadfsadfsdfsdfsdf</div>
    </div>
  );
};

export default DefaultLayout;
