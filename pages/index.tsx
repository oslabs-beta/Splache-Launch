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
import {IoLogoLinkedin} from 'react-icons/io'
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import Features from './components/Features'
import Intro from './components/Intro'
import FlipCard from './components/FlipCard'
import Sandbox from './components/Sandbox'
import DropDown from './components/DropDown'


 function HomePage() {
  const [toggled, setToggled] = useState(false); 
  const clipboardStyle = {fontSize: '20px', color: '#7fa8d2'};
  const copyToClipBoard = (): void => {
    navigator.clipboard.writeText('npm install splache'); 
    setToggled(true);
    setTimeout(() => {setToggled(false)}, 2000) 
  }
  const gitHubLinks = {
    Jess : 'https://github.com/jesswang-dev',
    NicC : 'https://github.com/nhcathcart',
    Nancy : 'https://github.com/zhangn356',
    NicJ: 'https://github.com/NicJax'
  }
  const linkedinLinks = {
    Jess : 'https://www.linkedin.com/in/jessica-xuecen-wang',
    NicC : 'He\'s mysterious',
    Nancy : 'https://www.linkedin.com/in/zhangn356',
    NicJ: 'http://www.linkedin.com/in/NicJax' 
  }
  return (
    <div>
      <Head>
        <title>Splache</title>
      </Head>
      <div className = 'innerPage'>
      <DropDown/>
      <Navbar/>
      <Homepage/>
      <Intro/>
      <Sandbox/>
      <Features/>

      <section className = 'pageSection'>
        <h1 style = {{color: '#95b8d1'}}> Meet the team</h1>
        <div id = 'teamContainer'> 
        <FlipCard img= {Jess} name={'Jessica Wang'} getGitLink={gitHubLinks.Jess} getLinkedLink ={linkedinLinks.Jess}/>
        <FlipCard img= {Nancy} name={'Nancy Zhang'} getGitLink={gitHubLinks.Nancy} getLinkedLink ={linkedinLinks.Nancy}/>
        <FlipCard img= {NicC} name={'Nicholas Cathcart'} getGitLink={gitHubLinks.NicC} getLinkedLink ={linkedinLinks.NicC}/>
        <FlipCard img = {NicJ} name = {'Nicolas Jackson'} getGitLink={gitHubLinks.NicJ} getLinkedLink ={linkedinLinks.NicJ}/>
        </div>
      </section>
    </div>
    <div style = {{marginBottom: '100px'}}></div>
    </div>
  )
}

export default HomePage;