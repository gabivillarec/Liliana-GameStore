


const Toast = ({title , message}) =>{
    return(
        <div className="toast-container position-fixed bottom-0 end-0 p-3 m-2">
                <div
                    id="liveToast"
                    className="toast text-bg-success"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true">
                    <div className="toast-header bg-success">
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

export default Toast