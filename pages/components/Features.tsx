
import { BiHappyBeaming } from "react-icons/bi";
import {BsFillLightningChargeFill} from "react-icons/bs"
import {GrGraphQl} from 'react-icons/gr'

export default function Features () {
    return (
    <div className='view' id='features'>
      <div className="featureBox">
        
        <h1> Features </h1> 

        <section className = 'featureContainer'>
          <div className = 'featureInd'>
            <h3> User-Friendly</h3>
            <BiHappyBeaming className='icon' />
          <p>  Splache has been designed to be approachable, making it easy to integrate into your existing GraphQL architecture.</p>
          </div>

          <div className = 'featureInd'>
            <h3> Light & Fast </h3>
            <BsFillLightningChargeFill className='icon'/>
          <p> The library has a simple, intuitive API that reduces overhead, providing a caching solution without unnecessary features.</p>
          </div>

          <div className = 'featureInd'>
           
          <h3> Improved Performance </h3>
          <GrGraphQl className = 'icon'/>
          <p> By caching GraphQL queries in Redis, the library helps to reduce the load on your GraphQL server, leading to improved performance for your application.</p>
          </div>
      </section>
    </div>
    </div>
    )
}