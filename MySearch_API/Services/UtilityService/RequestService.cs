using MySearch_API.Interfaces;
using System.IO;
using System.Net;

namespace MySearch_API.Services
{
    public class RequestService : IRequestService
    {
        private string BASESOLRURL = "http://localhost:8983/solr/techproducts/";

        public RequestService() { }
        public string ExecuteRequest(string URI)
        {
            WebRequest webRequest = HttpWebRequest.Create(URI);
            HttpWebRequest httpWebRequest = (HttpWebRequest)webRequest;
            httpWebRequest.Method = "GET";
            httpWebRequest.ContentType = "application/json";
            WebResponse webResponse = webRequest.GetResponse();
            StreamReader streamReader = new StreamReader(webResponse.GetResponseStream());
            return streamReader.ReadToEnd();
        }

        public string BaseSolrQueryURL()
        {
            return BASESOLRURL + "select?q=";
        }

        public string AllResultsSolrQueryURL()
        {
            return this.BaseSolrQueryURL() + "*%3A*";
        }
    }
}
