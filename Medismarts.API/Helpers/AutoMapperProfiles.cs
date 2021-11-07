using AutoMapper;
using Medismarts.API.DTOs;
using Medismarts.API.Models;

namespace Medismarts.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Student, StudentListDTO>();
            CreateMap<StudentForUpdate, Student>().ReverseMap();
            CreateMap<StudentForCreationDTO, Student>().ReverseMap();
        }
    }
}