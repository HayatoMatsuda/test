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
	text:'fontSizeにはフォントの大きさを表示します。fontFamilyには多くのフォントを指定できますが、存在しないフォントを指定した場合、デフォルトのフォントで置き換えられます',
	width:'200',
});

var button1 = Titanium.UI.createButton({
	title:'ボタン1',
	top:'20',
	width:'50%',
});
button1.addEventListener('dblclick',function(e){
	alert('ボタンがダブルクリックされました');
});
var button2 = Titanium.UI.createButton({
	title:'ボタン2',
	top:'300',
	width:'50%',
	//touchEnabled : 'false',
	borderRadius:5,
	borderColor:"black"
});
button2.addEventListener('touchstart',function(e){
	label1.text = 'ボタン2にタッチ中';
});
button2.addEventListener('touchend',function(e){
	label1.text = 'ボタン2のタッチ終了';
});

win1.add(label1);
win1.add(button1);
win1.add(button2);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff',
    layout:'vertical',
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:L('window1'),
	font:{fontSize:20,fontFamily:'Helvetica Neue',fontStyle:"italic",fontWeight:"bold"},
	textAlign:'center',
	width:'auto'
});

var textField1 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top:'10',
	left:'30',
	width:'250',
	hintText:'KEYBORARD_DEFAULT',
	clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONFOCUS,
});
var textField2 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_DECIMAL_PAD,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE,
	top:'10',
	left:'30',
	width:'250',
	hintText:'KEYBORARD_DECIMAL_PAD',
	clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ONBLUR,
});
var textField3 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_NUMBER_PAD,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
	top:'10',
	left:'30',
	width:'250',
	hintText:'KEYBORARD_NUMBER_PAD',
});
var textField4 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_NONE,
	top:'10',
	left:'30',
	width:'250',
	hintText:'KEYBORARD_NUMBERS_PUNCTUATION',
});
var textField5 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_URL,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	top:'10',
	left:'30',
	width:'250',
	hintText:'KEYBORARD_URL',
	autocaptialzation:'FALSE',
});
var textField6 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_EMAIL,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_LINE,
	top:'10',
	left:'30',
	width:'250',
	hintText:'KEYBORARD_EMAIL',
	autocaptialzation:'FALSE',
	clearButtonMode:Titanium.UI.INPUT_BUTTONMODE_ALWAYS,
});
var textField7 = Titanium.UI.createTextField({
	keyboardType:Titanium.UI.KEYBOARD_ASCII,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
	top:'10',
	left:'30',
	width:'250',
	hintText:'KEYBORARD_ASCII',
	autocaptialzation:'FALSE',
	passwordMask:'TRUE',
});

textField1.addEventListener('return',function(e){
	label2.text = e.value;
});
textField2.addEventListener('blur',function(e){
	label2.text = e.value;
});
textField7.addEventListener('focus',function(e){
	label2.text = '';
});
textField7.addEventListener('change',function(e){
	label2.text = e.value;
});

win2.add(label2);
win2.add(textField1);
win2.add(textField2);
win2.add(textField3);
win2.add(textField4);
win2.add(textField5);
win2.add(textField6);
win2.add(textField7);

var button3 = Titanium.UI.createButton({
	title:'ボタン3',
	top:'20',
	width:'50%',
});
button3.addEventListener('click',function(e){
	var alertDialog1 = Titanium.UI.createAlertDialog({
		title:'入力確認',
		message:'パスワードが未入力です',
	}).show();
});
win2.add(button3);

var button4 = Titanium.UI.createButton({
	title:'ボタン4',
	top:'10',
	width:'50%',
});
button4.addEventListener('click',function(e){
	alertDialog2.show();
});
win2.add(button4);
var alertDialog2 = Titanium.UI.createAlertDialog({
		title:'登録確認',
		message:'この内容で登録しますか？',
	buttonNames:['OK','Cancel'],
	cancel:1
});
alertDialog2.addEventListener('click',function(e){
	if(e.index === e.cancel){
		Titanium.API.info(e.cancel);
	}
	if(e.index === 0){
		Titanium.API.info('OK');
	}else if(e.index === 1){
		Titanium.API.info('Cancle');
	}
});

var button5 = Titanium.UI.createButton({
	title:'ボタン5',
	top:'10',
	width:'50%',
});
button5.addEventListener('click',function(e){
	optionDialog1.show();
});
win2.add(button5);
var optionDialog1 = Titanium.UI.createOptionDialog({
	title:'選択してください',
	options:['オプション1','オプション2','オプション3','キャンセル'],
	cancle:3
});
optionDialog1.addEventListener('click',function(e){
	if(e.index === e.cancel){
		Titanium.API.info(e.cancel);
	}
	switch(e.index){
		case 0:
			Titanium.API.info('0');
			break;
		case 1:
			Titanium.API.info('1');
			break;
		case 2:
			Titanium.API.info('2');
			break;
		default:
			Titanium.API.info('3');
			break;
		}
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
