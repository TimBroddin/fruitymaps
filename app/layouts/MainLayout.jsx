import React from 'react';
import Loader from 'react-loader';

export default class MainLayout extends React.Component {
    constructor() {
        super();
        this.state = { loaded: false };
    }

    componentDidMount() {
        var script = 'https://cdn.apple-mapkit.com/mk/3.0.0/mapkit.js';
        DocHead.loadScript(script, () => {
            this.setState({ loaded: true });
            mapkit.init({
                apiKey: "b2af5300a3c2ea9b5d38c782c7d2909dc88d6621",
                bootstrapUrl: "/bootstrap.json"
            });
        });
        DocHead.addLink({ rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"});


    }

    render() {
        return (
            <div className="container">
                <Loader loaded={this.state.loaded}>
                    { this.props.content }
                </Loader>
            </div>
        );
    }
}