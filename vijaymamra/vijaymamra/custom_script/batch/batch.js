// Copyright (c) 2017, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on("Batch", {

	manufacturing_date: function(frm) {
		frappe.call({
			method:"patanjali.patanjali.custom_script.batch.batch.calculate_expiry_date",
			args:{
				"mnfg_dt" : frm.doc.manufacturing_date
			},
			callback: function(r) {
				if(r.message) {
					cur_frm.set_value("expiry_date",r.message);
				}
			}
		})
	}
	
});