using System;
using System.Collections.Generic;

namespace CoachNotes.Domain.Entities
{
    public class Workout
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Programme { get; set; }
        public string Comment { get; set; }
        public DateTime Date { get; set; }

        public ICollection<PreparationNote>? PreparationNotes { get; set; }
    }
}
