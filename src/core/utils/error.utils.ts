class ErrorUtils {
    defaultError = "Houve um erro interno, tente novamente em instantes.";

    get(err: any): string {
        if (err.response && err.response.data) {
            const { message } = err.response.data;

            if (message) {
                return message;
            }
        }

        return this.defaultError;
    }
}

export default new ErrorUtils();