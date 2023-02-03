import React from 'react';
import PrimaryPageWrapper from '../components/PrimaryPageWrapper';
import PrimaryNavBar from '../components/PrimaryNavBar';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    // const [testAmount, setTestAmount] = React.useState(20);
    const testAmount = 20;
    const navigate = useNavigate();

    const onTestAmountClick = async () => {
        console.log(testAmount);
        navigate(`/autotest`);
    }

    return (
        <>
            <PrimaryNavBar />
            <PrimaryPageWrapper>
                <div>This page currently under development</div>
                <button 
                    onClick={() => onTestAmountClick()}
                    className="d-block mt-5 btn btn-danger pt-3 pb-3 ps-4 pe-4">
                        Try Demo
                </button>
            </PrimaryPageWrapper>
        </>
    );
}

export default HomePage;