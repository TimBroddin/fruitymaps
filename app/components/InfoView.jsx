import React from 'react';


export default class InfoView extends React.Component {
    close(event) {
        event.preventDefault();
        this.props.onClose();
    }

    render() {


        return (
            <div className="infoView">
                <h1>Fruity Maps</h1>
                <p>Apple revealed on their <a href="https://developer.apple.com/wwdc/attending/" target="_blank">WWDC-minisite</a> that they are working on a web-version of Apple Maps. I tried using their non-documented API and succeeded.</p>
                <p>This is a proof-of-concept that I will keep updating as I discover the code.</p>


                <p>Created with love (for Apple, for the developer community and for the world) by <a href="http://twitter.com/TimBroddin" target="_blank">Tim Broddin</a> in Antwerp, Belgium.</p>
                <p>Created with <a href="http://meteor.com" target="_blank">Meteor</a> and <a href="https://facebook.github.io/react/">React</a>. However you don't need those if you want to hack together your own embeded Apple Maps. See Github for details.</p>

                <p>Reach out on <a href="http://twitter.com/TimBroddin" target="_blank">Twitter</a>, <a href="http://github.com/timbroddin" target="_blank">Github</a>, or by <a href="mailto:tim@wannabes.be">e-mail</a>.</p>


                <p><a href="#" className={ styles.closeBtn } onClick={ this.close.bind(this) }>Close</a></p>
            </div>
        );

    }

}