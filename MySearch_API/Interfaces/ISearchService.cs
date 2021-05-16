namespace MySearch_API.Interfaces
{
    public interface ISearchService
    {
        string Search(string searchQuery, int pageNumber);
    }
}
