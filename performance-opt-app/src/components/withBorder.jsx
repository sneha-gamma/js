
const withBorder = (WrappedComponent) =>{
    return (props) =>{
        return(
            <div style={{border:'2px solid blue',padding:'10px'}}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}
export default withBorder;