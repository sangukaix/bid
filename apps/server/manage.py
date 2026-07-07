#!/usr/bin/env python
"""Django 관리 명령어를 실행하는 시작 파일입니다."""
import os
import sys


def main():
    """터미널에서 runserver, migrate 같은 Django 명령어를 실행합니다."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "config.settings")

    from django.core.management import execute_from_command_line

    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
