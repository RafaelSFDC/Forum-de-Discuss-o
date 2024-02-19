export interface Posts {
  id: number;
  title: string;
  content: string;
  image: string;
  likes: number;
  userId: number;
  userName: string;
  category: number;
  user: User;
  comments: Comments[];
}

export interface Comments {
  id: number;
  content: string;
  userId: number;
  userName: string;
  userEmail: string;
  image: string;
  description: string;
  category: string;
  postId: number;
  user: User;
  createdAt: Date;
}

export interface Categories {
  id: number;
  content: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  image: string;
  role: string;
  category: number;
}
