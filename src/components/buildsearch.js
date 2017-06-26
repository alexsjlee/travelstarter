import React, { Component } from 'react';
import {
    Link,
    Route
} from 'react-router-dom';
import Build from './build';
import Search from './search';
import Footer from './footer';

class BuildSearch extends Component {
    render() {
        const city = this.props.match.params.id;
        console.log('params', this.props);
        return(
            <div>
                <h1>Build/Search Page</h1>
                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <Link className="nav-link" to={`/buildsearch/search/${this.props.match.params.id}`}>Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/buildsearch/build/${this.props.match.params.id}`}>Build</Link>
                    </li>
                </ul>

                <Route path="/buildsearch/build/:id" component={Build}/>
                <Route path="/buildsearch/search/:id" component={Search}/>
                <Footer />
            </div>
        )
    }
}

export default BuildSearch;

