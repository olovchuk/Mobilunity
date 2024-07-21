import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {firstValueFrom, Observable} from "rxjs";
import {Category} from "../models/Category";
import {GetCategoriesResponse} from "./response/get-category-response";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private rootUrl = 'http://localhost:5294/api/categories/';
  private GetCategoriesEndPoint = this.rootUrl + 'GetCategories';

  constructor(private http: HttpClient) {
  }

  async getCategories(): Promise<GetCategoriesResponse> {
    return await firstValueFrom(this.http.get<GetCategoriesResponse>(this.GetCategoriesEndPoint));
  }
}
