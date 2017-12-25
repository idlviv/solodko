export interface IBlog {
  title: string;
  body: string;
  createdBy: string;
  createdBy_id: string;
  createdAt: string;
  likes: number;
  likedBy: string[];
  dislikes: number;
  dislikedBy: string[];
  comments: [{
    comment: string,
    commentator: string,
  }];
}