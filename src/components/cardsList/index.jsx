import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardItem from '../cardsItem';

class CardsListTemp extends Component {
    render() {
        const { cards } = this.props;

        return (
            <ul className="cards-list col-6">
                {cards.map( (item, index) =>
                <li className="card" key={index}>
                    <CardItem item={item}/>
                </li>)
                }
            </ul>
        )
    }
}

CardsListTemp.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({}))
};

export const CardsList = connect( (state) => {
    const { searchStr, searchCategories } = state.filters;

    const filtratedCards = state.cards.filter((item) =>
        (searchCategories.length) ?
            searchCategories.includes(item['category']) && item['title'].includes(searchStr) :
            item['title'].includes(searchStr)
    );

    return {
        cards: filtratedCards
    }
}
)(CardsListTemp);