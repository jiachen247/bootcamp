import React, { useState, useEffect }  from 'react'
import "regenerator-runtime/runtime"; // for using async/await

function App() {
    const [items, setItems] = useState([])
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const requestURL = 'https://raw.githubusercontent.com/rocketacademy/bootcamp-docs/master/fixture-data/products.json'
        const request = new Request(requestURL)
        const response = await fetch(request)
        const jsonData = await response.json()
        const items = jsonData["items"]
        console.log("got items!!")
        setItems(items)
    }

    return (
        <ul>
            {items.map(({id, name, description, createdAt, updatedAt}) => 
            <li key={id}> 
                <p>id: {id}</p>
                <p>name: {name}</p>
                <p>description: {description}</p>
                <p>created: {createdAt}</p>
                <p>updated: {updatedAt}</p>
            </li>)}
        </ul>
    )
}

export default App;