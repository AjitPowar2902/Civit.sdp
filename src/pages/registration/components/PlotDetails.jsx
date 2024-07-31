import React, { useContext } from 'react';
import {Button,Form,Col,Row,Card,Breadcrumb,ListGroup,Badge,InputGroup,ProgressBar} from 'react-bootstrap';
import { RegistrationContext } from '../RegistrationContext';
import '../../../styles/Global.css'
import SecondaryButton from '../../../components/buttons/SecondaryButton';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../components/buttons/PrimaryButton';


export default function PlotDetails() {

    
    const{plotData,setPlotData,currentStep,setCurrentStep} = useContext(RegistrationContext);
const navigate = useNavigate();

    const handleNext = () =>
        {
        setCurrentStep(2);
        }
    
        const handleback = (e) =>
          {
            navigate('/');
          }

  return (
   <>
      <div className="container shadow-lg p-3 headerradius"  >
        <div className="d-flex justify-content-between align-items-center" >
          <div>
            
          &nbsp;&nbsp;<span style={{fontSize:'24px'}}>Property Details </span>&nbsp;&nbsp; 
            <span  style={{fontSize:'12px'}}>Time requires 3 mins</span> 
           
          </div> <br /> 

          
          
        </div>
        {/* <RegistrationProgress variantFirst={'warning'} property={100}/> */}
        </div>
        <div className="container shadow-lg p-3 mb-5 bg-body formradius" >
        <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
          <Form.Group>
               <Form.Label className='form-label'>District of Present Unit  </Form.Label>
                    <Form.Select 
                    aria-label="Default select example" 
                    className="p-2"
                     id='cboDistrict'
                     value={plotData.district}
                     onChange={(e) => setPlotData({ ...plotData, district: e.target.value })}
                     >
                        <option> </option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                     </Form.Select>
               </Form.Group>
            </div>
            <div className="col-md-6">
            <Form.Group>
               <Form.Label className='form-label'>Industrial Area of Present Unit </Form.Label>
                    <Form.Select 
                    aria-label="Default select example" 
                    className="p-2"
                    value={plotData.prtUnit}
                    onChange={(e) => setPlotData({ ...plotData, prtUnit: e.target.value })}
                     >
                        <option> </option>
                        <option value="MIDC.Maharashtra">MIDC.Maharashtra</option>
                        <option value="ADDL.Ahmedabad">ADDL.Ahmedabad</option>
                        <option value="MPDC.Madhya Pradesh">MPDC.Madhya Pradesh</option>
                     </Form.Select>
               </Form.Group>
            </div>
            </div>

            <div className="row mt-4">
          <div className="col-md-6">
          <Form.Group>
               <Form.Label className='form-label'>Property Forms </Form.Label>
                    <Form.Select
                     aria-label="Default select example"
                      className="p-2"
                      value={plotData.propertyforms}
                      onChange={(e) => setPlotData({ ...plotData, propertyforms: e.target.value })}
                       >
                        <option> </option>
                        <option value="shields">shields</option>
                        <option value="shiel">shiel</option>
                     </Form.Select>
               </Form.Group>
            </div>
            <div className="col-md-6">
            <Form.Group>
               <Form.Label className='form-label'>Type of Property </Form.Label>
                    <Form.Select
                     aria-label="Default select example" 
                     className="p-2" 
                     value={plotData.propertytype}
                     onChange={(e) => setPlotData({ ...plotData, propertytype: e.target.value })}
                     >
                        <option> </option>
                        <option value="Industrial">Industrial</option>
                        <option value="Resedential">Resedential</option>
                     </Form.Select>
               </Form.Group>
            </div>
            </div>

            <div className="row mt-4">
          <div className="col-md-6">
          <Form.Group>
               <Form.Label className='form-label'>Present Property No.</Form.Label>
                    <Form.Select
                     aria-label="Default select example"
                      className="p-2" 
                      value={plotData.presentpropertyno}
                     onChange={(e) => setPlotData({ ...plotData, presentpropertyno: e.target.value })}
                      >
                        <option> </option>
                        <option value="A 007">A 007</option>
                        <option value="A 008">A 008</option>
                        <option value="A 009">A 009</option>
                     </Form.Select>
               </Form.Group>
            </div>
            <div className="col-md-6">
            <Form.Group>
                <Form.Label className='form-label'>Plot Area in m2</Form.Label>
                <InputGroup >
                    <Form.Control
                     id='txtusername'
                     value={plotData.plotarea}
                     onChange={(e) => setPlotData({ ...plotData, plotarea: e.target.value })}
                     placeholder="enter plot area..."
                    />
                </InputGroup>
             </Form.Group>
            </div>
            </div>
          
           

            <div className="row mt-4">
          <div className="col-md-6">
         
            </div>
            <div className="col-md-6">
              
            </div>
            </div>
            <div className="row mt-3">
          
            <div className="col-md-12 lg-12 button-container">
            
            <SecondaryButton onClick={handleback} label={"Cancel"}></SecondaryButton>
            <PrimaryButton onClick={handleNext} label={"Save & Continue"}></PrimaryButton>
            </div>
            
            </div>
            </div>
    </div>
   </>
  )
}
