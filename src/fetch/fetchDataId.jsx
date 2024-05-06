import { useEffect } from "react";

function fetchDataId(id, navigate, setAccommodation) {
    useEffect(() => {
        const fetchDataId = async () => {
            try {
                const response = await fetch('../src/assets/data/data.json');
                const jsonData = await response.json();
                const selectedAccommodation = jsonData.find(item => item.id === id);
                if (!selectedAccommodation) {
                    navigate('/error');
                    return;
                }
                setAccommodation(selectedAccommodation);
            } catch (error) {
                console.error('Erreur lors de la récupération des données JSON :', error);
            }
        };

        fetchDataId();
    }, [id, navigate, setAccommodation]);
}

export default fetchDataId;
