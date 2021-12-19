import { useEffect, useRef, useState } from "react";

export const Timer = () => {
    const [counter, setCounter] = useState<number>(0);
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () => {
        if(intervalRef.current) clearInterval(intervalRef.current);
    }

    useEffect(()=> {
        intervalRef.current = window.setInterval(()=> {
            setCounter(prevCounter => prevCounter + 1)
        } , 1000);
    }, [])


    return (
        <div>
            {counter}
            <button onClick={stopTimer}> stop</button>
        </div>
    )
};