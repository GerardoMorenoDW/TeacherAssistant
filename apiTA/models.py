from django.db import models

class User(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    email = models.EmailField()
    department = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)

    class Meta:
        db_table = 'users'

    def __str__(self):
        return f"{self.nombre} {self.apellido}"