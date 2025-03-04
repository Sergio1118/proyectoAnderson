# Generated by Django 5.1.6 on 2025-02-27 22:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comentarios', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comentario',
            old_name='content',
            new_name='contenido',
        ),
        migrations.RenameField(
            model_name='comentario',
            old_name='created_at',
            new_name='fecha_publicacion',
        ),
        migrations.RemoveField(
            model_name='comentario',
            name='author',
        ),
        migrations.RemoveField(
            model_name='comentario',
            name='updated_at',
        ),
        migrations.AddField(
            model_name='comentario',
            name='autor',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
