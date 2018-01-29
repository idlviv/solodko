export interface IBlog {
  _id?: string;
  title: string;
  body: {
    mainImage: string,
    mainText: string,
    components?: [{
      material: string,
      quantity: number,
      unit: string,
    }],
    blocks?: [{
      image: string,
      text: string,
    }],
  };
  createdBy?: string;
  createdBy_id: string;
  showOnMainPage?: boolean;
  createdAt: string;
  likes?: number;
  likedBy?: string[];
  dislikes?: number;
  dislikedBy?: string[];
  comments?: IComment[];
  views: number;
  commentsLength?: number;
}

export interface IComment {
  _id?: string;
  comment: string;
  commentators_id: string;
  commentedAt: string;
}
