import Image, { StaticImageData } from 'next/image'
import { FaGithub } from 'react-icons/fa'
import {IoLogoLinkedin} from 'react-icons/io'

export default function FlipCard(props: {img: StaticImageData, getGitLink: string, getLinkedLink: string, name: string}){
    return(
<div className = 'flipCard'>
  <div className = 'flipCardInner'>
    <div className = 'flipCardFront'>
    <Image className = 'team' src = {props.img} alt = {`${props.img}`}/> 
    </div>

    <div className = 'flipCardBack'>
        <h2> {props.name} </h2>
        <h3> Links </h3>
        <a href = {props.getGitLink} className = 'links'> <FaGithub className = 'icons'/></a>
        <br/>
        <a href = {props.getLinkedLink} className = 'links'> <IoLogoLinkedin className ='icons'/></a>
    </div>
  </div>
</div>
    )
}