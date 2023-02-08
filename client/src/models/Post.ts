interface Post {
  _id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string;
  description: string;
  picturePath: string;
  userPicturePath: string;
  likes: {
    [key: string]: boolean;
  };
  comments: string[];
}

export default Post;
