import Link from 'next/link'
import ProductCard from './components/productCard/ProductCard'

export default function Home() {
  return (
   <main>
    <h1>hello world</h1>
    <Link href="/users">go to User</Link>
    <br />
    <Link href="/users/new"> go to newUser</Link>
    <br /> <br />
    <ProductCard/>
   </main>
  )
}
