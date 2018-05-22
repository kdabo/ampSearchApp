import React, {Component} from 'react';

class Search extends Component {

    render() {
        return (
            <div>
                <h1> Amsterdam Business Database A - Z </h1>
                <div>
                    <div class="header">
                        <a id="sample-menu" on="tap:drawermenu.toggle">
                            <amp-img srcset="/img/ic_menu_white_1x_web_24dp.png 1x, /img/ic_menu_white_2x_web_24dp.png 2x" width="24" height="24" alt="navigation"></amp-img>
                        </a>
                        <input name="search" type="text" placeholder="Search" on="change:AMP.setState({
                             products: {
                                  listSrc: '/samples_templates/products?searchProduct='+ event.value +'&sort='+ products.sortChoiceValue +'&searchColor='+ products.searchColor +'&_=RANDOM',
                            searchProduct: event.value
                            }
                            })">
                        </input>
                    </div>

                    <amp-img src="welcome.jpg" alt="Welcome" height="400" width="800"></amp-img>
                </div>
            </div>
        );
    }
}

export default Search;