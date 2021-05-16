using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySearch_API.Interfaces;

namespace MySearch_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SearchController : ControllerBase
    {

        private readonly ILogger<SearchController> _logger;
        private readonly ISearchService _searchService;
        public SearchController(ILogger<SearchController> logger, ISearchService searchService)
        {
            _logger = logger;
            _searchService = searchService;
        }

        [HttpGet("{searchQuery}/{pageNumber}")]
        public string Get(string searchQuery, int pageNumber)
        {
            return this._searchService.Search(searchQuery,pageNumber);
        }
    }
}
