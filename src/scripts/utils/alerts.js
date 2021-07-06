import Swal from "sweetalert2";

const alertError = (message) => {
    Swal.fire({
        icon: "error",
        title: "Opps.. something went wrong",
        Text: message,
        timer: 1000,
        timerProgressBar: true
    });
};

const alertSuccess = ({ title = "success", message }) => {
    Swal.fire({
        icon: "success",
        title,
        message
    });
};

export { alertError, alertSuccess };
