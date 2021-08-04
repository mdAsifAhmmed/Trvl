import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

const Cards = () => {
    return (
        <>
            <div className='cards'>
                <h1>Check out these EPIC Destinations</h1>
                <div className='cards_container'>
                    <div className='cards_wrapper'>
                        <ul className='cards_items'>
                            <CardItem
                                src='https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
                                text='Explore the hidden waterfall deep inside the Amazom Jungle'
                                lebel='Adventure'
                                path='./service'
                            />
                            <CardItem
                                src='https://images.pexels.com/photos/734659/pexels-photo-734659.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                text='Explore the hidden waterfall deep inside the Amazom Jungle'
                                lebel='Adventure'
                                path='./service'
                            />
                        </ul>
                        <ul className='cards_items'>
                            <CardItem
                                src='https://images.pexels.com/photos/785310/pexels-photo-785310.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                text='Explore the hidden waterfall deep inside the Amazom Jungle'
                                lebel='Adventure'
                                path='./service'
                            />
                            <CardItem
                                src='https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                text='Explore the hidden waterfall deep inside the Amazom Jungle'
                                lebel='Adventure'
                                path='./service'
                            />
                            <CardItem
                                src='https://images.pexels.com/photos/1480796/pexels-photo-1480796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                                text='Explore the hidden waterfall deep inside the Amazom Jungle'
                                lebel='Adventure'
                                path='./service'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
