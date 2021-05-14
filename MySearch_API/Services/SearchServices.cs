using MySearch_API.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace MySearch_API.Services
{
    public class SearchServices : ISearchService
    {
        private readonly IRequestService _requestService;
        public SearchServices(IRequestService requestService){
            _requestService = requestService;
        }

        public string Test()
        {
            try
            {
                return this._requestService.GetRequest("http://localhost:8983/solr/techproducts/select?q=*%3A*");
            }catch(Exception ex)
            {
                var error = ex.Message;
            }

            return "";

        }
    }
}
