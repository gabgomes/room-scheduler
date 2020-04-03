using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoomScheduler.Data;
using RoomScheduler.Models;

namespace RoomScheduler.Controllers
{
    public class RoomController : Controller
    {
        private readonly StoreDataContext _context;

        public RoomController(StoreDataContext context)
        {
            _context = context;
        }

        [Route("v1/salas")]
        [HttpGet]
        public IEnumerable<Room> Get()
        {
            return _context.Rooms.AsNoTracking().ToList();
        }

        [Route("v1/salas/{id}")]
        [HttpGet]
        public Room Get(int id)
        {
            return _context.Rooms.AsNoTracking().Where(x => x.Id == id).FirstOrDefault();
        }

        [Route("v1/salas")]
        [HttpPost]

        public Room Post([FromBody]Room room)
        {
            _context.Rooms.Add(room);
            _context.SaveChanges();

            return room;
        }

        // [Route("v1/salas")]
        // [HttpPost]

        // public Room Post([FromBody]Room room)
        // {
        //     _context.Room.Add(room);
        //     _context.SaveChanges();

        //     return room;
        // }

        // [Route("v1/salas/{id}/agendamentos")]
        // [HttpGet]
        // public IEnumerable<Schedule> GetSchedules(int id)
        // {
        //     return _context.Schedules.AsNoTracking().Where(x => x.RoomId == id).ToList();
        // }

        // [Route("v1/agendamentos")]
        // [HttpPost]

        // public Schedule Post([FromBody]Schedule schedule)
        // {
        //     _context.Schedules.Add(schedule);
        //     _context.SaveChanges();

        //     return schedule;
        // }

        // [Route("v1/agendamentos")]
        // [HttpPut]

        // public Schedule Put([FromBody]Schedule schedule) 
        // {
        //     _context.Entry<Schedule>{schedule}.State = EntityState.Modified;
        //     _context.SaveChanges();

        //     return schedule;
        // }

        // [Route("v1/agendamentos")]
        // [HttpDelete]

        // public Schedule Delete([FromBody]Schedule schedule)
        // {
        //     _context.Schedules.Remove(schedule); 
        //     _context.SaveChanges();

        //     return schedule;
        // }
    }
}