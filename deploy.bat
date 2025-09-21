@echo off
echo نشر موقع Princess Coffee على GitHub Pages...
echo.

echo إضافة جميع الملفات...
git add .

echo إنشاء commit...
set /p message="أدخل رسالة التحديث (أو اضغط Enter للرسالة الافتراضية): "
if "%message%"=="" set message=تحديث موقع Princess Coffee

git commit -m "%message%"

echo رفع الملفات إلى GitHub...
git push origin main

echo.
echo تم النشر بنجاح!
echo الموقع سيكون متاحاً على: https://princesscoffee.github.io/13/
echo قد يستغرق الأمر 5-10 دقائق للظهور

pause