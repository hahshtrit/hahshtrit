import React from 'react';
// import profilePic from './images/profile.jpg';


function Home(props) {
  return (
    <section className={props.active ? 'active' : ''}>
      <h1>Welcome to My Website</h1>
      <p>
        Hello, my name is Tirth and I am software engineer, a health freak, and semi-hiker. 
      </p>

    </section>
    
    
  );
}

export default Home;
