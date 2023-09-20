import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <div>
            <li className="mr-10 hover:bg-yellow-400 p-3" ><a href={route.path}>{route.name}</a></li>
        </div>
    );
};
Link.propTypes={
    route : PropTypes.object
}
export default Link;