using MySearch_API.Interfaces;
using System.IO;
using System.Net;

namespace MySearch_API.Services
{
    public class RequestService : IRequestService
    {

        public RequestService() { }
        public string GetRequest(string URI)
        {
            WebRequest webRequest = HttpWebRequest.Create(URI);
            HttpWebRequest httpWebRequest = (HttpWebRequest)webRequest;
            httpWebRequest.Method = "GET";
            httpWebRequest.ContentType = "application/json";
            WebResponse webResponse = webRequest.GetResponse();
            StreamReader streamReader = new StreamReader(webResponse.GetResponseStream());
            return streamReader.ReadToEnd();
        }
    }
}
