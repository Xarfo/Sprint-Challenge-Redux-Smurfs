import React, { Component } from 'react';

import Smurf from './Smurf';

class SmurfsList extends Component {
  render() {
    return (
      <div className="Smurfs">
       
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.name}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default SmurfsList;