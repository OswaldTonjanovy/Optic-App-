import React from 'react';
import { MDBBtn } from 'mdbreact';

class Button extends React.Component {
    AccessCamera = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className='d-flex justify-content-center align-items-center' style={{ height: '350px' }}>
                <MDBBtn color='danger' onClick={this.AccessCamera}><h4 className='font-weight-bold'>Camera</h4></MDBBtn>
            </div>)
    }
};

export default Button;