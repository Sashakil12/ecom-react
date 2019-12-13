import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './withSpinner.styles.jsx';

const WithSpinner = WrappedComponent => ({isLoading, ...otherProp}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>
        </SpinnerOverlay>
    ) : (
            <WrappedComponent {...otherProp} />
    )
}


export default WithSpinner;