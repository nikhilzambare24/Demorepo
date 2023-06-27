import "mdb-react-ui-kit/dist/css/mdb.min.css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


export default function Payment() {
  const navigate =useNavigate('');
  const [billingData, setBillingData] = useState([]);
  const email_id = sessionStorage.getItem('email');
  const { code } = useParams();
  const cartid = code; 
  const p_Id = code; 
  console.log(p_Id) 
  console.log("cart id list");
  console.log(cartid);
  
  const successAlert = () => {
    Swal.fire({
        title: `Payment done Successfully..!!`,
        icon: 'success'
      })
      console.log("bbbbbbbbb")
      navigate("/buynowbill/"+p_Id)
    };

    useEffect(() => {
      console.log("inside useEffect ------------------------------");
      // Fetch billing data from the server
      fetchBillingData();
  
      // Add empty dependency array to run the effect only once
    }, []);
  
    const fetchBillingData = () => {
      fetch(`http://localhost:8080/bill/${email_id}`)
        .then((response) => response.json())
        .then((data) => {
          setBillingData(data);
          console.log('bill', data); // Moved console.log here to log the received data
          // console.log(data[8]);
         
        })
        .catch((error) => console.log(error));
    };
    
  const handlePay = () => {
      if(sessionStorage.getItem('email')){
        // alert("Payment Successful!");
        navigate("/")
      }
        else{
          alert("Please login")
          navigate('/login')
        }
      };

      const handleorder = () => {
        console.log("aaaaaaaaaaaaaa")
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in ISO format
        const data = {
          order_Date: currentDate,
          // order_Total: 0,
          cart_Id_fk: cartid, // Remove the nested object structure
        };
        console.log("data is the");
        console.log(data);
    
        fetch(`http://localhost:8080/api/addorders/${cartid}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        window.print();
        navigate('/order')
        console.log("handle");
      };

    return (
    <div className="flex justify-center">
      <div className="w-80 md:w-96 lg:w-1/2 xl:w-1/3">
        <div className="bg-white rounded-md p-4">
          <h1 className="text-3xl font-bold mb-4 text-center">Payment</h1>
          <p className="font-bold">Saved card:</p>
          <div className="flex items-center my-2">
            <img
              className="w-8 h-8 mr-2"
              src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              alt="Mastercard"
            />
            <img
              className="w-8 h-8"
              src="https://img.icons8.com/color/48/000000/visa.png"
              alt="Visa"
            />
            <div className="flex-fill mx-3">
              <div className="form-outline">
                <label>Card Number</label>
                <input
                  id="form1"
                  type="text"
                  className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                  placeholder="**** **** **** 1626"
                />
              </div>
            </div>
            {/* <a href="#!" className="text-blue-500 underline">
              Remove card
            </a> */}
          </div>

          <p className="font-bold mt-4">Add new card:</p>
          <label>Cardholder's Name</label>
          <input
            id="form3"
            type="text"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg"
            placeholder="**************"
          />
          <div className="flex my-4">
            <div className="w-7/12">
              <label>Card Number</label>
              <input
                id="form4"
                type="text"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                placeholder="**** **** **** ****"
              />
            </div>
            <div className="w-3/12 ml-4">
              <label>Expire</label>
              <input
                id="form5"
                type="password"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                placeholder="MM/YYYY"
              />
            </div>
            <div className="w-2/12 ml-4">
              <label>CVV</label>
              <input
                id="form6"
                type="password"
                className="w-full py-2 px-3 border border-gray-300 rounded-lg"
                placeholder="CVV"
              />
            </div>
          </div>
          <button
            className="bg-green-500 text-white text-lg py-2 px-4 rounded-lg w-full"
            onClick={() => {
              successAlert();
              handleorder();
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
