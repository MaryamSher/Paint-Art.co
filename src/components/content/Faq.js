import React from 'react'
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const Faq = () => {
    return (
        <>
            <div className='faq-bg'>
                <div id='faq' className='titleHolder'>
                    <h2>FAQ</h2>
                    <p>find the answers to all of you queries</p>
                </div>
                <Collapse
                    bordered={true}               
                    expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                    className="site-collapse-custom-collapse"
                    ghost
                >
                    <Panel header="I made a sale. When will I be paid ?" key="1" className="site-collapse-custom-panel">
                        <p>
                            Paint & Art has a 30-day return policy. That means that buyers can return their orders to us for a full refund anytime within 30 days after the date of purchase. As a result, we can't pay our members for their sales until that 30 day window expires and we're certain that the orders won't be returned.

                        </p>
                        <p>
                            Payments are sent out on the 15th of each month for all sales that occurred before the 15th of the previous month. For example, on November 15th, we send out payments for all orders that were placed on or before October 15th

                        </p>
                        <p>
                            Here's a common point of confusion. Let's say that you make a sale on October 17th. Many of our members expect to be paid for that sale on November 15th. That is not correct.

                            In this case, since the order was placed on October 17th, the buyer has until November 17th to return it to us. Therefore, we can't issue a payment on November 15th.

                            This sale would be paid out on December 15th.
                        </p>
                        <p>
                            Again - payments are sent out on the 15th of each month for all sales that occurred before the 15th of the previous month.

                        </p>
                            
                        
                    </Panel>

                    <Panel header="Does Paint & Art ship worldwide ?" key="2" className="site-collapse-custom-panel">
                        <p>
                            Yes. We ship all over the world.
                        </p>
                        <p>
                            But only local shipments are free.
                            For International shipments, Charges shall applied
                        </p>
                        <p>
                            Means, If a seller and buyer both are in the same country, there will be no shipping charges.
                            But if they are in two different countries let say seller is from pakistan and the buyer is in usa then buyer has to pay the cargo company for it.
                        </p>
                    </Panel>

                    <Panel header="What is your cancellation / return policy ?" key="3" className="site-collapse-custom-panel">
                        <p>
                          Our return policy is very simple:
                        </p>
                        <p>
                            If you're not happy with a purchase that you made on Paint&Art.com, for any reason, you can return it to us within 30 days of the order date. As soon as it arrives, we'll issue a full refund for the entire purchase price.
                        </p>
                        <p>
                            Please note - Paint & Art does not reimburse the outgoing or return shipping charges unless the return is due to a defect in quality.

                        </p>
                    </Panel>
                    <Panel header="How do I get my Art featured on the homepage ?" key="4" className="site-collapse-custom-panel">
                        <p>
                            There are 12 image spots available on the homepage.
                        </p>
                        <p>
                           Only $1 will be charged for one spot and all of your products will stay featured for one whole week.
                        </p>
                        <p>
                            Please note: Spot availability applied.
                        </p>
                    </Panel>
                    <Panel header="What file format should I use when uploading images ?" key="5" className="site-collapse-custom-panel">
                        <p>Your images need to be saved as JPEG files, We do not support any other format.</p>
                        <p>Also - your files must be 25 MB or smaller in size.</p>
                        
                    </Panel>
                    <Panel header="How do I return my purchase / order ?" key="6" className="site-collapse-custom-panel">
                        <p>All you have to do is fill out the form on the following page:</p>
                        <p>Once you fill out the form, you'll then be able to print out a return label which you should use when mailing back your return.</p>
                        <p>
                            And drop your product to any nearest facility of TCS or FedEx.
                        </p>
                    </Panel>
                    <Panel header="What if I want to cancel my order ?" key="7" className="site-collapse-custom-panel">
                        <p>After placing an order, you may cancel for a full refund within 30 minutes by clicking the "Cancel order" button in the order confirmation email. After that, our printers begin processing the order, and we notify the artist(s) that a sale has been made, so we can no longer cancel your order. Requests for order cancellations after 30 minutes of placing the order will be handled on a case by case basis. Please email us and we'll do our best to help.</p>
                    </Panel>
                    
                </Collapse>

            </div>


        </>
    )
}

export default Faq
