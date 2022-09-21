import { useEffect, useState } from 'react';

const useDeveloper = () => {
    const [developers, setDevelopers] = useState([])
    useEffect(() => {
        fetch('developerdata.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, [])
    return (
        [developers]
    );
};

export default useDeveloper;