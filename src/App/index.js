import "./App.css";
import AppLayout from "./AppLayout";
import AppBar from "./AppBar";
import AppProvider from "./AppProvider";
import Message from "./Message";
import React from "react";
// import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Message />
        </AppProvider>
      </AppLayout>
    </div>
  );
}

export default App;
