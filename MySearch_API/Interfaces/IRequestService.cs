using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MySearch_API.Interfaces
{
    public interface IRequestService
    {
        string GetRequest(string URI);
    }
}
