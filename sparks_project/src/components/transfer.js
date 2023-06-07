import React, {useContext} from 'react'
import DataContext from './context/notes/dataContect'
import AddBalance from './addBalance';
import Alert from './alert';



export default function Transfer(props) {
  const context = useContext(DataContext);
  const {data, Id} = context;


  return (

    <div className="my-3">

     {Id === "" ? <Alert message="First Select the Transfer Money option from View All Customers!!!!!"/> : ""}

        <h2>Transfer Money To</h2>
        {Id !== "" ? (data.map((data)=>{
            return <AddBalance key={data.id} data={data}/>;
        })) : `Error!!!` }
   </div>
  )
}
