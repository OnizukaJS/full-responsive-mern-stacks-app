interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  picturePath: string;
  friends: [];
  location: string;
  occupation: string;
  viewedProfile: number;
  impressions: number;
}

export default User;
