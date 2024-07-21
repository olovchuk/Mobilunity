using Server.Data.Models;

namespace Server.Data.Response;

public class GetCategoryResponse
{
    public bool IsSuccessful { get; set; }
    public string Message { get; set; }
    public List<Category> Categories { get; set; }
}