import React, { Component } from 'react';

const trackWidth = 3000;
const headerBlockWidth = 100;
const trackHeight = 80;
const cyan300 = '#4DD0E1';
const colors = ['#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000',
  '#FF8F00', '#FF6F00', '#FF5722', '#F4511E'];

class App extends Component {
  render() {
    const headerArray = Array(trackWidth / headerBlockWidth).fill(0);
    const laneArray = Array(12).fill(0);
    return (
      <div>
        <div style={{ width: trackWidth, display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: cyan300, height: 150, display: 'flex' }}>
            {
              headerArray.map((val, i) => (
                <div key={i} style={{ borderRight: '1px solid white', height: 150, width: headerBlockWidth }} />
              ))
            }
          </div>
          <div style={{ position: 'realtive'}}>
            <div>
              {
                laneArray.map((lane, i) => (
                  <div style={{ width: trackWidth, height: trackHeight, background: colors[i] }}>
                    <div >{colors[i]}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
