import { DefaultHeader, DefaultFooter } from "src/components";
export const DefaultLayout: React.FC = (props) => {
  return (
    <div className="worldie-default-layout">
      <DefaultHeader />
      <div className="main-content">{props.children}</div>
      <DefaultFooter />
    </div>
  );
};

export default DefaultLayout;
