import React, { useEffect, useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import TransparentButton from '../../atoms/TransparentButton';
import Section from '../../../styles/Section';

const Deals = () => {
    const [items, setItems] = useState([]);
    const [visibleItems, setVisibleItems] = useState(10);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/deals')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => alert('Error fetching data:', error));
    }, []);

    const handleViewMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 10);
    };

    return (
        <div>
            <Sidebar />
            <Section>
                <div className="title">
                    <h1 className="text-center text-4xl mt-10">
                        <span className="italic">Deals of the Day</span>
                    </h1>
                    <div className="line bg-white mt-4 w-full">
                        <hr />
                    </div>
                </div>
            </Section>
            <div className="bg-black p-8 ml-96">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {items.slice(0, visibleItems).map(item => (
                        <div key={item.id} className="bg-white shadow-md p-4 rounded-md">
                            <h1 className='text-4xl text-center'>{item.lowest_item}</h1>
                            <hr className='mt-3'/>
                            <h3 className="font-semibold mt-3 text-black text-xl text-center">Price Changes in Markets:</h3>
                            <ul className="list-disc ml-6 mt-3">
                                {item.other_markets_prices.map(otherMarket => (
                                    <li key={otherMarket.market_name}>
                                        {otherMarket.price_change_text} ({otherMarket.market_name}: <b className='text-black'>${otherMarket.item_price.toFixed(2)})</b>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {visibleItems < items.length && (
                    <div className="text-center mt-4">
                    <TransparentButton onClick={handleViewMore}>
                        View All Deals of Today
                      </TransparentButton>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Deals