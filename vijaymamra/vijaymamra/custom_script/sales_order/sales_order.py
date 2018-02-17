from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import decimal

@frappe.whitelist()
def calculate_row_quantity(bag, rate, uom):
	b = float(bag)
	conv_factor = float(uom)
	row_qty = b * conv_factor
	return round(row_qty)
