import React from 'react';
import { MDBIcon } from 'mdbreact';

class Header extends React.Component {
    AccessCamera = () => {
        this.props.history.push('/home');
    }

    render() {
        return (
            <div className="d-flex flex-row bg-dark align-items-center align-content-center">
                <MDBIcon icon="camera-retro" className="m-3" style={{color: '#ff3547'}} size="4x"/>
                <div className="d-flex align-items-center align-content-center">
                    <h5 className="font-weight-bold bg-dark text-white align-items-center align-content-center m-1">Optic App</h5>
                </div>
            </div>
            )
    }
};

export default Header;