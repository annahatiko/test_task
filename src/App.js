import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { CardsList } from './components/cardsList';
import { FilterBar } from './components/filterBar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = props => (
    <Provider store={props.store}>
        <FilterBar/>
        <CardsList/>
    </Provider>
);

App.propTypes = {
    store: PropTypes.shape({}),
};

export default App;

