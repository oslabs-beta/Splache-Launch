import {FaGithub} from 'react-icons/fa'
export function Navbar () {
    return (
    <nav id ='navbar'> 
      <ul>
        <li><a href = '#homepage'>Home</a></li>
        <li><a href = '#intro'>The Product</a></li>
        <li><a href = '#teamContainer'>Meet the Team</a></li>
        <li><a href = 'https://github.com/oslabs-beta/Splache'><FaGithub style = {{fontSize: '20px'}}/></a></li>
      </ul>
    </nav>
    )
}