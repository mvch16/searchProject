namespace MySearch_API.Interfaces.IUtilityService
{
    public interface IPaginationService
    {
        public int GetQueryStartNumber(int pageNumber, int pageSize);
    }
}