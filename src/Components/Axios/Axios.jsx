
import { BallTriangle } from  'react-loader-spinner'
import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Axios = () => {
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data=> {
            const phoneData = data.data.data;
            const phonesWithFakeData = phoneData.map(phone=>{
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setData(phonesWithFakeData);
            setLoading(false);
        })
    },[])
    return (
        <div>
                {
                    loading && <div className='w-full text-center flex justify-center my-10'>
                        <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                  />
                    </div>
                }
                <h1 className="text-4xl text-center my-6 font-bold">Data Length : {data.length}</h1> 
                <div className='flex justify-center my-5'>
       <BallTriangle
                    height={100}
                    width={100}
                    radius={5}
                    color="#4fa94d"
                    ariaLabel="ball-triangle-loading"
                    wrapperClass={{}}
                    wrapperStyle=""
                    visible={true}
                  />  
                  </div>
                <div className='flex justify-center'>
                <BarChart width={1300} height={400} data={data}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Cell></Cell>
          <CartesianGrid></CartesianGrid>
          <Legend></Legend>
          <ResponsiveContainer></ResponsiveContainer>
        </BarChart></div> 
              
        </div>
    );
};

export default Axios;