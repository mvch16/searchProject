using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MySearch_API.Interfaces;
using MySearch_API.Services;

namespace MySearch_API.ServiceInstaller
{
    public class Service_Installer : Installer_Interface
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddScoped<ISearchService, SearchServices>();
            services.AddScoped<IRequestService, RequestService>();
        }
    }
}
