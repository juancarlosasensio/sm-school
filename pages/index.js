import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from '../components/hero'

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Hero imagePath={"images/bg-hero-home.jpg"} />
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h2 className="section-heading primary separator-right-lg">
                A 21st Century School in Hogwarts
              </h2>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <p className="lead lead-sm">
                We offer a truly different approach to school. Supported by the latest in technology and magic, we move
                beyond the traditional tools of lectures, homework, high-stakes tests, and grades. 
              </p>
              <p className="lead lead-sm">
                At Hogwarts School of Magic, our students learn in collaborative classrooms of multi-age learners. Our flexible approach challenges each student with 
                their own differentiated learning plan and inspires them through real-world magic tests and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}