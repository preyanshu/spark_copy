import DataContext from "./dataContect";
import { useState } from "react";
const DataState = (props)=>{
    const dataInitial =[
       { 
        "id":"1",
        "name": "Sushant",
        "email": "grtsushant@gmail.com",
        "balance": 10000099
       },
       { 
        "id":"2",
        "name": "Preyanshu",
        "email": "mishrwe3apreyanshu@gmail.com",
        "balance": 100000
       },
       { 
        "id":"3",
        "name": "Lamo",
        "email": "grtsushdweant@gmail.com",
        "balance": 100000
       },
       { 
        "id":"4",
        "name": "Jero",
        "email": "mishrawdwewpreyanshu@gmail.com",
        "balance": 200000
       },
       { 
        "id":"5",
        "name": "Jojo",
        "email": "grtsuwdwedshant@gmail.com",
        "balance": 100000
       },
       { 
        "id":"6",
        "name": "Taro",
        "email": "mishrdfdapreyanshu@gmail.com",
        "balance": 400000
       }
   ]
    const [data] = useState(dataInitial)

    //temp function
    const [Id, setId] = useState("");
    const storeId = (id)=>{
        setId(id);
    }

    //Add Balance
    const addBalance = async (id, Id, number)=>{


        const balance = parseFloat(number);

        // updating balance of receiver
         let Id1_balance ;

        for(let i=0; i<data.length; i++){
           const element = data[i];
           if(element.id === id){
               element.balance += balance;

               Id1_balance = element.balance;
           }
        }
        
         // updating balance of receiver
         let Id2_balance ;

        for(let i=0; i<data.length; i++){
            const element = data[i];
            if(element.id === Id ){
                element.balance -= balance;

                Id2_balance = element.balance;
            }

         }
        
       // API CALL
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content_Type': 'application/json',
        //     },
        //     body: JSON.stringify(
        //         {
        //          Id1 : id,
        //          Id1_balance : Id1_balance,               
        //          Id2 : Id,
        //          Id2_balance : Id2_balance,
        //         })
        // });
        //    const json = response.json();
        
    }
    //Transfer Money
    const transferMoney = async (id, Id, balance) =>{

        //API CALL
        // const response = await fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Content_Type': 'application/json',
        //     },
            // body: JSON.stringify(
            //     {
            //         Id1 : id, 
            //         Id2 : Id,
            //         balance : balance})
        // });
        //    const json = response.json();
        console.log("from " + Id + " to " + id +" " + balance )
            
    }


     return (
        <DataContext.Provider value={{data, Id, addBalance, storeId, transferMoney}}>
            {props.children}
        </DataContext.Provider>
     )
}


export default DataState;