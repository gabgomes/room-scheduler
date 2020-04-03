using System;

namespace RoomScheduler.Models
{
    public class Schedule
    {
        public int Id { get; set; }
        public int Room { get; set; }
        public string Title { get; set; }
        public DateTime InitialDate { get; set; }
        public String FinalDate { get; set; }
    }
}