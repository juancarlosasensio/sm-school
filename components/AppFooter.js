import Link from 'next/link'

 export default function AppFooter() {
   return (
     <>
      <footer className="center">
        <div className="container">
          <h3 className="bold">Begin your family's journey</h3>
          <Link href="/">
            <a className="button quaternary m2">Apply Now</a>
          </Link>

          <div className="row mt2">
            <div className="col-12">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/">
                <a>About</a>  
              </Link>
              <Link href="/events">
                <a href="/">Events</a>  
              </Link>
              <Link href="/">
                <a>Contact</a>
              </Link>  
          </div>
        </div>
        <p className="copyright">
          © Hogwarts School of Magic 2021
        </p>
      </div>
    </footer> 
     </>
   )
 }
