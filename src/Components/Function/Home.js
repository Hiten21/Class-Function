import React from 'react'

const Home = (props) => {
    const {name}=props
    return (
        <div>
            <h1>This is{name} </h1>
        </div>
    )
}

export default Home
