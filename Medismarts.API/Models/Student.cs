using System;

namespace Medismarts.API.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string CourseOfStudy { get; set; }
        public string Degree { get; set; }
        public string Faculty { get; set; }
        public string Department { get; set; }
        public string Bio { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public DateTime DateCreated { get; set; }
    }
}