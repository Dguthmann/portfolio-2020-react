import React from 'react'

export default function Project(props) {
    return (
        <div className="col-md-6 ">
            <img src={props.projectImage} className="img-responsive" style={{ maxWidth: "30vw" }}/>
            <br></br>
            <a className="porttext" target="_blank" href={props.liveUrl}>{props.liveTag}</a>
            <br></br>
            <a className="porttext" target="_blank" href={props.gitUrl}>{props.gitTag}</a>
        </div>
    )
}
