export type TAluRequestResponse<T> = {
    success: boolean;
    data: T;
    message: string;
}