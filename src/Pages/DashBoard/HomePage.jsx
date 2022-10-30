import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import Navbar from "../../Components/Navbar/Navbar";
import UserCard from "../../Components/UserList/UserCard";
import styles from "./Home.module.css";
import { LoadingCard, LoadingPosts } from "../../Components/lazyLoad/LoadingPost";
import UseLazyLoad from "../../Components/lazyLoad/UseLasyLoad";

const NUM_PER_PAGE = 8;
const TOTAL_PAGES = 50;

const HomePage = () => {
  const [list, setList] = useState([]);

  //fetch the data
  const getList = async () => {
    let userList = await axios.get(`https://randomuser.me/api/?results=500`);

    setTimeout(() => {
      if (userList) {
        setList(userList.data.results);
       
      } else {
        console.log("check your connection");
      }
    }, 1000);
  };
  useEffect(() => {
    getList();
  }, []);

  // take reffrence of last value 
  const triggerRef = useRef(null);
  const onGrabData = (currentPage) => {
  
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = list.slice(
                ((currentPage - 1) % TOTAL_PAGES) * NUM_PER_PAGE,
                NUM_PER_PAGE * (currentPage % TOTAL_PAGES)
            );
            
            resolve(data);
        }, 1000);
    });
};
const { data, loading } = UseLazyLoad({ triggerRef, onGrabData });
  return (
    <div>
      <Navbar />
   
      <div className={styles.Home}>
        {data.length > 0 ?
          data.map((user) => (
            <div key={user.cell} >
              <UserCard user={user} />
            </div>
          )):( <p className={styles.spinner}> Loading .... </p>)}
      </div>
      <div ref={triggerRef} className={("trigger", { visible: loading })}>
                <LoadingPosts />
            </div>
    </div>
  );
};

export default HomePage;
