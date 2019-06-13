const fs = require('fs')
const { resolve } = require('path')
const prettier = require('prettier')
const prettierConfig = require('../../index')

/**
 * Reads a sepecified file
 *
 * @param {string} filePath - absolute path to target file
 * @param {object} options - options for reading file
 * @param {string} options.encoding - encoding used to read file
 *
 * @returns encoded file contents
 */
module.exports.getFileContent = (filePath, options = {}) => {
  return fs.readFileSync(filePath, {
    encoding: 'utf-8',
    ...options,
  })
}

/**
 * Formats a files content
 *
 * @param {string} fileContent - contents of file to format
 * @param {object} options - prettier format options
 * @param {string} options.parser - parser for file contents
 *
 * @returns formatted file
 */
module.exports.formatFile = (fileContent, options = {}) => {
  return prettier.format(fileContent, { ...prettierConfig, ...options })
}

/**
 * Generates prettier config using editorconfig options
 *
 * @returns response from prettier api resolveConfig method
 */
module.exports.getEditorconfig = () => {
  const prettierResetPath = resolve(__dirname, '../samples/.prettierrc.js')

  return prettier.resolveConfig(prettierResetPath, {
    editorconfig: true,
  })
}
