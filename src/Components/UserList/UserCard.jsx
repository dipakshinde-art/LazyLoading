import React from "react";
import styles from "./userCard.module.css";
const UserCard = ({ user }) => {
  let {
    gender,
    name: { title, first, last },
    email,
    picture: { medium, large },
    location: { city, state, country },
  } = user;
  return (
    <div className={styles.userCardList}>
      <div className={styles.CardImg}>
        <img src={medium} alt="userImage" className={styles.singleImg} />{" "}
      </div>
      <div className={styles.userInformation}>
        <p>
         
          <span className={styles.valueName}> Name :</span> {`${title} ${first} ${last}`}
        </p>
        <p>
       
          <span className={styles.valueName}> Email : </span>{email}
        </p>
        <p>
        
          <span className={styles.valueName}> Gender: </span>{gender}
        </p>
        <p>
         
          <span className={styles.valueName}> Location:</span> {`${city},${state} `}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
