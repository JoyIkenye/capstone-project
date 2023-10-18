import React from 'react'; 
import { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import {countryOptions} from '../utils/country';
import { document } from '../utils/ids';
import { AiFillWarning, AiOutlineInfoCircle, AiFillCreditCard } from "react-icons/ai";
import { FaPlus, FaCreditCard, FaMoneyCheckAlt} from "react-icons/fa";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {BiCircle} from 'react-icons/bi';
import {IoLogoVenmo} from 'react-icons/io5';


const Checkout = () => {
  //function to toggle new shipping address
    const [showForm, setShowForm] = useState(false);

    const toggleFormVisibility = () => {
      setShowForm((prevShowForm) => !prevShowForm);
    };

    //function to toggle add id for custom clearance
    const [secondForm, setSecondForm]=useState(false);

    const visibility = ()=>{
        setSecondForm((prevSecondForm)=> !prevSecondForm);
    };

    //funtion to toggle choose a payment method
    const [thirdForm, setThirdForm]=useState(false);
    const thirdFormVisibility = ()=>{
      setThirdForm((prevThirdForm)=>!prevThirdForm)
    }


    //usestate for new shipping address
    const [country, setCountry]=useState('');
    const [name, setName] =useState('');
    const [errName, setErrName]=useState('');
    const [number, setNumber] =useState('');
    const [errNumber, setErrNumber]=useState('');
    const [address, setAddress] =useState('');
    const [errAddress, setErrAddress]=useState('');
    const [apt, setApt] =useState('');
    const [city, setCity] =useState('');
    const [errCity, setErrCity]=useState('');
    const [state, setState] =useState('');
    const [errState, setErrState]=useState('');
    const [zipCode, setZipCode] =useState('');
    const [errZipCode, setErrZipCode]=useState('');

    //usestate for add id for customs clearance
    const [addId, setAddId]=useState('');
    const[idNumber, setIdNumber]=useState('')
    const [errIdNumber, setErrIdNumber]=useState('');
    const [skipId, setSkipId]=useState('');

    //usestate for choose a payment method
    const [payment, setPayment]=useState('');
    const [errPayment, setErrPayment]=useState('');

    //Handle check boxes
    const handleAddIdBox = (e) => {
        setAddId(e.target.checked);
      };
    const handleSkipIdBox = (e)=>{
      setSkipId(e.target.checked);
    };

//Conditions for new shipping address
    const handleSubmit = (e)=>{
        e.preventDefault(); 
        if(!name){
          setErrName('Enter your full name')
        };
        if(!number){
          setErrNumber('Enter your phone number')
        };
        if(!address){
          setErrAddress('Enter Address')
        };
        if(!city){
          setErrCity('Enter your City')
        };
        if(!state){
          setErrState('Enter your state')
        };
        if(!zipCode){
          setErrZipCode('Enter your zip code')
        };
        if(country && name && number && address && apt && city && state && zipCode){  
        setCountry('');
        setName(''); 
        setNumber(''); 
        setAddress(''); 
        setApt(''); 
        setCity('');
        setState('');
        setZipCode('');  
    }};

    //conditions for add id for custom clearance
    const handleContinue =(e)=>{
      e.preventDefault();
      if(!idNumber){
        setErrIdNumber('Id number is required')
      }if (addId && idNumber){
        setAddId('');
        setIdNumber('')
      }
    };

    //conditions for choose a payment method
    const handlePayment = (e)=>{
      e.preventDefault();
      if(!payment){
        setErrPayment('Required')
      }if(payment){
        setPayment('')
      }
    };

    //conditions for use this payment method
    const handlePaymentMethod = (e)=>{
      e.preventDefault()
    };
    

  return (
    <div className='w-full'>

    <div className='w-full bg-gray-100 mx-auto pb-2 pt-5 flex space-x-96 rounded-md shadow-md'>
    <Link to={'/'}>
     <img className='w-32 p-2 flex ml-40' src={logo} alt='logo'/>
    </Link>
    <h2 className="text-3xl font-bold font titleFont">Checkout</h2>
    </div>

    <div className='p-2 flex ml-40'>
    <h3 className='text-amber-700 text-xl font-semibold mb-2 cursor-pointer' onClick={toggleFormVisibility}>1   Enter a new shipping address</h3>
    </div>

   {showForm && (
   <div className='p-2 flex ml-40 mb-8'>
   <form className='w-[700px]'>
    
 
    <div className='w-full border border-zinc-200 p-8 m-5'>
    
    <div className='flex flex-col gap-2'>
    <p className='text-sm font-medium'>Country/Region</p>  
    <select
    id='country'
    name='country'
    value={country}
    onChange={(e)=>setCountry(e.target.value)}
    className='form-select w-full  py-1 border border-zinc-300 px-2 text-base rounded-md shadow-md outline-none cursor-pointer bg-gray-100 hover:bg-gray-200'>
    <option value=''>Select Country/Region</option>
    {countryOptions.map((country)=>(
            <option key={uuidv4()} value={country}>
              {country}
            </option>
        ))}
    </select>
    </div>

    <div className='flex flex-col gap-2 pt-4'>
    <p className='text-sm font-medium'>Full name (First and Last name)</p> 
    <input
    type='text'
    value={name}
    onChange={(e)=>setName(e.target.value)}
    className='form-input w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput'
    />
    {errName && (
     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
     <span className='italic font-titleFont font-extrabold text-base'>
         !
     </span>   
     {errName}
      </p>
  )}
    </div>  

    <div className='flex flex-col gap-2 pt-4'>
    <p className='text-sm font-medium'>Phone number</p> 
    <input
    type='number'
    value={number}
    onChange={(e)=>setNumber(e.target.value)}
    className='form-input w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput'
    />
    {errNumber && (
     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
     <span className='italic font-titleFont font-extrabold text-base'>
         !
     </span>   
     {errNumber}
      </p>
  )}
    </div> 

    <div className='flex flex-col gap-2 pt-4'>
    <p className='text-sm font-medium'>Address</p> 
    <input
    type='text'
    placeholder='Street address or P.O. Box'
    value={address}
    onChange={(e)=>setAddress(e.target.value)}
    className='form-input w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput'
    />
    {errAddress && (
     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
     <span className='italic font-titleFont font-extrabold text-base'>
         !
     </span>   
     {errAddress}
      </p>
  )}
    <input
    type='text'
    placeholder='Apt,suite,unit,building,floor, e.t.c'
    value={apt}
    onChange={(e)=>setApt(e.target.value)}
    className='form-input w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput'
    />
    </div>

    <div className='grid grid-cols-3 gap-4 mt-4'>    
    <div className='flex flex-col gap-2 pt-4'>
    <p className='text-sm font-medium'>City</p> 
    <input
    type='text'
    value={city}
    onChange={(e)=>setCity(e.target.value)}
    className='form-input w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput'
    />
    {errCity && (
     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
     <span className='italic font-titleFont font-extrabold text-base'>
         !
     </span>   
     {errCity}
      </p>
  )}
    </div> 

    <div className='flex flex-col gap-2 pt-4'>
    <p className='text-sm font-medium'>State</p> 
    <input
    type='text'
    value={state}
    onChange={(e)=>setState(e.target.value)}
    className='form-input w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput'
    />
    {errState && (
     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
     <span className='italic font-titleFont font-extrabold text-base'>
         !
     </span>   
     {errState}
      </p>
    )}
    </div> 

    <div className='flex flex-col gap-2 pt-4'>
    <p className='text-sm font-medium'>Zip Code</p> 
    <input
    type='text'
    value={zipCode}
    onChange={(e)=>setZipCode(e.target.value)}
    className='form-input w-full py-1 border border-zinc-400 px-2 text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput'
    />
    {errZipCode && (
     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
     <span className='italic font-titleFont font-extrabold text-base'>
         !
     </span>   
     {errZipCode}
      </p>
  )}
    </div> 

    </div>

    </div>

    <div>
    <button
    type="submit"
    onClick={handleSubmit}
    className="bg-yellow-300 hover:bg-yellow-400 text-black font- 
    py-1  px-11 rounded-2xl"
    >
        Submit
    </button>
    </div>

    </form>   
    </div>
    )}

    <div className='mt-4 p-2 flex ml-40'>
    <h3 className='text-amber-700 text-xl font-semibold mb-2 cursor-pointer' onClick={visibility}>2 Add ID for customs clearance</h3>
    </div>
    {secondForm &&(
        <div className='p-2 flex ml-40 mb-8'>
        <form className='w-[700px]'>
        
        <div className='w-full border border-zinc-200 p-8 m-5'>
        <p className='mb-8'>
          Customs regulations for Nigeria require the following information for this shipping address: ID number.
          This ID will be stored securely and used solely for the purpose of clearing customs (including sharing it with carriers and customs officials) for this order, future orders, and any product returns.
        </p>

        <div className='flex items-center gap-4'>
        <label className='inline-flex items-center'>
        <input
        type='checkbox'
        checked={addId}
        onChange={handleAddIdBox}
        className='form-checkbox rounded-full appearance-none w-5 h-5 border border-sky-300 checked:bg-sky-600 hover:bg-sky-700 mb-4'
        />
        <span className='ml-2 text-l font-medium mb-4'>Add a new ID</span>
        </label>
        </div>
        {addId && (
            
       <div className='flex flex-col gap-2'>  
        <select
        id='addId'
        name='addId'
        value={addId}
        onChange={(e)=>setAddId(e.target.value)}
        className='form-select w-full  py-1 border border-zinc-300 px-2 text-base rounded-md shadow-md outline-none cursor-pointer bg-gray-100 hover:bg-gray-200'>
       <option value=''>Select ID document</option>
       {document.map((items)=>(
        <option key={uuidv4()} value={items}>   
        {items}
        </option>
        ))}
    </select>

    <p className='text-l font-medium mb-4'>ID Number</p>
    <input
    type='number'
    value={idNumber}
    onChange={(e)=>setIdNumber(e.target.value)}
    className='form-input w-full mb-4 border border-zinc-400  text-base rounded-sm outline-none focus-within:border-[#e77600] focus-within:shadow-amazonInput'
    />
    {errIdNumber && (
     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
     <span className='italic font-titleFont font-extrabold text-base'>
         !
     </span>   
     {errIdNumber}
      </p>
  )}
    </div>
        )}  
        <div className='flex items-center gap-4'>
        <label className='inline-flex items-center'>
        <input
        type='checkbox'
        checked={skipId}
        onChange={handleSkipIdBox}
        className='form-checkbox rounded-full appearance-none w-5 h-5 border border-sky-300 checked:bg-sky-600 hover:bg-sky-700 mb-4'
        />
        <span className='ml-2 text-l font-medium mb-4'>Skip for now</span>
        </label>
        </div>
        {skipId && (
          <div className='flex flex-col gap-2 border-l-8 border-solid border-2 border-[#f59e0b] text-base rounded-2xl'>
            <div className='flex items-center mt-3 ml-8'>
           <AiFillWarning className='text-[#f59e0b] text-2xl'/> 
           <h3 className='text-xl font-bold ml-2 '> ID required for customs clearance</h3>
           </div>
            <p className='text-justify text-l font-medium ml-8 mr-8 mb-5'>
            We'll need your ID information within 48 hours of placing your order or it will be canceled. Delay in providing ID, may impact your delivery date.
            <br/>
            <br/>
           You can skip this step for now, but it may impact your delivery date.</p>
          </div>
        )}

    <div className='mt-6'>
    <button
    type="submit"
    onClick={handleContinue}
    className='bg-yellow-300 hover:bg-yellow-400 text-black font- 
    py-1  px-11 rounded-2xl'
    >
     Continue
    </button>
    </div>

        </div>
        </form>
        </div>
    )}
     <div className='mt-4 p-2 flex ml-40'>
    <h3 className='text-amber-700 text-xl font-semibold mb-2 cursor-pointer' onClick={thirdFormVisibility}>3 Choose a payment method </h3>
    </div>
    {thirdForm && (
      <div className='p-2 flex ml-40 mb-8'>
      <form className='w-[700px]'>
      <div className='w-full border border-zinc-200 p-8 m-5'>

      <div className='border-b-2 border-zinc-200'>
      <p className='text-2xl font-medium pb-4'>Your credit and debit cards</p>
      </div>
       
      <div className='grid grid-cols-12 gap-4 mt-4'>
      <div className='col-span-1 justify-center items-center'><FaPlus className='text-[#d1d5db] text- l ml-5'/> </div>
      <div className='col-span-1 justify-center items-center'><FaCreditCard className=' text-3xl text-[#1e3a8a]'/></div>
      <div className='col-span-10 flex items-center'><p className='text-xs text-[#0f766e] hover:text-amber-600 hover:underline underline-offset-1 cursor-pointer #0f766eduration-100'>Add a credit or debit card <span ><ArrowRightIcon/></span></p>
      <p className='text-xs'>ReactMart accepts all major credit cards.</p>
      </div>
      </div>

      <div className='border-b-2 border-zinc-200'>
      <p className='text-2xl font-medium pt-4 pb-4'>Payment plans</p>
      </div>
      
      <div className='grid grid-cols-12 gap-4 mt-4'>
      <div className='col-span-1 justify-center items-center'><BiCircle className='text-[#d1d5db] text- l ml-5'/> </div>
      <div className='col-span-1 justify-center items-center'><FaMoneyCheckAlt className=' text-3xl text-[#1e3a8a]'/></div>
      <div className='col-span-10 flex  items-center'><p className='text-s text-[#d4d4d4] font-bold mb-4'>Pay over time with Affirm </p>
      <div className='relative'>
      <AiOutlineInfoCircle className="text-[#2dd4bf] text-lg absolute h-7"style={{ right: '180px' }} /> 
      </div>
      <p className='text-sm text-[#a1a1aa] absolute h-0'style={{ left: '350px' }}>Ineligible for this order. <span className='text-xs text-[#0f766e] hover:text-amber-600 hover:underline underline-offset-1 cursor-pointer #0f766eduration-100'>Learn more</span></p>
      </div>
      </div>

      <div className='border-b-2 border-zinc-200'>
      <p className='text-2xl font-medium pt-4 pb-4'>Your available balance</p>
      </div>

      <p className='text-l font-medium pt-3  ml-14 '>Enter a gift card, voucher or promotional code</p>

      <div className='grid grid-cols-12 gap-4 mt-4'>
      <div className='col-span-1 justify-center items-center'><FaPlus className='text-[#d1d5db] text- l ml-5'/> </div>
      <div className='col-span-1 justify-center items-center'>
        <input
        type='number'
        value={payment}
        onChange={(e)=>setPayment(e.target.value)}
        className='form-input mb-4 h-8 border border-zinc-400  text-base rounded-lg outline-none focus-within:border-zinc-400 focus-within:shadow-lg'
        placeholder='Enter Code'
        />
        {errPayment && (
     <p className='text-red-600 text-xs font-semibold tracking-wide flex items-center gap-2 -mt-1.5'>
     <span className='italic font-titleFont font-extrabold text-base'>
         !
     </span>   
     {errPayment}
      </p>
      )}
     </div>
      <div className='col-span-10 flex items-center relative'>
        <button
        type="submit" 
        onClick={handlePayment}
        className='border border-zinc-400 bg-[#f8fafc] hover:bg-[#e2e8f0] text-black font
        py-1  px-4 rounded-xl absolute h-8 mb-4'style={{ left: '140px' }}>Apply</button>
      </div>
      </div>

      <div className='border-b-2 border-zinc-200'>
      <p className='text-2xl font-medium pb-4'>Other payment methods</p>
      </div>

            
      <div className='grid grid-cols-12 gap-4 mt-4'>
      <div className='col-span-1 justify-center items-center'><FaPlus className='text-[#d1d5db] text- l ml-5'/> </div>
      <div className='col-span-1 justify-center items-center'><AiFillCreditCard className=' text-3xl text-[#cbd5e1]'/></div>
      <div className='col-span-10 flex items-center'><p className='text-s text-[#0f766e] hover:text-amber-600 hover:underline underline-offset-1 cursor-pointer #0f766eduration-100'>Learn about ReactMart.com Store Card <span ><ArrowRightIcon/></span></p>
      <p className='text-xs'>Access to exclusive financing offers.</p>
      </div>

      <div className='col-span-1 justify-center items-center'><FaPlus className='text-[#d1d5db] text- l ml-5'/> </div>
      <div className='col-span-1 justify-center items-center'><AiFillCreditCard className=' text-3xl text-[#cbd5e1]'/></div>
      <div className='col-span-10 flex items-center relative'><p className='text-s text-[#0f766e] hover:text-amber-600 hover:underline underline-offset-1 cursor-pointer #0f766eduration-100'>Add a personal checking account</p>
      <p className='text-xs absolute  mt-8'>
      Use your US based personal checking account.</p>
      <p className='text-xs absolute  mt-14  text-[#0f766e] hover:text-amber-600 hover:underline underline-offset-1 cursor-pointer #0f766eduration-100'>Learn more</p>
      </div>

      <div className='col-span-1 justify-center items-center'><FaPlus className='text-[#d1d5db] text- l ml-5'/> </div>
      <div className='col-span-1 justify-center items-center'><IoLogoVenmo className=' text-3xl text-[#3b82f6]'/></div>
      <div className='col-span-10 flex items-center relative mb-10'><p className='text-s text-[#0f766e] hover:text-amber-600 hover:underline underline-offset-1 cursor-pointer #0f766eduration-100'>Add your Venmo account</p>
      <p className='text-xs absolute  mt-8'>
      Add your existing Venmo account to pay for purchases on Amazon. Don’t have a Venmo account?</p>
      <p className='text-xs absolute  mt-14 text-[#0f766e] hover:text-amber-600 hover:underline underline-offset-1 cursor-pointer #0f766eduration-100'>Learn more</p>
      </div>
      </div>

      
      
      </div>  

      <div className='h-12 ml-8 pt-2 border border-slate-300 bg-[#e4e4e7]'>
        <button type="submit"
        onClick={handlePaymentMethod}
        className=' ml-8 bg-[#fefce8] text-s text-black font- 
        py-1  px-11 rounded-lg'>
          Use this payment method
        </button>
      </div>

      </form>
      </div>
    )}
    
    
    </div>
  )
}

export default Checkout