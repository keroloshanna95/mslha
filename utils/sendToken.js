import { getJWTtoken } from "./getJWTtoken.js";
import catchAsync from "./catchAsync.js";

export const sendToken = (user, statusCode, res) => {
  
    const token = getJWTtoken(user._id);

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  };

  res.cookie("jwt", token, cookieOptions);
  return res.status(statusCode).json({
    success: "success",
    token,
    data: user,
  });
};
