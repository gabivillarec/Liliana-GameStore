


const ErrorToast = ({title , message}) =>{
    return(
        <div className="toast-container position-fixed bottom-0 end-0 p-3 m-2">
                <div
                    id="liveToastError"
                    className="toast text-bg-danger"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                    >
                    <div className="toast-header bg-danger">
                        <strong className="me-auto">{title}</strong>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="toast"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="toast-body">{message}</div>
                </div>
            </div>
    )

}

export default ErrorToast