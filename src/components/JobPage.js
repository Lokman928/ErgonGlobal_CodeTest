import React from 'react';

import JobPost from "./JobPost";

import { useSelector, useDispatch } from "react-redux";
import { selectJobList, updateJobList } from "../store/slice/jobList";

import axios from "axios";

function JobPage(){
	const states = useSelector(selectJobList);
	const dispatch = useDispatch();

	if(states.jobList.length == 0 ){
		axios.get(`https://ergon-ms-gixholtv4q-df.a.run.app/api/bountyAd`)
			.then(res => {
				console.log(res.data["data"]);
				dispatch(updateJobList(res.data["data"]));
			});
	}

	return(
		<div>
			{
				states.jobList.map(job => 
					<JobPost key={job._id} job={job} />
				)
			}
		</div>
	)
}

export default JobPage;