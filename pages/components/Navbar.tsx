import {FaGithub} from 'react-icons/fa'
export default function Navbar () {
    return (
    <nav id ='navbar'> 
        <p className='nav'><a href = '#homepage'>Home</a></p>
        <p className='nav'><a href = '#intro'>The Product</a></p>
        <p className='nav'><a href = '#sandboxStart'>Sandbox</a></p>
        <p className='nav'><a href = '#features'>Features</a></p>
        <p className='nav'><a href = '#teamContainer'>Meet the Team</a></p>
        <p className='nav'><a href = 'https://github.com/oslabs-beta/Splache'><FaGithub style = {{fontSize: '20px'}}/></a></p>
    </nav>
    )
}