// Copyright (c) 2017, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on("Sales Order Item", {

	quantity_of_bags: function(frm, cdt, cdn) {
		cnsole.log("===========================")
		var child = locals[cdt][cdn];
		if(child){
			if (child.quantity_of_bags){
				frappe.call({
						method:"patanjali.patanjali.custom_script.sales_order.sales_order.calculate_row_quantity",
						args:{
							"bag_qty": child.quantity_of_bags,
							"rate": child.rate,
							"uom": child.conversion_factor
						},
						callback: function(r) {
							if(r.message) {
								console.log(r.message)
								frappe.model.set_value(cdt, cdn, "qty",r.message);
							}
						}
					})
			} 
		}
	}
	
});