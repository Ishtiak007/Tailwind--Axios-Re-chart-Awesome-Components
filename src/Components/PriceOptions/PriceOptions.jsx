import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
    const options = [
        {
          "id": 1,
          "name": "Standard Membership",
          "price": "$49.99/month",
          "features": [
            "Access to cardio equipment",
            "Strength training area",
            "Locker room access",
            "Open 7 days a week",
            "Free WiFi",
            "Discounted personal training sessions",
            "Access to fitness classes"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$79.99/month",
          "features": [
            "Access to all equipment",
            "Group fitness classes",
            "Personal training sessions",
            "Sauna and steam room",
            "Towel service",
            "Nutritional counseling",
            "Access to premium supplements",
            "Priority booking for classes"
          ]
        },
        {
          "id": 3,
          "name": "Student Membership",
          "price": "$29.99/month",
          "features": [
            "Access during off-peak hours",
            "Student ID required",
            "Access to cardio equipment",
            "Strength training area",
            "Locker rental",
            "Discounted group fitness classes",
            "Monthly fitness assessment"
          ]
        }
      ]
      
      
    return (
        <div className='m-12 flex-grow'>
            <h2 className='text-5xl font-bold text-center py-4 text-gray-600'>Price Option</h2>
            <div className='grid md:grid-cols-3 gap-6'>
            {
                options.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;