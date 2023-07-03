import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
  return (
      <section className="c-wrapper">
          <div className="paddings innerwidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-lef">
                 <span className='orangeText'>Our Contact</span>
                 <span className='PrimaryText'>Easy To Contact Us</span>
                 <span className='secondaryText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                   Molestiae maiores repellat labore earum!</span>

                  <div className="flexColStart contactModes">
                      {/* first row */}
                    <div className="flexColStart row">
                         <div className="flexColCenter mode">
                           <div className="flexStart">
                               <div className="flexCenter icon">
                                  <MdCall size={25}/>
                               </div>
                               <div className="flexColStart detail">
                                 <span>Call</span>
                                 <span>021 123 145 145</span>
                               </div>
                           </div>
                           <div className="flexCenter button">
                              Call Now
                           </div>
                         </div>
                    </div>  
                  
                    
                  </div>
              








            </div>
           {/* right side */}
            <div className="c-right">
               <div className="image-container">
                   <img src="./contact.jpg" alt="" />
                </div>              
            </div>
          </div>
      </section>
    )
}

export default Contact