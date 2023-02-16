export function Features () {
    return (
    <div className='view' id='features'>
        <section id = 'textbox2'>
        <h1> Features </h1> 
        <ol>
          <li> User friendly: Splache has been designed to be approachable, making it easy to integrate into your existing GraphQL architecture.</li>
          <br/><li> Light and fast: The library has a simple, intuitive API that reduces overhead, providing a caching solution without unnecessary features.</li>
          <br/><li> Improved performance: By caching GraphQL queries in Redis, the library helps to reduce the load on your GraphQL server, leading to improved performance for your application.</li>
        </ol>
      </section>
    </div>
    )
}