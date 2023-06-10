import React from "react";
import { useState } from "react";

function ChatInput() {

  return (
    <>
      <form>
        <div
          className="row"
          style={{
            height: "50px",
            marginTop: "10px",
            paddingTop:"10px",
    
            backgroundColor: "lightBlue"
          }}
        >
          <div className="col-10 col-md-10 col-sm-10 form-group" style={{paddding:"0"}}>
            <input
              placeholder=" message something"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col-1 col-md-1 col-sm-1 " style={{paddding:"0"}}>
            <button className="btn btn-sm ">
              <i className="fa fa-paperclip" aria-hidden="true"></i>
            </button>
          </div>
          <div className="col-1 col-md-1 col-sm-1" style={{paddding:"0"}}>
            <button className="btn btn-sm " type="submit">
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default ChatInput;
