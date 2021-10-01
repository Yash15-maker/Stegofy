import React from 'react'
import {Button} from 'react-bootstrap';
export default function About() {
    return (
        <div style={{display: "flex",marginTop: "200px",flexDirection:"row"}}>
            <div style={{width: "50%",textAlign: "left"}}><span style={{fontWeight: "bold",fontSize: "55px"}}>Being</span> <span style={{color: "blue",fontSize: "55px"}}>Authenticity</span> <span style={{fontWeight: "bold",fontSize: "55px"}}>to</span> <br/><span style={{fontWeight: "bold",fontSize: "55px"}}>Your Products</span>
            
            <p style={{fontWeight: "lighter",fontSize: "25px"}}>Securing the genunity of your brand and<br/>
helping consumers buy smartly</p>

<Button style={{borderRadius: "30px",padding: "10 10 10 10"}} variant="primary" size="lg" active>Know More{"->"}</Button>
            </div>

            <div style={{width:"50%"}}><img alt="" src="About.png" style={{width:"100%"}}></img></div>
        </div>
    )
}
