import { useEffect, useRef } from "react";

export function handleTime(dataTime) {
	const currentTime = dataTime - new Date().getTime();
	const time = new Date(currentTime);
	let HH = time.getHours();
	HH = HH < 10 ? '0' + HH.toString() : HH.toString();
	let MM = time.getMinutes();
	MM = MM < 10 ? '0' + MM.toString() : MM.toString();
	let ss = time.getSeconds();
	ss = ss < 10 ? '0' + ss.toString() : ss.toString();
	const obj = {HH,MM,ss}
	return obj
}

export function UseCountDown(callback, delay) {
	const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if(delay !== null) {
			let id = setInterval(tick, delay);
    	return () => clearInterval(id);
		}
  },[delay]);
}