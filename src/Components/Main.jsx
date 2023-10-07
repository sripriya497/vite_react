import React from 'react'
export default function Main(){
    return(
        <main>
            <h1 className='main--head'>Study Plan:</h1>
            <ul className='main--list'>
                <li>Front End Development - HTML, CSS, JS, React</li>
                <li>Product Management - Use cases and hackathons</li>
                <li>Backend Development - DSA and Leetcode</li>
                <li>Cloud Engineer - AWS and labs</li>
                <li>Project Management - SAPM and Usecases</li>
            </ul>
        </main>
    )
}