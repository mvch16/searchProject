using MySearch_API.Interfaces;
using MySearch_API.Interfaces.IUtilityService;
using System;

namespace MySearch_API.Services
{
    public class SearchServices : ISearchService
    {
        private readonly IRequestService _requestService;
        private readonly IInputValidationService _inputValidationService;
        private readonly IPaginationService _paginationService;
        public SearchServices(IRequestService requestService, IInputValidationService inputValidationService, IPaginationService paginationService){
            _requestService = requestService;
            _inputValidationService = inputValidationService;
            _paginationService = paginationService;
        }

        public string Search(string searchQuery, int pageNumber, int pageSize)
        {
            try
            {

                var startValue = this._paginationService.GetQueryStartNumber(pageNumber,pageSize);

                if (this._inputValidationService.IsQueryValid(searchQuery))
                    return this._requestService.ExecuteRequest( this._requestService.BaseSolrQueryURL() + searchQuery + "&start=" + startValue);
                else
                    return this._requestService.ExecuteRequest(this._requestService.AllResultsSolrQueryURL() + "&start=" + startValue);
            }catch(Exception ex)
            {
                var error = ex.Message;
            }

            return "";

        }
    }
}
