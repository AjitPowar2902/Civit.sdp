import React, { useContext } from 'react';
import {Button,Form,Col,Row,Card,Breadcrumb,ListGroup,Badge,InputGroup,ProgressBar} from 'react-bootstrap';
import { RegistrationContext } from '../registration-context';
import { TiHomeOutline } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../../../styles/Global.css'
import SecondaryButton from '../../../components/buttons/SecondaryButton';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import Swal from 'sweetalert2';


export default function PlotSummary() {


    const {currentStep,setCurrentStep,plotData,setPlotData} = useContext(RegistrationContext);
  const navigate = useNavigate();

    const handleSubmit =()=>
        {
      
            Swal.fire({
                title: "Are you sure you want to submit?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Submit!",
                position:"center"
              }).then((result) => {
                if (result.isConfirmed) {
                 console.log(plotData);
                 navigate('/');
                }
              });
      
      
         
        }



    const handleproperty = ()=>
        {
          setCurrentStep(1);
        }
        const handleUnitContact = ()=>
        {
          setCurrentStep(2);
        }

  return (
    <>
     <div className="container shadow-lg p-3 headerradius"  >
        <div className="d-flex justify-content-between align-items-center" >
          <div>
            
          &nbsp;&nbsp; <span style={{fontSize:'24px'}}>Form Summary</span>&nbsp;&nbsp;&nbsp;<br/>
          &nbsp;&nbsp;  <span  style={{fontSize:'12px'}}>Application for new plot registration</span>
          </div> <br />

         
          
        </div>
        {/* <RegistrationProgress variantFirst={'success'} property={100} variantSecond={'success'} contact={100} check={2}/> */}
        </div>
        <div className="container shadow-lg p-3 mb-5 bg-body formradius" >
        <br />
        <div className="d-flex align-items-center mb-3">
          <h5 className={"mb-0 me-3"}>Property Details</h5>
          <hr className="flex-grow-1" />
          &nbsp; &nbsp;
          <a onClick={handleproperty} style={{cursor:'pointer'}}>Edit</a> &nbsp; 
          <FaRegEdit onClick={handleproperty} style={{cursor:'pointer'}} />
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <p   className="summarylabel">District of Present Unit</p>
              <p className="value">
              {plotData.district ? plotData.district : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className="summarylabel"> Industrial Area of Present Unit </p>
              <p className="value">
              {plotData.prtUnit ? plotData.prtUnit : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className="summarylabel"> Property Form </p>
              <p className="value">
              {plotData.propertyforms ? plotData.propertyforms : 'NA'}
              </p>
            </div>
          </div>


          <div className="row">
            <div className="col-md-4">
              <p className="summarylabel"> Type of Property </p>
              <p className="value">
              {plotData.propertytype ? plotData.propertytype : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className="summarylabel">Present Property Number</p>
              <p className="value">
              {plotData.presentpropertyno ? plotData.presentpropertyno : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className="summarylabel">Plot area in m2</p>
              <p className="value">
              {plotData.plotarea ? plotData.plotarea : 'NA'}
              </p>
            </div>
          </div>
          </div>
          <br/>
          <br/>

          <div className="d-flex align-items-center mb-3">
          <h5 className='mb-0 me-3'>Plot or Unit Contact Information</h5>
          <hr className="flex-grow-1" />
          &nbsp; &nbsp;
          <a onClick={handleUnitContact} style={{cursor:'pointer'}}>Edit</a> &nbsp; 
          <FaRegEdit onClick={handleUnitContact} style={{cursor:'pointer'}}/>
        </div>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <p className="summarylabel">Telephone Number</p>
              <p className="value">
              {plotData.phonenumber ? plotData.phonenumber : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className="summarylabel">Fax</p>
              <p className="value">
              {plotData.fax ? plotData.fax : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              <p className="summarylabel">Email ID</p>
              <p className="value">
              {plotData.email ? plotData.email : 'NA'}
              </p>
            </div>
          </div>


          <div className="row">
            <div className="col-md-4">
              <p className="summarylabel">Type of Industry/Activity</p>
              <p className="value">
              {plotData.industrytype ? plotData.industrytype : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
            <p className="summarylabel">EMI Acknowledgement Number </p>
              <p className="value">
              {plotData.eminumber ? plotData.eminumber : 'NA'}
              </p>
            </div>
            <div className="col-md-4">
              
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <p className="summarylabel">Description of Selected Activity</p>
              <p className="value">
              {plotData.description ? plotData.description : 'NA'}
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              
            </div>
            <div className="col-md-4">
               
            </div>
            <div className="col-md-4">
              
            </div>
          </div>
          <div className="row">
          <div className="col-md-12 button-container">
            <SecondaryButton label={"Print"}></SecondaryButton>
            <PrimaryButton onClick={handleSubmit} label={"Submit Form"}></PrimaryButton>
           
            </div>
            </div>
          </div>
          </div>
    </>
  )
}
