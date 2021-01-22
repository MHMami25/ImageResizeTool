import Vue from "vue";
const ErrorHandler = (err: Error) => {
    console.error(err.message)
    console.error((err.stack))
}

export default ErrorHandler