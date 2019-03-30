import Link from 'next/link'

const Index = () => (
  <div>
    <p>Hello HackSC</p>

    <Link href='/api'>API</Link>
    <Link href='/map'>Map</Link>
    <Link href='/faq'>FAQ</Link>
  </div>
)

export default Index
