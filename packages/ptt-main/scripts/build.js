import esbuild from 'esbuild';
import fs from 'node:fs';

fs.rmdirSync('./dist', {recursive: true});
fs.mkdirSync('./dist');
fs.copyFileSync('./src/index.html', './dist/index.html');

await esbuild.build({
  entryPoints: ['./src/index.jsx'],
  outdir: 'dist/js',
  bundle: true,
  sourcemap: true,
});

console.log('build finished!');
