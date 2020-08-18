import { useState, useEffect } from 'react';


export const useDebounce = (value, delay) => {
    const [ dbValue, setDbValue ] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDbValue(value), delay);
        return () => clearTimeout(handler);
    }, [ value, delay ]);

    return dbValue;
};