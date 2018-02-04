Ext.define('Apollo.view.spdetail', {
    extend: 'Ext.form.Panel',
    alias: 'widget.spdetail',
    xtype: 'spdetail',
    config: {
    	
        scrollable: 'true',
        id:'detail',
//        html: [
//               "Detail",
//               "<br><br> contents of <a href=\"app/view/Deal.js\">app/view/Deal.js</a>",
//               "<br> <br> <img src=\"", 
//               "PU",
//               "\" width=148 height=81 />",
//               "<br> <br> Quantity: ", 
//               record.get('BN')
//           ].join(""),
//        tpl: [
//            '<div class=""><img src="{PU}"></div>',
//            '<p class="">{SW}</p>',
//              '<div class="">',
//            '<span class="">Critics: {QT}</span>',
//            '<span class="">Audience: {BN}</span>',
//            '</div>'
//        ],

                    items: [
                        {
                            xtype         : 'textfield',
                            name          : 'name',
                            label         : 'Name',
                            autoCapitalize: true,
                            clearIcon     : true,
                            readOnly: true,
                        },
                        {
                            xtype      : 'spinnerfield',
                            name       : 'spinner',
                            label      : 'Spinner',
                            minValue   : 0,
                            maxValue   : 10,
                            increment  : 1,
                            cycle      : true
                        },

                        {
                            xtype: 'datepickerfield',
                            destroyPickerOnHide: true,
                            name : 'date',
                            label: 'Start Date',
                            value: new Date(),
                            picker: {
                                yearFrom: 1990
                            }
                        },
                        {
                            xtype: 'selectfield',
                            name : 'rank',
                            label: 'Rank',
                            options: [
                                {
                                    text : 'Master',
                                    value: 'master'
                                },
                                {
                                    text : 'Journeyman',
                                    value: 'journeyman'
                                },
                                {
                                    text : 'Apprentice',
                                    value: 'apprentice'
                                }
                            ]
                        },
                        {
                            xtype: 'textareafield',
                            name : 'bio',
                            label: 'Bio'
                        }
                    ]
              
    }

});