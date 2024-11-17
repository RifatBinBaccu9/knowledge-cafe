import PropTypes from 'prop-types';

const Bookmarks = ({cafe}) => {
    console.log(cafe);
    
    return (
        <div className=" w-[40%]">
            <h1>hey rifat</h1>
        </div>
    );
};
Bookmarks.propTypes={
    cafe: PropTypes.object.isRequired
}
export default Bookmarks;