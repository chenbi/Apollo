Ext.define('Apollo.model.dealmodel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
//            {
//                name: 'BN',
//                type: 'string'
//            },
//            {
//                name: 'PF',
//                type: 'string'
//            },
//            {
//                name: 'PN',
//                type: 'string'
//            },            
//            {
//                name: 'PU',
//                type: 'auto'
//            },            
//            {
//                name: 'SW',
//                type: 'int'
//            },
//            {
//                name: 'RP',
//                type: 'float'
//            },
//            {
//                name: 'QT',
//                type: 'int'
//            },
				'SD', 'BN', 'PU', 'PF','OV','CS','IP','IPt','OId','SId','EXP'
//         
//            {
//                name: 'date',
//                type: 'date'
//            }
        ],
        proxy: {
            type: 'ajax',
            url: 'deal.json',
            reader: {
                type: 'json',
                rootProperty: 'BLS_GCO.OFS.OF'
            }
        }

    }
});