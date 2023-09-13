from django.shortcuts import render, redirect, get_object_or_404
from .models import Event
from .forms import EventForm  # Assuming you have a form for Event

# Display all events
def list_events(request):
    events = Event.objects.all()
    return render(request, 'events/list.html', {'events': events})

# Create a new event
def create_event(request):
    if request.method == 'POST':
        form = EventForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_events')
    else:
        form = EventForm()
    return render(request, 'events/create.html', {'form': form})

# Edit an event
def edit_event(request, id):
    event = get_object_or_404(Event, id=id)
    if request.method == 'POST':
        form = EventForm(request.POST, instance=event)
        if form.is_valid():
            form.save()
            return redirect('list_events')
    else:
        form = EventForm(instance=event)
    return render(request, 'events/edit.html', {'form': form})

# Delete an event
def delete_event(request, id):
    event = get_object_or_404(Event, id=id)
    event.delete()
    return redirect('list_events')
