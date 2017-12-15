import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section'

describe ('<StatusSection />', () => {

  let guesses = [1, 2, 3, 4]

  it('Renders without crashing', () => {
    shallow(<StatusSection guesses={guesses} />);
  });

});