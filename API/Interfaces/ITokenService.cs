using API.Entities;

namespace API.Interfaces;
public interface ITokenService
{
    string CrateToken(AppUser user);
}
