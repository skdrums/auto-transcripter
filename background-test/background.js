chrome.runtime.onMesssage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting == "hello")
            sendResponse({farewell: "goodbye"});
    });
