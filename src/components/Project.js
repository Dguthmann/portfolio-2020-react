import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Project(props) {
    return (
        <div className="col-md-6 repo2">
            <img src={props.projectImage} className="img-responsive" />
            <a className="porttext" target="_blank">
                <Route path='/live-site' component={() => {
                    window.location.href = props.liveUrl;
                    target="_blank"
                    return null;
                }}> 
                {props.liveTag}
                </Route>
            </a>
            <a className="porttext" target="_blank">
                <Route path='/github' component={() => {
                    window.location.href = props.gitUrl;
                    target="_blank"
                    return null;
                }}> 
                {props.gitTag}
                </Route>
            </a>
        </div>
    )
}
