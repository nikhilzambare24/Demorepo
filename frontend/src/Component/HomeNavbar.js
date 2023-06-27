import { Disclosure } from '@headlessui/react';
import { useState } from 'react';

import { MenuIcon, XIcon } from '@heroicons/react/outline';

// import { IconName } from '@heroicons/react/outline';

import { useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Profile from './Profile';
import "./homeNavbar.css";
import Search from './search';


export default function Example() {

  const [email, setemail] = useState();
  const [password, setPassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
 const [isSearchVisible, setSearchVisible] = useState(false);

  if (sessionStorage.getItem("email")) {

  }
  const handleClickLogo = () => {
    navigate('/');
  };
  const handleLoginClick = () => {
    navigate("/Login")
  }
  const displyorder = () => {
    navigate("/order")
  }
  const handlecart = () => {
    navigate("/cart")
  }
  const handleRegisterClick = () => {
    navigate("/Register")
  }
  const handleLogoutClick = () => {
    setLoggedIn(false);
    alert("Logged out successfully");
    sessionStorage.removeItem("email");
    navigate("/")
    window.location.reload();
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      {({ open }) => (
        <>
       
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ml-0">
                <div className="flex flex-shrink-0 items-center ">
                  <img
                    className="block h-8 w-auto lg:block mx-5 mr-5"
                    src="../images/Onestop.jpg"
                    alt="Your Company"
                    onClick={handleClickLogo}
                  />
                </div>
                <div className="hidden sm:ml-48 sm:block">
                  <div className="flex space-x-22  ">
                    <Search />
                    {/* Login and Registration Form */}
                    <div className='flex space-x-2 justify-end pr-4 ml-16'>
                      <svg class="w-10 ml-96  text-white hover:cursor-pointer first-line:" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" onClick={handlecart}>
                        <path d="M1 1h4l2.6 12.3A2 2 0 0 0 9 16h10a2 2 0 0 0 1.9-2.7L19 6H6"></path>
                        <circle cx="8.5" cy="19.5" r="1.5"></circle>
                        <circle cx="18.5" cy="19.5" r="1.5"></circle>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      {!sessionStorage.getItem("email") &&
                        <button className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm hover:bg-green-600 font-medium mr-1 " onClick={handleLoginClick}>
                          Login
                        </button>

                      }
                      {sessionStorage.getItem("email") &&
                        <button className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm hover:bg-green-600 font-medium mr-1 " onClick={handleLogoutClick}>
                          Logout
                        </button>
                      }
                      {sessionStorage.getItem("email") &&
                        <button className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm hover:bg-green-600 font-medium mr-3 " onClick={displyorder}>
                          Order
                        </button>
                      }
                      <button className="rounded-md bg-gray-900 text-white px-3 py-2 ml-20 text-sm font-medium hover:bg-green-600" onClick={handleRegisterClick}>
                        Register
                      </button>
                    </div>
                    <Profile></Profile>
                  </div>
                </div>
              </div>
            </div>



            <Disclosure.Panel className="sm:hidden">

<div className="px-2 pt-2 pb-3 space-y-1">
  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setSearchVisible(!isSearchVisible)}>Search</a>
  {isSearchVisible && (
    <div className="mt-2">
      <Search />
    </div>

  )}
  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleLoginClick}>Login</a>
  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handlecart}>Cart</a>
  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={displyorder}>Order</a>
  <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={handleRegisterClick}>Register</a>
</div>
</Disclosure.Panel>

            {/* <Demo /> */}


          </div>


        </>
      )
      }




    </Disclosure>
  )
}
/*
 {isAddedToCart && (
        <Button variant="success" disabled>
          Added to Cart
        </Button>
      )}-
*/