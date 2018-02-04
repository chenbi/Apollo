Ext.define("Apollo.view.Deal", {
    extend: 'Ext.navigation.View',
    xtype: 'Deal',

    config: {
    	title: 'Deal',
    	iconCls: 'star',
    	badgeText:'6',
    	id:'Deal',
		items: [
		        {
		                xtype: 'list',
		                title: "Deal",
		                updateTitleText: true,
		                useTitleAsBackText : true,
		                useToolbar: false,
		                scrollable: {
		                    direction: 'vertical',
		                    directionLock: true
		                },              
		                onItemDisclosure: false,
						
itemTpl : [

   		'<div style="border-radius: 5px; background-image:url({PU}); position: relative; left: 50px; height: 50px; width: 66px;"></div>',
   		'<div style="height: 20px; width: 250px; overflow: hidden; text-overflow: ellipsis;font-family: Monospace; position:absolute; left: 150px; bottom: 40px; font-size:15px; float: right"> {SD}</div>',
   		'<div style="font-family: Georgia; position:absolute; left: 150px; bottom: 20px; font-size:12px; float: right">{CS}&nbsp;{OV} Discount</div>',	
   		'<div style="font-family: Arial; position:absolute; left: 480px; bottom: 50px; font-size:10px; float: right">Buy</div>',
   		'<div><input type="checkbox" style="background-color: #ddd; position:absolute; left: 480px; bottom: 25px;float: right;" id="" /></div>', 
   		'<tpl if="IP == \'True\'"><img src="resources/icons/Promotion images/points.png" '+
   		'style="border-radius: 5px;position:absolute; left: 550px; bottom: 2px;float: right;"/></tpl>',
   		'<tpl if="IP == \'False\'"><img src="resources/icons/Promotion images/save.png" '+
   		'style="border-radius: 5px;position:absolute; left: 550px; bottom: 2px;float: right;"/></tpl>',
   		].join(""),
								
		                store: 'dealstore',
		                

		          
		        listeners : {
					itemtap : function(list, index,target, record) {

							
var form = Ext.create('Ext.form.Panel', {
title: record.get('SD'),
items: [
{	xtype: 'field', 
	label: 'Photo', 
	component: {
	xtype: 'image', 
	src: record.get('PU'),
	height: 50,
	
	
}
},

{
xtype         : 'textfield',
name          : 'Brand',
label         : 'Brand',
autoCapitalize: true,

readOnly: true,
},
{
xtype         : 'textfield',
name          : 'Product',
label         : 'Product',
autoCapitalize: true,

readOnly: true,
},
{
xtype         : 'textfield',
name          : 'Category',
label         : 'Category',
autoCapitalize: true,
// clearIcon     : true,
readOnly: true,
},
{
xtype         : 'numberfield',
name          : 'Price',
label         : 'Unit Price',
id:'unit',

// clearIcon     : true,
readOnly: true,
},
{
xtype         : 'numberfield',
name          : 'Total',
id:'total',
label         : 'Total Price',

clearIcon     : false,

},
{
xtype      : 'spinnerfield',
name       : 'Quantity',
label      : 'Quantity',
id: 'qantity',
minValue   : 0,
maxValue   : 99,
increment  : 1,
cycle      : true,
listeners : {
	spin : function(spin, value) {
		Ext.getCmp('total').setValue(Ext.getCmp('unit').getValue()*value);
//		list.getStore().getAt(index).set('QT',value);
//		list.getStore().sync();
	}
}
},

{
xtype: 'datepickerfield',
destroyPickerOnHide: true,
name : 'Time',
label: 'Expiry Time',
value: new Date(record.get('EXP')),
picker: {
    yearFrom: 1990
},
readOnly: true,
},
{
xtype: 'textareafield',
name : 'Notes',
label: 'note'
},
{               
xtype : 'button',
flex  : 1,
margin: 30,
ui: 'confirm-round', 
text: 'Add to Shopping List',
	handler : function(btn) {
		var list = Ext.getCmp('lst1');
		list.getStore().add({
			PF:record.get('PF'),
			BN:record.get('BN'),
			PU:record.get('PU'),
			PN:record.get('SD'),
			SW:'100',
			RP:	record.get('OV'),	 
			QT:Ext.getCmp('qantity').getValue(),
			CS: '$',
			SID: record.get('SId'),

		});
        if (!this.overlay) {
            this.overlay = Ext.Viewport.add({
                xtype: 'panel',
                modal: true,
                hideOnMaskTap: true,
                showAnimation: {
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'
                },
                centered: true,
                width: Ext.os.deviceType == 'Phone' ? 260 : 260,
                height: Ext.os.deviceType == 'Phone' ? 220 : 260,
                styleHtmlContent: true,
                html: '<p><b>'+Ext.getCmp('qantity').getValue()+'&nbsp;of &nbsp;'+record.get('SD')+ '&nbsp; has been added to your Shopping List</b></p>',
                items: [
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        title: 'Congradulations!'
                    }
                ],
                scrollable: true
            });
        }

        this.overlay.show();

	}
},
]
});
form.setValues({
Brand: record.get('BN'),
Product: record.get('SD'),
Category: record.get('PF'),
Quantity: '1',
Price: record.get('OV'),
Total: record.get('OV')

});
Ext.getCmp('Deal').push(form);
		    
}
		        }}]}});