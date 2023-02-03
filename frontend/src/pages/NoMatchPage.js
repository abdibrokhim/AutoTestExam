import PrimaryPageWrapper from '../components/PrimaryPageWrapper';
import PrimaryNavBar from '../components/PrimaryNavBar';

function NoMatchPage() {
    return (
        <>
            <PrimaryNavBar />
            <PrimaryPageWrapper>
                <div 
                    style={{
                        fontSize: '10rem',
                        }}>
                    404
                </div>
                <div 
                    style={{
                        fontSize: '2rem',
                    }}>
                    Page not found
                </div>
            </PrimaryPageWrapper>
        </>
    );
}

export default NoMatchPage;