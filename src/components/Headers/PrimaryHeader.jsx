import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../images/logos/logo.svg';
import '../../scss/headers.scss';
import '../../scss/containers.scss';

class PrimaryHeader extends Component {
    render() {
        return(
            <div className="header-container bg-white primary-header container">
                <div className="header-inner-wrapper">
                    <div className="header-logo-wrapper">
                        <Logo />
                    </div>
                </div>
            </div>
        )
    }
}

export default PrimaryHeader;