import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document { 
  content: string;
  createdAt: Date;

}

const MessageSchema: Schema<Message> = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    }

  }
);

export interface User extends Document { 
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessages: boolean;
  messages:Message[]

}
const UserSchema: Schema<User> = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      trim: true,
      unique: true
    
    },
    email: {
      type:String,
      required: [true, 'Email is required'],
      unique: true,
      match: [/\S+@\S+\.\S+/, 'Email is invalid'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    verifyCode: {
      type: String,
      required: [true, 'Verification code is required']
    },
    verifyCodeExpiry: {
      type: Date,
      requird: [true, 'Verification code expiry is required']
    },
    isAcceptingMessages: {
      type: Boolean,
      default: true,
      required: [true, 'Accepting messages status is required']
    },
    messages: [MessageSchema],
    
    isVerified: {
      type: Boolean,
      default: false,
      required: [true, 'Verification status is required']
    }


  }
);


const UserModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User", UserSchema);

export default UserModel;