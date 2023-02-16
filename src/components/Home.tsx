import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import '../styles/home.css';


function Home(){
 
    return(
        <div className='Home'>
            <h2 >Welcome to Home Page</h2>
            <Link to="/quiz">
                <button className='start'><strong>Start Quiz</strong></button>
            </Link>
        </div>
    )

}

export default Home;