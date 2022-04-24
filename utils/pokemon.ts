export interface SubsequentPokemonPayload {
  list: []
  pokeList: string[]
}

export const PokemonList: string[] = [
  'audino',
  'bagon',
  'baltoy',
  'banette',
  'bidoof',
  'braviary',
  'bronzor',
  'carracosta',
  'charmeleon',
  'cresselia',
  'croagunk',
  'darmanitan',
  'deino',
  'emboar',
  'emolga',
  'exeggcute',
  'gabite',
  'girafarig',
  'gulpin',
  'haxorus',
  'heatmor',
  'heatran',
  'ivysaur',
  'jellicent',
  'jumpluff',
  'kangaskhan',
  'kricketune',
  'landorus',
  'ledyba',
  'loudred',
  'lumineon',
  'lunatone',
  'machamp',
  'magnezone',
  'mamoswine',
  'nosepass',
  'petilil',
  'pidgeotto',
  'pikachu',
  'pinsir',
  'poliwrath',
  'poochyena',
  'porygon2',
  'porygonz',
  'registeel',
  'relicanth',
  'remoraid',
  'rufflet',
  'sableye',
  'scolipede',
  'scrafty',
  'seaking',
  'sealeo',
  'silcoon',
  'simisear',
  'snivy',
  'snorlax',
  'spoink',
  'starly',
  'tirtouga',
  'trapinch',
  'treecko',
  'tyrogue',
  'vigoroth',
  'vulpix',
  'wailord',
  'wartortle',
  'whismur',
  'wingull',
  'yamask',
]

export function getSubsequentPokemonList(pokeList: string[]): any {
  return pokeList.reduce(
    (_acc: SubsequentPokemonPayload | any, pokemon: string) => {
      let currentChar = pokemon.substr(pokemon.length - 1)
      let subsecuentList: string[] = []
      let findedSubsecuentName = null

      do {
        let finded = _acc.pokeList.find(
          (_pokemon: string) => _pokemon.substr(0, 1) === currentChar
        )

        if (finded) {
          subsecuentList = [...subsecuentList, finded]
          findedSubsecuentName = finded
          currentChar = finded.substr(finded.length - 1)
          _acc.pokeList = _acc.pokeList.filter((e: string) => e !== finded)
        } else {
          findedSubsecuentName = null
        }
      } while (findedSubsecuentName)

      const newList = subsecuentList.length === 0 ? _acc.list : [
        ..._acc.list,
        {
          pokemon,
          subsecuentList,
        },
      ].sort(
        (a: any, b: any) => b.subsecuentList.length - a.subsecuentList.length
      )

      return {
        list: newList,
        pokeList: _acc.pokeList,
      }
    },
    {
      list: [],
      pokeList: PokemonList,
    }
  )
}
