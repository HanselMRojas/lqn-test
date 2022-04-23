import { useState } from "react";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import {
  createNumbers,
  determineSolution,
} from '../../utils/buzzBazz';

const PartOneA = () => {
  const base: string[] = [];
  const [numbers, setNumbers] = useState(base);

  const handleCleanNumbers = () => setNumbers([]);

  const handleRunSolution = () => {
    const numbers = createNumbers(100);
    const payload = determineSolution(numbers);
    setNumbers(payload);
  };

  return (
    <>
      <h2>Problema</h2>
      <p>
        Desarrolla un algoritmo que imprima los números del 0 al 100.
        Adicionalmente debe imprimirse en la misma línea la palabra buzz en caso
        de que el número sea par. Sí el número es múltiplo de 5 debe imprimirse
        en la misma línea la palabra bazz.
      </p>

      <pre>
        <code>
          {numbers.length === 0 ? (
            <span>No hay datos</span>
          ) : (
            <>
              <span>{numbers.join('\n')}</span>
            </>
          )}
        </code>
      </pre>

      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleRunSolution}>Ejecutar</Button>
        <Button variant="text" onClick={handleCleanNumbers}>Limpiar</Button>
      </Stack>
    </>
  );
};

export default PartOneA;
