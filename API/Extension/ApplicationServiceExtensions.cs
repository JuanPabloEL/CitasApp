using API.Data;
using API.Interfaces;
using API.Services;
using Microsoft.EntityFrameworkCore;

namespace API.Extension;
public static class ApplicationServiceExtensions
{
    public static IServiceCollection AddAplicationServices(
        this IServiceCollection services,
        IConfiguration config)
        {
            services.AddDbContext<DataContext>(opt => 
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            services.AddCors();
            services.AddScoped<ITokenService, TokenService>();
            services.AddScoped<IUserRepository, UsersRepository>();
            services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies()); 

            return services;
        }
}
