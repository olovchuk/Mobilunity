namespace Server.Data.Models;

public class Category
{
    public int CategoryId { get; set; }
    public string CategoryName { get; set; }
    public int? ParentCategoryId { get; set; }
}