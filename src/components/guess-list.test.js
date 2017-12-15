import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list'

describe ('<GuessList />', () => {

  let guesses = [1, 2, 3, 4]

  it('Renders without crashing', () => {
    shallow(<GuessList guesses={guesses}/>);
  });

});