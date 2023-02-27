export default function Features () {
    return (
    <div className='view' id='features'>
      <div className="featureBox">
        
        <h1> Features </h1> 
        <ul>
          <li> User friendly: Splache has been designed to be approachable, making it easy to integrate into your existing GraphQL architecture.</li>
          <li> Light and fast: The library has a simple, intuitive API that reduces overhead, providing a caching solution without unnecessary features.</li>
          <li> Improved performance: By caching GraphQL queries in Redis, the library helps to reduce the load on your GraphQL server, leading to improved performance for your application.</li>
        </ul>
      
      </div>
    </div>
    )
}