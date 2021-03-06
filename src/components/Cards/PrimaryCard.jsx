import React from 'react';
import { ReactComponent as CarrotDownIconBlue } from '../../images/icons/carrot-down-blue.svg';
import '../../scss/cards.scss';


export default function PrimaryCard(props) {
    return(
        <div className="primary-card-container mt-4">
            <div className="card-header d-flex justify-between">
                <div className="card-main-heading ">
                    {props.cardMainHeading}
                </div>
                {
                    props.headers > 1 ? (
                        props.headerType === "dowpdown" ? (
                            <div className="link card-main-heading d-flex align-items-center">
                                Add media from URL 
                                <CarrotDownIconBlue />
                            </div>
                        ) : props.headerType === "btn" ? (
                            <div className="btn btn-primary btn-sm align-self-center bg-primary border-0">
                                {props.btnText}
                                
                            </div>
                        ) : null
                        
                        
                    ) : null
                }
                
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}