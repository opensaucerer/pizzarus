import { Request, Response } from 'express';
import { sendErrorResponse, sendSuccessResponse } from '../utilities/response';
import {
  loginUser,
  registerUser,
  updateUser,
  findOneUser,
  destroyAUser,
} from '../dao/user';

const register = async (req: Request, res: Response) => {
  try {
    const create = await registerUser(req.body);
    if (create.status) {
      return sendSuccessResponse(res, create.message, create.data, 201);
    }
    return sendErrorResponse(res, create.message, {}, 400);
  } catch (error: any) {
    console.log(error);
    return sendErrorResponse(res, 'UNKNOWN_ERROR', {}, 500);
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const login = await loginUser(req.body);
    if (login.status) {
      return sendSuccessResponse(res, login.message, login.data, 200);
    }
    return sendErrorResponse(res, login.message, {}, 400);
  } catch (error: any) {
    console.log(error);
    return sendErrorResponse(res, 'UNKNOWN_ERROR', {}, 500);
  }
};

const updateAUser = async (req: Request, res: Response) => {
  try {
    const update = await updateUser(req.user, req.body);
    if (update.status) {
      return sendSuccessResponse(res, update.message, update.data, 200);
    }
    return sendErrorResponse(res, update.message, {}, 400);
  } catch (error: any) {
    console.log(error);
    return sendErrorResponse(res, 'UNKNOWN_ERROR', {}, 500);
  }
};

const getAUser = async (req: Request, res: Response) => {
  try {
    const found = await findOneUser({ _id: req.user._id });
    if (found.status) {
      return sendSuccessResponse(res, found.message, found.data, 200);
    }
    return sendErrorResponse(res, found.message, {}, 400);
  } catch (error: any) {
    console.log(error);
    return sendErrorResponse(res, 'UNKNOWN_ERROR', {}, 500);
  }
};

const deleteAUser = async (req: Request, res: Response) => {
  try {
    const found = await destroyAUser(req.body.email);
    if (found.status) {
      return sendSuccessResponse(res, found.message, found.data, 200);
    }
    return sendErrorResponse(res, found.message, {}, 400);
  } catch (error: any) {
    console.log(error);
    return sendErrorResponse(res, 'UNKNOWN_ERROR', {}, 500);
  }
};

export { register, login, updateAUser, getAUser, deleteAUser };
