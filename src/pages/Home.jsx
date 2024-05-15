import React from 'react';
import QuickSpaceLogo from '../../images/QuickSpace_logo2.jpg'; // Adjust the path according to your folder structure

function Home() {
  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card powder-blue-metallic">
            <div className="card-content">
              <div className="content">
                <h1 className="title">Welcome to Quick Space</h1>
                <p>This is a simple home page using React and Bulma.</p>
                <figure className="image is-4by3 mt-3">
                  <img
                    src={QuickSpaceLogo}
                    alt="QuickSpace Logo"
                    style={{ opacity: '0.7' }}
                  />
                </figure>
                <div className="buttons mt-3">
                  <button className="button is-primary is-rounded custom-button animate__animated animate__fadeInLeft">Button 1</button>
                  <button className="button is-info is-rounded custom-button animate__animated animate__fadeInUp">Button 2</button>
                  <button className="button is-success is-rounded custom-button animate__animated animate__fadeInRight">Button 3</button>
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