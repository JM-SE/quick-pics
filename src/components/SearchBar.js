import './css/App.css';
import React from 'react';

class SearchBar extends React.Component {
    state = { term: '', qty: 5, submitted: 0 };

    renderNoResult() {
        if (this.props.images.length === 0 && this.state.submitted === 1) {
            return (
                <div className="ui pointing red basic label">No results.</div>
            );
        }
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term, this.state.qty);
        this.setState({ submitted: 1 });
    };

    render() {
        return (
            <div
                className="ui segment two column padded stackable grid"
                style={{
                    backgroundColor: '#EEEEEE',
                    boxShadow: '0 1px 8px rgba(124, 124, 124, 0.5)',
                    border: 'none',
                    zIndex: 99,
                }}
            >
                <form
                    onSubmit={this.onFormSubmit}
                    className="ui form thirteen wide column"
                >
                    <div className="field">
                        <label>What are you looking for?</label>
                        <input
                            style={{
                                boxShadow: '0 0 5px rgba(124, 124, 124, 0.25)',
                            }}
                            type="text"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                            onClick={() => this.setState({ term: '' })}
                        />
                    </div>
                </form>
                <form
                    className="ui form three wide column"
                    onSubmit={this.onFormSubmit}
                >
                    <div className="field two column grid">
                        <label>How many?</label>
                        <input
                            type="text"
                            maxLength="2"
                            className="ten wide field"
                            style={{
                                boxShadow: '0 0 5px rgba(124, 124, 124, 0.25)',
                            }}
                            value={this.state.qty}
                            onChange={(e) => {
                                this.setState({ qty: e.target.value });
                                console.log(e.target.value);
                            }}
                        />
                    </div>
                </form>
                {this.renderNoResult()}
            </div>
        );
    }
}

export default SearchBar;
