import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import AppProvider from "../context/AppProvider";
import Message from "../components/Message";
import React from "react";
import Content from "../components/Content";
import CoinGrid from "../components/CoinGrid";
// import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Message />
          </Content>
          <CoinGrid />
        </AppProvider>
      </AppLayout>
    </div>
  );
}

export default App;
