import axios from "axios";
import { useEffect, useState } from "react";
import Hello from "./Hello ";
import endpoint from "../config/endpoint";

let Some  = () =>{
    let [users,setUsers]=useState([]);
    let [loading,setLoading]=useState(false);
    let [followers,setFollowers]=useState([])



    const fetchfollowers =async () =>{
        try {
            setLoading(true)
            let mes = await axios.get(`${endpoint}/users/naveed-rana/followers`)  
            let much = mes.data;
            setFollowers(much)
            console.log(much)


            
        } catch (error) {
            console.log(error)
            
        }
        finally{
            setLoading(false)
        }
    }

const dataget  =async () =>{
    try {
        setLoading(true)
    let res = await axios.get("https://api.github.com/users/naveed-rana");
    let kuch = res.data;
    console.log(kuch)
    setUsers(kuch)

    
    
    
        
    } catch (error) {
        console.log(error.message)
        
    }
    finally{
        setLoading(false)

    }
    

}
let getnewproduct =async () =>{
    let senddatatoserver = {title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'}
    try {
        let money = await axios.post("https://fakestoreapi.com/products", senddatatoserver);
        console.log("money",money)
        
    } catch (error) {
        console.log(error)
        
    }
    finally{
        setLoading(false)
    }

}

let updateProduct =async () =>{
    let senddatatoserver = {title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic'}
    try {
        setLoading(true)
        let mono = await axios.put("https://fakestoreapi.com/products/7",senddatatoserver)
    console.log("mono",mono)

        
    } catch (error) {
        console.log(error)
        
    }
    finally{
        setLoading(false)
    }
    

}




const deleteProduct = async() =>{
    try {
        setLoading(true)
        let mon = await axios.delete("https://fakestoreapi.com/products/6")
        console.log("mon",mon);


        
    } catch (error) {
        
    }
    

}



    useEffect(()=>{
        // dataget()

    },[])
    return(
        <div>

            <p>Github username : {users.name}</p>
            <p>Github followwers : {users.followers}</p>
            <button type="button" onClick={deleteProduct}>Delete Product</button>
            <button type="button" onClick={getnewproduct}>newProduct</button>
            <button type="button" onClick={updateProduct}>UpdateProduct</button>
            <button type="button" onClick={fetchfollowers}>Get Followers</button>
            <hr />
            <p>Followers</p>
            {loading ? <p>Loading....</p> :null}
            {followers.map((value)=>{
                return(
                    <p>{value.login}</p>

                )
            })}
            
            
            
            
        </div>
    )
}
export default Some;