import React from "react";

function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="l-footer">
          <h1>
            <img src="Ctag.png" alt="" />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
            atque recusandae in sit sunt molestiae aliquid fugit. Mollitia eaque
            tempore iure sit nobis? Vitae nemo, optio maiores numquam quis
            recusandae.
          </p>
            <div  style={{display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
              
                <a href="#">Facebook</a>
              
             
                <a href="#">Twitter</a>
              
            
                <a href="#">Pinterest</a>
              
                <a href="#">Dribbble</a>
            
            </div>
        </div>
        <ul class="r-footer">
          <li>
          </li>
          <li class="features">
            <h2>Information</h2>
            <ul class="box h-box">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Tickets</a>
              </li>
              <li>
                <a href="#">Certifications</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Legal</h2>
            <label>Enter value : </label>
            <input
              type="textarea"
              name="textValue"
              placeholder="Enter your Name.."
            />
          </li>
        </ul>

        <div class="b-footer">
          <p>All rights reserved by ©CompanyName 2020||Yash MIshra||KIIT-DU||Ubuntu||Windows||Oracle </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
