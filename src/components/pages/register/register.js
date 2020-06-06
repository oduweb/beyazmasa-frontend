import React, { Component } from 'react';

import Grid from '../../ui/grid';
import DefaultButton from '../../ui/defaultButton';

export class register extends Component {
  Click() {
    alert('dasds');
  }

  render() {
    return (
      <div>
        <Grid
          customeClass="mt-2 p-2 border rounded-t text-center"
          cols={'4'}
          gap={'2'}
        >
          <div className="bg-gray-500">
            <DefaultButton onClick={this.Click}></DefaultButton>
          </div>
          <div className="bg-gray-500">1</div>
          <div className="bg-gray-500">1</div>
          <div className="bg-gray-500">1</div>
        </Grid>
      </div>
    );
  }
}

export default register;
