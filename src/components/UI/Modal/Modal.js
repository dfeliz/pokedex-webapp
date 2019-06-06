import React, {Component} from 'react';
import './Modal.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} onClick={this.props.onBackdropClick}/>
                <div className="Modal" style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0',
                }}>
                    {this.props.show ? this.props.children : null}
                </div>
            </Aux>
        );
    }
}

export default Modal;