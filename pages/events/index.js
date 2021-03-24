import Head from 'next/head'
import Layout from '../../components/layout'
import EventCard from '../../components/EventCard'

export default function Events() {
  const pageTitle = "Events";
  const events = new Array(3).fill(1).map((_, i) => ({
    date: Date.now() + i,
    slug: `open-house-${i}`,
    title: `Open House ${i}`,
    description: `Fun event to get to know our school and community.` 
  }))
  
  return (
    <Layout>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <section className="pb-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <h1>Upcoming Events</h1>
            </div>
          </div>
        </div>
      </section>      
      <div className="pb-events-index">
        {events.map(event => (
          <EventCard date={event.date} title={event.title} slug={event.slug} description={event.description} key={event.title} />
        ))}
      </div>
    </Layout>
  )
}
