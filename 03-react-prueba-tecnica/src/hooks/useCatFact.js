import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts';

export function useCatFact() {
    const [fact, setFact] = useState();
    const refreshFact = () => {
        getRandomFact()
            .then(newFact => setFact(newFact)); // O bien '.then(setFact)', ya que se obvia el parámetro
    }

    useEffect(refreshFact, []);

    return { fact, refreshFact };
}