namespace CoachNotes.Domain.Entities
{
    public class PreparationNote
    {
        public Guid Id { get; set; }

        public ICollection<Note> Notes { get; set; }
        public Guid WorkoutId { get; set; }
        public Workout Workout { get; set; }
    }
}