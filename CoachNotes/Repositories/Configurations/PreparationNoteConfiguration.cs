using CoachNotes.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CoachNotes.Repositories.Configurations
{
    public class PreparationNoteConfiguration : IEntityTypeConfiguration<PreparationNote>
    {
        public void Configure(EntityTypeBuilder<PreparationNote> builder)
        {
            builder.HasKey(p => p.Id);
            builder.HasMany(p => p.Notes)
                   .WithOne(n => n.PreparationNote)
                   .HasForeignKey(n => n.PreparationNoteId);
        }
    }
}
