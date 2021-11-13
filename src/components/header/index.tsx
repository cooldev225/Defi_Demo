import styled from "styled-components";
import "./style.scss";
import { Button, Icon, DropMenuIcon } from "src/widgets";
const Container = styled.header``;
export const DefaultHeader: React.FC = () => {
  return (
    <Container>
      <div className="container">
        <div className="network">
          <span>Network:</span>
          <DropMenuIcon
            menuItems={["Ethereum", "Solana", "Polygon", "Bitcoin"]}
            activator={
              <div className="icon">
                <Icon name="eth" width="14px" color="#EB5289" />
              </div>
            }
          />
        </div>
        <div className="metamask">
          <Icon name="metamask" />
          <span>0x47gdft61...8903</span>
          <Button color="#EB5289" textColor="white">
            Disconnect
          </Button>
        </div>
        <Button color="#EB5289" textColor="white" className="swap">
          <img src="/swap.svg" />
          Swap tokens
        </Button>
      </div>
    </Container>
  );
};
