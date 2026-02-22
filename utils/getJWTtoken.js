import { JWT_SECRET, JWT_EXPIRES_IN} from '../config/env.js';
import jwt from 'jsonwebtoken';
import catchAsync from './catchAsync.js';

export function getJWTtoken (id) {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
}