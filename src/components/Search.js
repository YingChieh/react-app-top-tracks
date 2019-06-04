import React, { Component } from 'react';

class Search extends Component {
    state = {artistQuery:''};

    updateArtistQuery = event => {
        //console.log('event.target.value', event.target.value);
        this.setState({ artistQuery: event.target.value });
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            this.searchArtist();
        }
    }

    searchArtist = () =>{
        console.log('artistQuery', this.state.artistQuery);
        this.props.searchArtist(this.state.artistQuery);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-row justify-content-center">
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control mb-2"
                                onChange={this.updateArtistQuery}
                                onKeyPress={this.handleKeyPress}
                                placeholder="Search for an Artist" />
                        </div>
                        <div className="col-auto">
                            <button
                                type="button"
                                className="btn btn-outline-secondary mb-2"
                                onClick={this.searchArtist}>
                                Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;