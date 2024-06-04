import React from 'react';
import './About.css';

function About() {
    return (
        <section class="about">
            <div>
                <h1>About</h1>
                <p>Here at ReactThis! we do many things</p>
                <p>Some of which can be seen on the links below</p>
                <p>Feel free to take a look</p>
            </div>
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1675531020486-1a8bd1b1c7f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" alt="About Us" />
            </div>
        </section>
    );
}

export default About;