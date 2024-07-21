import {Component, OnInit} from '@angular/core';
import {Category} from "../../models/Category";
import {CategoryService} from "../../service/CategoryService";
import {MatTreeModule, MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-category-tree',
  standalone: true,
  templateUrl: './category-tree.component.html',
  imports: [
    MatIconButton,
    MatTreeModule,
    MatIconModule,
    NgIf,
  ],
  styleUrl: './category-tree.component.scss'
})
export class CategoryTreeComponent implements OnInit {
  isErrorLoad = true;
  treeControl: NestedTreeControl<CategoryNode>;
  dataSource: MatTreeNestedDataSource<CategoryNode>;

  constructor(private categoryService: CategoryService) {
    this.treeControl = new NestedTreeControl<CategoryNode>(node => node.children);
    this.dataSource = new MatTreeNestedDataSource<CategoryNode>();
  }

  async ngOnInit() {
    let response = await this.categoryService.getCategories();
    if (response.isSuccessful) {
      this.dataSource.data = this.buildTree(response.categories, null);
      this.isErrorLoad = false;
    } else {
      this.isErrorLoad = true;
    }
  }

  hasChild = (_: number, node: CategoryNode) => !!node.children && node.children.length > 0;

  buildTree(categories: Category[], parentId: number | null): CategoryNode[] {
    return categories
      .filter(category => category.parentCategoryId === parentId)
      .map(category => ({
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        children: this.buildTree(categories, category.categoryId)
      }));
  }
}

interface CategoryNode {
  categoryId: number;
  categoryName: string;
  children?: CategoryNode[];
}
