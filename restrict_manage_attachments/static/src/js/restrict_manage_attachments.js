//© 2018-Today Aktiv Software (http://www.aktivsoftware.com).
//License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).
odoo.define('restrict_manage_attachments.restrict_manage_attachments', function(require) {
    "use strict";
    var Sidebar = require('web.Sidebar');
    var session = require('web.session');
    Sidebar.include({
        redraw: function() {
            var self = this;
            self._super.apply(self, arguments);
            if (self.model_id) {
                session.user_has_group('restrict_manage_attachments.group_restrict_manage_attachments').then(
                function(restrict_manage_attachments){
                    if (restrict_manage_attachments) {
                        self.$el.find(".o_sidebar_delete_attachment").addClass('hidden')
                        self.$el.find(".o_form_binary_form").addClass('hidden')
                    }
                });
            }
        },
    });
});
