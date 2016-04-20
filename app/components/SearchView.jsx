import React from 'react';
import Autocomplete from 'react-autocomplete';
import styles from '../styles/style.scss';
import _ from 'underscore';

export default class SearchView extends React.Component {
    constructor() {
        super();
        this.state = {
            value: "",
            results: [],
            loading: false
        }

        this.searcher = new mapkit.Search();
    }

    onSelect(value, item) {
        this.props.onSelect(item);
    }

    onChange(event, value) {
        this.setState({ value: value });
        this.searcher.autocomplete(value, (err, res) => {
            if (res && res.results) {
                let items = [];
                _.each(res.results, (item) => {
                    if (item.coordinate && item.displayLines) {
                        items.push(item);
                    }
                });

                this.setState({results: items, loading: false});
            } else {
                this.setState({results: [], loading: false});
            }
        })
    }

    renderItem(item, isHighlighted) {
        let primary = item.displayLines[0];
        let secondary = (item.displayLines[1]) ? <div className={ styles.secondary }>{item.displayLines[1]}</div> : <span />;
        
        return (
            <div className={ styles.searchResult } key={ item.displayLines.join(', ') }>{primary}{secondary}</div>
        )
    }

    render() {
        let wrapperStyle = {};
        wrapperStyle['flex-grow'] = 1;

        return (
            <div className={ styles.searchView }>
                <i className="fa fa-search" aria-hidden="true"></i>
                <Autocomplete
                    value={this.state.value}
                    items={this.state.results}
                    getItemValue={(item) => item.displayLines.join(',')}
                    onSelect={this.onSelect.bind(this)}
                    onChange={_.throttle(this.onChange.bind(this), 750)}
                    renderItem={this.renderItem.bind(this)}
                    wrapperProps={ { className: styles.searchWrapper, id: "jos" }}
                />
            </div>);


    }

}