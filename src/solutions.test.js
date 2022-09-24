import { describe, expect, test } from 'vitest'
import { countSheeps } from './solutions'
import { sheeps } from './solution-mocks'

describe('#01 - Contando ovejas para dormir', () => {
  test('should throw an error if array is not passed', () => {
    expect(() => countSheeps()).toThrow()
  })

  test('should throw a specific message error if array is not passed', () => {
    expect(() => countSheeps()).toThrow('Parameter value must be an array')
  })

  test('should throw a specific message error if array passed is empty', () => {
    expect(() => countSheeps([])).toThrow('Array passed must contain sheeps')
  })

  test('should return an array of red sheeps', () => {
    const filteredSheeps = countSheeps(sheeps)

    filteredSheeps.forEach(sheep => {
      expect(sheep.color).toBe('rojo')
    })
  })

  test('should return an array of red sheeps and the name contains the words n and a', () => {
    const filteredSheeps = countSheeps(sheeps)

    filteredSheeps.forEach(sheep => {
      expect(sheep.color).toBe('rojo')
      expect(sheep.name.toLowerCase().includes('n')).toBe(true)
      expect(sheep.name.toLowerCase().includes('a')).toBe(true)
    })
  })
})
