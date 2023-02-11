import Head from 'next/head'
import Image from 'next/image'
import logo from '../assets/splachelogo.png'

function HomePage() {
  return (
    <div>
      <Head>
        <title>Splache</title>
      </Head>
      <h1> Splache </h1>
      <p>An Agile, Nimble, & Lightweight Solution to GraphQL Caching</p>
      {/* <Image src = {logo} alt = 'logo' width = {500} height = {500}/> */}
    </div>
  )
}

export default HomePage