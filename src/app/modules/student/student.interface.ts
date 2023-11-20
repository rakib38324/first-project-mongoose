// import { Schema, model, connect } from 'mongoose';

import { Model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
export type TUserName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type TGuardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNum: string;
  motherName: string;
  motherOccupation: string;
  motherContactNum: string;
};

export type TLocalGuardian = {
  relation: string;
  name: string;
  occupation: string;
  contactNum: string;
  address: string;
};

export type TStudent = {
  id: string;
  password: string;
  name: TUserName;
  gender: 'Male' | 'Female' | 'Other';
  dateOfBirth?: string;
  contactNum: string;
  emergencyContactNum: string;
  email: string;
  bloodGroup?: 'A+' | 'B+' | 'AB+' | 'O+' | 'A-' | 'B-' | 'AB-' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: 'active' | 'blocked';
  isDeleted: boolean;
};

//-======================== for creating static ==========================
export interface StudentModel extends Model<TStudent> {
  isUserExists(id: string): Promise<TStudent | null>;
}

//================== for creating instance =========================
// export type StudentMethods = { isUserExists(id: string): Promise<TStudent | null> }

// export type StudentModel = Model<TStudent, Record<string, never>, StudentMethods>
