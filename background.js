(function(){function d(a){a&&chrome.tabs.query({active:!0,currentWindow:!0},function(b){chrome.tabs.sendMessage(b[0].id,a,function(a){})})}(function(){chrome.runtime.onMessage.addListener(function(a,b,e){console.log(a);if(a&&(console.log(a),"object"===typeof a)){var c=a||{};chrome.storage.sync.set({curconfig:c},function(a){e("ok!");d(c)})}})})()})();
