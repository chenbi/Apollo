Ext.define(
			"Apollo.view.splist2",
			{
				extend : 'Ext.navigation.View',
				xtype : 'splist2',

				config : {
					title : 'SL2',
					iconCls : 'star',
					navigationBar : {
						id : 'navbar1',
						docked : 'top',
						items : [ {

							/*
							 * Definition of the Edit Button that allow to
							 * switch the List state from editing to normal
							 * and vice versa
							 */
							xtype : 'button',
							id : 'btnEdit',
							text : 'Edit',
							ui : 'action',
							scope : this,
							align : 'left',

							handler : function(btn) {
								var list = Ext.getCmp('lst');
								var btnDelete = Ext.getCmp('btnDelete');
								if (btn.getText() == 'Edit') {
									Ext.getCmp('btmToolbar').show('pop');
									list.setItemCls('hole');
									btnDelete.show('pop');
									btn.setText('Done');
								} else {
									list.setItemCls('ahole');
									btnDelete.hide('pop');
									btn.setText('Edit');
									Ext.getCmp('btmToolbar').hide('pop');
								}
							}
						}, {
							text : 'Pay',
							align : 'right'
						},

						]
					},
					items : [ {

						xtype : 'panel',
						fullscreen : true,
						layout : 'fit',

						items : [
								{
									xtype : 'toolbar',
									docked : 'bottom',
									id : 'btmToolbar',
									hidden : true,
									items : [ {
										xtype : 'button',
										ui : 'delete',
										id : 'btnDelete',
										text : 'Delete',
										iconCls : 'trash',
										iconMask : true,
										hidden : true,
										disabled : true,
										handler : function() {
											// Getting the list component
											var list = Ext.getCmp('lst');
											// Deleting all the marked
											// records
			    	       					for (ii=0; ii<list.getStore().getData().length;ii++){
			    	       						
			    	       						if (list.getStore().getAt(ii).get('checked')){    	       							
			    	       							list.getStore().removeAt(ii);
			    	       							ii--;
			    	       							
			    	       							
			    	       						}
			      	       					}
			    	       					list.getStore().sync();
			    	       					Ext.getCmp('btnDelete').disable();
			    	       					
										},
										scope : this
									} ]
								},
								{

									/*
									 * Definition of the custom Editable
									 * List component
									 */
									xtype : 'DeletableList',
									id : 'lst',
									itemTpl : [
											'<div class="select"><div>',
											'</div></div>',
											'&nbsp;&nbsp;&nbsp;&nbsp;  {BN}{PN}',
											'<div class="delete" style="position: absolute; right: 5px; top: 5px; display: none;">',
											'<img src="resources/images/delete.png" alt="delete" /></div>' ]
											.join(""),

									store : 'spstore',
									multiDelete : true,
									deletable : {
										storage : true,
										message : true,
										cls : 'div.delete',
										title : 'Delete Item',
										text : 'Are you sure?'
									},
									listeners : {
										itemtap : function(list, idx, target, record) {

											var btn = Ext.getCmp('btnEdit');
											if (btn.getText() == 'Edit') {
												// show detail
											} 
											else {

												del = target.down('div.select');
	       						 
	       						
					       						if(del.getHtml()=='&nbsp;'){
					       							record.set('checked','false');
					    	       				// console.log(record.get('checked'));
					    	       					del = target.down('div.select');
					       							del.removeCls('selected');
					       							del.setHtml('');
					       							record.dirty = true;
					       							list.getStore().sync();
					       							
					       							
					       						}
					       						 else{
							    	       					// animate
					       							record.set('checked','true');
					    	       					//console.log(record.get('checked'));
					    	       					del = target.down('div.select');
						       						del.setHtml('&nbsp;');
						       						del.addCls('selected');
						       						record.dirty = true;
					       							list.getStore().sync();
					    	       					// event
					//	    	       					del.on('tap', function() {alert('v');	}, list, {	single: true});
 
					       						 }
					
	   	    				}
       						var btn=false;
	       					for (ii=0; ii<list.getStore().getData().length;ii++){
	       						//console.log(list.getStore().getAt(ii).get('checked'));
	       						if (list.getStore().getAt(ii).get('checked')){    	       							
	       							Ext.getCmp('btnDelete').enable();
	       							btn=true;
	       						}
  	       					}
	       					if (!btn) Ext.getCmp('btnDelete').disable();

											// Ext.each(list, function
											// (item) {
											//    	       						
											// console.log(item.getCls());
											// }, this);

											// for (item in list){
											// console.log(item.getRecord());
											// }

										},

							},

						} ]
					} ]
				}
			});




Ext.define('Ext.DeletableList', {
	extend: 'Ext.List',
	alias: 'widget.DeletableList',
	
	config: {
		deletable : null,
		scrollable: {
			directionLock: true
		}
	},
	
	initialize: function() {
		this.callParent();
		
		if(this.getStore()) {
			this.addStore = this.getStore();
		} else {
			this.warnMsg('Please set store');
		}
				
		if(this.getDeletable()) {
			this.setting = this.getDeletable();

			Ext.applyIf(this.setting, 
			{
				storage: this.setting.storage || false,
				message: this.setting.message || false,
				cls    : this.setting.cls     || '.delete',
				title  : this.setting.title   || 'Confirm',
				text   : this.setting.text    || 'Delete Item?'
			});
		} else {
			this.warnMsg('Please config deletable property');
		}
		
		this.on('itemswipe', this.onItemSwipeList, this);
		this.on('deleteitem', this.onDeleteItemList, this);
	},
	
	onItemSwipeList: function(list, idx, target) {
		var me  = this,
			cls = this.setting.cls;
			del = target.down(cls);
		
		// animate
		Ext.Anim.run(del, 'fade', {
			out: false,
			duration: 200
		});
		 
		// event
		del.on('tap', function() {
			me.fireEvent('deleteitem', me, del, idx, target);
		}, list, {
			single: true
		});
		
		// show or hide
		this.toggleDel(del);
	},
		
	onDeleteItemList: function(list, del, idx, target) {
		var message = this.setting.message,
			title   = this.setting.title,
			text    = this.setting.text;
			
		this.del = del;
		this.idx = idx;	
		
//		if(message) {			
//			Ext.Msg.confirm(title, text, this.doDeleteItem, this);
//		} else {
			this.doDeleteItem('yes', del, idx);
//		}
	},
	
	doDeleteItem: function(buttonId) {			
		this.del.hide();
		
		if(buttonId === 'yes') {
			var store   = this.addStore,
				storage = this.setting.storage;
							
			store.removeAt(this.idx);

			if(storage) {
				store.sync();
			}
		}
	},
	
	toggleDel: function(newDelBtn) {

		if(!this.oldDelBtn && this.oldDelBtn !== newDelBtn) {
			newDelBtn.show();
			this.oldDelBtn = newDelBtn;
		} else {
			if(this.oldDelBtn === newDelBtn) {
				newDelBtn.hide();
				
				this.oldDelBtn = null;
			} 
			else {
				newDelBtn.show();
				this.oldDelBtn.hide();
				
				this.oldDelBtn = newDelBtn;
			}
		}
	},
	
	warnMsg: function(title, text) {
		Ext.Msg.alert(title, text, Ext.emptyFn);
	}
});




