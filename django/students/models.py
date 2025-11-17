from django.db import models

class Student(models.Model):
    name=models.CharField(max_length=150)
    age=models.PositiveIntegerField()
    course=models.CharField(max_length=20)
    joined=models.DateField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.name}({self.course})"
