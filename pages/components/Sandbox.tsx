import React, { useState} from 'react';
export default function Sandbox(){
    console.log(process.env.demo_ip)
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
      const [func, setFunc] = useState('wholeCache')
      const [queryString, setQueryString] = useState(sampleQuery); 
      const [queryResponse, setQueryResponse] = useState('');
      const [start, setStart] = useState(0);
      const [time, setTimer] = useState(0);
      const demo_ip = process.env.demo_ip
      const wholeCache = (queryString: string) => {
         fetch(`http://localhost:4002/graphql/cacheWhole`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({query: queryString})
        })
        .then((res) => res.json())
        .then((result) => {
        setTimer(Date.now());
        setQueryResponse(JSON.stringify(result.data.person))})
      }

      const resolverCache = (queryString: string) => {
        fetch('http://localhost:4002/graphql/resolver', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({query: queryString})
      })
      .then((res) => res.json())
      .then((result) => {
      setTimer(Date.now());
      setQueryResponse(JSON.stringify(result.data.person))})
      }

      const splacheCache = (queryString: string) => {
        fetch('http://localhost:4002/graphql/SplacheCache', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({query: queryString})
      })
      .then((res) => res.json())
      .then((result) => {
      setTimer(Date.now());
      setQueryResponse(JSON.stringify(result.data.person))})
      }

      const queryOptions = 
      ['name', 'height', 'mass','hair_color','skin_color','eye_color','birth_year', 'gender'];

      return(
        <section  className = 'pageSection' id = 'sandboxStart'>
        <h1 > Sandbox </h1>
        <h2> Demo our library pre-installation </h2>

        <nav>

        <button onClick = {() => {
          setFunc('wholeCache')
        }}> Caching of Whole Queries </button>

        <button onClick = {() => {
          setFunc('resolverCache')
        }}> Caching Results of Resolvers </button>
        <button onClick = {() => {
          setFunc('splacheCache')
        }}> Query String Normalization </button>

        </nav>

        <div className = 'sandbox'>

        <div id = 'queryEntry'>
             <p> Enter your GraphQL query here. Our Sandbox supports the querying of the 
              following information about a person with a numeric integer id from 1 to 83: </p>
              <ul> 
                {queryOptions.map((option) => (<li key = {option} >{option}</li>))}
              </ul>
            <textarea style = {{height:'300px', width:'300px'}} defaultValue={sampleQuery} 
            onChange = {(event) => {
              setQueryString(event.target.value)}}/>
            <button onClick = {() => {
              setStart(Date.now()) 
              if (func === 'wholeCache') wholeCache(queryString); 
              if (func === 'resolverCache') resolverCache(queryString);
              if (func === 'splacheCache') splacheCache(queryString); 
              }}> Send Your Query </button>
        </div>

        <div id = 'sandboxResponse'>
            <h3>Timer: {time > 0 ? <p>{time - start} ms </p> : <p>Loading .... </p> }</h3>
            <h3>Response: <p>{queryResponse}</p></h3>
        </div>

        </div>
        </section>
    )
}