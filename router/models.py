# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Router(models.Model):

    class Meta:
        db_table = 'tbl_router'

    sapid = models.CharField(max_length=18)
    host_name = models.CharField(max_length=14)
    loopback = models.CharField(max_length=15)
    mac_address = models.CharField(max_length=17)
    active = models.BooleanField(default=1)

    def __unicode__(self):
        return self.sapid