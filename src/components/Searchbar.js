import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class Searchbar extends Component {
    state = {
        term: ''
    }

    onInputChange = event => {
        this.setState({term: event.target.value});
    };

    onFormSumbit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <h2 className="ui huge header center aligned">Mini Youtube Browser</h2>
                <form className="ui form" onSubmit={this.onFormSumbit}>
                    <div className="field">
                        <label className={styles.label}>Search For Your Favourite Videos</label>
                        <input type="text" 
                            value={this.state.term} 
                            onChange={this.onInputChange}/>
                        <input type="submit" className={styles.Submit} value="Search"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Searchbar;