const { resolve } = require('path');
const { getFileContent, formatFile } = require('./utils/file');

const filePath = resolve(__dirname, './samples/sample.js');

describe('JavaScript formatting', () => {
    test('matches snapshot', () => {
        const fileContents = getFileContent(filePath);
        const formattedFile = formatFile(fileContents, { parser: 'babel' });

        expect(formattedFile).toMatchSnapshot();
    });
});
