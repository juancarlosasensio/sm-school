import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function EventPage () {
  const router = useRouter()
  const { slug, title }= router.query

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container mb-5">
        <div className="pb-events--wrapper">
          <div>
            <h1>Event: {title}</h1> 

            <h2>{slug}</h2>

            <Link href="/events">
              <a>← Back to Events</a>
            </Link>
          </div>
        </div>      
      </div>
    </Layout>
  )
}
