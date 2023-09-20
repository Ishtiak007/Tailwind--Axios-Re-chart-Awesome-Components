import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Axios = () => {
    const [data,setData]=useState([]);
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
            setData(phonesWithFakeData)
        })
    },[])
    return (
        <div>
                <h1 className="text-4xl text-center my-6 font-bold">Data Length : {data.length}</h1> 
                <BarChart width={1300} height={400} data={data}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
          <Cell></Cell>
          <CartesianGrid></CartesianGrid>
          <Legend></Legend>
          <ResponsiveContainer></ResponsiveContainer>
        </BarChart>          
        </div>
    );
};

export default Axios;