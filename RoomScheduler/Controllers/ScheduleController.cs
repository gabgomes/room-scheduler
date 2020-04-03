using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoomScheduler.Data;
using RoomScheduler.Models;
using System.Globalization;
using System;

namespace RoomScheduler.Controllers
{
    public class ScheduleController : Controller
    {
        private readonly StoreDataContext _context;

        public ScheduleController(StoreDataContext context)
        {
            _context = context;
        }

        [Route("v1/agendamentos")]
        [HttpGet]
        public IEnumerable<Schedule> GetAllSchedules(int id)
        {
            return _context.Schedules.AsNoTracking().ToList();
        }

        [Route("v1/agendamentos")]
        [HttpPost]

        public Schedule Post([FromBody]Schedule schedule)
        {

            // DateTime dateVal = DateTime.ParseExact(x.InitialDate, "dd/MM/yyyy HH:mm:ss")

            // var rooms = _context.Schedules.Where(x => DateTime.ParseExact(x.InitialDate, "dd/MM/yyyy HH:mm:ss")).ToList();

            _context.Schedules.Add(schedule);
            _context.SaveChanges();

            return schedule;

            // if(schedule.initialDate >= initialDate)
            //     if (dataInicio <= dataAComparar && dataAComparar <= dataFim)
            //         return true;
            //     else
            //         return false;
            // }

        }
    }
}