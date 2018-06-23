import { toast } from "react-toastify";

export const successNotification = (text) => {

        this.toastId = toast(text, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            pauseOnHover: true,
            type: "success",
            hideProgressBar: true,
        })

}

export const errorNotification = (text) => {

        this.toastId = toast(text, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            pauseOnHover: true,
            type: "error",
            hideProgressBar: true,
        })

}

export const infoNotification = (text) => {
    if(!toast.isActive(this.toastId)){
        this.toastId = toast(text, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 10000,
            pauseOnHover: true,
            type: "info",
            hideProgressBar: false,
        })
    }  
}