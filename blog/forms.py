from django import forms
from django.core.exceptions import ValidationError
from blog.models import MailingList


class MailForm (forms.Form):
    first_name = form.CharField(
        max_length=255, 
        required=True,
        label="First Name"
    )
    email_address = form.EmailField(
        required=True
        label="Email Address"
    )

    def clean(self):
        # if (self.cleaned_data.get('email') !=
        #     self.cleaned_data.get('confirm_email')):

        #     raise ValidationError(
        #         "Email addresses must match."
        #     )

        return self.cleaned_data

    class Meta:
        model = MailingList