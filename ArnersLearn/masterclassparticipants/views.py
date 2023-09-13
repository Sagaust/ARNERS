from django.shortcuts import render, redirect, get_object_or_404
from .models import MasterclassParticipant

# Display all masterclass participants
def list_masterclass_participants(request):
    participants = MasterclassParticipant.objects.all()
    return render(request, 'masterclassparticipants/list.html', {'participants': participants})

# Edit a masterclass participant
def edit_masterclass_participant(request, id):
    participant = get_object_or_404(MasterclassParticipant, id=id)
    if request.method == 'POST':
        # Update the participant's details here
        pass
    return render(request, 'masterclassparticipants/edit.html', {'participant': participant})

# Delete a masterclass participant
def delete_masterclass_participant(request, id):
    participant = get_object_or_404(MasterclassParticipant, id=id)
    participant.delete()
    return redirect('list_masterclass_participants')