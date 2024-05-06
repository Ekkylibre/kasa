import { useEffect } from 'react';

function useFetchData(setData) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('src/assets/data/data.json');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erreur lors de la récupération des données JSON :', error);
            }
        };
        
        fetchData();
    }, [setData]);
}

export default useFetchData;
