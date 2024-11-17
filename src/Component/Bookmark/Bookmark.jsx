import PropTypes from 'prop-types'

const Bookmark = ({book}) => {
    const {title}=book;
  return (
    <div className='p-5 bg-green-500 my-4 rounded-md text-xl font-medium'>{title}</div>
  )
}

Bookmark.propTypes = {
book: PropTypes.object
}

export default Bookmark