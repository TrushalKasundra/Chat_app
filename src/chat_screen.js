import React,{useEffect, useState} from "react";
import InfiniteScroll from "react-infinite-scroller";


function Chatscreen(){
  const [posts,setPosts] = useState([]);

useEffect(()=>{
  fetch(`https://qa.corider.in/assignment/chat?page=0`)
  .then(function(response){
    return response.json();
  })
  .then(function(products){
    
    setPosts(products)
  });
})

const self={
  backgroundColor:"red",color:"white",width:"500px",marginLeft:"60%"
}
const other ={
  backgroundColor:"gray",width:"500px"
}
  return(
    <>
 
    <div >
     {posts?.chats?.map((item)=>{
      if(item.sender.self===true){
        return <p style={self}>{item.message}</p>
      }
      else{
        return <p style={other}>{item.message}</p>
      }
      })}
     
      
    </div>
    <hr/>
    </>
  )  
}

export default Chatscreen;