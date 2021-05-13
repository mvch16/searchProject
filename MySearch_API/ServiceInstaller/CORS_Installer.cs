using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySearch_API.ServiceInstaller
{
    public class CORS_Installer : Installer_Interface
    {
        public void InstallServices(IServiceCollection services, IConfiguration configuration)
        {
            services.AddCors(setupAction =>
            {
                setupAction.AddPolicy("AppCORSPolicy", p =>
                {
                    p.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
            });
        }
    }
}
