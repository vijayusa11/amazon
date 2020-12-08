import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/GWPhase1/5_DesktopHero_Unrec_150x600-._CB419216629_.jpg' alt=''/>
            <div className='home__row'>
                <Product id='12345' title='Apple iPhone 11 (64GB) - Black (Includes EarPods, Power Adapter)' price={29289} 
                image='https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_SX240_SY110_QL70_.jpg' rating={5} />
                <Product id='23456' title='OnePlus Nord 5G (Blue Marble, 8GB RAM, 128GB Storage)' price={11999} 
                image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnJ3722ivbowHcc9f3TEiNHa09S2Wlyb-Vyw&usqp=CAU' rating={3} />
            </div>
            <div className='home__row'>
            <Product id='34567' title='Samsung Galaxy M31s' price={15119} 
                image='https://m.media-amazon.com/images/I/710weRkP-nL._AC_SX180_SY120_QL70_.jpg' rating={2} />
            <Product id='45678' title='Redmi 9A (2Gb Ram, 32Gb Storage) ' price={4125} 
                image='https://m.media-amazon.com/images/I/71sxX9aLtnL._AC_UY218_.jpg' rating={4} />
            <Product id='56789' title='Apple iPhone 7 (32GB) - Black' price={8947} 
                image='https://m.media-amazon.com/images/I/41D9NDiSzjL._AC_SX240_SY110_QL70_.jpg' rating={3} />
            </div>
            <div className='home__row'>
            <Product id='67890' title='Oppo A52 (Twilight Black, 6GB RAM, 128GB Storage)' price={5514} 
                image='https://m.media-amazon.com/images/I/71RadpHBLhL._AC_UY218_.jpg' rating={4} />
            </div>
            </div>
        </div>
    )
}

export default Home
