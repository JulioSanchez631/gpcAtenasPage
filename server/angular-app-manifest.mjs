
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://JulioSanchez631.github.io/gpcAtenasPage/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/gpcAtenasPage"
  },
  {
    "renderMode": 2,
    "route": "/gpcAtenasPage/privacidad"
  },
  {
    "renderMode": 2,
    "redirectTo": "/gpcAtenasPage",
    "route": "/gpcAtenasPage/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24811, hash: '9085c0024336e944b2800640cc016712c75bc3d6c5487aeb02bb6e24ea85c23b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17117, hash: 'ddbe3433b2378f4354c6798d2ca8b860ba89e9cbdade25fc35dca29c9be31466', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'privacidad/index.html': {size: 33188, hash: '69b12a3fbf9cd23f65fd17c6f02b30053ebadf018378fb4b0b35b9226fadf718', text: () => import('./assets-chunks/privacidad_index_html.mjs').then(m => m.default)},
    'index.html': {size: 125203, hash: '64b4aebf1683cda446983b5d61bd05c2151626d127994dbde6ede7cac251f877', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-HNR7ADAW.css': {size: 8262, hash: 'R8Z9k9WD0NU', text: () => import('./assets-chunks/styles-HNR7ADAW_css.mjs').then(m => m.default)}
  },
};
