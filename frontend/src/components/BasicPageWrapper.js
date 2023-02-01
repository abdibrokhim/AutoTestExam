import colors from "../colors";

const BasicPageWrapper = ({ children }) => {
    return (
        <div 
            style={{
                // textAlign: 'center',
            }}
        >
            <div
                className="container-fluid"
                style={{
                    backgroundColor: colors.const_light_bg,
                    maxHeight: '100vh',
                    fontSize: 'calc(10px + 2vmin)',
                    color: colors.const_dark_text,
                }}>
                {children}
            </div>
        </div>
    );
}

export default BasicPageWrapper;