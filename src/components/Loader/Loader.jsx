import css from './Loader.module.css'

const Loader = () => {
  return (
    <span className={css.direction}>
      <span className={css.loader}></span>
    </span>
  )
}

export default Loader