Ext.define('Apollo.controller.Category', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			detailCard : 'Category', 
			toolbar: 'Category toolbar'
		},
		control : {
			'Category dataview' : {
				itemtap : 'showDetail'
			}
		}
	},
	showDetail : function(dataview, index, element, record) {
    	this.getToolbar().hide();
    	this.getDetailCard().push({
			xtype : 'panel',
			title : record.get('CN'),
			items: [
                    {
                        styleHtmlContent: true
                    },
   
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        items: [
                            {
                                xtype: 'selectfield',
                                name : 'options',
                                width: '400px',
                                options: [
                                    {text: 'Milk',  value: '1'},
                                    {text: 'Cheese', value: '2'},
                                    {text: 'Yogurt', value: '3'},
                                ]
                            }
                        ]
                    }
                ]
			

		});

	}

});











