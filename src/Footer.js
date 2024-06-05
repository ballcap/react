import React, { useState } from 'react';
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Your email has been added to the subscription.');
                setEmail(''); // Clear the email input field
            } else {
                setMessage('There was an error subscribing. Please try again.');
            }
        } catch (error) {
            setMessage('There was an error subscribing. Please try again.');
        }
    };

    return (
        <footer>
           <div className="foot-1">
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
                 <form onSubmit={handleSubmit}>
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                    />
                    <input type="submit" value="Subscribe" />
                 </form>
                 {message && <p>{message}</p>}
              </div>
              <div>
                 <h1>Contact</h1>
                 <div className="footer-address">
                    <p>217 Botany Hill Crescent</p>
                    <p>Toronto, ON J3N 7C9</p>
                    <p>Canada</p>
                 </div>
              </div>
           </div>
           <div className="foot-2">
              <p>&copy; React-This! 2024</p>
           </div>
        </footer>
    );
}

export default Footer;
