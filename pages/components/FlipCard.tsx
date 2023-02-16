import Image from 'next/image'
import { FaGithub } from 'react-icons/fa'
import {IoLogoLinkedin} from 'react-icons/io'

export function FlipCard(props){
    return(
<div className = 'flipCard'>
  <div className = 'flipCardInner'>
    <div className = 'flipCardFront'>
    <Image className = 'team' src = {props.img} alt = {`${props.img}`}/> 
    </div>

    <div className = 'flipCardBack'>
        <h2> {props.name} </h2>
        <h3> Links </h3>
        <a href = {props.getGitLink} className = 'links'> <FaGithub/></a>
        <br/>
        <a href = {props.getLinkedLink} className = 'links'> <IoLogoLinkedin/></a>
    </div>
  </div>
</div>
    )
}