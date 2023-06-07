import React, {useContext} from 'react'
import { Link } from "react-router-dom";
import DataContext from './context/notes/dataContect';

function Customer(props) {

  const context = useContext(DataContext)
  const {storeId} = context;
    const {data} = props;

    const onClick =()=>{
        storeId(data.id);
    }
   
  return (
    <>
      <div className="card my-3">
          <img src="https://freepngimg.com/save/12800-customer-transparent/256x256" className="card-img-top" alt="..."/>
           <div className="card-body">
                <h5 className="card-title">Customer ID : {data.id}</h5> 
                <h5 className="card-title">Customer Name : {data.name}</h5> 
                <h5 className="card-text">Balance : {data.balance}</h5> 
             <Link to="/transfer"  className="btn btn-danger" onClick={onClick}>Transfer Money</Link>
            </div>
       </div>
    </>
  )
}

export default Customer