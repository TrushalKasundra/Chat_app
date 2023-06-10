import React  from "react";
import Header from "./header";
import { BrowserRouter, Route,Routes} from "react-router-dom"
import ChatInput from "./chat_input";

import Chatscreen from "./chat_screen";
function App() {

  return (
    <>
  <BrowserRouter> 
<Header/>

<Chatscreen/>

<ChatInput />

</BrowserRouter> 
    </>
  );
}

export default App;
