export default interface Product {
  title: string;
  isbn: string;
  pageCount: number;
  thumbnailUrl: string;
  shortDescription: string;
  longDescription: string;
  status: string;
  authors: string[];
  categories: string[];
  published: {
    $date: string;
    price: number;
    currency: string;
  };
  // custom props
  isNew: boolean;
}
