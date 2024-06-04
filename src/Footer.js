import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
           <div class="foot-1">
              <div>
                 <h1>Useful Links</h1>
                 <div><a href="#">Street Fighter</a></div>
                 <div><a href="#">Metal Gear Solid</a></div>
                 <div><a href="#">Final Fantasy</a></div>
                 <div><a href="#">Pokemon</a></div>
                 <div><a href="#">Super Mario</a></div>
                 <div><a href="#">Donkey Kong Country</a></div>
              </div>
              <div>
                 <h1>Newsletter</h1>
                 <form method="post" action="/subscribe">
                    <input type="email" placeholder="Email Address" required />
                    <input type="submit" value="Subscribe" />
                 </form>
              </div>
              <div>
                 <h1>Contact</h1>
                 <div class="footer-address">
                    <p>217 Botany Hill Crescent</p>
                    <p>Toronto, ON J3N 7C9</p>
                    <p>Canada</p>
                 </div>
              </div>
           </div>
           <div class="foot-2">
              <p>&copy; React-This! 2024</p>
           </div>
        </footer>
    );
}

export default Footer;
