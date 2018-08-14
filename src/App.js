import React, { Component } from 'react';
import marked from 'marked';

import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markupText: '',
    }
  }

  render() {
    return (
      <div className="App" style={{ width: '100%', height: '100%', }}>
        <div style={{ display: 'flex', flexDirection: 'row', padding: 16, width: '100%', height: '100%' }}>
          <div style={{ width: '100%' }}>
            <textarea style={{ backgroundColor: '#efefef', width: '100%', height: '100%', border: 'none' }} onChange={(e) => this.setState({ markupText: e.target.value })} />        
          </div>

          <div style={{ width: '100%', height: '100%', textAlign: 'left', padding: 16, }}>
            <div dangerouslySetInnerHTML={{
              __html: marked(this.state.markupText),
            }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
