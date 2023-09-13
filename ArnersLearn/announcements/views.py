from django.shortcuts import render, redirect, get_object_or_404
from .models import Announcement
from .forms import AnnouncementForm  # Assuming you have a form for Announcement

# Display all announcements
def list_announcements(request):
    announcements = Announcement.objects.all()
    return render(request, 'announcements/list.html', {'announcements': announcements})

# Create a new announcement
def create_announcement(request):
    if request.method == 'POST':
        form = AnnouncementForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_announcements')
    else:
        form = AnnouncementForm()
    return render(request, 'announcements/create.html', {'form': form})

# Edit an announcement
def edit_announcement(request, id):
    announcement = get_object_or_404(Announcement, id=id)
    if request.method == 'POST':
        form = AnnouncementForm(request.POST, instance=announcement)
        if form.is_valid():
            form.save()
            return redirect('list_announcements')
    else:
        form = AnnouncementForm(instance=announcement)
    return render(request, 'announcements/edit.html', {'form': form})

# Delete an announcement
def delete_announcement(request, id):
    announcement = get_object_or_404(Announcement, id=id)
    announcement.delete()
    return redirect('list_announcements')
