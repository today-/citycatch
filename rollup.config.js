import path from 'path';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import svg from 'rollup-plugin-svg-import';
import {terser} from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import alias from '@rollup/plugin-alias';
import dotenv from 'rollup-plugin-dotenv';
import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import visualizer from 'rollup-plugin-visualizer';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/main.js',
  output: {
    sourcemap: !production,
    format: 'iife',
    name: 'app',
    file: 'public/bundle.js'
  },
  plugins: [
    svg(),

    dotenv(),

    alias({
      resolve: ['.ts', '.js', '.svelte'],
      entries: [
        { find: '~', replacement: path.resolve(__dirname, 'src') },
      ]
    }),

    svelte({
      dev: !production,
      css: css => {
        css.write('public/bundle.pcss');
      },
      preprocess: sveltePreprocess({postcss: true, typescript: true})
    }),

    resolve({
      browser: true,
      dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
    }),

    typescript({
      module: 'CommonJS',
      objectHashIgnoreUnknownHack: true,
      clean: true
    }),

    commonjs({extensions: ['.js', '.ts']}),

    !production && livereload('public'),

    production && visualizer({filename: 'public/report.html'}),

    production && babel({
      extensions: ['.js', '.ts', '.mjs', '.html', '.svelte'],
      runtimeHelpers: true,
      exclude: ['node_modules/@babel/**', 'node_modules/core-js/**'],
      presets: [
        [
          '@babel/preset-env',
          {
            targets: "> 1%, IE 11, not dead",
            useBuiltIns: 'usage',
            corejs: 3
          }
        ]
      ],
      plugins: [
        '@babel/plugin-syntax-dynamic-import',
        ['@babel/plugin-transform-runtime', {useESModules: true}]
      ]
    }),

    production && terser({
      output: {comments: /remove_all/}
    })
  ],
  watch: {
    clearScreen: false
  }
};
