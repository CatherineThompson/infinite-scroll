import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

const trackWidth = 3000;
const headerBlockWidth = 100;
const trackHeight = 80;
const cyan900 = '#006064';
const colors = ['#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28', '#FFC107', '#FFB300', '#FFA000',
  '#FF8F00', '#FF6F00', '#FF5722', '#F4511E'];

class App extends Component {
  render() {
    const headerArray = Array(trackWidth / headerBlockWidth).fill(0);
    const laneArray = Array(12).fill(0);
    return (
      <div>
        <StickyContainer style={{ width: trackWidth, display: 'flex', flexDirection: 'column' }}>
          <Sticky>
            {
              ({ style }) => (
                <div style={style}>
                  <div style={{ background: cyan900, height: 150, display: 'flex' }}>
                    {
                      headerArray.map((val, i) => (
                        <div key={i} style={{ borderRight: '1px solid white', height: 150, width: headerBlockWidth }} />
                      ))
                    }
                  </div>
                </div>
              )
            }
          </Sticky>
          <div>
            <div>
              {
                laneArray.map((lane, i) => (
                  <div key={i} style={{ width: trackWidth, height: trackHeight, background: colors[i] }}>
                    <div>{colors[i]}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </StickyContainer>
      </div>
    );
  }
}

export default App;


// style={{ width: trackWidth, display: 'flex', flexDirection: 'column' }}
