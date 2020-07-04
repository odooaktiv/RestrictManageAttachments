# -*- coding: utf-8 -*-
# © 2018-Today Aktiv Software (http://www.aktivsoftware.com).
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    'name': "Restrict Manage Attachments",
    'summary': """
            Prevent to Add and Delete Attachments.
             """,
    'description': """
        Prevent to Add and Delete Attachments.
    """,
    'author': "Aktiv Software",
    'website': "http://www.aktivsoftware.com",
    'license': "AGPL-3",
    'category': 'Extra Tools',
    'version': '10.0.1.0.0',
    'depends': ['document'],
    'data': [
        'security/restrict_manage_attachments_security.xml',
        'views/restrict_manage_attachments_view.xml',
    ],
    'images': ['static/description/banner.jpg'],
    'installable': True,
}
