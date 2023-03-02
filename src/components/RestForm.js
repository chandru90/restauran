import React , {useState} from 'react'

const RestForm =(props)=>{

    const[orderid,setorderid] = useState('')
    const[orderdish,setorderdish] = useState('')
    const orderhandler=(event)=>{
        event.preventDefault()
      //  console.log(event.target.value)
     // console.log(orderid)
      //console.log(orderdish)
      //  console.log("order placed")
      props.onrestform(orderid,orderdish)
    }
    const idhandler =(event)=>{
        setorderid(event.target.value)
     
    }
    const dishhandler =(event)=>{
        setorderdish(event.target.value)
     
    }
    return(
        <form onSubmit={orderhandler}>
            <label>id</label>
            <input id ="idno" type="text" value={orderid} onChange={idhandler}></input>
            <label>dishname</label>
            <input id="dish" type="text" value={orderdish} onChange={dishhandler}></input>
            <select>
                <option>table1</option>
                <option>table2</option>
                <option>table3</option>
            </select>

            <button type ="submit">place order</button>
            <ul>Table
                <li>Table1</li>
                <li>Table1</li>
                <li>Table1</li>
            </ul>


            </form>


    )
}
export default RestForm