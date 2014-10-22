//画面向き固定
$.index.orientationModes = [Ti.UI.LANDSCAPE_LEFT];
//起動画面生成
$.index.open();

function lookButton(){
	//質問と回答を見る画面に遷移するボタンの関数
	var lookWin = Alloy.createController("look").getView();
	lookWin.open();
}

//終了するときにメモリを開放
$.index.addEventListener("close",function(e){
	$.destroy();
});
