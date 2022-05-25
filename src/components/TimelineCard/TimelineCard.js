import React, { useState, useEffect } from 'react';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import './TimelineCard.css';

function TimelineCard(props){
    let icon_area = props.number_of_user == 0 ? <div class="user_icon empty"></div> : <div class="user_icon"></div>;
    let display = props.number_of_user == 0 ? "no user found" : props.number_of_user == 1 ? null :`& ${props.number_of_user-1} others`;

    return (
        <div class="TimelineCard">
            <div class="header">
                { props.title }
            </div>
            <div class="content">
                { icon_area } { display }
            </div>
            {
            props.locked ? 
                <div class="locked">
                    <LockOutlinedIcon className="locked_icon" fontSize="small" />
                </div> : 
                null 
            }

            
        </div>
    )
}

export default TimelineCard;