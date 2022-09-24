// challenge #01
export function countSheeps (sheeps) {
  if (!Array.isArray(sheeps)) throw new Error('Parameter value must be an array')
  if (sheeps.length === 0) throw new Error('Array passed must contain sheeps')

  return sheeps.filter(sheep => {
    const lowerCaseName = sheep.name.toLowerCase()

    return sheep.color === 'rojo' && (lowerCaseName.includes('n') && lowerCaseName.includes('a'))
  })
}
