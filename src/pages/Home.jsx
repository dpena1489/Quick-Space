import React from 'react';
import QuickSpaceLogo from '../../images/QuickSpace_logo2.jpg'; // Adjust the path according to your folder structure

function Home() {
  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card has-background-info-35" style={{ borderRadius: '50px' }}>
            <div className="card-content">
              <div className="content">
                <h1 className="title has-text-primary-100">Welcome to Quick Space</h1>
                <p className="has-text-text-90">This is a simple home page using React and Bulma.</p>
                <figure className="image is-4by3 mt-3">
                  <img
                    src={QuickSpaceLogo}
                    alt="QuickSpace Logo"
                    style={{ opacity: '0.5', borderRadius: '50px' }}
                  />
                </figure>
                <div className="buttons mt-3">
                  <button className="button is-warning is-rounded custom-button animate__animated animate__fadeInLeft">Button 1</button>
                  <button className="button is-warning is-rounded custom-button animate__animated animate__fadeInUp">Button 2</button>
                  <button className="button is-warning is-rounded custom-button animate__animated animate__fadeInRight">Button 3</button>
                  <button className="button is-warning is-rounded custom-button animate__animated animate__fadeInDown">Button 4</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;