export interface Posts {
  id: number;
  title: string;
  content: string;
  image: string;
  likes: number;
  userId: number;
  userName: string;
  category: number;
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
}
