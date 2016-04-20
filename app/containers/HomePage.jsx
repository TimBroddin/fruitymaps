import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import MapView from '../components/MapView.jsx';
import SearchView from '../components/SearchView.jsx';
import InfoView from '../components/InfoView.jsx';

class HomePage extends React.Component {
    constructor() {
        super();

        this.state = {
            coordinate: false,
            showInfo: false
        }
    }

    componentDidMount() {
        DocHead.loadScript('//platform.twitter.com/widgets.js');

        DocHead.loadScript('//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.6&appId=934785546636838');
        DocHead.loadScript('//buttons.github.io/buttons.js')
    }


    onSearchSelect(item) {
        this.setState({coordinate: item.coordinate});
    }

    toggleInfo() {
        this.setState({ showInfo: !this.state.showInfo });
    }

    render() {
        let mapView = <MapView coordinate={ this.state.coordinate }/>;

        return (
            <div className="page">

                <div className="topBar">
                    <SearchView onSelect={ this.onSearchSelect.bind(this) }/>

                    <div className="infoButton" onClick={ this.toggleInfo.bind(this) }>
                        <i className="fa fa-info" aria-hidden="true"></i> About
                    </div>

                    { (this.state.showInfo) ? <InfoView onClose={ this.toggleInfo.bind(this) } /> : "" }


                </div>
                { mapView }
                <div className="footer">
                    <div className="version">version 0.2</div>
                    <div className="fb-like" data-href="http://fruitymaps.com" data-layout="button_count" data-action="like"
                         data-show-faces="false" data-share="true"></div>
                    <a href="https://twitter.com/share" className="twitter-share-button" data-via="TimBroddin">Tweet</a>

                    <a className="github-button" href="https://github.com/timbroddin/fruitymaps" data-icon="octicon-repo-forked"
                       data-count-href="/timbroddin/fruitymaps/network"
                       data-count-api="/repos/timbroddin/fruitymaps#forks_count" data-count-aria-label="# forks on GitHub"
                       aria-label="Fork timbroddin/fruitymaps on GitHub">Fork</a>
                </div>
                <script async defer id="github-bjs" src="https://buttons.github.io/buttons.js"></script>


            </div>
        )
    }

}


export default createContainer(({params}) => {

    DocHead.setTitle('Fruity Maps');

    return {
        user: Meteor.user(),
    }
}, HomePage);