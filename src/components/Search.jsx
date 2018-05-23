import React, {Component} from 'react';

class Search extends Component {

    render() {
        return (
            <section>
                <div>
                    <amp-img src="../../assets/architectural-design-architecture-building-443383.jpg" width="300" height="200" layout="responsive"/>
                </div>
                <div className="">
                    <header>
                        <h1 className="">Amsterdam Business Database A - Z</h1>
                        <h2 className="">Find and call any business in Amsterdam.</h2>
                    </header>
                    <div className="">
                        <label className="">
                                <input name="search" type="text" placeholder="Search for business"/>
                                <button on="tap:AMP.setState({})">Search</button>
                        </label>
                    </div>
                </div>
            </section>
        );
    }
}

export default Search;