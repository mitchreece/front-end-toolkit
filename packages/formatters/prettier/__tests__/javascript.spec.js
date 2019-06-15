const { resolve } = require('path')
const { getFileContent, getEditorconfig, formatFile } = require('./utils/file')

const filePath = resolve(__dirname, './samples/sample.js')

describe('JavaScript formatting', () => {
  const fileContents = getFileContent(filePath)
  const parser = 'babel'
  const prettierFormat = formatFile(fileContents, { parser })

  test('matches snapshot', () => {
    expect(prettierFormat).toMatchSnapshot()
  })

  test('is same with editorconfig', async () => {
    const editorconfig = await getEditorconfig()
    const editorconfigFormat = formatFile(fileContents, {
      ...editorconfig,
      parser,
    })

    expect(editorconfigFormat).toEqual(prettierFormat)
  })
})
