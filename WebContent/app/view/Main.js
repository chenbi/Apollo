Ext.define("Apollo.view.Main", {
    extend: 'Ext.tab.Panel',
    requires: ['Ext.TitleBar'],
    
    config: {
        tabBarPosition: 'bottom',
        
        items: [
//                {
//                    xtype : 'toolbar',
//                    ui: 'neutral',
//                    docked: 'top',
//                    scrollable: false,
//                    defaults: {
//                        iconMask: true,
//                        ui      : 'plain'
//                    },
//                    items: [
//                        { iconCls: 'action' },
//                        { iconCls: 'add' },
////                        { iconCls: 'arrow_up' },
////                        { iconCls: 'arrow_right' },
////                        { iconCls: 'arrow_down' },
////                        { iconCls: 'arrow_left' },
////                        { iconCls: 'compose' },
////                        { iconCls: 'delete' },
////                        { iconCls: 'refresh' },
////                        { iconCls: 'reply' }
////                        { iconCls: 'search' },
////                        { iconCls: 'star' },
////                        { iconCls: 'home' },
////                        { iconCls: 'locate' },
////                        { iconCls: 'maps' },
////                        { iconCls: 'trash' }
//                    ],
//                    layout: {
//                        pack : 'center',
//                        align: 'center'
//                    }
//                },
            {
                xtype: 'splist',
                iconCls: 'refresh',
               
                
            },
            {
            	xtype: 'Deal'
//                title: 'Deals',
//                iconCls: 'star',
//                
//                styleHtmlContent: true,
//                scrollable: true,
//
//                items: {
//                    docked: 'top',
//                    xtype: 'titlebar',
//                    title: 'Deals'
//                }
            },
            {
            	xtype: 'Category',

            },

            {
                title: 'Scanner',
                iconCls: 'organize',
                
                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Scanner'
                }
            },
            {
            	xtype:'home'
            }
        ]
    }
});