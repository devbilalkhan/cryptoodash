import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  background: #32333a;
  border-radius: 5px;
  padding: 0.5em;
  color: aqua;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 50px;
  padding: 0.5em;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;

  &:hover {
    color: #666876;
  }
  ${(props) =>
    props.active &&
    css`
      color: aqua;
    `};
`;

const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substring(1);
};

const ControlButton = ({ name }) => {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElem
          active={page === name}
          onClick={() => setPage(name)}
          hover={page === name}
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  );
};

const AppBar = () => {
  return (
    <Bar>
      <Logo>Cryptodash</Logo>
      <div />
      <ControlButton name="dasboard" />
      <ControlButton name="settings" />
    </Bar>
  );
};

export default AppBar;
