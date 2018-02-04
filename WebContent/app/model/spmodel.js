Ext.define('Apollo.model.spmodel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'BN',
                type: 'string'
            },
            {
                name: 'PF',
                type: 'string'
            },
            {
                name: 'PN',
                type: 'string'
            },            
            {
                name: 'PU',
                type: 'auto'
            },            
            {
                name: 'SW',
                type: 'int'
            },
            {
                name: 'RP',
                type: 'float'
            },
            {
                name: 'QT',
                type: 'int'
            },
            {
                name: 'CS',
                type: 'string'
            },
            {
            	name: 'checked',
            	type: 'boolean',
            	defaultValue: false
            	
            }
            
        
//         
//            {
//                name: 'date',
//                type: 'date'
//            }
        ],
        proxy: {
            type: 'ajax',
            url: 'shp_ls.json',
            reader: {
                type: 'json',
                rootProperty: 'BLF_GSL.SLIS.SLI'
            }
        }

    }
});