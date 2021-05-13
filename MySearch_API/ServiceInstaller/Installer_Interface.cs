using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MySearch_API.ServiceInstaller
{
    public interface Installer_Interface
    {
        void InstallServices(IServiceCollection services, IConfiguration configuration);
    }
}
