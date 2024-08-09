const fs = require('fs');
const path = './index.html';

test('El archivo index.html existe', () => {
  expect(fs.existsSync(path)).toBe(true);
});
