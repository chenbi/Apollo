Ext.define('Apollo.view.DealDetail', {
    extend: 'Ext.Panel',
    
    xtype: 'DealDetail',
    config: {
    	   	
        scrollable: 'true',
        cls: [ 'star' ],
//        html: [
//               "Detail",
//               "<br><br> contents of <a href=\"app/view/Deal.js\">app/view/Deal.js</a>",
//               "<br> <br> <img src=\"", 
//               "PU",
//               "\" width=148 height=81 />",
//               "<br> <br> Quantity: ", 
//               //record.get('BN')
//           ].join(""),
        tpl: [
            'Detail <div class=""><img src="{PU}"></div>',
            '<p class="">{PF}</p>',
            '<div class="">',
            '<span class="">Qt: {BN}</span>',
            '</div>'
        ]
    }

});


//Ext.getCmp('splist').setBadge('New Item Added');