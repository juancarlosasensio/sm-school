import { Navbar } from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/router'

export default function AppNavbar() {
  const router = useRouter()

  return (
    <div className="navbar-wrapper">
      <Navbar className="navbar navbar-expand-lg navbar-light solid">
        <div className="container align-items-center">
          <Navbar.Brand>
             <Link href="/">
              <a className="navbar-brand logo-wrapper">
                <Image
                  src="/images/logo.png"
                  alt="Logo of Hogwarts"
                  width={120}
                  height={120}
                />
              </a>
            </Link>
          </Navbar.Brand>
          <button className="navbar-toggler sidebar-toggler" type="button">
            <i className="fa fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">About</a>
              </Link>
            </li>
              <Link href="/events" className="nav-item">
                <a className="nav-link">
                  Events
                </a>
              </Link>
              <Link href="/" className="nav-item">
                <a className="nav-link">
                  Contact
                </a>
              </Link>
              <Link href="/">
                <a className="nav-link button white">Apply Now</a>
              </Link>
            </ul>  
          </div>
        </div>  
      </Navbar>
    </div>
  )
}