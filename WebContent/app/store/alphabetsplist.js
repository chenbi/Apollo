Ext.define('Apollo.store.alphabetsplist', {
    extend: 'Ext.data.Store',
    requires: [
        'Apollo.model.spmodel'
    ],

    config: {

        autoLoad: true,
        model: 'Apollo.model.spmodel',
        sorters: 'PN',
	    grouper: {
	        groupFn: function(record) {
	            return record.get('PN')[0];
	        }
	    },
    }
});