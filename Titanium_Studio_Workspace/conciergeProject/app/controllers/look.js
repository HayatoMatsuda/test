function Random(){
	//質問と回答を配列で容易
	var ques = ["海外旅行に言った回数は？", "今までに読んだ本の数は？", "Question"];
	var travelReply = ["90回", "1000冊", "a"];
	var universeReply = ["10回", "3000冊", "b"];
	var childrenReply = ["20回", "5000冊", "c"];
	var literatureReply = ["30回", "10000冊", "d"];
	var cookReply = ["40回", "500冊", "e"];
	var historyReply = ["50回", "100冊", "f"];
	
	//ランダム生成
	var rand = Math.floor( Math.random() * 3 );
	
	//各ラベルの表示を変更
	$.question.text = ques[rand];
	$.travel.text = travelReply[rand];
	$.universe.text = universeReply[rand];
	$.children.text = childrenReply[rand];
	$.literature.text = literatureReply[rand];
	$.cook.text = cookReply[rand];
	$.history.text = historyReply[rand];

}