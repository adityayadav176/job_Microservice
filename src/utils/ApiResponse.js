class ApiResponse {
    constructor(statutCode, data, message = "Success") {
        this.statutCode = statutCode,
        this.data = data
        this.message = message,
        this.success = statutCode < 400;
    }
}

export { ApiResponse }