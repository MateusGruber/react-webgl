import Head from 'next/head'
import Scene from '../components/Scene';


export default function Home() {
  return (
    <div>
      <Head>
        <title>React WebGL - Mateus Gruber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Scene/>
    </div>
  )
}
