using MySearch_API.Interfaces;
using MySearch_API.Interfaces.IUtilityService;
using System;

namespace MySearch_API.Services
{
    public class SearchServices : ISearchService
    {
        private readonly IRequestService _requestService;
        //private readonly IInputValidationService _inputValidationService;
        public SearchServices(IRequestService requestService){
            _requestService = requestService;
        }

        public string Search(string searchQuery, int pageNumber)
        {
            try
            {
                if (searchQuery != "undefined")
                    return this._requestService.ExecuteRequest( this._requestService.BaseSolrQueryURL() + searchQuery);
                else
                    return this._requestService.ExecuteRequest(this._requestService.AllResultsSolrQueryURL());
            }catch(Exception ex)
            {
                var error = ex.Message;
            }

            return "";

        }
    }
}
