const { resolve } = require('path');
const { getFileContent, formatFile } = require('./utils/file');

const filePath = resolve(__dirname, './samples/sample.css');

describe('CSS formatting', () => {
    test('matches snapshot', () => {
        const fileContents = getFileContent(filePath);
        const formattedFile = formatFile(fileContents, { parser: 'css' });

        expect(formattedFile).toMatchSnapshot();
    });
});
