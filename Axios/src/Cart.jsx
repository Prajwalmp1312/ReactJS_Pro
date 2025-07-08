import React from 'react'
import "./Cart.css"
import Rudrakshi from "./Photos/Rudrakshi.avif"
import Wallet from "./Photos/Wallet.avif"
import shoes from "./Photos/Shoes.avif"
import P1 from "./CartImages/1.png"
import P2 from "./CartImages/2.png"
import P3 from "./CartImages/3.png"
import Pic from "./Photos/Shoppy.jpg"

const Cart = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <section id="page-header" class="about-header">
      <img src={Pic} height={350} alt="" />
      
    </section>

    {/* <!-- <section id="contact-details" class="section-p1">
        <div class="details">
            <h2>Your Cart is Empty</h2>
    </section> --> */}

    {/* <!-- cart items details--> */}

      
    <div class="small-container">
      <table>
        <tr id='row1'>
          <th>Product</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src={Rudrakshi} alt="Tshirt" />
              <div>
                <p>Shiv Trishul Damru Gold-plated Locket with Rudraksha Mala</p>
                <small>Price:Rs. 135</small>
                <br />
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td><input type="number"  /></td>
          <td>Rs. 135</td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src={Wallet} alt="Tshirt" />
              <div>
                <p>PRd PU Tan Casual regular Wallet</p>
                <small>Price: Rs. 150 </small>
                <br />
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td><input type="number"  /></td>
          <td>Rs. 150 </td>
        </tr>
        <tr>
          <td>
            <div class="cart-info">
              <img src={shoes} alt="Tshirt" />
              <div>
                <p>Aadi Black Casual Shoes</p>
                <small>Price: Rs. 449 </small>
                <br />
                <a href="#">Remove</a>
              </div>
            </div>
          </td>
          <td><input type="number"  /></td>
          <td>Rs. 449 </td>
        </tr>
      </table>

      <div class="total-price">
        <table>
          <tr>
            <td>Subtotal</td>
            <td>Rs. 734</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>Rs. 50</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>Rs. 784</td>
          </tr>
        </table>
      </div>
    </div>

    <section id="form-details">
      <form action="">
        <span>Leave a Message</span>
        <h2>We love to hear from you</h2>
        <input type="text" placeholder="Enter your name" />
        <input type="text" placeholder="Enter your Email" />
        <input type="text" placeholder="Enter your Subjext" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Your Message"
        ></textarea>
        <button class="normal">Submit</button>
      </form>

      <div class="people">
        <div>
          <img src={P1} alt="" />
          <p>
            <span>John Doe</span> Senior Marketing Manager <br />
            Phone: +91 1234567890 <br />
            Email: contact@example.com
          </p>
        </div>
        <div>
          <img src={P2} alt="" />
          <p>
            <span>John Doe</span> Senior Marketing Manager <br />
            Phone: +91 1234567890 <br />
            Email: contact@example.com
          </p>
        </div>
        <div>
          <img src={P3} alt="" />
          <p>
            <span>Jean Doe</span> Senior Marketing Manager <br />
            Phone: +91 1234567890 <br />
            Email: contact@example.com
          </p>
        </div>
      </div>
    </section>

    <section id="newsletter" class="section-p1 section-m1">
      <div class="newstext">
        <h4>Sign Up for newsletter</h4>
        <p>Lorem ipsum dolor sit amet <span>consectetur</span>.</p>
      </div>
      <div class="form">
        <input type="text" placeholder="your email address" />
        <button class="normal">Sign Up</button>
      </div>
    </section>

    <footer class="section-p1">
      <div class="col">
        <img class="logo" src="img/logo.png" alt="" />
        <h4>Contact</h4>
        <p>
          <strong><i class="fa fa-home"></i></strong> Lorem ipsum dolor sit
        </p>
        <p>
          <strong><i class="fa fa-phone"></i></strong> 13569876540
        </p>
        <p>
          <strong><i class="fa fa-hourglass" aria-hidden="true"></i></strong>
          9:00 AM - 6:00 PM
        </p>
        <div class="follow">
          <h4>Follow Us</h4>
          <div class="icon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-pinterest-p"></i>
            <i class="fab fa-youtube"></i>
          </div>
        </div>
      </div>

      <div class="col">
        <h4>About</h4>
        <a href="#">About US</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
        <a href="#">About US</a>
      </div>

      <div class="col">
        <h4>MY Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>

      <div class="col install">
        <h4>Install App</h4>
        <p>From app store or Google PLay Store</p>
        <div class="row">
          <img src="img/pay/app.jpg" alt="" />
          <img src="img/pay/play.jpg" alt="" />
        </div>
        <p>Secured payment Gateways</p>
        <img src="img/pay/pay.png" alt="" />
      </div>

      <div class="copyright">
        <p>c 2022, With ❤ Bhandary , Ecommerce Website Template</p>
      </div>
    </footer>
    </div>
  )
}

export default Cart
