using Medismarts.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Medismarts.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
        
        public DbSet<Student> Students { get; set; }
    }
}