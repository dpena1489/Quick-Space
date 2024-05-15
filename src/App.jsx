import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column is-half">
          <div className="card">
            <div className="card-content">
              <div className="content">
                <h1 className="title">Welcome to My Website</h1>
                <p>This is a simple home page using React and Bulma.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;