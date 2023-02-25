import React, { useState } from 'react';

export function Sandbox(){
    const sampleQuery: string = 
    `
     {
        person(id: "3") {
          name
          height
          mass
          hair_color
          skin_color
          eye_color
          birth_year
          gender
        }
      }`;

      const [queryResponse, setQueryResponse] = useState('');
      const query = (queryString: string) => {
         fetch('http://localhost:4001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({query: sampleQuery})
        })
        .then((res) => res.json())
        .then((result) => {
          console.log("in fetch after resolve, result", result)
        setQueryResponse(result)})
      }
    return(
        <section style = {{color:'black'}} className = 'pageSection'>
        <h1 style = {{color:'black'}}> Sandbox </h1>
        <div className = 'sandbox'>
        <div>
            <textarea style = {{height:'300px', width:'300px'}} defaultValue={sampleQuery}/>
            <button onClick = {() => {query(sampleQuery)}}> Send Your Query </button>
        </div>
        <div>
            <h3>Timer:</h3>
            <h3>Response: <p>{queryResponse}</p></h3>
        </div>
        </div>
        </section>
    )
}