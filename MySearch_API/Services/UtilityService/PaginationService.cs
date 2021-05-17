using MySearch_API.Interfaces.IUtilityService;

namespace MySearch_API.Services.UtilityService
{
    public class PaginationService : IPaginationService
    {
        public int GetQueryStartNumber(int pageNumber, int pageSize)
        {
            return pageNumber != 1 ? (pageNumber - 1) * pageSize + 1 : 0;
        }
    }
}
