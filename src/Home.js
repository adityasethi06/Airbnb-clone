import React from 'react'
import './Home.css'
import Banner from './Banner';
import Card from './Card'

const Home = () => {
    return (
        <div>
            <Banner />
            <div style={{ margin: "0 5vw"}} className="home_section">
                <Card
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUE4eLot4jhPTkA29w3-LQ8qRejJLRkXxN3Q&usqp=CAU"
                    title="Penthouse in London"/>
                <Card
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSUoI8_n1VP9uUqOO7UzKoYBRU9Yo3YxOyECA&usqp=CAU"
                    title="Airbnb Luxe"/>
                <Card
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTfoqYmRiUDRk9R82ppwEv21q4isqYnlkljkg&usqp=CAU"
                    title="Conde Nast"/>
            </div>
            <div style={{ margin: "0 5vw"}} className="home_section">
                <Card
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM8GIYd-JVSVo1Ga9k2v7R6zq9lc65fQ_zpA&usqp=CAU"
                    title="Penthouse in London"/>
                <Card
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7INiKCpe4d6uCnQ8Y1W6V8lgaOhLUoWjxyg&usqp=CAU"
                    title="Airbnb Luxe"/>
                <Card
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS57cDG3VWWCcAh2N8v9s8b73DdHLP7gWR2Ew&usqp=CAU"
                    title="Conde Nast"/>
            </div>
        </div>
    )
}

export default Home
