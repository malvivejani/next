import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Home page</h1>
      <Link href='/docs'>Docs</Link>
      <h5>
        <Link href='/blog'>Blog</Link>
      </h5>
      <h3 onClick={() => { router.push('/product') }}>Programmatical routing</h3>
      <h5>
        <Link href='/posts'>Posts</Link>
      </h5>
    </div>

  )
}

export default Home;