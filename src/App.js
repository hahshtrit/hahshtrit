import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'home',
    };
    this.handleSectionChange = this.handleSectionChange.bind(this);
  }

  handleSectionChange(section) {
    this.setState({ activeSection: section });
  }

  render() {
    return (
      <div>
        <Header
          activeSection={this.state.activeSection}
          onSectionChange={this.handleSectionChange}
        />
        <Home active={this.state.activeSection === 'home'} />
        <About active={this.state.activeSection === 'about'} />
        <Contact active={this.state.activeSection === 'contact'} />
        <Footer />
      </div>
    );
  }
}

export default App;
