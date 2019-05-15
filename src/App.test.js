import React from 'react';
import banana from 'react-test-renderer'; // 1: install this npm module as a dev dependency

import App from './App';

describe('<App />', () => {
  // 2. write this test

  //Add .only to run only that specific test
  // it.only('matches snapshot', => )
  it('runs the tests', () => {
    expect(true).toBe(true)
  })

  // add .skip to skip this test
  // it.skip('matches snapshot', => )
  it('matches snapshot', () => {
    const tree = banana.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
