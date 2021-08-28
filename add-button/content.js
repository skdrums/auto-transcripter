$(function() {
  console.log("コンテントスクリプトだよ");

  // example をハイライトする (文字の背景色を変える)
  const reg = new RegExp(/(example)/, "gi");
  const $bodyText = $("body").html();
  $("body").html(
    $bodyText.replace(reg, "<span style='background-color: lightblue'>$1</span>")
  );

  // permission が含まれていたらアラート出す
  if ($bodyText.match(/permission/i)) {
    alert("このページには [permission] という文字列が含まれています");
  }

  // 画面内にボタンを追加して、clickされたら何か処理させる
  $("div").append("<input type='button' value='送信' id='sendButton'>");
  $("#sendButton").click(function() {
    console.log('ボタンが押された');
    // ここになんらかの処理
    // 例えばページから特定の情報を取得してどっかのサーバーにPOSTするとかもできちゃう
  });
});
