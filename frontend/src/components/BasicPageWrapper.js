import colors from "../colors";

const BasicPageWrapper = ({ children }) => {
    return (
        <div 
            style={{
                // textAlign: 'center',
            }}
        >
            <div
                className="container-fluid pt-3 pb-5"
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

export default BasicPageWrapper;