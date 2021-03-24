export default function Hero({ imagePath }) {
  return (
    <>
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
    <style jsx>
      {`
        .bg-hero {
          background: no-repeat center 30%;
          background-size: cover;
          padding-top: 15rem;
          padding-bottom: 12rem;
          background-image: url(${imagePath});
        }
        .hero {
          padding: 8rem 0;
          min-height: 450px;
          display: flex;
          align-items: center;
          text-align: center;
        }
      `}
    </style>
    </>
  )
} 