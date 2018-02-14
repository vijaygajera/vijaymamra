from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
import decimal

@frappe.whitelist()
def calculate_row_quantity(bag_qty, rate, uom):
	bag = float(bag_qty)
	conv_factor = float(uom)
	row_qty = bag / conv_factor
	return round(row_qty)


def calculate_qty(doc, method=None):
	if doc.items:
		total_qty = 0
		bag_qty = 0
		for row in doc.items:
			total_qty = row.qty + total_qty
			bag_qty = row.quantity_of_bags + bag_qty
		doc.total_quantity_in_kg = total_qty
		doc.total_bags_quantity = bag_qty
