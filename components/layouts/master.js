import Head from 'next/head'
import Nav from '../nav'
import Footer from '../footer'

export default ({children}) => (
<div>
   <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Detroit JS Website" />
        <title>DetroitJS</title>
        <link rel="stylesheet" href="/static/app.css" />
    </Head>
    <header className="section">
        <div className="container">

                <h1>Detroit.JS</h1>
                <h3>A community of JavaScript developers in Detroit</h3>

        </div>
    </header>
    <Nav />
    {children}
    <Footer />
</div>
)
