import React from 'react';

function About(props) {
  return (
    <section className={props.active ? 'active' : ''}>
      <h2>About Me</h2>
      <p>
        I am a senior at University at Buffalo, with a passion for software development and interest in machine learning. 
        I have projects you can checkout on my github, and reach out to me if you need more details.
      </p>
    </section>
  );
}

export default About;
