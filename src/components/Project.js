import React from 'react'

export default function Project(props) {
    return (
        <div className="col-md-6">
            <img src={props.projectImage} className="img-responsive" />
            <a className="porttext" target="_blank" href={props.liveUrl}>{props.liveTag}</a>
            <a className="porttext" target="_blank" href={props.gitUrl}>{props.gitTag}</a>
        </div>
    )
}
