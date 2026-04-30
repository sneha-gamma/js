import {ErrorBoundary} from 'react-error-boundary';

function ErrorFallback({error,resetErrorBoundary}){
    return(
        <div  role='alert'>
        <p>something went wrong</p>
        <pre style={{color:'red'}}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )

}

export default ErrorFallback;