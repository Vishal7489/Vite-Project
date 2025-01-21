import React,{useState}  from 'react'
import "../Styles/PaymentSection.css"


const PaymentSection = ({Data}) => {

const [firstname,setFirstName]=useState();
const [lastname,setLastName]=useState();
const [email,setEmail]=useState();
const [contact,setContact]=useState();
const [coupon,setCoupon]=useState();


const handleSubmit=()=>{
if(firstname && lastname && email && contact && coupon){
 alert("Coupon Successfully Apply");
}
else{
  alert("All fields are mandatory"); 
}
}





return (
  <div className="Payment">
   <div className="Payment1">
    <div className="Payment2">
    <div>
    <span className="Checkout_heading">Checkout</span>  
    <br/>
    <span className="Payment_para">{Data.HeadingTitle[0]}</span> 

    <form  onSubmit={handleSubmit}>
    <div className="Form">
    <div>
     <label className="PaymentFirst">First Name <span className="star">*</span> </label>
     <br/>
     <input type="text" required placeholder=""  className="PaymentDetails3"  onChange={(event)=>setFirstName(event.target.value)}  />   
     </div>
     <div>
     <label className="PaymentLast">Last Name <span className="star">*</span> </label>
     <br/>
     <input type="text" required placeholder=""  className="PaymentDetails1" onChange={(event)=>setLastName(event.target.value)}    />   
     </div>
     </div>
    


    
    <div className="Form">
    <div>
     <label className="PaymentEmail">Email <span className="star">*</span> </label>
     <br/>
     <input type="text" required placeholder=""  className="PaymentDetails"  onChange={(event)=>setEmail(event.target.value)}      />   
     </div>
     <div>
     <label className="PaymentContact"> Contact Number <span className="star">*</span> </label>
     <br/>
     <input type="text" required placeholder=""   className="PaymentDetails_Contact"   onChange={(event)=>setContact(event.target.value)}    />   
     </div>
     </div>
    

    
    <div className="Form">
    <div>
     <label className="Payment_input2">Coupon <span className="star"></span> </label>
     <br/>
     <input type="text" required placeholder=""  className="PaymentDetails_Coupon" onChange={(event)=>setCoupon(event.target.value)}  />   
     </div>
     <div>
     <button className="Apply_button">Apply</button>  
     </div>
     </div>
    

</form>
    </div>
    </div>



    <div className="Payment3">

   <div className="Payment4">
   <div>
   <h2 className="Payment_Detail">Payment Detail</h2>
   </div>

  <div className="Course_Amount"    >
  <div className="Payment_Heading1">Course Amount</div>
  <div><span className="Payment_Amount1">8000</span></div>
   </div>

  <div className="Course_Amount">
  <div className="Payment_Heading2"  >Platform Discount</div>
  <div><span className="Payment_Amount2"  >2500</span></div>
  </div>

  <div className="Course_Amount" >
  <div className="Payment_Heading3" >Coupon Discount</div>
  <div><span className="Payment_Amount3">0</span></div>
  </div>
 
  <div className="Course_Amount">
  <div className="Payment_Heading4">Total Amount</div>
  <div><span className="Payment_Amount4">5500</span></div>
  </div>

  <div>
  <button className="Buy_Button">Buy Now</button>  
  </div>
  </div>
  </div>
   </div>
  </div>
  )
}

export default PaymentSection