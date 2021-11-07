using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Medismarts.API.Data;
using Medismarts.API.DTOs;
using Medismarts.API.Interfaces;
using Medismarts.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Medismarts.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentsController : ControllerBase
    {
        private readonly IMedismartsRepository _repo;
        private readonly IMapper _mapper;
        public StudentsController(IMedismartsRepository repo, IMapper mapper)
        {
            _mapper = mapper;
            _repo = repo;
        }

        // GET api/students
        [HttpGet]
        public async Task<IActionResult> GetStudents()
        {
            var students = await _repo.GetStudents();

            return Ok(_mapper.Map<IEnumerable<StudentListDTO>>(students));
        }

        // GET api/students/5
        [HttpGet("{id}", Name = "get-student")]
        public async Task<IActionResult> GetStudent(int id)
        {
            var student = await _repo.GetStudent(id);

            return Ok(_mapper.Map<StudentListDTO>(student));
        }

        // POST api/students
        [HttpPost]
        public async Task<IActionResult> Create(StudentForCreationDTO studentForCreation)
        {
            var student = _mapper.Map<Student>(studentForCreation);

            _repo.Add(student);

            if (await _repo.SaveAll())
            {
                var studentToReturn = _mapper.Map<StudentListDTO>(student);
                return CreatedAtRoute("get-student", new { id = student.Id }, studentToReturn);
            }

            throw new Exception("Creating the student failed on save");
        }

        // PUT api/students/5
        [HttpPut]
        public async Task<IActionResult> Update(StudentForUpdate studentForUpdate)
        {
            var studentFromRepo = await _repo.GetStudent(studentForUpdate.Id);

            if(studentFromRepo == null)
                return NotFound();

            _mapper.Map(studentForUpdate, studentFromRepo);

            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception($"Updating student {studentForUpdate.Id} failed on save");
        }

        // DELETE api/students/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var studentFromRepo = await _repo.GetStudent(id);

            if(studentFromRepo == null)
                return NotFound();

            _repo.Delete(studentFromRepo);
            
            if (await _repo.SaveAll())
                return NoContent();

            throw new Exception("Error deleting the student");
        }
    }
}