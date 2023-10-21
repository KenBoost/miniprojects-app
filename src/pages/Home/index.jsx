import React from 'react';
import './index.scss';

function Home() {
  return (
    <div className="home">
       <div className='container'>
        <section className='text'>
          <h2>Esta es una app del clima</h2>
        </section>
        <section className='cards'>
          <div className='card1'></div>
          <div className='card2'></div>
          <div className='card3'></div>
        </section>
       </div>
    </div>
  );
}

export default Home;
