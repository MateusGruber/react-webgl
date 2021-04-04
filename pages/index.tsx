import Head from 'next/head'
import { Title, Main } from "./styles";


export default function Home() {
  return (
    <div>
      <Head>
        <title>React WebGL - Mateus Gruber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Hello World!</Title>

        <p>Work in progress... See you soon 😊</p>
      </Main>
    </div>
  )
}
