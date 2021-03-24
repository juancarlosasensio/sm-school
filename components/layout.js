import Head from 'next/head'
import Nav from './AppNavbar'
import Footer from './AppFooter'

export const siteTitle = 'Hogwarts School of Magic'

export default function Layout({ children }) {
  return (
      <>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"/>
        <meta
          property="og:image"
          content={`http://localhost:300/public/images/favicon.png`}/>
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />
      <main>{children}</main>
      < Footer />
      </>
  )
}