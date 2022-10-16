import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'

function App() {
    const list = data.map(item => {
        return (
            <Card 
                key={item.id}
                {...item}
            />
        )
    })

    return (
        <div>
            <Navbar />

            <section className='list-container'>
                {list}
            </section>

            <Footer />
        </div>
    )
}

export default App
