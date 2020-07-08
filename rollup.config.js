import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import pkg from './package.json';

const NODE_ENV = process.env.NODE_ENV || 'development';

// Global output defaults
const globals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'prop-types': 'PropTypes',
  classnames: 'classnames',
};

// Presets for Babel
const babelPresets = [
  [
    '@babel/preset-env',
    {
      loose: true,
      shippedProposals: true,
      modules: false,
      targets: {
        ie: 11,
      },
    },
  ],
  '@babel/preset-react',
];

// Plugins for Babel
const babelPlugins = [
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-export-default-from',
];

export default {
  input: 'src/components/index.js',
  external: Object.getOwnPropertyNames(globals),
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'molecules',
      sourcemap: true,
      globals,
    },
    {
      file: pkg.module,
      format: 'es',
      name: 'molecules',
      sourcemap: true,
      globals,
    },
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: babelPresets,
      plugins: babelPlugins,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    postcss({
      plugins: [autoprefixer],
      getExportNamed: false,
      extract: 'dist/molecules.css',
    }),
  ],
};
