Ext.define('Apollo.store.dealstore', {
    extend: 'Ext.data.Store',
    requires: [
        'Apollo.model.dealmodel'
    ],

    config: {
    	
        autoLoad: true,
        model: 'Apollo.model.dealmodel',
        storeId: 'dealstore'
        
    }

});