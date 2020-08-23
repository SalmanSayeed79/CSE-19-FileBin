import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import './styles/subject.css'
import Card from '../Components/card'

export default function SubjectPage(match) {
    //console.log(match)

                // <div>
                //     <p>{match.location.data[0][0]}</p>
                //     <p>{match.location.data[0][1]}</p>
                // </div>
                // <div>
                //     <p>{match.location.data[1][0]}</p>
                //     <p>{match.location.data[1][1]}</p>
                // </div>
    const [data,setData]=useState([])
    
    useEffect(()=>setData(match.location.data),[])
    return (
        <div className="subjectPage">
            <div className="half-wall">
                <Link to='/'><h5>Go back</h5></Link>
                <h1>{match.match.params.id}</h1>
                <div className="text-bar">
                    {/*   //if data exists
                        
                            data.map(a=>(
                                <div>
                                    <p>{a[0]}</p>
                                    <p>{a[1]}</p>
                                </div>
                            )
                        )
                        
                        
                            */ }
                </div>
            </div>



            <div className="card-container">
                <Link style={{textDecoration:"none", color:"black"}}  to={`/books/${match.match.params.id}`}><Card title="Books" details="All the necessary books that we’ll need for the L-1 T-1 exams can be found here. Some extra books as well as solution books have been added to the list"/></Link>
                <Link style={{textDecoration:"none", color:"black"}}  to={`/lectures/${match.match.params.id}`}><Card title="Class Lectures" details="Class notes by different lecturers are stored here for our convinence. We’re ever so grateful to our chotha writters for this page and our cg too"/></Link>
                <Link style={{textDecoration:"none", color:"black"}}  to={`/slides/${match.match.params.id}`}><Card title="Slides" details="All the slides provided by different lecturers are stored here for our convinence. "/></Link>
                <Link style={{textDecoration:"none", color:"black"}}  to={`/classes/${match.match.params.id}`}><Card title="Recorded Classes" details="All the recorded classes during COVID-19 pandemic have been stored here."/></Link>
                <Link style={{textDecoration:"none", color:"black"}}  to={`/questions/${match.match.params.id}`}><Card title="Question Papers" details="All the questions from 2000-2019 found in one place accumulated by cseians for further usage. Solve these before the term-final exams for best results"/></Link>
                
            </div>
            
        </div>
    )
}
