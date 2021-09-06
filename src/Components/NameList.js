import React from 'react'
import Person from './Person'
function NameList() {
    // const names = ['Hiten,Dewat,Rohan,Mohan']
    // const nameList = names.map(name=><h2>{name}</h2>)
    const names = ['Hiten', 'Dewat', 'Rohan']
    const person = [
        {
            id: 1,
            name: 'Hiten',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Dewat',
            age: 30,
            skill: 'react js'
        },
        {
            id: 3,
            name: 'Rohan',
            age: 30,
            skill: 'react native'
        }
    ]
    // const personList = person.map(person => (
    //     <Person key={person.id} person={person} />
    // ))

    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
