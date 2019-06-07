import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../../UI/Backdrop/ForcedBackdrop';
import './ConfirmModal.css';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} onClick={this.props.onBackdropClick}/>
                <div className="ForcedModal" style={{
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