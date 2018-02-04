Ext.define("Apollo.view.home", {
    extend: 'Ext.navigation.View',
    xtype: 'home',
    
    config: {
    	title: 'Home',
    	iconCls: 'info',
        fullscreen: false,
        autoDestroy: false,
//        navigationBar: {
//            backButton: {
//                iconCls: 'back'
//            }
//        },
//        navigationBar: false,
		items: [  {
			    xtype: 'dataview',
			    title: 'Store Locator',
			    useToolbar: false,
				
			
			    html: [
			              '<div><img style="border-radius: 15px;" src="http://www.fws.gov/wetlands/system/images/map-creation.png">',
			              '<br>Store Locator</div>'
			    ].join(''),


                
                itemtap: function(dataview, index, element, record) {
                	alert('dd');
                        this.push({
                        	iconCls: 'info',
                        	title: 'Map',
                        	xtype: 'map',
                        	mapOptions: {
                        	    center: new google.maps.LatLng(37.44885,-122.158592),
                        	    disableDefaultUI: true,
                        	    zoom: 5
                        	}});
                    }
                
		          
    }]
		    
}
});