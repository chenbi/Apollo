Ext.define('Apollo.controller.Deal', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			detailCard : 'Deal'
		},
		control : {
			'Deal nestedlist' : {
				itemtap : 'showDetail'
			}
		}
	},
	showDetail : function(nestedList, list, index, element, record) {
    	this.getDetailCard().push({
			xtype : 'DealDetail',
			title : record.get('SD'),
			data: record.data,
			scrollable : true,
			styleHtmlContent : true
		});

	}

});


