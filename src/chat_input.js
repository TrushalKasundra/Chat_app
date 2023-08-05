import React, { useRef ,useContext} from "react";
import { useState } from "react";
import {observer} from "mobx-react";
import { storeContext } from "./store";


const  ChatInput= observer((props) =>{

  const [message, setMessage] = useState("");

  const store = useContext(storeContext);

  const message1 = () =>{
store.message = message;
setMessage("");
  }

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div
          className="container-fluid"
          style={{
            height: "50px",
            marginTop: "10px",
            backgroundColor: "lightBlue",
          }}
        >
          <div className="row" style={{ paddingTop: "7px" }}>
            <div className="col-9 col-md-9 col-sm-9 form-group">
              <input
                placeholder=" message something"
                type="text"
                value={message}
                className="form-control"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="col-1 col-md-1 col-sm-1 ">
              <button className="btn btn-sm">
                <i className="fa fa-paperclip" aria-hidden="true"></i>
              </button>
            </div>
            <div className="col-1 col-md-1 col-sm-1">
              <button
                className="btn btn-sm"
                type="submit"
                onClick={() => message1()}
              >
                <i className="fa fa-paper-plane" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
})

export default ChatInput;
