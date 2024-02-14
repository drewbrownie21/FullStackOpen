const Notification = ({message}) => {
    if(message == null){
        return null
    }
    else if(message.includes('ERROR')){
        return (
            <div className='error-message'>
                {message}
            </div>
        )
    }
    else{
        return (
            <div className='success-message'>
                {message}
            </div>
        )
    }
}

export default Notification