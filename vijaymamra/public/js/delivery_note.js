cur_frm.add_fetch('item_code', 'weight_per_bag', 'weight_per_bag');

consol_log("===========");

frappe.ui.form.on("Delivery Note Item", "bag", function(frm, cdt, cdn) {
	consol_log("===========")
	var child = locals[cdt][cdn];
	result_value = child.bag * child.weight_per_bag;
	frappe.model.set_value(cdt, cdn, "qty", result_value)
	
});

frappe.ui.form.on("Delivery Note Item", "weight_per_bag", function(frm, cdt, cdn) {
	var child = locals[cdt][cdn];
	result_value = child.bag * child.weight_per_bag;
	frappe.model.set_value(cdt, cdn, "qty", result_value)

