import React, { useEffect, useState} from 'react';
import Block from './block';
import moment from 'moment';
import Resize from '../utils/felxible';
import './app.css';

function App() {
	const [data, setData] = useState([]);
	useEffect(() => {
		Resize();
		window.addEventListener('resize',Resize)
		return () => window.removeEventListener('resize',Resize);
	},)
  useEffect(() => {
    fetch('https://systemjs.1688.com/krump/schema/1352.json')
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        console.log(res,'0000');
        const { list } = res || {}
        setData(list)
      });
  }, [])
		return (
			<div className="shop-goods">
				<div className="shop-warp">		
				<h1>1688进货红包</h1>
					{data && data.map((item, index) => {
						return <div key={index} className="shop-container">
						<div className='shop-money'>{item.money}<span className='shop-money-yuan'>元</span></div>
						<div className='shop-description'>
							<div className='shop-description-title'>{item.title}</div>
							<div className='shop-description-des'>{item.description}</div>
							<div className='shop-time' >{
								item.restTime ? <Block restTime={item.restTime}/>: 
								<div>有效期:{`${moment(item.time[0]).format("MM.DD HH:hh")}-${moment(item.time[1]).format("MM.DD HH:hh")}`}</div>
							}</div>
					</div>
					<div className='shop-status'>{item.status}</div>
					</div>
				})}
				</div>
			</div>
		)
}

export default App
