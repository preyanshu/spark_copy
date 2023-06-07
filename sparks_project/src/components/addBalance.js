import React, {useContext, useState} from 'react'
import DataContext from './context/notes/dataContect'


function AddBalance(props) {

  const context = useContext(DataContext)
  const {addBalance, transferMoney, Id} = context;
  const {data} = props;

  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState("0");

   const onClick = ()=>{
    setShowForm(!showForm);
    setId(data.id);   
   }

    const onClick1 = (e) =>{

    const balance = document.getElementById("balance").value;
     
    e.preventDefault();

     transferMoney(id, Id, balance);
      addBalance(id, Id, balance);
     
   }

 return (
   <>
    {showForm && (
      <form>
      <div className="mb-3">
        <label htmlFor="balance" className="form-label">
          <h5>
            Enter ammount to transfer to {data.name} having Id no. {data.id}
            </h5>
        </label>
        <input type="number" className="form-control" id="balance"/>
        </div>
        <button type="submit" className="btn btn-info" onClick={onClick1}>Transfer</button>
    </form>
    )}
    
     { Id !== data.id ? (<div className="card my-3 " id="select">
         <img src="https://freepngimg.com/save/12800-customer-transparent/256x256" className="card-img-top" alt=""/>
          <div className="card-body">
               <h5 className="card-title">Customer ID : {data.id}</h5> 
               <h5 className="card-title">Customer Name : {data.name}</h5> 
               <h5 className="card-text">Balance : {data.balance}</h5> 
              <button className="btn btn-danger" onClick={onClick}>Select</button> 
           </div>
        </div> ) : "" }       
      </>
  )
}

export default AddBalance