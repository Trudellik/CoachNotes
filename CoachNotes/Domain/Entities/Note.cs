namespace CoachNotes.Domain.Entities
{
    public class Note
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int Order { get; set; }

        public Guid PreparationNoteId { get; set; }
        public PreparationNote PreparationNote { get; set; }
    }
}