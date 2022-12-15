import image from '/images/beer-background3.jpg'

export function Home() {
    return (
        <div style={{ backgroundImage:`url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh' }}
        ><h1 style={{ color: 'white', textAlign: 'center'}}>Home</h1>
            {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-flex
                                    justify-content-center
                                    align-items-center"  
                        src="/images/bernard_12.jpg" 
                        alt="First slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-flex" src="/images/bernard-ipa-.jpg" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                    <img className="d-flex" src="/images/bernard_10.jpg" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div> */}
        </div>
    
    )
}