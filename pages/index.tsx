import Head from 'next/head'
import Image from 'next/image'
import logo from '../assets/splachelogo.png'
import Jess from '../assets/Jess.jpeg'
import NicC from 'assets/NicC.jpeg'
import NicJ from 'assets/NicJ.jpeg'
import Nancy from 'assets/Nancy.png'
import diagram1 from 'assets/diagram1.png'
import logomark from 'assets/logomark.png'
import {FaRegClipboard, FaClipboardCheck, FaGithub} from 'react-icons/fa';
import React, { useState } from 'react';


 function HomePage() {
  const [toggled, setToggled] = useState(false); 
  const clipboardStyle = {fontSize: '20px', color: '#7fa8d2'};
  const copyToClipBoard = (): void => {
    navigator.clipboard.writeText('npm install splache'); 
    setToggled(true);
    setTimeout(() => {setToggled(false)}, 2000) 
  }

  return (
    <div>
      <Head>
        <title>Splache</title>
      </Head>
      <div className = 'innerPage'>

      <nav id ='navbar'> 
      <ul>
        <li><a href = '#homepage'>Home</a></li>
        <li><a href = '#intro'>The Product</a></li>
        <li><a href = '#teamContainer'>Meet the Team</a></li>
        <li><a href = 'https://github.com/oslabs-beta/Splache'><FaGithub style = {{fontSize: '20px'}}/></a></li>
      </ul>
      </nav>
      
      <section id = 'homepage'>

      <h1 id = 'logo'> <Image src = {logomark} alt = 'logomark' id = 'logomark'/><em>Splache</em></h1>
      <p> An Agile, Nimble, & Lightweight Solution to GraphQL Caching</p>
      <div id='clipboard'>
        <p> npm install splache <button className = 'clipboardButton' 
        onClick = {() => {copyToClipBoard()}}>{
          toggled? < FaClipboardCheck style ={clipboardStyle}/> : <FaRegClipboard style = {clipboardStyle}/>}
          </button></p>
      </div>
      <div style = {toggled ? {display: 'block'} : {display: 'none'}}> <p> Successfully copied to clipboard! </p></div>
      </section>
      
      <br/>

      <section id = 'textbox'>
        <p id  = 'intro'>
        <b><span style ={{fontSize: '20px'}}>Introducing Splache</span></b> (/splæʃ/), an agile, user-friendly, and lightweight JavaScript library 
        <br/>that efficiently caches GraphQL queries using the power of Redis. 
        <br/>The Splache library is designed for improved performance and reduced load on your GraphQL server.
        <br/>Through leveraging the speed and scalability of Redis, 
        <br/>Splache is able to provide an efficient and unique solution for caching GraphQL queries! 
        </p>
        <Image src = {diagram1}  style = {{width: '800px', height: '500px'}} alt ='high-level-diagram'/>
      </section>

      <section id = 'textbox'>
        <h1> Features </h1> 
        <ol>
          <li> User friendly: Splache has been designed to be approachable, making it easy to integrate into your existing GraphQL architecture.</li>
          <br/><li> Light and fast: The library has a simple, intuitive API that reduces overhead, providing a caching solution without unnecessary features.</li>
          <br/><li> Improved performance: By caching GraphQL queries in Redis, the library helps to reduce the load on your GraphQL server, leading to improved performance for your application.</li>
        </ol>
      </section>

      <section className = 'pageSection'>
        <h1 style = {{color: '#95b8d1'}}> Meet the team</h1>
        <div id = 'teamContainer'> 
          <Image className = 'team' src = {Jess} alt = 'Jess'/> 
          <Image className = 'team' src = {Nancy} alt = 'Nancy'/>
          <Image className = 'team' src = {NicC} alt = 'NicC'/>
          <Image className = 'team' src = {NicJ} alt = 'NicJ'/>
        </div>
      </section>

    </div>
    </div>
  )
}

export default HomePage;