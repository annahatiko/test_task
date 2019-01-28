import React from 'react';
import PropTypes from 'prop-types';

const CardsItem = ({item}) => (
    <div className="card-body">
        <h2 className="card-title">{item.title}</h2>
        <span className="card-subtitle">{item.category}</span>
    </div>
)

CardsItem.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string,
        category: PropTypes.string
    })
};

export default CardsItem;