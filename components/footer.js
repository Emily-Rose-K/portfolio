import React from 'react';

export default function Footer() {
    const footerstyle = {
        position: "absolute",
        left:0,
        bottom:0,
        right:0,
    }
    return (
        <footer style={footerstyle}> 
            <div id="footer-icons">
                <a href="https://github.com/Emily-Rose-K" target="_blank">
                    <img alt="LinkedIn" src="/github-logo.png"
                    width="40" height="40"></img>
                </a>
                <a href="https://www.linkedin.com/in/emily-krauss-89193510b/" target="_blank">
                    <img alt="LinkedIn" src="/linkedin-logo.png"
                    width="40" height="40"></img>
                </a>
            </div>
           <p id="signature">Emily Rose Krauss ©2020</p>
        </footer>
    )
}