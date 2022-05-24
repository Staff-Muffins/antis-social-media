/* Posts page */
export interface IUser {
  id: number;
  image?: string;
  firstName: string;
  lastName: string;
}

export interface IComment {
  id: number;
  text: string;
  user: IUser;
}

export interface IPost {
  id: number;
  description: string;
  image?: string;
  likes: number;
  comments?: IComment[];
  reaction: number;
}
