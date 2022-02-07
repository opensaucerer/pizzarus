import { Schema, model, Model } from 'mongoose';

const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    otp: String,
    otpTime: Date,
  },
  { timestamps: true }
);

const User: Model<any> = model('user', userSchema);

export default User;