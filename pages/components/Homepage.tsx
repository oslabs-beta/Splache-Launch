import {FaRegClipboard, FaClipboardCheck} from  'react-icons/fa'
import Image from 'next/image'
import logomark from 'assets/logomark.png'
import {useState} from 'react'

export function Homepage () {

    const [toggled, setToggled] = useState(false); 
    const clipboardStyle = {fontSize: '20px', color: '#7fa8d2'};
    const copyToClipBoard = (): void => {
    navigator.clipboard.writeText('npm install splache'); 
    setToggled(true);
    setTimeout(() => {setToggled(false)}, 2000) 
  }
  
    return (
        <div className='view' style={{height: '60vh'}} id = 'homepage'>
        <section id = 'logoSection'>

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
        </div>
        
    )
}