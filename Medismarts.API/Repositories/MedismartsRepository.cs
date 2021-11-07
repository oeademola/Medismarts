using System.Collections.Generic;
using System.Threading.Tasks;
using Medismarts.API.Data;
using Medismarts.API.Interfaces;
using Medismarts.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Medismarts.API.Repositories
{
    public class MedismartsRepository : IMedismartsRepository
    {
        private readonly DataContext _context;
        public MedismartsRepository(DataContext context)
        {
            _context = context;
        }

        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }

        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<IEnumerable<Student>> GetStudents()
        {
            var students = await _context.Students.ToListAsync();
            return students;
        }
        public async Task<Student> GetStudent(int id)
        {
            var student = await _context.Students.FirstOrDefaultAsync(x => x.Id == id);
            return student;
        }
    }
}