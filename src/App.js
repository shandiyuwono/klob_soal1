import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component {
  handleClick(div, e) {
    e.stopPropagation()
    alert(div)
  }

  render() {
    return (
      <div className="App">
        <div onClick={(e) => this.handleClick('DIV 1', e)} style={styles.box1}>
          <div onClick={(e) => this.handleClick('DIV 2', e)} style={styles.box2}>
            <div onClick={(e) => this.handleClick('DIV 3', e)} style={styles.box3}></div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  box1: {
    background: 'grey',
    width: '300px',
    height: '300px',
    border: '2px solid black',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center'
  },

  box2: {
    background: 'orange',
    width: '200px',
    height: '200px',
    border: '2px solid black',
    margin: 'auto',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center'
  },

  box3: {
    background: 'green',
    width: '100px',
    height: '100px',
    border: '2px solid black',
    margin: 'auto',
    zIndex: 3
  }
}

export default App;
