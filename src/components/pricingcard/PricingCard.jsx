import React from 'react';
import { Link } from 'react-router-dom';
import './PricingCard.scss';

const PricingCard = () => {
  return (
    <div  className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>- 3 day -</p>
                <p>- 3 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>

            <div className='card'>
                <h3>- Premium -</h3>
                <span className='bar'></span>
                <span className='btc'>$ 300</span>
                <p>- 5 day -</p>
                <p>- 5 pages -</p>
                <p>- Featured -</p>
                <p>- Building Contractor -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>

            <div className='card'>
                <h3>- Master -</h3>
                <span className='bar'></span>
                <span className='btc'>$ 700</span>
                <p>- 7 day -</p>
                <p>- 9 pages -</p>
                <p>- Featured -</p>
                <p>- Electrical Engineer -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>
        </div>

    </div>
  )
}

export default PricingCard;