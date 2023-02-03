import colors from "../colors";

const SecondaryPageWrapper = ({ children }) => {
    return (
        <div 
            style={{
                // textAlign: 'center',
            }}
        >
            <div
                className="container-fluid px-3 mx-auto py-4"
                style={{
                    backgroundColor: colors.const_light_bg,
                    minHeight: '100vh',
                    fontSize: 'calc(10px + 2vmin)',
                    color: colors.const_dark_text,
                }}>
                {children}
            </div>
        </div>
    );
}

export default SecondaryPageWrapper;