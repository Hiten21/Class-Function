import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>{person.name}.I am {person.age}.MY skills is {person.skill}</h2>
        </div>
    )
}

export default Person
