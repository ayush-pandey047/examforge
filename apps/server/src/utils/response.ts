import { Response } from 'express';
import { ApiResponse } from '../types';

export function sendScuccess<T>(
    res: Response,
    data?: T,
    message = 'Success',
    statusCode = 200
): void {
    const response: ApiResponse<T> = {success: true, data, message};
    res.status(statusCode).json(response);
}
    
export function sendError(
    res: Response,
    message = 'An error occurred',
    statusCode = 500
): void {
    const response: ApiResponse = { success: false,  message };
    res.status(statusCode).json(response);
}