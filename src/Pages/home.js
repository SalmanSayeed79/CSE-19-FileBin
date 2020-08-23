import React,{useState,useEffect} from 'react'
import './styles/base.css'
import './styles/home.css'
import homeImg from '../images/home-main.png'
import {Link} from 'react-router-dom'


import ListItems from '../Components/listItems'
import { auth } from '../firebase'

export default function Home() {

    const [loggedIn, setLoggedIn]=useState(true)



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



    return (
        <div>
            <div className="home">
                <div className="navbar" id="navbar">
                    <h1>CSE-19 FileBin</h1>
                    <ul>
                        <a href="#navbar" onClick={hideNavbar}><li>Home</li></a>
                        <a href='#courses' onClick={hideNavbar}><li>Courses</li></a>
                        <a href='#sessionals' onClick={hideNavbar}><li>Sessionals</li></a>
                        <a href='#questions' onClick={hideNavbar}><li>Questions</li></a>
                        <a href='#links' onClick={hideNavbar}><li>Links</li></a>
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
                <p style={{fontSize:"1.5rem", marginBottom:"2rem"}}>Level-1 Term-1</p>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/CSE-101', data:[]}}><ListItems title="CSE-101" sub="Ashiqur Rahman Sir | Saiful Islam Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/ME-165', data:[]}}><ListItems title="ME-165" sub="Tushar Sir | Aman Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/EEE-163', data:[]}}><ListItems title="EEE-163" sub="Hadi Sir | Tanvir Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/MATH-145', data:[]}}><ListItems title="Math-145" sub="Ovi Sir | Nilufar Mam"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/subject/PHYSICS-109', data:[]}}><ListItems title="Physics-109" sub="Rakibul Sir | Azizar Sir | Nasreen Mam"/></Link>
                
                
                
            </div>
            <div className="sessionals" id="sessionals">
                <h1>Sessionals</h1>
                <p style={{fontSize:"1.5rem", marginBottom:"2rem"}}>Level-1 Term-1</p>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/CSE-102', data:[["Ashikur Rahman Sir",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="CSE-102" sub=""/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/ME-174', data:[["Ashikur ",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="ME-174" sub=""/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/EEE-164', data:[["Ashikur Rahman Sir",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="EEE-164" sub=""/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to={{pathname:'/sessionals/PHYSICS-102', data:[["Ashikur Rahman Sir",'Lecturer, Department of CSE, BUET'],['Saiful Islam Sir','Assistant Prof. , Department of CSE, BUET']]}}><ListItems title="Physics-102" sub=""/></Link>
                
                
            </div>
            <div className="questions" id="questions">
                <h1>Questions</h1>
                <p style={{fontSize:"1.5rem", marginBottom:"2rem"}}>Level-1 Term-1</p>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/CSE-101"><ListItems title="CSE-101" sub="Ashiqur Rahman Sir | Saifur Rahman Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/ME-165"><ListItems title="ME-165" sub="Tushar Sir | Aman Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/EEE-163"><ListItems title="EEE-163" sub="Hadi Sir | Tanvir Sir"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/MATH-145"><ListItems title="Math-145" sub="Ovi Sir | Nilufar Mam"/></Link>
                <Link style={{textDecoration:"none", color:"black"}} to="/questions/PHYSICS-109"><ListItems title="Physics-109" sub="Rakibul Sir | Azizar Sir | Nasreen Mam"/></Link>
                
                
            </div>
            <div className="links" id="links">
                <h1>Links</h1>
                <table>
                    <tr><th>Course</th><th>Class ID</th><th>Password</th><th>Link</th></tr>
                    <tr><td>CSE-101(Ashik Sir)</td><td>941 621 7340</td><td>893298</td><a href="https://bdren.zoom.us/j/9416217340?pwd=UW0vclluWDN3T0JYTFB2UlllWVNkUT09"><td>Click Here</td></a></tr>
                    <tr><td>ME (Tushar Sir) </td><td> - </td><td> - </td><a href="https://teams.microsoft.com/_#/school/conversations/General?threadId=19:1382a9071b3c4aafb644598ae8efda65@thread.tacv2&ctx=channel"><td>Click Here</td></a></tr>
                    <tr><td>EEE(Tanvir Sir)</td><td> - </td><td> - </td><a href="https://teams.microsoft.com/_#/school/conversations/General?threadId=19:596f2c10995a4bf18e090b64a1c90b22@thread.tacv2&ctx=channel"><td>Click Here</td></a></tr>
                    <tr><td>Maths(Ovi Sir)</td><td>638 4203 1782</td><td>689734</td><a target="_blank" href="https://bdren.zoom.us/j/63842031782?pwd=SlJ4Rm0vWVJXVktCT1ovM2lwdi9DUT09"><td>Click Here</td></a></tr>
                    <tr><td>Maths(Nilufar Mam)</td><td> - </td><td> - </td><td> - </td></tr>
                    <tr><td>Physics(Thermo, Azizar Sir)</td><td>876 949 2918</td><td>181334</td><a href="https://bdren.zoom.us/j/8769492918?pwd=T0MrL1ZqcUd6U2FuNkc0RnVLVEQvdz09">Click Here</a></tr>
                    <tr><td>Physics(E&M, Nasreen Mam)</td><td> - </td><td> - </td><td> - </td></tr>
                    <tr><td>Physics(Mechanics, Rakibul Sir)</td><td>641 4589 0936</td><td>808402</td><a href="https://bdren.zoom.us/j/64145890936?pwd=V09Xc091Zk40Rkp6MHU3UVNYYjBqdz09"><td>Click here</td></a></tr>
                    <tr><td>Physics(Waves)</td><td> - </td><td> - </td><td> - </td></tr>
                </table>

            </div>

            <div className="footer">
                <h5>Copyright - 2020</h5>
                <p>All rights reserved - BUETians of CSE-19</p>
            </div>
        </div>
    )
}
