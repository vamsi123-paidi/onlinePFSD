from django.urls import path
from . import views

app_name = "students"

urlpatterns = [
    path("",views.student_list,name='list'),
    path("add/",views.student_add,name='add'),
    path("create-demo",views.create_sample_students),
    path("read",views.read_students),
    path("update",views.update_student),
    path("delete",views.delete_student),
    path("ti/home",views.ti_home,name="ti_home"),
    path("ti/about",views.ti_about,name="ti_about"),
    path("msg/sucess",views.show_success_page,name="sucess_msg"),
    path("msg/error",views.show_error_page,name="err_msg")
]
