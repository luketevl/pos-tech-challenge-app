import { expect, test } from 'vitest'
import execute from '.'

test('should exists function', () => {
  expect(execute).toBeDefined()
})