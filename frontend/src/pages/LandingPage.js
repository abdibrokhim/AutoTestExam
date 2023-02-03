import colors from "../colors";
import PrimaryNavBar from '../components/PrimaryNavBar';
import teamwork from '../teamwork.png';
import { useNavigate } from "react-router-dom";
import '.././App.css';
import PrimaryPageWrapper from '../components/PrimaryPageWrapper';


function LandingPage() {

    const navigate = useNavigate();

    return (
        <>
            <PrimaryNavBar />
            <div 
                style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <PrimaryPageWrapper>
                    <div className='row text-start container align-items-start'>
                        <div className='col'>
                            <div className="landingPageContent">
                                <div 
                                    className="text-5xl mb-3 fw-bold" style={{color: colors.const_dark_text}}>Test yourself with real exam questions</div>
                                <div 
                                    className="d-inline-block pt-1 pb-1 ps-3 pe-3" 
                                    style={{backgroundColor: colors.const_brand_name,
                                        color: colors.const_light_text
                                    }}>Autotest</div>
                                <button 
                                    onClick={() => navigate('/home')}
                                    className="d-block mt-5 btn btn-danger pt-3 pb-3 ps-4 pe-4">
                                        Get Started
                                </button>
                            </div>
                        </div>
                        <div className='col'>
                            <div>
                                <img src={teamwork} alt="Teamwork Logo" />
                            </div>
                        </div>
                    </div>
                </PrimaryPageWrapper>
            </div>
        </>
    );
  }
  
  export default LandingPage;