import React from "react";

import "./header.css";


function Header() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  
  return (
    <>
      <div className="container-fluid">
        <div className="row header">
          <div className="col-md-2 col-2 time">
            {hours}:{minutes}
          </div>
          <div className="col-md-7 col-7"></div>
          <div className="col-md-3 col-3 wifi-1">
            <i className="fa fa-signal"></i>

            <i className="fa fa-wifi"></i>
            <i className="fa fa-battery-full"></i>
          </div>
        </div>

        <div className="row top-section">
          <div className="col-md-3 col-3 back_arrow ">
            <i className="fa fa-arrow-left"></i>
          </div>
          <div className="col-8 col-md-8 ">
            <h2>Trip No. 20</h2>
          </div>
          <div className="col-1 col-md-1 ">
            <i className="fa fa-lg fa-pencil-square-o"></i>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-3 col-md-3 profile">
            <img
              src={require("./images/Profile_pictures.jpg")}
              alt="profile_picture"
            />
          </div>
<div className="col-8">
  <div className="row"><p>From <b>Rajajinagar</b></p></div>
  <div className="row"><p>To <b>Whitefield</b></p></div>

</div>

          <div className="col-1 col-md-1">
          <i className="fa fa-ellipsis-v"></i>

          </div>
        </div>
        <hr/>

      </div>
    </>
  );
}
export default Header;
