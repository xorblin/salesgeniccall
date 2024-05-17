import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
export default {
    input: 'src/Index.jsx',
    output: [
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
        },
        {
            file: 'dist/bundle.esm.js',
            format: 'esm',
            exports: 'named',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve({
            extensions: ['.js', '.jsx'],
        }),
        commonjs(),
        babel({
            exclude: 'node_modules/**',
            babelHelpers: 'bundled',
            extensions: ['.js', '.jsx'],
        }),
        postcss({
            plugins: [],
            minimize: true,
        }),
        terser(),
    ],
    external: ['react', 'react-dom'],
};
