import React, { useState, useEffect} from 'react';

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
      const [queryString, setQueryString] = useState(sampleQuery); 
      const [queryResponse, setQueryResponse] = useState('');
      const [start, setStart] = useState(0);
      const [time, setTimer] = useState(0);

      // const timer = setInterval(() => setTimer(time += 1), 1);
      // let start: number = 0; 
      // let end: number = 0;
      useEffect(() => {

      })

      const query = (queryString: string) => {
         fetch('http://localhost:4001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({query: queryString})
        })
        .then((res) => res.json())
        .then((result) => {
          // clearInterval(timer);
        setTimer(Date.now());
        setQueryResponse(JSON.stringify(result.data.person))})
      }
      const queryOptions = 
      ['name', 'height', 'mass','hair_color','skin_color','eye_color','birth_year', 'gender'];

      return(
        <section style = {{color:'black'}} className = 'pageSection'>
        <h1 style = {{color:'black'}}> Sandbox </h1>
        <div className = 'sandbox'>
        <div>
             <p> Enter your GraphQL query here. Our Sandbox supports the querying of the 
              following information about a person with a numeric integer id from 1 to 83: 
              <ul> 
                {queryOptions.map((option) => (<li>{option}</li>))}
              </ul>
             </p>
            <textarea style = {{height:'300px', width:'300px'}} defaultValue={sampleQuery} 
            onChange = {(event) => {
              setQueryString(event.target.value)}}/>
            <button onClick = {() => {
              setStart(Date.now()) 
              query(queryString)
              }}> Send Your Query </button>
        </div>
        <div>
            <h3>Timer: {time > 0 ? <p>{time - start}</p> : <p>Loading .... </p> }</h3>
            <h3>Response: <p>{queryResponse}</p></h3>
        </div>
        </div>
        </section>
    )
}