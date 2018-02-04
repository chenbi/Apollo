Ext.define(
				'Apollo.view.splist',
	{
		extend : 'Ext.navigation.View',
		alias: 'widget.splist',
		xtype : 'splist',
		
		config : {
			title : 'Shopping List',
			id:'splist',
			iconCls : 'star',
			badgeText:'3',
			navigationBar : {
				id : 'navbar',
				docked : 'top',
				
				items : [ {

					xtype : 'button',
					id : 'btnEdit',
					text : 'Edit',
					ui : 'action',
					scope : this,
					align : 'left',

					handler : function(btn) {
						var list = Ext.getCmp('lst1');
						var btnDelete = Ext.getCmp('btnDelete1');
						if (btn.getText() == 'Edit') {
							Ext.getCmp('btmToolbar1').show('pop');
							list.setItemCls('hole');
							btnDelete.show('pop');
							btn.setText('Done');
						} else {
							list.setItemCls('ahole');
							btnDelete.hide('pop');
							btn.setText('Edit');
							Ext.getCmp('btmToolbar1').hide('pop');
						}
					}
				},
				{

					xtype : 'button',
					text : 'Payment',
					ui : 'action',
					scope : this,
					align : 'right',

					handler : function(btn) {

					}
				},

				]
			},

			items : [

			{
				xtype : 'tabpanel',
				activeItem : 2,
				tabBar : {
					docked : 'top',
					ui : 'neutral',
					layout : {
						pack : 'center'
					}
				},
				items : [									
				         {
							xtype : 'toolbar',
							docked : 'bottom',
							id : 'btmToolbar1',
							hidden : true,
							items : [ {
								xtype : 'button',
								ui : 'delete',
								id : 'btnDelete1',
								text : 'Delete',
								iconCls : 'trash',
								iconMask : true,
								hidden : true,
								disabled : true,
								handler : function() {
									// Getting the list
									// component
									var list = Ext.getCmp('lst1');
									// Deleting all the
									// marked
									// records
									for (ii = 0; ii < list.getStore().getData().length; ii++) {

										if (list.getStore().getAt(ii).get('checked')) {
											list.getStore().removeAt(ii);
											ii--;

										}
									}
									list.getStore()
											.sync();
									Ext.getCmp('btnDelete1').disable();
		
								},
								scope : this
							} ]
						},

						{
							title : 'Catagory',
							layout : Ext.os.deviceType == 'Phone' ? 'fit'
									: {
										type : 'vbox',
										align : 'center',
										pack : 'center'
									},
							items : [

									{

										/*
										 * Definition of the custom
										 * Editable List component
										 */
										xtype : 'DeletableList',
										id : 'lst1',
										width : Ext.os.deviceType == 'Phone' ? null	: 640,
										height : Ext.os.deviceType == 'Phone' ? null : 960,

										onItemDisclosure:true,
										grouped : true,
itemTpl : [
		'<div class="select"><div>',
		'</div></div>',
		'&nbsp;<div style="border-radius: 5px; background-image:url({PU}); position: relative; bottom: 10px;left: 50px; height: 50px; width: 66px;"></div>',
		'<div style="height: 20px; width: 250px; overflow: hidden; text-overflow: ellipsis;font-family: Monospace; position:absolute; left: 150px; bottom: 50px; font-size:15px; float: right"> {BN}&nbsp;{PN}</div>',
		'<div style="font-family: Georgia; position:absolute; left: 150px; bottom: 20px; font-size:22px; float: right">{RP}&nbsp;{CS}</div>',	
		'<div style="font-family: Arial; position:absolute; left: 475px; bottom: 50px; font-size:10px; float: right">Quantity</div>',
		'<div><input size="1" type="numberfield" value={QT} style=" padding: 0px 2px 2px 0px;background-color: #ddd; border-top-width: 1px;border-right-width: 2px;border-bottom-width: 2px;border-left-width: 2px;border-style: solid;border-color: #082F70;position:absolute; left: 480px; bottom: 20px;float: right;font-family: Georgia;font-size:20px;height: 25px; width: 25px;" id="qt" /></div>', 
		'<div class="delete" style="position: absolute; right: 5px; top: 40px; display: none;">',
		'<img src="resources/images/delete.jpg" alt="delete" style="border-radius: 5px;"/></div>' ]
		.join(""),

										store : 'spstore',
										multiDelete : true,
										scrollable: true,
										deletable : {
											storage : true,
											message : true,
											cls : 'div.delete',
											title : 'Delete Item',
											text : 'Are you sure?'
										},
										listeners : {
											itemtap : function(
													list, index,
													target, record) {

												var btn = Ext
														.getCmp('btnEdit');
												if (btn.getText() == 'Edit') {
													
		var form = Ext.create('Ext.form.Panel', {
		    //fullscreen: true,
			
//	        html: [
////		          "<br><br> contents of <a href=\"app/view/Deal.js\">app/view/Deal.js</a>",
//		          "<br> <br> <img src=\"", 
//		          record.get('PU'),
//		          "\" width=66 height=50 />",
//		          ].join(""),
			title: 'Detail',
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
                        id:'unitprice',
                       
                       // clearIcon     : true,
                        readOnly: true,
                    },
                    {
                        xtype         : 'numberfield',
                        name          : 'Total',
                        id:'totalprice',
                        label         : 'Total Price',
                       
                        clearIcon     : false,
                        
                    },
                    {
                        xtype      : 'spinnerfield',
                        name       : 'Quantity',
                        label      : 'Quantity',
                        minValue   : 0,
                        maxValue   : 99,
                        increment  : 1,
                        cycle      : true,
						listeners : {
							spin : function(spin, value) {
								Ext.getCmp('totalprice').setValue(Ext.getCmp('unitprice').getValue()*value);
								list.getStore().getAt(index).set('QT',value);
								list.getStore().sync();
							}
						}
                    },

                    {
                        xtype: 'datepickerfield',
                        destroyPickerOnHide: true,
                        name : 'Time',
                        label: 'Time',
                        value: new Date(),
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
						ui: 'decline-round', 
						text: 'Delete'
					},
		    ]
		});
		form.setValues({
		    Brand: record.get('BN'),
		    Product: record.get('PN'),
		    Category: record.get('PF'),
		    Quantity: record.get('QT'),
		    Price: record.get('RP'),
		    Total: record.get('QT')*record.get('RP'),
		    
		});
													
													
													
													
													
													Ext.getCmp('splist').push(form
//													{
//														xtype : 'spdetail',
//														data: list.getStore().getAt(index).data,
//														title : list.getStore().getAt(index).get('BN'),
//														
//													//	html: '',
//														
//														scrollable : true,
//														styleHtmlContent : true
//													}
													
													);
													Ext.getCmp('btnEdit').hide();
													//console.log(list.getStore().getAt(index).data);
												} else {

													del = target
															.down('div.select');

													if (del
															.getHtml() == '&nbsp;') {
														record
																.set(
																		'checked',
																		'false');
														// console.log(record.get('checked'));
														del = target
																.down('div.select');
														del
																.removeCls('selected');
														del
																.setHtml('');
														record.dirty = true;
														list
																.getStore()
																.sync();

													} else {
														// animate
														record
																.set(
																		'checked',
																		'true');
														// console.log(record.get('checked'));
														del = target
																.down('div.select');
														del
																.setHtml('&nbsp;');
														del
																.addCls('selected');
														record.dirty = true;
														list
																.getStore()
																.sync();
														// event
														// del.on('tap',
														// function()
														// {alert('v');
														// }, list,
														// { single:
														// true});

													}

												}
												var btn = false;
												for (ii = 0; ii < list
														.getStore()
														.getData().length; ii++) {
													// console.log(list.getStore().getAt(ii).get('checked'));
													if (list
															.getStore()
															.getAt(
																	ii)
															.get(
																	'checked')) {
														Ext
																.getCmp(
																		'btnDelete1')
																.enable();
														btn = true;
													}
												}
												if (!btn)
													Ext
															.getCmp(
																	'btnDelete1')
															.disable();

												// Ext.each(list,
												// function
												// (item) {
												//    	       						
												// console.log(item.getCls());
												// }, this);

												// for (item in
												// list){
												// console.log(item.getRecord());
												// }

											},

										},

									} ]
						},						
						{
							title : 'Alphabet',
							layout : Ext.os.deviceType == 'Phone' ? 'fit'
									: {
										type : 'vbox',
										align : 'center',
										pack : 'center'
									},
							items : [
									
									{

										/*
										 * Definition of the custom
										 * Editable List component
										 */
										xtype : 'DeletableList',
										id : 'lst',
										width : Ext.os.deviceType == 'Phone' ? null
												: 640,
										height : Ext.os.deviceType == 'Phone' ? null
												: 960,
										onItemDisclosure:true,
										itemTpl : [
'<div class="select"><div>',
'</div></div>',
'&nbsp;&nbsp;&nbsp;&nbsp; <div style="border-radius: 5px; background-image:url({PU}); height: 50px; width: 66px;"></div>',
'<div style="height: 20px; width: 300px; overflow: hidden; text-overflow: ellipsis;font-family: Monospace; position:absolute; left: 100px; bottom: 40px; font-size:15px; float: right"> {BN}&nbsp;{PN}</div>',
'<div style="font-family: Georgia; position:absolute; left: 100px; bottom: 10px; font-size:22px; float: right">{RP}&nbsp;{CS}</div>',	
'<div style="font-family: Arial; position:absolute; left: 420px; bottom: 40px; font-size:10px; float: right">Quantity</div>',
'<div><input size="1" type="numberfield" value={QT} style=" padding: 0px 2px 2px 0px;background-color: #ddd; border-top-width: 1px;border-right-width: 2px;border-bottom-width: 2px;border-left-width: 2px;border-style: solid;border-color: #082F70;position:absolute; left: 425px; bottom: 10px;float: right;font-family: Georgia;font-size:20px;height: 25px; width: 25px;" id="qt" /></div>', 
'<div class="delete" style="position: absolute; right: 5px; top: 5px; display: none;">',
'<img src="resources/images/delete.jpg" alt="delete" style="border-radius: 5px;"/></div>' ]
.join(""),
											

										store : 'alphabetsplist',
										indexBar : {
										// letters:["P"]

										},
										multiDelete : true,
										deletable : {
											storage : true,
											message : true,
											cls : 'div.delete',
											title : 'Delete Item',
											text : 'Are you sure?'
										},
										listeners : {
											itemtap : function(
													list, idx,
													target, record) {

												var btn = Ext
														.getCmp('btnEdit');
												if (btn.getText() == 'Edit') {
													// show detail
												} else {

													del = target
															.down('div.select');

													if (del
															.getHtml() == '&nbsp;') {
														record
																.set(
																		'checked',
																		'false');
														// console.log(record.get('checked'));
														del = target
																.down('div.select');
														del
																.removeCls('selected');
														del
																.setHtml('');
														record.dirty = true;
														list
																.getStore()
																.sync();

													} else {
														// animate
														record
																.set(
																		'checked',
																		'true');
														// console.log(record.get('checked'));
														del = target
																.down('div.select');
														del
																.setHtml('&nbsp;');
														del
																.addCls('selected');
														record.dirty = true;
														list
																.getStore()
																.sync();
														// event
														// del.on('tap',
														// function()
														// {alert('v');
														// }, list,
														// { single:
														// true});

													}

												}
												var btn = false;
												for (ii = 0; ii < list
														.getStore()
														.getData().length; ii++) {
													// console.log(list.getStore().getAt(ii).get('checked'));
													if (list
															.getStore()
															.getAt(
																	ii)
															.get(
																	'checked')) {
														Ext
																.getCmp(
																		'btnDelete')
																.enable();
														btn = true;
													}
												}
												if (!btn)
													Ext
															.getCmp(
																	'btnDelete')
															.disable();

												// Ext.each(list,
												// function
												// (item) {
												//    	       						
												// console.log(item.getCls());
												// }, this);

												// for (item in
												// list){
												// console.log(item.getRecord());
												// }

											},

										},

									},
							// {
							// width: Ext.os.deviceType == 'Phone' ?
							// null : 300,
							// height: Ext.os.deviceType == 'Phone'
							// ? null : 500,
							// xtype: 'list',
							// store: 'alphabetsplist',
							// itemTpl: '<div
							// class=""><strong>{BN}</strong></div>',
							// indexBar: {
							// // letters:["P"]
							//	               			                	
							// }
							// }
							]
						},
				// {
				// title: 'Disclosure',
				// layout: Ext.os.deviceType == 'Phone' ? 'fit' : {
				// type: 'vbox',
				// align: 'center',
				// pack: 'center'
				// },
				// cls: 'demo-list',
				// items: [{
				// width: Ext.os.deviceType == 'Phone' ? null : 300,
				// height: Ext.os.deviceType == 'Phone' ? null :
				// 500,
				// xtype: 'list',
				// ui: 'round',
				// grouped: true,
				// pinHeaders: false,
				// onItemDisclosure: function(record, btn, index) {
				// Ext.Msg.alert('Tap', 'Disclose more info for ' +
				// record.get('firstName'), Ext.emptyFn);
				// },
				// store: 'ListStore', //getRange(0, 9),
				// itemTpl: '<div
				// class="contact"><strong>{firstName}</strong>
				// {lastName}</div>'
				// }]
				// }

				]

			}

			// {
			// xtype: 'list',
			// title: 'Shopping List',
			// id: 'list',
			// loadingText: 'Loading...',
			// store: 'spstore',
			// onItemDisclosure: true,
			// disclosure: true,
			// grouped: true,
			// indexBar: true,
			// itemTpl: [
			// '<section class="ListItem">',
			// '<img src="{PU}">',
			//					'<h1>{BN}</h1>',
			//					'<div class="ratings">',
			//					'<span class="critics">xxx: {RP}%</span>',
			//					'<span class="audience">xxx: {SW}%</span>',
			//					'</div>',
			//					'</section>'
			//				],
			//            listeners: {
			//                itemtap: function(list, index){
			//                	Ext.getCmp('editb').hide();
			//                }
			//            }
			//            }
			],
			listeners : {
				back : function() {
					Ext.getCmp('btnEdit').show();
							}
						}

					}

				});

