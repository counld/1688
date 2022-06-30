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
		<div>
			距结束&nbsp;<span className="shop-time-block">{handleTime(restTime).HH}</span>:			<span className="shop-time-block">{handleTime(restTime).MM}</span>:
			<span className="shop-time-block">{handleTime(currentTime).ss}</span>
		</div>
	)
}