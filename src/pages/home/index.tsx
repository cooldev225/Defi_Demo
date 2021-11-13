import { Items } from "./contents";
import "./style.scss";
import React, { Fragment } from "react";
import { Button, Icon, DropMenuIcon } from "src/widgets";
export const HomePage: React.FC = () => {
  return (
    <Fragment>
      <div className="body-header">
        <span className="small">MLP marketplace</span>
        <span className="title">Live Mutual LIQUIDITY Pools</span>
      </div>
      <div className="content">
        <div className="row items-grid">
          {Items.map((item, index) => (
            <div className="col-12 col-lg-6 col-xl-4" key={index}>
              <div className={"card type-" + item.type}>
                <div className="card-header">
                  <div className="icon">
                    <Icon name={item.icon} color="#fff" />
                  </div>
                  <div className="header-center">
                    <span className="text">POP!</span>
                    <span className="text">ETH</span>
                  </div>
                  <div className="icon">
                    <Icon name="eth" color="#fff" />
                  </div>
                </div>
                <div className="card-body">
                  <div className="body-header">
                    <span>APY {item.apy}%</span>
                    <span>APR {item.apr}%</span>
                  </div>
                  <div className="body-content">
                    <div className="text-row">
                      <span className="label">Total Pool Size</span>
                      <span className="value">{item.total_size}</span>
                    </div>
                    <div className="text-row">
                      <span className="label">Total Value Offered</span>
                      <span className="value">{item.total_offeted}</span>
                    </div>
                    <div className="text-row">
                      <span className="label">Total Volume Matched</span>
                      <span className="value">{item.total_matched}</span>
                    </div>
                    <div className="text-row">
                      <span className="label">Time Remaining</span>
                      <span className="value">{item.time_remaining}</span>
                    </div>
                    <div className="text-bar">
                      <span className="label">Farmed POP</span>
                      <div className="progress-bar">
                        <div className="progress-val">
                          <span>900/1000</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-bar">
                      <Button
                        color={!item.type ? "#fff" : "#EB5289"}
                        textColor={item.type ? "#fff" : "#EB5289"}
                      >
                        Single sided Offer
                      </Button>
                      <Button
                        color={!item.type ? "#fff" : "#EB5289"}
                        textColor={item.type ? "#fff" : "#EB5289"}
                      >
                        Farm
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
