import { allLegalTexts } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { MDXComponents } from '@/components/MDXComponents'
const DEFAULT_LAYOUT = 'LegalTextLayout'
export const getStaticProps = async () => {
  const legal = allLegalTexts.find((p) => p.slug === 'default')
  return {
    props: {
      legal,
    },
  }
}
export default function Legal({ legal }) {
  return (
    <MDXLayoutRenderer
      layout={legal.layout || DEFAULT_LAYOUT}
      content={legal}
      MDXComponents={MDXComponents}
    />
  )
}
