import React from 'react';
import './App.css';
import './style/main.css'
import logo from './assets/logo.PNG'

function App() {
  return (
    <div>
      <main>
        <div className="main-holder">
          <div className="logo-holder">
            <img alt="Logo" src={logo} />
            <h1>POLYBOOKS</h1>

          </div>

          <div className="main-desc">
            <p>Thanks for stopping by to check out <b>Polybooks</b>, the revolutionary software that runs
                ever side of your
                business, but we are currently in a closed BETA. If you would like to partake in the BETA please
                submit your information and we will get back to you as soon as we are able to. By submitting your
                information you will also join our newsletter so that you can be notified when Polybooks is
                officially live!
                </p>
            <form>
              <input type="text" name="first_name" placeholder="First Name" required />
              <input type="text" name="first_name" placeholder="Last Name" required />
              <input type="text" name="first_name" placeholder="Company Name" required />
              <input type="email" name="first_name" placeholder="Email" required />
              <button type="submit">Join BETA</button>
            </form>
          </div>
          <a href="/">BETA Login</a>
        </div>
      </main>
    </div>
  );
}

export default App;
