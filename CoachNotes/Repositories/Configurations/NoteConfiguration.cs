using CoachNotes.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CoachNotes.Repositories.Configurations
{
    public class NoteConfiguration : IEntityTypeConfiguration<Note>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Note> builder)
        {
            builder.HasKey(n => n.Id);
            builder.Property(n => n.Title).IsRequired().HasMaxLength(100);
            builder.Property(n => n.Content).HasMaxLength(1000);
            builder.HasIndex(n => new { n.PreparationNoteId, n.Order }).IsUnique();
        }
    }
}
