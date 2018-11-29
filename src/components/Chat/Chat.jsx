import React, { Component } from 'react';
import Head from '../header/header.jsx';
import Body from '../Body/body.jsx';
import Footer from '../Footer/footer.jsx';

class Chat extends Component {
  render() {
    return <div>
              <Head />
              <Body />
              <Footer />
          </div>;
  }
}

export default Chat;