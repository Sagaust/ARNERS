# from django.http import JsonResponse, HttpResponse
# from django.views.decorators.csrf import csrf_exempt
# from rest_framework.parsers import JSONParser
# from rest_framework import status
# from feedback.models import Feedback
# from feedback.serializers import FeedbackSerializer

# # Create your views here.

# # List all feedback or create a new one
# @csrf_exempt
# def feedback_list(request):
#     if request.method == 'GET':
#         feedbacks = Feedback.objects.all()
#         serializer = FeedbackSerializer(feedbacks, many=True)
#         return JsonResponse(serializer.data, safe=False)

#     elif request.method == 'POST':
#         data = JSONParser().parse(request)
#         serializer = FeedbackSerializer(data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
#         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# # Retrieve, update or delete a feedback
# @csrf_exempt
# def feedback_detail(request, pk):
#     try:
#         feedback = Feedback.objects.get(pk=pk)
#     except Feedback.DoesNotExist:
#         return HttpResponse(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'GET':
#         serializer = FeedbackSerializer(feedback)
#         return JsonResponse(serializer.data)

#     elif request.method == 'PUT':
#         data = JSONParser().parse(request)
#         serializer = FeedbackSerializer(feedback, data=data)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         feedback.delete()
#         return HttpResponse(status=status.HTTP_204_NO_CONTENT)


from django.shortcuts import render, redirect, get_object_or_404
from .models import Feedback  # Assuming you have a Feedback model
from .forms import FeedbackForm  # Assuming you have a form for Feedback

# Display all feedbacks
def list_feedbacks(request):
    feedbacks = Feedback.objects.all()
    return render(request, 'feedback/list.html', {'feedbacks': feedbacks})

# Create a new feedback
def create_feedback(request):
    if request.method == 'POST':
        form = FeedbackForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('list_feedbacks')
    else:
        form = FeedbackForm()
    return render(request, 'feedback/create.html', {'form': form})

# Edit a feedback
def edit_feedback(request, id):
    feedback = get_object_or_404(Feedback, id=id)
    if request.method == 'POST':
        form = FeedbackForm(request.POST, instance=feedback)
        if form.is_valid():
            form.save()
            return redirect('list_feedbacks')
    else:
        form = FeedbackForm(instance=feedback)
    return render(request, 'feedback/edit.html', {'form': form})

# Delete a feedback
def delete_feedback(request, id):
    feedback = get_object_or_404(Feedback, id=id)
    feedback.delete()
    return redirect('list_feedbacks')
