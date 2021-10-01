import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Works() {
  return (
    <div style={{ marginTop: "60px" }}>
      <h1>How it Work</h1>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <div className="container ">
              <img alt="search" src="Cut.png" style={{ width: "35%" }} />
              <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Our Technology
              </h4>

              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "lighter",
                  color: "grey",
                }}
              >
                Our non cloneable QR powered with blockchain technology enables
                a brand to secure the product by printing it on a
                product/package
              </p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="container">
              <img alt="search" src="search.png" style={{ width: "35%" }} />
              <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Our Technology
              </h4>

              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "lighter",
                  color: "grey",
                }}
              >
                Our non cloneable QR powered with blockchain technology enables
                a brand to secure the product by printing it on a
                product/package
              </p>
            </div>
          </Col>
          <Col xs={6} md={4}>
            <div className="container">
              <img alt="search" src="SC.png" style={{ width: "35%" }} />
              <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Our Technology
              </h4>

              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "lighter",
                  color: "grey",
                }}
              >
                Our non cloneable QR powered with blockchain technology enables
                a brand to secure the product by printing it on a
                product/package
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            {" "}
            <div className="container">
              <img alt="search" src="Tick.png" style={{ width: "20%" }} />

              <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Our Technology
              </h4>

              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "lighter",
                  color: "grey",
                }}
              >
                Our non cloneable QR powered with blockchain technology enables
                a brand to secure the product by printing it on a
                product/package
              </p>
            </div>
          </Col>
          <Col xs={6}>
            <div class="container">
              {" "}
              <img alt="search" src="Down.png" style={{ width: "20%" }} />
              <h4 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Our Technology
              </h4>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "lighter",
                  color: "grey",
                }}
              >
                Our non cloneable QR powered with blockchain technology enables
                a brand to secure the product by printing it on a
                product/package
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
