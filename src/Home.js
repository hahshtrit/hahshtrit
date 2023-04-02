import React from 'react';
// import profilePic from './images/profile.jpg';


function Home(props) {
  return (
    <section className={props.active ? 'active' : ''}>
      <h1>Welcome to My Website</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
        justo at lectus iaculis vestibulum. Proin nec ex vel augue faucibus
        rhoncus.
      </p>

    </section>
    
    
  );
}

export default Home;
