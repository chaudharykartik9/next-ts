
import React, { useEffect, useState } from "react";

type product ={
    id: string;
    title : string;
    description : string
    price :number
    discountPercentage : number
    stock :number
    brand : string
    category :string
    thumbnail : string
    

}

const MyContent = () => {
    const [mydate, setmydata] = useState<product | null > (null);
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetch('https:/dummyjson.com/product/1/');
                const result = await response.json();
                setmydata(result);
            } catch (err) {
                console.log(`data fetching error: ${err}`);
            }
        }
        fetchdata();
    }, []);
    return <div>{mydate ? (
        <div>
            <p>ID : {mydate.id}</p>
            <p>title : {mydate.title}</p>
            <p>description : {mydate.description}</p>
            <p>price : {mydate.price}</p>
            <p>discountPercentage : {mydate.discountPercentage}</p>
            <p>stock : {mydate.stock}</p>
            <p>brand : {mydate.brand}</p>
            <p>category : {mydate.category}</p>
            <p>thumbnail : {mydate.thumbnail}</p>
            

        </div>
    ) : ( <p>loading.......</p>)}</div>;
};

export default MyContent;
