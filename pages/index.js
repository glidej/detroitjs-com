import React, {createClass} from 'react'
import Layout from '../components/layouts/master'
import Meetups from '../components/meetups'

export default () => (
<Layout>
    <main className="section">
        <h2 className="title yellow is-2 has-text-centered">Upcoming Meetups</h2>
        <div className="container">
            <Meetups />
        </div>
    </main>
</Layout>
)
