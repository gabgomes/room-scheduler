using Microsoft.EntityFrameworkCore;
using RoomScheduler.Models;

namespace RoomScheduler.Data
{
    public class StoreDataContext : DbContext
    {
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Schedule> Schedules { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=localhost,1433;Database=db;User ID=sa; Password=gabriela#1234#null");
        }
    }
}