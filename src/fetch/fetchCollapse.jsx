import { useEffect } from 'react';

function fetchCollapse(setData, setIsOpenMap) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('src/assets/data/collapse.json');
                const jsonData = await response.json();
                setData(jsonData);

                const initialIsOpenMap = {};
                jsonData.forEach(item => {
                    initialIsOpenMap[item.id] = false;
                });
                setIsOpenMap(initialIsOpenMap);
            } catch (error) {
                console.error('Erreur lors de la récupération des données JSON :', error);
            }
        };
        
        fetchData();
    }, [setData, setIsOpenMap]);
}

export default fetchCollapse;
