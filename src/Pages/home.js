import React,{useState,useEffect} from 'react'
import {db} from '../firebase'
import './styles/base.css'
import './styles/home.css'
import homeImg from '../images/home-main.png'
import {Link} from 'react-router-dom'


import ListItems from '../Components/listItems'
import { auth } from '../firebase'

import Notice from '../Components/notice'
export default function Home() {

    const [loggedIn, setLoggedIn]=useState(true)
    const [notices, setNotices]=useState([])


    const showNavbar=()=>{
        const burger=document.querySelector("#burger")
        const drawer=document.querySelector(".navbar ul")
        burger.addEventListener('click',()=>{
            //console.log('clicked')
            drawer.classList.toggle('move-in')
      })

    }
    const hideNavbar=()=>{
        const drawer=document.querySelector(".navbar ul")
        drawer.classList.remove('move-in')
    }
    //=============================================================================
    //
    //  Getting Notices data from database
    //
    //=============================================================================
    const getNoticeData=()=>{

        db.collection('notices').orderBy("date","desc").get()
            .then(res=>{
                res.forEach(a=>{
                    console.log(a.data())
                    setNotices(prevItems=>[...prevItems,a.data()])
                })
            })
            
            
    }

    useEffect(()=>getNoticeData(),[])

    return (
        <div>
            <div className="home">
                <div className="navbar" id="navbar">
                    <h1>CSE-19 FileBin</h1>
                    <ul>
                        <a href="#navbar" onClick={hideNavbar}><li>Home</li></a>
                        <a href='#courses' onClick={hideNavbar}><li>Courses</li></a>
                        <Link to="/links"><li>Links</li></Link>
                        <a href='#notices' onClick={hideNavbar}><li>Notices</li></a>
                    </ul>
                    <i className="material-icons" id="burger" onClick={showNavbar} >menu</i>
                </div>
                

                <div className="main-home" id="home">
                    <div className="home-title">
                        <h2>All our files</h2>
                        <h3>Stored In one place</h3>
                    </div>
                    <img src={homeImg}/>
                    <a href='#navbar'><i class="material-icons">arrow_upward</i></a>
                </div>
                
            </div>
            <div className="courses" id="courses">
                <h1>Courses</h1>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/cp/COMPETITIVE-PROGRAMMING', data:[]}}><ListItems title="Competitive Programming" sub="CP Links and files"/></Link>
                <p style={{fontSize:"1.5rem", marginBottom:"2rem"}}>Level-1 Term-2</p>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/CSE-103', data:[]}}><ListItems title="CSE-103" sub="Sohel Sir | Mahmuda Mam"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/CSE-107', data:[]}}><ListItems title="CSE-107" sub="Rifat Sir | Tanzima Mam"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/MATH-147', data:[]}}><ListItems title="MATH-147" sub="Nabi Sir | Ashraf Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/CHEM-113', data:[]}}><ListItems title="CHEM-113" sub="Goni Sir | Firoz Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/HUM-183', data:[]}}><ListItems title="HUM-183" sub="Gopa Mam | Rouf Sir"/></Link>
                <p style={{fontSize:"1.5rem", marginBottom:"2rem"}}>Level-1 Term-1</p>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/CSE-101', data:[]}}><ListItems title="CSE-101" sub="Ashiqur Rahman Sir | Saiful Islam Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/ME-165', data:[]}}><ListItems title="ME-165" sub="Tushar Sir | Aman Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/EEE-163', data:[]}}><ListItems title="EEE-163" sub="Hadi Sir | Tanvir Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/MATH-145', data:[]}}><ListItems title="Math-145" sub="Ovi Sir | Nilufar Mam"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/PHYSICS-109', data:[]}}><ListItems title="Physics-109" sub="Rakibul Sir | Azizar Sir | Nasreen Mam"/></Link>
                
                
                
            </div>
            <div className="sessionals" id="sessionals">
                <h1>Sessionals</h1>
                <p style={{fontSize:"1.5rem", marginBottom:"2rem"}}>Level-1 Term-2</p>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/CSE-108', data:[["Ashikur Rahman Sir",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="CSE-108" sub=""/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/HUM-172', data:[["Ashikur Rahman Sir",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="HUM-172" sub=""/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/CHEM-114', data:[["Ashikur Rahman Sir",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="CHEM-114" sub=""/></Link>

                <p style={{fontSize:"1.5rem", marginBottom:"2rem"}}>Level-1 Term-1</p>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/CSE-102', data:[["Ashikur Rahman Sir",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="CSE-102" sub=""/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/ME-174', data:[["Ashikur ",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="ME-174" sub=""/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/EEE-164', data:[["Ashikur Rahman Sir",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="EEE-164" sub=""/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/PHYSICS-102', data:[["Ashikur Rahman Sir",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="Physics-102" sub=""/></Link>
                
                
            </div>
            <div className="questions" id="questions">
                <h1>Questions</h1>
                <p style={{fontSize:"1.5rem", marginBottom:"2rem"}}>Level-1 Term-2</p>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/questions/CSE-103', data:[]}}><ListItems title="CSE-103" sub="Sohel Sir | Mahmuda Mam"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/questions/CSE-107', data:[]}}><ListItems title="CSE-107" sub="Rifat Sir | Tanzima Mam"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/questions/MATH-147', data:[]}}><ListItems title="MATH-147" sub="Nabi Sir | Ashraf Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/questions/CHEM-113', data:[]}}><ListItems title="CHEM-113" sub="Goni Sir | Firoz Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/questions/HUM-183', data:[]}}><ListItems title="HUM-183" sub="Gopa Mam | Rouf Sir"/></Link>
                <p style={{fontSize:"1.5rem", marginBottom:"2rem"}}>Level-1 Term-1</p>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/CSE-101"><ListItems title="CSE-101" sub="Ashiqur Rahman Sir | Saifur Rahman Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/ME-165"><ListItems title="ME-165" sub="Tushar Sir | Aman Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/EEE-163"><ListItems title="EEE-163" sub="Hadi Sir | Tanvir Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/MATH-145"><ListItems title="Math-145" sub="Ovi Sir | Nilufar Mam"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/PHYSICS-109"><ListItems title="Physics-109" sub="Rakibul Sir | Azizar Sir | Nasreen Mam"/></Link>
                
                
            </div>
            <div className="notices" id="notices">
                <h1>Notices</h1>
                <div className="notice-container">
                    {notices.map((a)=>(
                        <Notice title={a.title} date={a.date} body={a.detail} link1={a.link1} link2={a.link2} link3={a.link3} editor={a.editor}/>
                    ))}
                    
                   
                </div>
            </div>
            <div className="footer">
                <h5>Copyright - 2020</h5>
                <p>All rights reserved - BUETians of CSE-19</p>
            </div>
        </div>
    )
}
