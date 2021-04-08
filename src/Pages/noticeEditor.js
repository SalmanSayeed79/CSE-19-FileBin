import React,{useState} from 'react'
import {db} from '../firebase'
import '../Pages/styles/noticeEditor.css'
import Notice from '../Components/notice'
export default function NoticeEditor() {
    const [title,setTitle]=useState('')
    const [date,setDate]=useState('')
    const [detail,setDetail]=useState('')
    const [link1,setLink1]=useState('')
    const [link2,setLink2]=useState('')
    const [link3,setLink3]=useState('')
    const [editor,setEditor]=useState('')
   
    const addData=(e)=>{
        e.preventDefault()
        //console.log(title, date, detail, link1, link2, link3)
        if(!title||!date||!detail){
            alert("Enter elements correctly")
        }else{
        db.collection("notices").doc(title+date).set({
            title:title,
            date:date,
            detail:detail,
            link1:link1,
            link2:link2,
            link3:link3,
            editor:editor
        })
        
        //reloading the page
        .then(()=>window.location.reload())
        }
    }
    return (
        <div className='notice-editor-container'>
            <h1>Notice Editor</h1>
            <input type="text" placeholder="Notice Title" onChange={(e)=>setTitle(e.currentTarget.value)}/>
            <input type="date" placeholder="Notice Date" onChange={(e)=>setDate(e.currentTarget.value)}/>
            <textarea name="notice-body" placeholder="Detailed Notice" id="" onChange={(e)=>setDetail(e.currentTarget.value) }></textarea>
            <input type="text" placeholder="Notice Link 1" onChange={(e)=>setLink1(e.currentTarget.value)}/>
            <input type="text" placeholder="Notice Link 2" onChange={(e)=>setLink2(e.currentTarget.value)}/>
            <input type="text" placeholder="Notice Link 3" onChange={(e)=>setLink3(e.currentTarget.value)}/>
            <input type="text" placeholder="Editor" onChange={(e)=>setEditor(e.currentTarget.value)}/>

            <button onClick={(e)=>addData(e)}>Post Notice</button>
            
            <h3>Preview</h3>
            <Notice title={title} date={date} body={detail} link1={link1} link2={link2} link3={link3} editor={editor}/>
        </div>
    )
}
