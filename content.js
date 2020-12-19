window.alert('アプリ開いたね！');
js =
    "var performance = window.performance || window.mozPerformance" +
    " || window.msPerformance || window.webkitPerformance || {};" +
    " return performance.getEntries() || {};";
netData = executeJavaScript(js).toString();
logger.info("Network traffic: {}", netData);
console.log("Network traffic: {}", netData);
window.alert("Network traffic: {}", netData);
