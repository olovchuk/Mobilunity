import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {CategoryNode} from "../category-tree.component";

@Component({
  selector: 'app-category-tree-node',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    NgForOf,
    NgIf,
    NgStyle
  ],
  templateUrl: './category-tree-node.component.html',
  styleUrl: './category-tree-node.component.scss'
})
export class CategoryTreeNodeComponent implements OnInit {
  @Input("Data") data: CategoryNode[] | undefined = [];
  @Input("isExpandedAll") isExpandedAll: boolean = false;
  @ViewChild("childNodes") childNodes!: CategoryTreeNodeComponent;
  expandedItems: Set<number> = new Set();

  async ngOnInit() {
  }

  toggleShowChild(index: number): void {
    if (this.expandedItems.has(index)) {
      this.expandedItems.delete(index);
    } else {
      this.expandedItems.add(index);
    }
  }

  isExpanded(index: number): boolean {
    return this.expandedItems.has(index);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isExpandedAll']) {
      this.handleExpandAll();
    }
  }

  handleExpandAll(): void {
    this.expandedItems.clear();
    console.log(this.isExpandedAll);
    if (this.isExpandedAll && this.data) {
      this.expandAllCategories(this.data);
    }
  }

  expandAllCategories(nodes: CategoryNode[]): void {
    for (const node of nodes) {
      this.expandedItems.add(node.categoryId);
      if (node.children && node.children.length > 0) {
        this.expandAllCategories(node.children);
      }
    }
  }
}
