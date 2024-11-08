import React from 'react';
import './index.css';
const About = () =>{
     return(
        <>
        <section id="header" className="">
        <div className="container-fulid nav_bg">
          <div className="row">
              <div className="col-10 mx-auto">
                <div className="row">

                <div className="col-md-6 pt-5 order-2 order-lg-1">
                 <h1>Welcome to About Page<strong className="brand"> Phonomania</strong></h1> 
                 <h4 className="my-3">Any phone you want you get it</h4>
                 <div className="mt-3 mt-5">
                     <a href="" className="btn-info p-3 rounded ">Contact Now</a>
                 </div> 
               </div>

               <div className="animated col-lg-6 order-1 order-lg-2 mt-5">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZacEYXutfknOXOKd7ldzW77QzGQQzY2IARA&usqp=CAU" width="500px" height="300px"/>   
                </div>  
                </div>
              </div>
          </div>
      </div>
        </section>
   </>
   );
};

export default About;