// IsDetail 은 boolean의 확장된 값이다 => boolean을 따른다.

export type SDeal<IsDetail extends boolean = false> = {
  id: number;
  title: string;
  imgURL: string;
  price: number;
  location: string;
  likesCount: number;
} & (IsDetail extends true
  ? {
      seller: {
        avatarImgURL: string;
        email: string;
      };
      createdAt: number;
      content: string;
      viewsCount: number;
    }
  : {});
