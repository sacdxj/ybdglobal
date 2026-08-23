#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import openpyxl

wb = openpyxl.load_workbook('zhutova社媒规划.xlsx')
ws = wb.active

for i, row in enumerate(ws.values):
    if i < 50:  # Show first 50 rows
        print(row)
    else:
        break

wb.close()
