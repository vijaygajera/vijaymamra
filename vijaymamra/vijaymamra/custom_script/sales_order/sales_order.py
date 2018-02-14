from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import decimal

@frappe.whitelist()
def calculate_row_quantity(bag_qty, rate, uom):
	bag = float(bag_qty)
	conv_factor = float(uom)
	row_qty = bag * conv_factor
	return round(row_qty)
