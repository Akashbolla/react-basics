import React from "react";
import Header from "./Header";
import Greeting from "./Greeting";
import Footer from "./Footer";
import Welcome from './Welcome';

function MainApp() {
  return (
    <div>
      <Welcome name="akash" age={22}/>
      <Header />
      <Greeting name="akash" age={22} />
      <Greeting name="unknown" age={19} />
      <Greeting name="meera" age={1} />
      <Footer />
    </div>
  );
}

export default MainApp;

