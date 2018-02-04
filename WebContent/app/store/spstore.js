Ext.define('Apollo.store.spstore', {
    extend: 'Ext.data.Store',
    requires: [
        'Apollo.model.spmodel'
    ],

    config: {

        autoLoad: true,
        model: 'Apollo.model.spmodel',
        sorters: 'PF',
	    grouper: {
	        groupFn: function(record) {
	            return record.get('PF');
	        }
	    },
    }
});