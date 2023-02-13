import Head from 'next/head'
import Image from 'next/image'
import logo from '../assets/splachelogo.png'
import Jess from '../assets/Jess.jpeg'
import NicC from 'assets/NicC.jpeg'
import NicJ from 'assets/NicJ.jpeg'
import Nancy from 'assets/Nancy.png'
import {FaRegClipboard, FaClipboardCheck} from 'react-icons/fa';
import React, { useState } from 'react';


function HomePage() {
  const [toggled, setToggled] = useState(false); 
  const clipboardStyle = {fontSize: '20px', color: '#7fa8d2'};
  // const popup = {display: 'block', position: 'absolute'}
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
      <h1 className = 'logo'> <em>Splache</em></h1>
      <p> An Agile, Nimble, & Lightweight Solution to GraphQL Caching</p>
      {/* <Image src = {logo} alt = 'logo' width = {700} height = {500}/> */}
      <div className='clipboard'>
        <p> npm install splache <button className = 'clipboardButton' 
        onClick = {() => {copyToClipBoard()}}>{
          toggled? < FaClipboardCheck style ={clipboardStyle}/> : <FaRegClipboard style = {clipboardStyle}/>}
          </button></p>
      </div>
      <div style = {toggled ? {display: 'block'} : {display: 'none'}}> <p> Successfully copied to clipboard! </p></div>
      <br></br>
      <div style = {{marginTop: '300px'}}>
        <h1 style = {{color: '#95b8d1'}}> Meet the team</h1>
        <div className = 'teamContainer'> 
          <Image className = 'team' src = {Jess} alt = 'Jess'/> 
          <Image className = 'team' src = {Nancy} alt = 'Nancy'/>
          <Image className = 'team' src = {NicC} alt = 'NicC'/>
          <Image className = 'team' src = {NicJ} alt = 'NicJ'/>
        </div>
      </div>
    </div>
  )
}

export default HomePage