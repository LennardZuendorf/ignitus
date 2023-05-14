import Link from 'next/link'
import { kebabCase } from 'pliny/utils/kebabCase'
const Tag = ({ text }) => {
  return (
    <Link
      className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-accent-color dark:hover:text-accent-color-dark"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}
export default Tag
