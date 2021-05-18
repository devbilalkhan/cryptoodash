import React from "react";
import styled, { css } from "styled-components";

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  background: #32333a;
  padding: 0.5em;
  border-radius: 5px;
  color: aqua;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 50px;
  grid-template-columns: 180px auto 100px 100px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  padding: 0.5em;
  ${(props) =>
    props.active &&
    css`
      color: aqua;
    `};
`;

const toProperCase = (lower) => {
  return lower.charAt(0).toUpperCase() + lower.substring(1);
};

const ControlButton = ({ name, active }) => {
  return (
    <ControlButtonElem active={active}>{toProperCase(name)}</ControlButtonElem>
  );
};

const AppBar = () => {
  return (
    <Bar>
      <Logo>Cryptodash</Logo>
      <div />
      <ControlButton name="dasboard" active />
      <ControlButton name="settings" />
    </Bar>
  );
};

export default AppBar;
