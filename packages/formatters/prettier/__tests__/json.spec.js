const { resolve } = require('path');
const { getFileContent, formatFile } = require('./utils/file');

const filePath = resolve(__dirname, './samples/sample.json');

describe('JSON formatting', () => {
    test('matches snapshot', () => {
        const fileContents = getFileContent(filePath);
        const formattedFile = formatFile(fileContents, { parser: 'json' });

        expect(formattedFile).toMatchSnapshot();
    });
});
