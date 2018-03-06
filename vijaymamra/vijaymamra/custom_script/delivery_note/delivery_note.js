/ Copyright (c) 2017, Frappe Technologies Pvt. Ltd. and Contributors

// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Delivery Note Item", {

   bag : function(frm, cdt, cdn) {

		console.log("===========================")

		var child = locals[cdt][cdn];

		if(child){

			if (child.bag){

				frappe.call({

						method:"vijaymamra/custom_script/delivery_note/delivery_note"
						args:{

							"bag_qty": child.bag,

							"weight_per_bag": child.weight_per_bag,

							
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
