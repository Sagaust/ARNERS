from django.shortcuts import render, redirect, get_object_or_404
from .models import Quiz

# Display all quizzes
def list_quizzes(request):
    quizzes = Quiz.objects.all()
    return render(request, 'quizzes/list.html', {'quizzes': quizzes})

# Edit a quiz
def edit_quiz(request, id):
    quiz = get_object_or_404(Quiz, id=id)
    if request.method == 'POST':
        # Update the quiz details here
        pass
    return render(request, 'quizzes/edit.html', {'quiz': quiz})

# Delete a quiz
def delete_quiz(request, id):
    quiz = get_object_or_404(Quiz, id=id)
    quiz.delete()
    return redirect('list_quizzes')
