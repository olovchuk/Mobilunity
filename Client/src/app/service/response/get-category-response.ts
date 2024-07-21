import {Category} from "../../models/Category";

export class GetCategoriesResponse {
  isSuccessful: boolean = false;
  message: string = '';
  categories: Category[] = [];
}
