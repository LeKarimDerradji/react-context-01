import React from 'react'
import GrandChild from './GrandChild'

const Child = () => {
    

    return (
        <div>
            <h1>I am the child of App components</h1>
            <h2>My parent wrapped me between the ThemeContext Context</h2>
            <GrandChild/>
        </div>
    )
}

export default Child
