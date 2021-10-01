import React from "react";
import { Card } from "react-bootstrap";


export default function Customer() {
  return (
    <div style={{ marginTop: "200px" }}>
      <strong style={{ fontSize: "50px", fontWeight: "bold" }}>
        One Scan to Trigger Consumers{" "}
        <span style={{ color: "blue" }}>
          360<sup>°</sup>
          <br />
        </span>
        Product Experiences
      </strong>
      <section
        style={{ fontWeight: "lighter", fontSize: "20px" }}
        className="container-fluid"
      >
        <p>
          With Stegofy solution, your product packaging and labelling no longer
          <br />
          provides a static content and Making your consumers choose your
          product over a competitors.
        </p>
      </section>

       <div className="customer" style={{display: "flex",flexDirection: "row",justifyContent: "space-around",marginTop: "50px"}}>
         <div className="container" style={{width:"40%"}}>
           <img alt="1-img" src="Flex-2.png" style={{height: "50%",width:"50%"}}/>
           <h6 style={{paddingTop: "5px",fontSize:"20px"}}>Anti-Counterfeit</h6>
           <p style={{fontSize: "13px",fontWeight: "lighter"}}>Every product unit contains a unique code 
fortified with Blockchain technology, 
reassuring customers the authenticity of 
your products.</p>
         </div>
         <div  className="container" style={{width:"40%"}}> <img alt="1-img" src="Flex-3.png" style={{height: "50%",width:"50%"}}/>
         <h6 style={{paddingTop: "5px",fontSize:"20px"}}>Marketing
</h6>
           <p style={{fontSize: "13px",fontWeight: "lighter"}}>Now your product is able to become the 
entry point for various marketing 
activities.</p>
         </div>
         <div  className="container" style={{width:"40%"}}> <img alt="1-img" src="Flex-4.png" style={{height: "50%",width:"50%"}}/>
         <h6 style={{paddingTop: "5px",fontSize:"20px"}}>Product Transparency
</h6>
           <p style={{fontSize: "13px",fontWeight: "lighter"}}>Share more about your product’s origin 
and ingredients to win over your 
consumers’ hearts
</p></div>
         <div  className="container" style={{width:"40%"}} > <img alt="1-img" src="Flex-1.png" style={{height: "50%",width:"50%"}}/>
         <h6 style={{paddingTop: "5px",fontSize:"20px"}}>Rating & Testimony</h6>
           <p style={{fontSize: "13px",fontWeight: "lighter"}}>Every product unit contains a unique code 
fortified with Blockchain technology, 
reassuring customers the authenticity of 
your products.</p></div>
       
       </div>
     
    </div>
  );
}
