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
                        <form method="post"
                              action-xhr="/ypSearchResult"
                              target="_top">
                            <input type="text"
                                   className=""
                                   name="what"
                                   placeholder="Search for business"
                                   required/>
                            <input type="submit"
                                   value="Search" />
                            <div submit-success>
                                <template type="amp-mustache">
                                    Success! Thanks {{what}} for trying the
                                    <code>amp-form</code> demo! Try to insert the word "error" as a name input in the form to see how
                                    <code>amp-form</code> handles errors.
                                </template>
                            </div>
                            <div submit-error>
                                <template type="amp-mustache">
                                    Error! Thanks {{name}} for trying the
                                    <code>amp-form</code> demo with an error response.
                                </template>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default Search;