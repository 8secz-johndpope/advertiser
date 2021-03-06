from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from profiles import views

urlpatterns = [
	url(r'^register/$', views.Register.as_view()),
	url(r'^users/$', views.UserList.as_view()),
	url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
	url(r'^userprofiles/$', views.UserProfileList.as_view()),
	url(r'^userprofiles/(?P<pk>[0-9]+)/$', views.UserProfileDetail.as_view()),
	url(r'^avatarupload/$', views.AvatarUploadView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
