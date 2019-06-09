const { resolve } = require('path');
const { getFileContent, formatFile } = require('./utils/file');

const filePath = resolve(__dirname, './samples/sample.html');

describe('HTML formatting', () => {
    test('matches snapshot', () => {
        const fileContents = getFileContent(filePath);
        const formattedFile = formatFile(fileContents, { parser: 'html' });

        expect(formattedFile).toMatchSnapshot();
    });
});
