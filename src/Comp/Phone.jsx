import React from "react";
import { Button } from "react-bootstrap";
function Phone() {
  return (
    <div
      style={{
        marginTop: "70px",
        backgroundImage: "./Rectangle.png",
        zIndex: "999",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <img
            alt="phonehand"
            src="Hand.png"
            style={{ height: "90%", width: "80%" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "coloumn",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <div>
            <section>
              <h2>
                Why choose <span style={{ color: "blue" }}>Stegofy</span>
              </h2>
            </section>
            <p style={{ fontsize: "13px", fontWeight: "light", color: "grey" }}>
              Stegofy platform is the secure, reliable and convenient one stop
              solution for all your brand and product management needs
            </p>
            <Button
              style={{ borderRadius: "30px",float: "left" }}
              variant="primary"
              size="lg"
              active
            >
              Read More
            </Button>
            <br />
            <br />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                marginTop: "50px"
              }}
            >
              <div style={{ display: "flex" }}>
                <img src="Tala.png" alt="lock"/>
                <div style={{display: "flex",flexDirection: "column"}}>
                <div><h6 style={{float: "left"}}>Hey Yash</h6></div>
                <div><p>cbuvvvvvvvvvvvvvvvvvebufviiiiieuvbbbbbbbbbv</p></div>
                </div>
              </div>
              
              <div style={{ display: "flex",marginTop: "20px" }}>
                <img src="Smile.png" alt="lock"/>
                <div style={{display: "flex",flexDirection: "column"}}>
                <div><h6 style={{float: "left"}}>Hey Yash</h6></div>
                <div><p>cbuvvvvvvvvvvvvvvvvvebufviiiiieuvbbbbbbbbbv</p></div>
                </div>
              </div>
              <div style={{ display: "flex",marginTop: "20px" }}>
                <img src="Smile.png" alt="lock"/>
                <div style={{display: "flex",flexDirection: "column"}}>
                <div><h6 style={{float: "left"}}>Hey Yash</h6></div>
                <div><p>cbuvvvvvvvvvvvvvvvvvebufviiiiieuvbbbbbbbbbv</p></div>
                </div>
              </div>
              
            <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
