// interface/userInfer.ts
export interface UserInfer {
    id: string;
    name: string;
    phoneNumber: string;
    password: string;
    weight: number | null;
    height: number | null;
    gender: string | null;
    pictureUrl: string | null;
    ytLink: string | null;
    description: string | null;
    role: String;
  }
  
  export enum Role {
    GYM_OWNER = 'GYM_OWNER',
    TRAINER = 'TRAINER',
    CLIENT = 'CLIENT',
  }
  
  // RegisterParams interface should be in the same file for consistency
  export interface RegisterParams {
    name: string;
    password: string;
    phone: string;
    role: Role;
  }
  