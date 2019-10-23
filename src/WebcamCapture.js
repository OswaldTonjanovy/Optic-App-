import React from 'react';

export default class WebcamCapture extends React.Component {
    render() {
        return <img src={this.props.src} style={{ width: '100%' }} />
    }
}
