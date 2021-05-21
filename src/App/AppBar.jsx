import React from "react";
import styled, { css } from "styled-components";
import { AppConsumer } from "../context/AppProvider";
import { hoverBg, hoverLink } from "../styles/styles";

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  background: ${hoverBg};
  border-radius: 5px;
  padding: 0.6em 2rem;
  color: aqua;
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 50px;
  padding: 0.5em 0;
  grid-template-columns: 220px auto 100px 100px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const ControlButtonElem = styled.div`
  cursor: pointer;
  text-align: center;
  &:hover {
    color: ${hoverLink};
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
    <AppConsumer>
      {({ page, setPage }) => (
        <>
          <ControlButtonElem
            active={page.defaultPage === name}
            onClick={() => {
              setPage({ ...page, defaultPage: name, firstVisit: false });
              localStorage.setItem("defaultPage", name);
            }}
            hover={page.defaultPage === name}
          >
            {toProperCase(name)}
          </ControlButtonElem>
        </>
      )}
    </AppConsumer>
  );
};

const AppBar = () => {
  return (
    <Bar>
      <Logo>Cryptodash</Logo>
      <div />
      <Flex>
        <ControlButton name="dashboard" />
      </Flex>
      <Flex>
        <ControlButton name="settings" />
      </Flex>
    </Bar>
  );
};

export default AppBar;
