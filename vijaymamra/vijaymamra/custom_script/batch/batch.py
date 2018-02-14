from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe.utils import (flt, getdate, get_first_day, get_last_day, date_diff,
	add_months, add_days, formatdate, cint)

@frappe.whitelist()
def calculate_expiry_date(mnfg_dt):
	to_date = add_months(mnfg_dt, 6)
	return to_date