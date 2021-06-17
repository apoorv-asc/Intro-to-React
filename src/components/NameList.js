// CodeVolution V18
import React from 'react'
import Person from './Person'
function NameList() {
    const persons = [
        {
            id:1,
            name:'Bruce',
            age: 30,
            skills : 'React'
        },
        {
            id:2,
            name:'Clark',
            age: 25,
            skills : 'Angular'
        },
        {
            id:3,
            name:'Diana',
            age: 28,
            skills : 'Vue'
        }
    ]
    // Key Prop is a special prop needed to be included in a list of elements.They
    // should be unique for every element of the list (eg: person.id)
    // They are not accessible in child component
    const personList = persons.map(person => (
        <Person key={person.id} person={person}/>
    ))
    return <div>{personList}</div>
}

export default NameList
