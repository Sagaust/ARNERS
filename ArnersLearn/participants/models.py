from django.db import models

class Participant(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Prefer not to say', 'Prefer not to say'),
        ('Unknown', 'Unknown'),
    ]
    
    ACADEMIC_STATUS_CHOICES = [
        ('Graduate', 'Graduate'),
        ('Doctoral Researcher', 'Doctoral Researcher'),
        ('Post Doctoral Researcher', 'Post Doctoral Researcher'),
        ('Lecturer', 'Lecturer'),
        ('Independent Researcher/Scholar', 'Independent Researcher/Scholar'),
        ('Not Applicable', 'Not Applicable'),
    ]
    
    FACULTY_CHOICES = [
        ('Natural Sciences', 'Natural Sciences'),
        ('Social Sciences', 'Social Sciences'),
        ('Management Sciences', 'Management Sciences'),
        ('Engineering/Technology', 'Engineering/Technology'),
        ('Medical/Clinical Sciences', 'Medical/Clinical Sciences'),
        ('Education', 'Education'),
        ('Humanities', 'Humanities'),
        ('Multidisciplinary', 'Multidisciplinary'),
        ('Not Applicable', 'Not Applicable'),
    ]
    
    # Basic Information
    full_name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    gender = models.CharField(max_length=20, choices=GENDER_CHOICES, default='Unknown')
    country_of_residence = models.CharField(max_length=100)
    current_institution = models.CharField(max_length=255)
    institutional_location = models.CharField(max_length=255)
    institutional_address = models.TextField()
    academic_status = models.CharField(max_length=50, choices=ACADEMIC_STATUS_CHOICES)
    faculty = models.CharField(max_length=50, choices=FACULTY_CHOICES)
    
    # Additional Information
    academic_biography = models.TextField()
    previous_digital_skills = models.TextField()
    github_account = models.URLField(blank=True, null=True)
    linkedin_account = models.URLField(blank=True, null=True)
    programming_languages = models.TextField(blank=True, null=True)
    markup_languages = models.TextField(blank=True, null=True)
    research_area = models.TextField(blank=True, null=True)
    
    # New Columns
    area_of_specialization = models.TextField(blank=True, null=True)
    research_interests = models.TextField(blank=True, null=True)
    website_link = models.URLField(blank=True, null=True)
    profile_photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)
    
    class Meta:
            db_table = 'Participants'  # explicitly set the database table name
            
    def __str__(self):
        return self.full_name
