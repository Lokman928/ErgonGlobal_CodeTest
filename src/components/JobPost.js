import React, { useState, useEffect } from 'react';

import TimelineCard from './TimelineCard/TimelineCard';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Stack from '@mui/material/Stack';

import './JobPost.css';

function JobPost(props){

    function calJobTime(){
        let current_time = new Date();
        let create_time = new Date(props.job.created_on)
        let time_diff = current_time - create_time;
        
        if(time_diff < 60*1000){
            return "Just now"
        }else if(time_diff < 60*60*1000){
            return `${parseInt(time_diff/(60*1000))} mins ago`;
        }else if(time_diff < 24*60*60*1000){
            return `${parseInt(time_diff/(60*60*1000))} hours ago`;
        }else if(time_diff < 7*24*60*60*1000){
            return `${parseInt(time_diff/(24*60*60*1000))} days ago`;
        }else{
            return "Long time ago"
        }
    }

	return(
        <Grid container className="JobPost">
            <Grid item xs={2}>
                <img class="companyImage" src={ props.job.companyLogo }></img>
            </Grid>
            <Grid item xs={10}>
                <Stack spacing={2}>

                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <div>
                                <span class="jobName">{ props.job.jobTitle }</span>
                                <span class="time">{ calJobTime() }</span>
                            </div>
                            
                            <div>{ props.job.oneLineJD ?? "No job discription" }</div>
                        </Grid>
                        <Grid item xs={3} className="bounty">
                            <div class="hire_bountry">
                                <EmojiEventsIcon />{ props.job.bounty } { props.job.currency } upon hire
                            </div>
                            <div class="interview_bountry">
                                +500 { props.job.currency } upon interview
                            </div>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="contained">Refer now</Button>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={3} className="timeline_part">
                            <hr />
                            <ArrowForwardIosIcon className="timeline_item arrow left" fontSize="small"/>
                        </Grid>
                        <Grid item xs={3} className="timeline_part">
                            <hr />
                        </Grid>
                        <Grid item xs={3} className="timeline_part">
                            <hr />
                            <ArrowForwardIosIcon className="timeline_item arrow left" fontSize="small"/>
                            <span class="timeline_item middle">HK$500</span>
                        </Grid>
                        <Grid item xs={3} className="timeline_part">
                            <hr />
                            <ArrowForwardIosIcon className="timeline_item arrow left" fontSize="small"/>
                            <ArrowForwardIosIcon className="timeline_item arrow right" fontSize="small"/>
                            <span class="timeline_item middle">HK$9,000</span>
                        </Grid>
                    </Grid>

                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            <TimelineCard title="Referred" number_of_user="0"/>
                        </Grid>
                        <Grid item xs={3}>
                            <TimelineCard title="Accepted" number_of_user="1"/>
                        </Grid>
                        <Grid item xs={3}>
                            <TimelineCard title="Interviewed" number_of_user="10"/>
                        </Grid>
                        <Grid item xs={3}>
                            <TimelineCard title="Hired" number_of_user="0" locked/>
                        </Grid>
                    </Grid>
                    
                    <Grid container justifyContent="flex-end">
                        <Grid item xs={3}>
                            <Button variant="text">
                                <PeopleOutlineIcon />
                                Who should I refer?
                            </Button>
                        </Grid>
                    </Grid>
                </Stack>
                
            </Grid>
        </Grid>
	)
}

export default JobPost;