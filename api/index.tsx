import { Button, Frog, } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
  title: 'Frog Frame',
})

app.frame('/', (c) => {

  return c.res({
    action:'/meta1',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmRGwQWWZirJQCrikQnHusRUy6vhkD4VB1Yfdyh9UnyFLm'
      ),
    intents: [
      <Button action="/meta1">Metamask</Button>,
      <Button action="/compass1">Compass</Button>
    ],
  })
})

app.frame('/meta1', (c) => {

  return c.res({
    action:'/meta2',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmTMP4bbnJA7mj3DhNTMjCQCJ4x9jpfbQuRSKFAviZrter'
      ),
    intents: [
      <Button action="/meta2">Next</Button>,
    ],
  })
})

app.frame('/compass1', (c) => {

  return c.res({
    action:'/compass2',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmUXJp9814Yjr5bpb1S8VBbZ8TSyRn23LVRKicFqgBhy4H'
      ),
    intents: [
      <Button action="/compass2">Next</Button>,
    ],
  })
})

app.frame('/meta2', (c) => {

  return c.res({
    action:'/meta3',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmV894HSWBTCP6pthixVmoQRd89JufQjvGx23Q2hRrFh83'
      ),
    intents: [
      <Button action="/meta3">Next</Button>,
    ],
  })
})

app.frame('/meta3', (c) => {

  return c.res({
    action:'/both1',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmSbtDuYE1vkwmPZkEnvwstZZHRAGi8drLYAuu7tcQW9tL'
      ),
    intents: [
      <Button action="/both1">Next</Button>,
    ],
  })
})

app.frame('/compass2', (c) => {

  return c.res({
    action:'/compass3',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/Qmf7TFs7HwhVGveDcTCLBY8Xq7Ex4nqUkpmw2EjMp7Ucqk'
      ),
    intents: [
      <Button action="/compass3">Next</Button>,
    ],
  })
})

app.frame('/compass3', (c) => {

  return c.res({
    action:'/both1',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmVgzPgwMRZJYokavSUC78Ba2MhdGCs8y6G7Pd8y1LB1rB'
      ),
    intents: [
      <Button action="/both1">Next</Button>,
    ],
  })
})

app.frame('/both1', (c) => {

  return c.res({
    action:'/both2',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmPcsoDUUPCJB7QN9As1LRaioogZ9oWaoLHhcBDX2ruPku'
      ),
    intents: [
      <Button action="/both2">Next</Button>,
    ],
  })
})

app.frame('/both2', (c) => {

  return c.res({
    action:'/both3',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmV6zYRJPAv5YCMeo86LpcRXYon3CiL94E6Mm8nWG7kMAo'
      ),
    intents: [
      <Button action="/both3">Next</Button>,
    ],
  })
})

app.frame('/both3', (c) => {

  return c.res({
    action:'/both4',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmakCC2xRG72GYdA6CaZXcLQYdgqKvmwxrmSkTMqSH8HRo'
      ),
    intents: [
      <Button action="/both4">Next</Button>,
    ],
  })
})

app.frame('/both4', (c) => {

  return c.res({
    action:'/',
    image: ('https://amethyst-able-sawfish-36.mypinata.cloud/ipfs/QmUzxXb5GLGyeobR9vw43BjQr2Ce6njfLHqNSWrQH9WJSq'
      ),
    intents: [
      <Button.Link href="https://metamask.io/download/">Metamask</Button.Link>,
      <Button.Link href="https://compasswallet.io/download">Compass</Button.Link>,
      <Button.Link href="https://explorer.gitcoin.co/?ref=blog.sei.io#/round/1329/9/191">Proposal</Button.Link>, 
      <Button action="/">Restart</Button>,
    ],
  })
})

// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
