import {Response} from "express";
import {StatusCodes} from "../consts";

export function successResponse(res: Response, message: string, data: any) {
    res.status(StatusCodes.OK).json({ message, data });
}

export function errorResponse(res: Response, message: string) {
    res.status(StatusCodes.ERROR).json({message});
}

export function notFoundResponse(res: Response) {
    res.status(StatusCodes.NOT_FOUND).json({message: "Invalid path"});
}
