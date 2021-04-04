import Head from 'next/head'
import HelloWorld from '../components/HelloWorld';


export default function Home() {
  return (
    <div>
      <Head>
        <title>React WebGL - Mateus Gruber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HelloWorld/>
    </div>
  )
}
