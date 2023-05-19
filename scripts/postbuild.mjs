import sitemap from './sitemap.mjs'

async function postbuild() {
  await Promise.all([sitemap()])
}

postbuild()
