(function () {
    function e(b) {
        b && chrome.runtime.sendMessage(b, function (a) {
            console.log(a)
        })
    }

    var switchTranslate = document.getElementById("switchfetchword"), b = document.getElementById("shiftKey"), ctrlKey = document.getElementById("ctrlkey"),
        shiftKey = document.getElementById('mouse');
    (function (g) {
        var a = {};
        g || (a.isTurnOnFectchWord = !0, a.isTurnOnHY = !1, a.isFectchByMouse = !0, a.isHideTranslateResult = !1);
        chrome.storage.sync.get("curconfig", function (d) {
            d.curconfig && (a = d.curconfig);
            console.log(d);
            d = a;
            var parents = $(ctrlKey).add(shiftKey).parent();
            "object" === typeof d && (switchTranslate.checked = d.isTurnOnFectchWord ? !0 : !1, switchTranslate.checked ? ((parents.removeClass('unselected')), b.parentNode.className = "", d.isFectchByMouse ? b.checked = !0 : ctrlKey.checked = !0) : (b.parentNode.className = "dis", ctrlKey.parentNode.className = "dis", b.checked = !1, ctrlKey.checked = !1))
        });
        switchTranslate.addEventListener("click", function () {
            this.checked ? (b.parentNode.className = "", ctrlKey.parentNode.className = "", b.checked = !0, a.isTurnOnFectchWord = !0, a.isFectchByMouse = !0) : (b.parentNode.className = "dis", ctrlKey.parentNode.className = "dis", b.checked = !1, ctrlKey.checked = !1, a.isTurnOnFectchWord = !1);
            e(a)
        });
        b.addEventListener("click", function () {
            this.checked && (a.isFectchByMouse = !0);
            e(a)
        });
        ctrlKey.addEventListener("click", function () {
            this.checked && (a.isFectchByMouse = !1);
            e(a)
        })
        shiftKey.addEventListener("click", function () {
            this.checked && (a.isFectchByMouse = !1);
            e(a)
        })
    })()
})();
