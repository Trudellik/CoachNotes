
using CoachNotes.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CoachNotes.Repositories.Configurations
{
    public class WorkoutConfiguration : IEntityTypeConfiguration<Workout>
    {
        public void Configure(EntityTypeBuilder<Workout> builder)
        {
            builder.HasKey(w => w.Id);
            builder.Property(w => w.Title).IsRequired().HasMaxLength(100);
            builder.Property(w => w.Comment).HasMaxLength(500);
            builder.HasMany(w => w.PreparationNotes)
                   .WithOne(p => p.Workout)
                   .HasForeignKey(p => p.WorkoutId);
        }
    }
}
