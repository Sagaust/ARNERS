from django.shortcuts import render, redirect, get_object_or_404
from .models import EventParticipant
from .forms import EventParticipantForm  # Assuming you have a form for EventParticipant

# Display all event participants
def list_eventparticipants(request):
    eventparticipants = EventParticipant.objects.all()
    return render(request, 'eventparticipants/list.html', {'eventparticipants': eventparticipants})

# Create a new event participant
def create_eventparticipant(request):
    if request.method == 'POST':
        form = EventParticipantForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_eventparticipants')
    else:
        form = EventParticipantForm()
    return render(request, 'eventparticipants/create.html', {'form': form})

# Edit an event participant
def edit_eventparticipant(request, id):
    eventparticipant = get_object_or_404(EventParticipant, id=id)
    if request.method == 'POST':
        form = EventParticipantForm(request.POST, instance=eventparticipant)
        if form.is_valid():
            form.save()
            return redirect('list_eventparticipants')
    else:
        form = EventParticipantForm(instance=eventparticipant)
    return render(request, 'eventparticipants/edit.html', {'form': form})

# Delete an event participant
def delete_eventparticipant(request, id):
    eventparticipant = get_object_or_404(EventParticipant, id=id)
    eventparticipant.delete()
    return redirect('list_eventparticipants')
