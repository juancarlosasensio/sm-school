import React from 'react'
import Link from 'next/link'

 export default function EventCard({title, slug, date, description}) {
   const dateObj = new Date(date)

   return (
     <>
      <div className="pb-event-card" key={title}>
        <Link href={`/events/${slug}?title=${title}`}>
          <a className="absolute-link"></a>
        </Link>
        <div className="pb-img-wrapper img-animated no-img">
          <div className="pb-event-card-banner--content">
            <h3 className="pb-event-card-banner--title">{title}</h3>
            <div className="pb-event-card-banner--date">{dateObj.toDateString()}</div>
          </div>
        </div>
        <div>
          <h3 className="pb-event-card--title"><strong>{title}</strong></h3>
          <div className="pb-event-card--meta">
            <div className="pb-event-card--date">
              {dateObj.toDateString()}
            </div>
            <div className="pb-event-card--address">
            </div>
          </div>
          <div className="pb-event-card--content">
            {description}
          </div>
        </div>    
      </div>
     </>
   )
 }


