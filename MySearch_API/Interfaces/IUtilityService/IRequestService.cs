namespace MySearch_API.Interfaces
{
    public interface IRequestService
    {
        string ExecuteRequest(string URI);
        string BaseSolrQueryURL();
        string AllResultsSolrQueryURL();
    }
}
