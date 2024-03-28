// custom class to allow dApps to handle errors in a more user-friendly way
export class TxError extends Error {
    private data: any;

    constructor(message: string, data: any = null) {
        super(message);
        this.data = data;
    }

    public static async normalize<T>(promise: Promise<T>): Promise<T> {
        try {
            return await promise;
        } catch (err) {
            if (typeof err === "string") {
              throw new TxError(err);
            }
            if (err instanceof Error) {
              throw err as TxError;
            }
            throw new TxError("Unknown error", err);
        }
    }

    public getMessage(): string {
        return this.message;
    }

    public getData(): any {
        return this.data;
    }
}