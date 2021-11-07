using System.Collections.Generic;
using System.Threading.Tasks;
using Medismarts.API.Models;

namespace Medismarts.API.Interfaces
{
    public interface IMedismartsRepository
    {
        void Add<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        Task<bool> SaveAll();
        Task<IEnumerable<Student>> GetStudents();
        Task<Student> GetStudent(int id);
    }
}