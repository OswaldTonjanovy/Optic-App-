import React from 'react';


import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
// import fliterThree from './filtros/fliterThree.png';
// import test from './filtros/universomarvel.net-1.jpg';

class Editing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter1: false,
            filter2: false,
            filter3: false
        }
    }

    putFilterOne = () => {
        this.setState({
            filter1: true,
            filter2: false,
            filter3: false
        })
    }

    putFilterTwo = () => {
        this.setState({
            filter1: false,
            filter2: true,
            filter3: false
        })
    }

    putFilterThree = () => {
        this.setState({
            filter1: false,
            filter2: false,
            filter3: true
        })
    }

    render() {
        const style = {
            backgroundImage: "url(" + this.props.location.state.imageSrc + ")",
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            width: '100%',
            height: '47vh'
        }
        return (
            <div className='elegant-color-dark'>
                <div className='d-flex flex-column justify-content-center mx-auto'>
                    <div className='mx-auto' style={{ width: '300px' }}>
                        <div className='d-flex justify-content-center mx-auto mt-4' style={style}>

                            {this.state.filter1 ? <img className="w-100 h-100" src={require('./assets/filterOne.png')} /> : <div></div>}
                            {this.state.filter2 ? <img className="w-100 h-100" src={require('./assets/filterTwo.png')} /> : <div></div>}
                            {this.state.filter3 ? <img className="w-100 h-100" src={require('./assets/filterThree.png')} /> : <div></div>}

                        </div>
                    </div>
                </div>
                <MDBContainer className='my-4 elegant-color-dark'>
                    <MDBRow className='my-4'>
                        <MDBCol>
                            <img className='w-100 bg-white'    onClick={this.putFilterOne} src={require('./assets/filterOne.png')} />
                        </MDBCol>
                        <MDBCol>
                            <img className='w-100 bg-white'    onClick={this.putFilterTwo} src={require('./assets/filterTwo.png')} />
                        </MDBCol>
                        <MDBCol >
                            <img className='w-100 bg-white'    onClick={this.putFilterThree} src={require('./assets/filterThree.png')} />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>

        )

    }
}
export default Editing;