import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features}=option;
    return (
        <div className='bg-blue-500 rounded-lg p-4 text-white flex flex-col '>
            <h2 className='text-center'>
                <span className='text-4xl font-bold'>Price : {price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h4 className='text-3xl text-center
             my-8'>{name}</h4>
             <div className='pl-4 flex-grow'>
             {
                features.map((feature,idx) =><Feature key={idx} feature={feature}></Feature>)
             }
             </div>
             <button className='mt-12 bg-green-700 w-full py-3 font-bold rounded-lg hover:bg-green-800 '>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes ={
    option : PropTypes.object
}
export default PriceOption;