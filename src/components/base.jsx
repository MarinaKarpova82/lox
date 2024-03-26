import React, { Component } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBW8Mzad07Dil6ib3Q4NMpqQ936l0PWilw",
  authDomain: "tg-bot-48b6a.firebaseapp.com",
  projectId: "tg-bot-48b6a",
  storageBucket: "tg-bot-48b6a.appspot.com",
  messagingSenderId: "865634902520",
  appId: "1:865634902520:web:db1fbed48ee164d16a760d",
  measurementId: "G-68RKYV17T6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

class Base extends Component {
  render() {
    return (
      <div>
        ьууу
      </div>
    );
  }
}

export default Base;


/* const app = initializeApp({
  apiKey: "AIzaSyBW8Mzad07Dil6ib3Q4NMpqQ936l0PWilw",
  authDomain: "tg-bot-48b6a.firebaseapp.com",
  projectId: "tg-bot-48b6a",
  storageBucket: "tg-bot-48b6a.appspot.com",
  messagingSenderId: "865634902520",
  appId: "1:865634902520:web:db1fbed48ee164d16a760d",
  measurementId: "G-68RKYV17T6"
}
);
const analytics = getAnalytics(app);

export class Base extends Component {
  render() {
   
    return (
    )
  }
}

export default Base */
///////////////////////////////////////////////////////////////

/* 
 products = [
      { id: '1',  title: 'К', price: 200 },
      { id: '2',  title: 'К', price: 200 }
    ]



<img src={"./img/" + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}₽</b> */

/* export class Base extends Component {
  render() { 
  const admin = require("firebase-admin");
  const serviceAccount = require("/scr/tg-bot-8f788-firebase-adminsdk-jnsig-4fd1831197.json");
  
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "tg-bot-8f788.appspot.com" // замените на свой storage bucket
  });
  
  const bucket = admin.storage().bucket();
  
  const products = [
    { id: '1', img: 'cat (1).jpg', title: 'К', price: 200 },
    { id: '2', img: 'cat (2).jpg', title: 'К', price: 200 }
  ];
  
  const updateProductsWithStorageUrls = async () => {
    for (let product of products) {
      const filename = product.img;
      const file = bucket.file(filename);
      
      try {
        await file.makePublic(); // делаем файл публично доступным
        const url = `https://storage.googleapis.com/${bucket.name}/${filename}`;
        product.img = url;
      } catch (error) {
        console.error(`Ошибка при получении URL для файла ${filename}: ${error}`);
      }
    }

  
  updateProductsWithStorageUrls();
    return (
      <div>  
      console.log(products)
      </div>
    )
  }
}} */