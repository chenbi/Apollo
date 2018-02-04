Ext.define('Apollo.controller.splist', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
               	splist: 'splist'
        },

        control: {
            'splist list': {
            	itemtap: 'onListDisclose'
            }
        }
    },

    onListDisclose: function(list, index, item, e) {		
	this.getSplist().push({
		xtype : 'spdetail',
		data: list.getStore().getAt(index).data,
		title : list.getStore().getAt(index).get('BN'),
	//	html: '',
		//title : item.get('PU'),
		scrollable : true,
		styleHtmlContent : true
	});
	Ext.getCmp('btnEdit').hide();
	//console.log(list.getStore().getAt(index).data);
	}

});