import React from 'react';
import './LoginScreen.css'; // You can create this CSS file to style your components

const LoginScreen = () => {
  return (
    <div className="login-container">
      <div className="left-column">
      <svg width="371" height="521" viewBox="0 0 371 521" xmlns="http://www.w3.org/2000/svg">
  <path d="M100.413 477.984V502.796C1.1651 480.741 0.613724 354.476 0.613724 251.92C0.613724 148.812 0.613724 19.2384 100.413 0.491699V25.3036C45.8266 51.7697 45.2753 159.288 45.2753 251.92C45.2753 343.998 45.2753 450.415 100.413 477.984ZM271.201 502.796V477.984C325.788 451.517 326.339 343.998 326.339 251.92C326.339 159.839 326.339 53.4238 271.201 25.3036V0.491699C370.45 22.5467 371 148.812 371 251.92C371 354.476 371 484.048 271.201 502.796Z" fill="#36635F" fillOpacity="0.6" />
  <g style={{ mixBlendMode: "multiply" }}>
    <path d="M168.445 142.16L153.808 133.51L165.451 113.551L172.437 102.574L159.13 103.572H136.51V87.2719H159.13L172.437 88.2699L165.118 77.2924L153.808 57.0007L168.445 48.3518L180.088 68.6435L185.743 80.6189L191.397 68.6435L203.04 48.3518L218.01 57.0007L206.367 77.2924L199.048 88.2699L212.022 87.2719H234.642V103.572H212.022L199.048 102.574L206.367 113.551L218.01 133.51L203.04 142.16L191.397 122.2L185.743 110.89L180.42 122.2L168.445 142.16Z" fill="#DDDDDD" />
  </g>
  {/* More SVG elements */}
</svg>


        </div>
      <div className="right-column">
        <form className="login-form">
          <label htmlFor="username">USERNAME</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" name="password" />
          <p><a href="null">Forgot your Password?</a></p>

          <button type="submit">Sign In</button>
          <p>Need an account?<a href="null"> Contact us.</a></p>
          <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;