const Tag = ({ text }) => {
  return (
    <p className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-accent-color dark:hover:text-accent-color-dark">
      {text.split(' ').join('-')}
    </p>
  )
}
export default Tag
