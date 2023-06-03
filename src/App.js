import React ,{lazy,Suspense} from "react";
import Header from "./header";

import { BrowserRouter, Route,Routes} from "react-router-dom"
import ChatInput from "./chat_input";

const Chatscreen = lazy(()=>import ("./chat_screen"))
function App() {
  return (
    <>
  <BrowserRouter> 
<Header/>
<Suspense fallback={<div>still Loading...</div>}>
<Chatscreen/>
</Suspense>
<ChatInput/>

</BrowserRouter> 
    </>
  );
}

export default App;
