import React ,{useRef}from 'react'
import '../Pages/styles/notice.css'

export default function Notice(props) {
    const showNotice = ()=>{
        noticeBody.current.classList.toggle("show")
    }
    const noticeBody=useRef()
    return (
        <div className="notice-card">
            <div className="notice-title">
                <h2 onClick={()=>showNotice()}>{props.title}</h2>
                <p>{props.date}</p>
            </div>
            <div className="notice-body" ref={noticeBody}>
                <pre>{props.body}</pre>
                <div className="notice-links">
                    <a href={props.link1} target="_blank">{props.link1}</a>
                    <a href={props.link2} target="_blank">{props.link2}</a>
                    <a href={props.link3} target="_blank">{props.link3}</a>
                </div>
                <p id="editor">Editor : {props.editor}</p>
            </div>
           

        </div>
    )
}
