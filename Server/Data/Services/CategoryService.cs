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
            new Category { CategoryId = 6, CategoryName = "Yellow Bananas", ParentCategoryId = 3 },
            new Category { CategoryId = 7, CategoryName = "Plantains", ParentCategoryId = 3 }
        };
    }
}