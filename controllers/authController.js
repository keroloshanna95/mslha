import { registerUser, loginUser } from "../services/authServices.js";
import catchAsync from "../utils/catchAsync.js";
import { sendToken } from "../utils/sendToken.js";
import  AppError  from "../utils/appError.js";

export const register = catchAsync(async (req, res, next) => {
  const user = await registerUser(req.body);
  sendToken(user, 201, res);
});

export const login = catchAsync(async (req, res, next) => {
  const {email, password} = req.body;
  const user = await loginUser(email);
  if (
    !user ||
    !(await user.correctPassword(password, user.password))
  ) {
    next(new AppError("Invalid email or password", 401));
  }
  sendToken(user, 200, res);
});
