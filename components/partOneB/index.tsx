import { useState } from 'react'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { SubsequentPokemonPayload, PokemonList, getSubsequentPokemonList } from '../../utils/pokemon'

const PartOneA = () => {
  const base: SubsequentPokemonPayload = { list: [], pokeList: [] }
  const [pokemons, setPokemons] = useState(base)

  const handleCleanNumbers = () => setPokemons(base)

  const handleRunSolution = () => {
    const pokemons = getSubsequentPokemonList(PokemonList)
    setPokemons(pokemons)
  }

  return (
    <>
      <h2>Problema (English)</h2>
      <p>
        Your task in this exercise is as follows: Take the following selection
        of 70 English Pokemon names (extracted from Wikipedia&apos;s list of
        Pokemon), and generate the/a sequence with the highest possible number
        of Pokemon names where the subsequent name starts with the final letter
        of the preceding name. No Pokemon name is to be repeated.
      </p>


      <h3>Pokemon List (Initial)</h3>
      <pre>
        <code>
          {PokemonList.join(' ')}
        </code>
      </pre>

      <pre>
        <code>
          {pokemons.list.length === 0 ? (
            <span>No hay datos</span>
          ) : (
            <>
              {pokemons.list.map((pokemon: any, index: number) => (
                <p key={index}>
                  {pokemon.pokemon} [{pokemon.subsecuentList.length}]: {pokemon.subsecuentList.join(' => ')}
                </p>
              ))}
            </>
          )}
        </code>
      </pre>

      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handleRunSolution}>
          Ejecutar
        </Button>
        <Button variant="text" onClick={handleCleanNumbers}>
          Limpiar
        </Button>
      </Stack>
    </>
  )
}

export default PartOneA
