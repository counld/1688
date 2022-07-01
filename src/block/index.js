import React, { useState } from "react";
import { handleTime, UseCountDown } from "../../utils/time";
import './block.css';

export default function Block(props) {
	const { restTime } = props;
	const [currentTime, setCurrentTime] = useState(restTime);

	UseCountDown(function callback(){
					if (currentTime > 0) {
						setCurrentTime(currentTime - 1);
					}
	},1000)
	return (
		<>
			距结束 &nbsp;<span className="shop-time-block">{handleTime(currentTime).HH}</span> : <span className="shop-time-block">{handleTime(currentTime).MM}</span> : <span className="shop-time-block">{handleTime(currentTime).ss}</span>
		</>
	)
}