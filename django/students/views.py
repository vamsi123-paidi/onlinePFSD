from django.shortcuts import render,redirect,HttpResponse
from .models import Student
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


def student_list(request):
    students = Student.objects.all().order_by("-joined")
    return render(request,"students/student_list.html",{"students":students})

def student_add(request):
    if request.method == "POST":
        name=request.POST.get("name")
        age=request.POST.get("age")
        course=request.POST.get("course")
        
        Student.objects.create(name=name,age=age,course=course)
        return redirect('students:list')
    return render(request,'students/student_add.html')


def create_sample_students(request):
    Student.objects.create(name="adam",age=26,course="nodejs")
    Student.objects.create(name="eve",age=23,course="expressjs")
    Student.objects.create(name="suresh",age=29,course="django")
    
    return HttpResponse("3 students created")

def read_students(request):
    students = Student.objects.all()
    output = ""
    for s in students :
        output+= f"{s.name}-{s.age}-{s.course}<br>"
    return HttpResponse(output)

def update_student(request):
    Student.objects.filter(name="adam").update(course="reactjs")
    return HttpResponse("updated adam's list go and check in the list item")
        
def delete_student(request):
    Student.objects.filter(name="eve").delete()
    return HttpResponse("adam deleted")

def ti_home(request):
    return render(request,"students/ti_home.html")

def ti_about(request):
    return render(request,"students/ti_about.html")

def show_success_page(request):
    messages.success(request,"load sucess")
    return render(request,"students/success_page.html")

def show_error_page(request):
    messages.success(request,"load failed")
    return render(request,"students/error_page.html")

def register_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password1 = request.POST.get("password1")
        password2 = request.POST.get("password2")

        if password1 != password2:
            messages.error(request, "Passwords do not match.")
            return redirect("register")

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already exists.")
            return redirect("register")

        User.objects.create_user(username=username, password=password1)
        messages.success(request, "Registration successful! Please login.")
        return redirect("login")

    return render(request, "students/auth_register.html")


def login_view(request):
    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, f"Welcome, {username}!")
            return redirect("dashboard")
        else:
            messages.error(request, "Invalid username or password.")
            return redirect("login")

    return render(request, "students/auth_login.html")


def logout_view(request):
    logout(request)
    messages.info(request, "You have been logged out.")
    return redirect("login")


@login_required
def dashboard_view(request):
    return render(request, "students/auth_dashboard.html")
