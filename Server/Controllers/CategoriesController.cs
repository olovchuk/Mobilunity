using Microsoft.AspNetCore.Mvc;
using Server.Data.Response;
using Server.Data.Services;

namespace Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    private readonly CategoryService _categoryService;

    public CategoriesController(CategoryService categoryService)
    {
        _categoryService = categoryService;
    }

    [HttpGet("GetCategories")]
    public IActionResult GetCategories()
    {
        var categories = _categoryService.GetCategories();
        return Ok(new GetCategoryResponse
        {
            IsSuccessful = true
          , Message = string.Empty
          , Categories = categories
        });
    }
}