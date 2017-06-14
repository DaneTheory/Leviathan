// Set up your application entry point here...
// import React from 'react';
//
// var Loader = require('halogen/PulseLoader');
// var Example = React.createClass({
//   render: function() {
//     return (
//       <Loader color="#26A65B" size="16px" margin="4px"/>
//     );
//   }
// });


/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';

import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
// import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.


const store = configureStore();


render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
