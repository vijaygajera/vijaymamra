
from __future__ import unicode_literals

import frappe

from frappe.model.document import Document

import decimal


@frappe.whitelist()

def calculate_row_quantity(bag_qty, weight_per_bag):

	bag = float(bag_qty)

	weight_per_bag = float(weight_per_bag)

	row_qty = bag * weight_per_bag

	return round(row_qty)