Ext
		.define(
				'Ext.DeletableList',
	{
		extend : 'Ext.List',
		alias : 'widget.DeletableList',

		config : {
			deletable : null,
			scrollable : {
				directionLock : true
			}
		},

		initialize : function() {
			this.callParent();

			if (this.getStore()) {
				this.addStore = this.getStore();
			} else {
				this.warnMsg('Please set store');
			}

			if (this.getDeletable()) {
				this.setting = this.getDeletable();

				Ext.applyIf(this.setting, {
					storage : this.setting.storage || false,
					message : this.setting.message || false,
					cls : this.setting.cls || '.delete',
					title : this.setting.title || 'Confirm',
					text : this.setting.text || 'Delete Item?'
				});
			} else {
				this.warnMsg('Please config deletable property');
			}

			this.on('itemswipe', this.onItemSwipeList, this);
			this.on('deleteitem', this.onDeleteItemList, this);
		},

		onItemSwipeList : function(list, idx, target) {
			var me = this, cls = this.setting.cls;
			del = target.down(cls);

			// animate
			Ext.Anim.run(del, 'fade', {
				out : false,
				duration : 200
			});

			// event
			del.on('tap', function() {
				me.fireEvent('deleteitem', me, del, idx, target);
			}, list, {
				single : true
			});

			// show or hide
			this.toggleDel(del);
		},

		onDeleteItemList : function(list, del, idx, target) {
			var message = this.setting.message, title = this.setting.title, text = this.setting.text;

			this.del = del;
			this.idx = idx;

			//		if(message) {			
			//			Ext.Msg.confirm(title, text, this.doDeleteItem, this);
			//		} else {
			this.doDeleteItem('yes', del, idx);
			//		}
		},

		doDeleteItem : function(buttonId) {
			this.del.hide();

			if (buttonId === 'yes') {
				var store = this.addStore, storage = this.setting.storage;

				store.removeAt(this.idx);

				if (storage) {
					store.sync();
				}
			}
		},

		toggleDel : function(newDelBtn) {

			if (!this.oldDelBtn && this.oldDelBtn !== newDelBtn) {
				newDelBtn.show();
				this.oldDelBtn = newDelBtn;
			} else {
				if (this.oldDelBtn === newDelBtn) {
					newDelBtn.hide();

					this.oldDelBtn = null;
				} else {
					newDelBtn.show();
					this.oldDelBtn.hide();

					this.oldDelBtn = newDelBtn;
				}
			}
		},

		warnMsg : function(title, text) {
			Ext.Msg.alert(title, text, Ext.emptyFn);
		}
	});
