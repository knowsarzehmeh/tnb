interface Author {
  name: string;
  avatar: string;
}

export interface Article {
  title: string;
  content: string;
  datePosted: string;
  author: Author;
}
