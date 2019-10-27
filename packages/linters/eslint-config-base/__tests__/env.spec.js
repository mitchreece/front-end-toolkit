const Environment = Object.freeze({
  BROWSER: 'browser',
  NODE: 'node',
})

const fetch = require

Object.values(Environment).forEach((env) => {
  describe(`${env} config`, () => {
    const config = fetch(`../${env}`)

    test('should extend base config rules', () => {
      const baseConfigPath = require.resolve('../index.js')
      const { extends: extended = [] } = config

      if (typeof extended == 'string') {
        expect(extended).toBe(baseConfigPath)
      } else {
        expect(extended).toContain(baseConfigPath)
      }
    })

    test(`should have ${env} env set`, () => {
      const { env: configEnv = [] } = config

      expect(configEnv[env]).toBe(true)
    })
  })
})
