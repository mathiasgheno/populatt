import esbuild from 'esbuild';

await esbuild.serve({
  servedir: 'src',
}, {
  entryPoints: ['./src/index.jsx'],
  outdir: 'src/js',
  splitting: true,
  format: 'esm',
  bundle: true,
  sourcemap: true,
  // sourcemap: false,
  // minify: true,
}).then(server => {
  console.log(`serving at ${server.port}`);
});
