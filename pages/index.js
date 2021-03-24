import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="h-100-section hero bg-hero white-letters">
        <div className="overlay strong bring-to-front"></div>

        <div className="container h-100 bring-to-front">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-8 center">
              <h1 className="mb-0">
                Education Reimagined
              </h1>
              <h3 className="mt-2 mb-4">
                Forget the educational paradigm you've known all your life. We're reinventing education, and your family can be a part
                of it.
              </h3>
            </div>
            <div className="col-sm-12 center">
              <div className="buttons">
                <a href="https://vimeo.com/83651159" data-lity className="button white">
                  Watch video <i className="fa fa-play ml"></i>
                </a>
                <a className="button quaternary" href="{{ 'apply' | relative_url }}">Apply Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

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