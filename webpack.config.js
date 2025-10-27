import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: ['./assets/js/script.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
};
