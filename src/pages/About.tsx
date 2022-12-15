import image from '/images/beer-background3.jpg'

export function About() {
    return (
        <div style={{ backgroundImage:`url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            minHeight: '100vh'  }}>
            <h1 style={{ color: 'white', textAlign: 'center'}}>About</h1>
        </div>
    )
}