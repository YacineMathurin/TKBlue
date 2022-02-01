import React from 'react';

const Component = () => {
    React.useEffect(() => {
        return () => {
            console.log("Component unmounted");
        }
    }, []);
    return ( 
        <React.Fragment>
            <h5>Hello !</h5>
        </React.Fragment>
     );
}
 
export default Component;