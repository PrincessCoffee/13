#!/bin/bash

echo "نشر موقع Princess Coffee على GitHub Pages..."
echo

echo "إضافة جميع الملفات..."
git add .

echo "إنشاء commit..."
read -p "أدخل رسالة التحديث (أو اضغط Enter للرسالة الافتراضية): " message
if [ -z "$message" ]; then
    message="تحديث موقع Princess Coffee"
fi

git commit -m "$message"

echo "رفع الملفات إلى GitHub..."
git push origin main

echo
echo "تم النشر بنجاح!"
echo "الموقع سيكون متاحاً على: https://princesscoffee.github.io/13/"
echo "قد يستغرق الأمر 5-10 دقائق للظهور"