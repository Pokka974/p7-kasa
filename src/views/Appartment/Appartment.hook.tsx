import { useEffect, useState } from 'react';
import data from '../../db.json';
import { useNavigate } from 'react-router-dom';
import { Appartment } from './Appartment.interface';

export const useAppartment = () => {
    const id: string = window.location.href.split('/')[4];
    const [appartment, setAppartment] = useState<Appartment>();
    const [notValidID, setNotValidID] = useState<boolean>(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchAppart: Appartment | undefined = data.find(
            (appart: Appartment) => appart.id === id,
        );
        console.log(fetchAppart);

        if (fetchAppart) {
            setAppartment(fetchAppart);
            setNotValidID(false);
        } else {
            setNotValidID(true);
        }
    }, []);

    useEffect(() => {
        if (notValidID) {
            navigate('not_found');
        }
    }, [notValidID]);

    return {
        appartment,
    };
};
