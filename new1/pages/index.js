import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{display : 'flex', justifyContent: 'center', alignItems : 'center' , height : '100vh'}}>
      This is Home Page
    </div>
  )
}
