// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	text:'Label1',
	top:'20dp',
	left:'30dp',
	height:'20dp',
	width:'60dp',
});
var label2 = Titanium.UI.createLabel({
	text:'Label2',
	top:'50',
	left:'60',
	height:'auto',
	width:'auto',
});
var label3 = Titanium.UI.createLabel({
	text:'Label3',
	center:{
		x:160,
		y:100
	},
	height:'auto',
	width:'auto',
});
var label4 = Titanium.UI.createLabel({
	text:'Label4',
	top:'50%',
	height:'auto',
	width:'50%',
	backgroundColor:'lime',
	textAlgin:'center',
});



win1.add(label1);
win1.add(label2);
win1.add(label3);
win1.add(label4);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    layout:'vertical'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});
var view1 = Titanium.UI.createView({
	backgroundColor:'#f00',
	top:20,
	height:100,
	layout:'horizontal'
});
win2.add(view1);

var view2 = Titanium.UI.createView({
	backgroundColor:'#f00',
	top:20,
	width:'80%',
	height:100,
});
win2.add(view2);
var view3 = Titanium.UI.createView({
	backgroundColor:'#f00',
	top:20,
	width:'60%',
	height:100,
});
win2.add(view3);

var label5 = Titanium.UI.createLabel({
	text:'Label5',
	left:'10',
	top:'10',
	width:'auto',
});
var label6 = Titanium.UI.createLabel({
	text:'Label6',
	left:'10',
	top:'10',
	width:'auto',
});
var label7 = Titanium.UI.createLabel({
	text:'Label7',
	left:'10',
	top:'10',
	width:'auto',
});

view1.add(label5);
view1.add(label6);
view1.add(label7);

//
//  add tabs
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
