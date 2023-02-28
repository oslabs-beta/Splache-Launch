import React, { useState} from 'react';
export default function Sandbox(){

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
      const [button1CSS, setbutton1CSS] = useState('sandBoxButton');
      const [button2CSS, setbutton2CSS] = useState('sandBoxButton');
      const [button3CSS, setbutton3CSS] = useState('sandBoxButton')

      const wholeCache = (queryString: string) => {
         fetch('http://localhost:4002/graphql/cacheWhole', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({query: queryString})
        }).then((res) => res.json())
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
      setQueryResponse(JSON.stringify(result))})
      }

      const responseFormatter = (response: string): string => {
        let formattedRes: string = '';
        for (const char of response){
          if (char === ',') formattedRes += '\n';
          else formattedRes += char;
        }
        return formattedRes;
      }

      const queryOptions = 
      ['name', 'height', 'mass','hair_color','skin_color','eye_color','birth_year', 'gender'];

      return(
        <section  className = 'pageSection' id = 'sandboxStart'>
        <h1 > Sandbox: <em>Demo our library pre-installation</em></h1>

        <nav id = 'sandboxNav'>

        <button className = {button1CSS} onClick = {() => {
          setbutton1CSS('clickedButton')
          setbutton2CSS('sandBoxButton')
          setbutton3CSS('sandBoxButton')
          setFunc('wholeCache')
        }}> Caching of Whole Queries </button>

        <button className = {button2CSS} onClick = {() => {
          setbutton2CSS('clickedButton')
          setbutton1CSS('sandBoxButton')
          setbutton3CSS('sandBoxButton')
          setFunc('resolverCache')
        }}> Caching Results of Resolvers </button>

        <button className = {button3CSS} onClick = {() => {
          setbutton3CSS('clickedButton')
          setbutton1CSS('sandBoxButton')
          setbutton2CSS('sandBoxButton')
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

            <textarea id = 'textarea' defaultValue={sampleQuery} 
            onChange = {(event) => {
              setQueryString(event.target.value)}}/>
              <br/>
            <button className = 'clickedButton' onClick = {() => {
              setStart(Date.now()) 
              if (func === 'wholeCache') wholeCache(queryString); 
              if (func === 'resolverCache') resolverCache(queryString);
              if (func === 'splacheCache') splacheCache(queryString);
              }}> Send Your Query </button>

        </div>

        <div id = 'sandboxResponse'>

            <div>Timer: {time > 0 ? <p>{time - start} ms </p> : <p>Loading .... </p> }</div>

            <div id ='queryRes'>Response:<p>{responseFormatter(queryResponse)}</p></div>
        </div>

        </div>
        </section>
    )
}