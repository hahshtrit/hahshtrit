import React from 'react';

function About(props) {
  return (
    <section className={props.active ? 'active' : ''}>
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
        justo at lectus iaculis vestibulum. Proin nec ex vel augue faucibus
        rhoncus. Sed id diam id dolor faucibus dictum. Etiam eget mauris vitae
        turpis vestibulum volutpat vel sed elit. Integer at elit non elit
        malesuada condimentum. Vivamus placerat sapien eget enim facilisis
        auctor. Curabitur porta nisi at quam fringilla, eu pretium nulla
        egestas.
      </p>
    </section>
  );
}

export default About;
