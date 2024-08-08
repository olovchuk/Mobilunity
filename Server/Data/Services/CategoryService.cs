using Server.Data.Models;

namespace Server.Data.Services;

public class CategoryService
{
    public List<Category> GetCategories()
    {
        return new List<Category>
        {
            new Category { CategoryId = 1, CategoryName = "Fruits", ParentCategoryId = null },
            new Category { CategoryId = 2, CategoryName = "Apples", ParentCategoryId = 1 },
            new Category { CategoryId = 3, CategoryName = "Bananas", ParentCategoryId = 1 },
            new Category { CategoryId = 4, CategoryName = "Green Apples", ParentCategoryId = 2 },
            new Category { CategoryId = 5, CategoryName = "Red Apples", ParentCategoryId = 2 },
            new Category { CategoryId = 6, CategoryName = "Red Apples SMALL", ParentCategoryId = 5 },
            new Category { CategoryId = 7, CategoryName = "Yellow Bananas", ParentCategoryId = 3 },
            new Category { CategoryId = 8, CategoryName = "Plantains", ParentCategoryId = 3 },
            new Category { CategoryId = 9, CategoryName = "Vegatable", ParentCategoryId = null },
            new Category { CategoryId = 10, CategoryName = "Cucumber", ParentCategoryId = 9 },
            new Category { CategoryId = 11, CategoryName = "Orange", ParentCategoryId = 10 }
        };
    }
}