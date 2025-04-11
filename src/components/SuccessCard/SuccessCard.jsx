import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineCancel } from "react-icons/md";
import "./successcard.css";

function SuccessCard() {
    const navigate = useNavigate();

    return (
        <div className='successcardwrapper'>
            <div className='cardwrap'>
                <div className='cardheader'>
                    <div className='innerheadercardwrap'>
                        <MdOutlineCancel style={{cursor: "pointer"}} onClick={() => navigate("/")} size={30}/>
                    </div>
                </div>

                <div className='successicon'>
                    <img src="/IMG/successcard.png" alt="Success" />
                </div>

                <div className='paymenttextwarp'>
                    <h4>Payment Successful</h4>
                </div>
            </div>
        </div>
    );
}

export default SuccessCard;
