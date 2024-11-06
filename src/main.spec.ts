import { describe, expect, it } from 'vitest'
import { myFunction } from './main.js'

describe('myFunction', () => {
  it('should work', () => {
    expect(myFunction()).toEqual('Hello, world!')
  })
})
