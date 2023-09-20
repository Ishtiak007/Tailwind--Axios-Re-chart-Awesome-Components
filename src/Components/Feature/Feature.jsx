import { FaCheckCircle } from "react-icons/fa";
import PropTypes from 'prop-types';
const Feature = ({feature}) => {
    return (
        <div>
            <ol>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-green-500"></FaCheckCircle> {feature}</li>
            </ol>
        </div>
    );
};
Feature.propTypes={
    feature : PropTypes.string
}
export default Feature;