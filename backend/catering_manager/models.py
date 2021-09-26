from django.db import models

# Create your models here.

class BookingRequest(models.Model):
    '''
    This models represents a request to book sent through the site.
    '''
    created_at = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=128)
    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=16, null=True, blank=True)
    event = models.CharField(max_length=128)
    event_date = models.DateField()
    event_start_time = models.TimeField()
    event_end_time = models.TimeField()
    other_info = models.TextField(null=True, blank=True)

    def send_request_email(self):
        '''
        Send this booking request to owner's email
        '''
        raise NotImplementedError()
