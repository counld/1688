import { useEffect, useRef } from "react";

export function handleTime(dataTime) {
	let HH = parseInt(dataTime / 3600);
	let MM = parseInt(dataTime % 3600 / 60);
	let ss = parseInt(dataTime % 60);
	HH = HH < 10 ? '0' + HH.toString() : HH.toString();
	MM = MM < 10 ? '0' + MM.toString() : MM.toString();
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