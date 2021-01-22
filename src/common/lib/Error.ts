import Vue from "vue";
const ErrorHandler = (err: Error) => {
    console.error(err.message)
}

export default ErrorHandler