import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value We Give To You</span>
          <span className='secondaryText'>
            We always ready to help by providing the best services for you.
            <br/>
            We believe a good place to live can make your life better
          </span>

          <Accordion
              className="accordion"
              allowMultipleExpanded={false}
               preExpanded={[0]}
               slidesPerView={1} // Update the prop name to slidesPerView
           >

            {data.map((item, i) => {
              const [className, setClassName] = useState(null);

              const handleAccordionItemClick = (expanded) => {
                setClassName(expanded ? "expanded" : "collapsed");
              };

              return (
                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton" onClick={handleAccordionItemClick}>
                      <AccordionItemState>
                        {({ expanded }) => (
                          <div className="flexCenter icon">
                            {item.icon}
                          </div>
                        )}
                      </AccordionItemState>
                      <span className="primaryText">
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Value;