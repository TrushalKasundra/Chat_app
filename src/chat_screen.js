import React, { useState, useEffect, useRef,useContext } from "react";
import { array } from "./chat_input";
import { observer } from "mobx-react";
import { storeContext } from "./store";

const Chatscreen=observer((props)=> {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef(null);
  const [page, setPage] = useState(0);

  const store = useContext(storeContext);

  useEffect(() => {
    fetch(`https://qa.corider.in/assignment/chat?page=0`)
      .then(function (response) {
        return response.json();
      })
      .then(function (preItems) {
        setPosts(preItems.chats);
console.log(posts);
      });

  }, []);

  
  useEffect(() => {
    console.log(posts)
    const fetchMessages = () => {
      setIsLoading(true);
      
      fetch(`https://qa.corider.in/assignment/chat?page=${page}`)
        .then(function (response) {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          return response.json();
        })
        .then(function (preItems) {
          setPosts((item) => [...preItems.chats, ...item]);
          setPage((prePage) => prePage + 1);
        })
        .catch(function (error) {
          console.log("Error fetching chat:", error);
        });
      setIsLoading(false);
    };
    const handleScroll = () => {
      if (containerRef.current.scrollTop === 0 && !isLoading) {
        fetchMessages();
      }
    };
    
    containerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, page]);
 
  console.log(posts);
  useEffect(()=>{
    
    const newMessage  = [{message:store.inputMessage(),sender:{self:true}}]
  setPosts([...posts,...  newMessage]);
},[store.inputMessage()])

console.log(posts);


  const self = {
    backgroundColor: "red",
    color: "white",
    width: "95%",
    padding: "1%",
    borderRadius: "12px 12px 0px 12px",
  };
  const other = {
    backgroundColor: "LightGray",
    width: "88%",
    padding: "1%",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
    borderRadius: "0px 12px 12px 12px ",

    marginLeft: "12%",
  };

  const container = {
    flaot: "left",
    overflowY: "auto",

    height: "450px",
  };
  return (
    <div ref={containerRef} style={container}>
      {isLoading && <div>Loading...</div>}
      {posts?.map((item) => {
        if (item.sender?.self) {
          return (
            <div
              style={{ width: "75%", marginLeft: "25%", position: "relative" }}
              key={item.id}
            >
              <p style={self}> {item.message}</p>
            </div>
          );
        } else {
          return (
            <div style={{ width: "75%", position: "relative" }}>
              <img
                src={`${item.sender.image}`}
                alt="other-Profile"
                height="30px"
                width="30px"
                style={{
                  borderRadius: "60%",
                  position: " absolute",
                  left: "-1px",
                  top: "-1px",
                }}
              />
              <p style={other}>{item.message}</p>
            </div>
          );
        }
      })}
    </div>
  );
})

export default Chatscreen;
