using MySearch_API.Interfaces.IUtilityService;

namespace MySearch_API.Services.UtilityService
{
    public class InputValidationService : IInputValidationService
    {
        InputValidationService() {}

        public bool IsQueryValid(string query)
        {
            if (query.Equals("") || query == "undefined")
                return false;

            return true;
        }
    }
}
