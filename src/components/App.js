import './css/App.css';
import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {
    state = { images: [], results: null };

    onSearchSubmit = async (term, qty) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term, per_page: qty },
        });

        if (response.data.results.length === 0) {
            this.setState({ results: 'No results' });
        } else {
            this.setState({ results: null });
        }

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: '40px' }}>
                <div style={{ margin: '0 0 15px 5px' }}>
                    <h1>Quick stock photo search</h1>
                </div>
                <SearchBar
                    onSubmit={this.onSearchSubmit}
                    results={this.state.results}
                    images={this.state.images}
                />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
