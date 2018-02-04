Ext.define("Apollo.view.Category", {
    extend: 'Ext.navigation.View',
    xtype: 'Category',
        config: {    	title: 'Category',    	iconCls: 'search',
        fullscreen: false,
        autoDestroy: false,
//        navigationBar: {
//            backButton: {
//                iconCls: 'back'
//            }
//        },
//        navigationBar: false,		items: [  
//				{
//				    xtype: 'titlebar',
//				    docked: 'top',
//				    title: 'Category',
//				  },
		        {
		            docked: 'top',
		            xtype: 'toolbar',
		            items: [
		                {
		                    xtype      : 'searchfield',
		                    placeHolder: 'Search',
		                    name       : 'searchfield',
		                    	centered: true,
		                    	minWidth: '400px'
		                }
		            ]
				 },

				{
				    xtype: 'dataview',
				    title: 'Category',
				    useToolbar: false,
					baseCls: 'categories',
				
				    itemTpl: [
				              '<div style="display: block; width:170px; height: 100px; float: left; margin: 50px;"><img style="border-radius: 15px;" src={PN}>',
				              '{CN}</div>'
				    ].join(''),
				   
				    store: {
				    	autoLoad: true,

	                    fields: [
	                        'CN', 'PN', 'PC',
//                        {name: 'leaf', defaultValue: true}
	                    ],

	                    root: {
	                        leaf: false
	                    },

	                    proxy: {
	                        type: 'ajax',
	                        url: 'cat.json',
	                        reader: {
	                            type: 'json',
	                            rootProperty: 'BLS_GSPC.CTS.CT'
	                        }
	                    }
	                },
	                
				},
//		        {//		                xtype: 'nestedlist',//		                title: 'Category',//		                updateTitleText: true,//		                useTitleAsBackText : true,//		                useToolbar: false,//		                displayField: 'CN',////		                store: {//		                    type: 'tree',////		                    fields: [//		                        'CN', 'PN', 'PC',////	                        {name: 'leaf', defaultValue: true}
//		                    ],////		                    root: {
//		                        leaf: false
//		                    },////		                    proxy: {//		                        type: 'ajax',//		                        url: 'cat.json',//		                        reader: {//		                            type: 'json',//		                            rootProperty: 'BLS_GSPC.CTS.CT'//		                        }//		                    }//		                },////		                detailCard: {
//		                    xtype: 'panel',
//		                    title:'Detail',
//		                    scrollable: true,
//		                    styleHtmlContent: true
//		                },
//		                listeners: {
//		                    itemtap: function(nestedList, list, index, element, record) {
//		                        this.getDetailCard().setHtml(record.get('PN'));
//		                    }
//		                }//		          }		        ]		    }});