import React, {useContext} from 'react'
import DataContext from './context/notes/dataContect'
import Customer from './customer';

function Customers() {

 const context = useContext(DataContext);
  const {data} = context;
  return (
    <div className="my-3">
        <h2>List of Customers</h2>
        {data.map((data)=>{
            return <Customer key={data.id} data={data}/>;
        })}
   </div>
  )
}

export default Customers