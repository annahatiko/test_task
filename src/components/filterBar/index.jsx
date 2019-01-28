import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterBarTemp extends Component {
    constructor(props) {
        super(props);

        this.categories = this.props.cards.reduce((arr, item) => {
              if (arr.indexOf(item['category']) === -1) {
                  arr.push(item['category']);
              }
              return arr
        }, []);
    }

    render() {
        return (
            <div className="filter-bar col-4">
                Search string: <input
                                    type="text"
                                    name=""
                                    onChange={ e => this.props.onChangeSearchStr(e.target.value) }/>
                {this.categories.map(( item, index ) =>
                    <div className="filter-item" key={index}>
                        <label>
                            <input type="checkbox"
                                   value={item}
                                   onChange={
                                       e => e.target.checked ?
                                            this.props.onAddSearchCategory(e.target.value) :
                                            this.props.onRemoveSearchCategory(e.target.value)}
                            />
                            {item.toUpperCase()}
                        </label>
                    </div>)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
   cards: state.cards
});

export const FilterBar = connect(
    mapStateToProps,
    dispatch => ({
        onChangeSearchStr: (str) => {
            dispatch({ type: 'CHANGE_SEARCH_STR', payload: str})
        },
        onAddSearchCategory: (item) => {
            dispatch({ type: 'ADD_SEARCH_CATEGORY', payload: item})
        },
        onRemoveSearchCategory: (item) => {
            dispatch({ type: 'REMOVE_SEARCH_CATEGORY', payload: item})
        }

    }))(FilterBarTemp);