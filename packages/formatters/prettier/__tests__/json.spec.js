const { resolve } = require('path')
const { getFileContent, getEditorconfig, formatFile } = require('./utils/file')

const filePath = resolve(__dirname, './samples/sample.json')

describe('JSON formatting', () => {
  const fileContents = getFileContent(filePath)
  const parser = 'json'
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
