(function () {
    var meetirn, diha;

    function epag(obgem, faquo, snimem) {
        if (null !== obgem) return obgem.addEventListener ? obgem.addEventListener(faquo, snimem, !1) : obgem.attachEvent("on" + faquo, snimem);
    }

    function kekam(boke) {
        return /^[a-zA-Z']+$/.test(boke);
    }

    function jite(cugi, giede, ducam, guepa) {
        var fogey = new XMLHttpRequest();
        fogey.onreadystatechange = function () {
            function nochum() {
            }

            4 == fogey.readyState && (200 <= fogey.status && 300 > fogey.status || 304 == fogey.status ? (nochum(),
            "function" === typeof guepa && guepa(fogey.responseText)) : console.log("ajax fail!"));
        };
        "get" === cugi ? (giede += encodeURIComponent(ducam), fogey.open(cugi, giede, !0),
            fogey.send(null)) : "post" === cugi && (fogey.open(cugi, giede, !0), send(ducam));
    }

    function aldit(babi) {
        if (babi) {
            console.log(babi);
            meetirn = babi.isTurnOnFectchWord;
            if (!1 === meetirn) {
                var gosap = noreg;
                null !== document && (document.removeEventListener ? document.removeEventListener("mousemove", gosap, !1) : document.detachEvent("onmousemove", gosap));
            } else console.log("bind"), epag(document, "mousemove", noreg);
            diha = !babi.isFectchByMouse;
        }
    }

    function letu(sego) {
        var niku = "";
        sego = sego || window.event;
        var ronor = null, prosie = sego.target.ownerDocument;
        -1 != prosie.toString().indexOf("[object HTMLDocument]") && (ronor = prosie);
        null != ronor && (quiha.currDoc != ronor && (quiha.currDoc = ronor), niku = egscul(sego.clientX, sego.clientY));
        return niku;
    }

    function egscul(resa, beci) {
        var capou = document.caretRangeFromPoint(resa, beci);
        if (!capou) return "";
        var gapru = capou.startOffset, pesoog = capou.endOffset;
        quiha.startOffset = gapru;
        var neshtod = 0, mopi = 0, ardoud = capou.cloneRange(), striglo = "", bondob = 0;
        if (capou.startContainer.data) for (; 0 < gapru;) {
            ardoud.setStart(capou.startContainer, --gapru);
            striglo = ardoud.toString();
            firstChar = striglo.charAt(0);
            if (!kekam(firstChar)) {
                /[^\u4e00-\u9fa5]/.test(firstChar) || mopi++;
                "" === firstChar && neshtod++;
                if (0 === mopi && 0 === neshtod || 3 === neshtod || 5 === mopi) {
                    ardoud.setStart(capou.startContainer, gapru + 1);
                    break;
                }
                if (0 < neshtod) break;
            }
            bondob++;
        }
        if (0 === bondob) return "";
        bondob = mopi = neshtod = 0;
        if (capou.endContainer.data) for (; pesoog < capou.endContainer.data.length;) {
            ardoud.setEnd(capou.endContainer, ++pesoog);
            striglo = ardoud.toString();
            lastChar = striglo.charAt(striglo.length - 1);
            if (!kekam(lastChar)) {
                /[^\u4e00-\u9fa5]/.test(lastChar) || mopi++;
                "" === lastChar && neshtod++;
                if (0 === mopi && 0 === neshtod || 3 === neshtod || 5 === mopi) {
                    ardoud.setEnd(capou.endContainer, pesoog - 1);
                    break;
                }
                if (0 < neshtod) break;
            }
            bondob++;
        }
        if (0 === bondob) return "";
        quiha.startOffset = quiha.startOffset - gapru - 1;
        return ardoud.toString();
    }

    function wuje(jitup) {
        17 === jitup.keyCode && diha && (quiha.fetchSwitch = !0, console.log("ctrl down..."));
    }

    function pisun(munam) {
        17 === munam.keyCode && (quiha.fetchSwitch = !1, console.log("ctrl up..."));
    }

    function noreg(imif) {
        fedig();
        if (!imif.shiftKey) {
            return;
        }
        quiha.curClientX = imif.clientX;
        quiha.curClientY = imif.clientY;
        if (!meetirn) return console.log("fetch word is turn off!"), !0;
        quiha.container || (quiha.container = document.createElement("div"), quiha.container.id = "translatecontainer",
            quiha.container.style.position = "absolute", quiha.container.style.zIndex = "10000",
            document.body.appendChild(quiha.container));
        quiha.container && quiha.isDrag && (quiha.container.style.left = imif.clientX - quiha.containerLeftDiff + 10 + "px",
            quiha.container.style.top = imif.clientY - quiha.containerTopDiff + 5 + "px", containerFixedLeft = quiha.container.style.left,
            containerFixedTop = quiha.container.style.top);
        if (quiha.container === imif.target || quiha.container.contains(imif.target)) return quiha.switchState = "unfetch",
            console.log("not clear..."), !0;
        if (quiha.isFixed) {
            quiha.container.style.left = containerFixedLeft + "px";
            quiha.container.style.top = containerFixedTop + "px"
        }
        var ninak = letu(imif);
        ninak && (quiha.timer && (clearTimeout(quiha.timer), fedig()), quiha.timer = setTimeout(function () {
            kekam(ninak) ? sehee(ninak.toLowerCase(), imif) : jite("get", cheha + "?query=" + encodeURIComponent(ninak) + "&c=" + encodeURIComponent(quiha.startOffset), "", function (mimoo) {
                null !== quiha.timer && (mimoo = JSON.parse(mimoo), mimoo = decodeURIComponent(mimoo.split(":")[1])) && (console.log("result:" + mimoo),
                    sehee(mimoo, imif));
            });
            quiha.canMove = !1;
        }, 50));
        return !0;
    }

    function sehee(dere, eleData) {
        if (dere) {
            var nerues = quiha.timer;
            jite("get", fagre, dere, function (orus) {
                clearTimeout(nerues);
                orus = JSON.parse(orus);
                if ("object" == typeof orus && "1" == orus.errorId) quiha.container.innerHTML = ""; else if (!orus.word_name || orus.word_name.toLowerCase() === dere.toLowerCase()) {
                    quiha.container.innerHTML = codin.join("");
                    setOffset(eleData)
                    function setOffset(data) {
                        var height = quiha.container.clientHeight;
                        quiha.container.style.left = data.pageX + 10 + "px";
                        var curTopVal = data.pageY + 5;
                        var windowBottomTop = window.scrollY + window.innerHeight;
                        if (curTopVal + height > windowBottomTop) {
                            curTopVal = windowBottomTop - height
                        }
                        quiha.container.style.top = curTopVal + "px";
                    }

                    var ogooy = document.getElementById("loading");
                    if (ogooy) if (ogooy.style.backgroundImage = "url(" + chrome.extension.getURL("images/loading.gif") + ")",
                            ogooy.style.backgroundPosition = "center", ogooy.style.display = "block", ogooy.style.backgroundRepeat = "no-repeat",
                        orus.errId && 1 === orus.errId) console.log("no result!!!"); else {
                        ogooy.style.display = "none";
                        orus = tapla(orus);
                        document.getElementById("result-cont").innerHTML = orus;
                        orus = document.getElementById("en_pron");
                        var ogooy = document.getElementById("us_pron"), trole = document.getElementById("chinese_pron");
                        if (orus) {
                            var sosi = orus.getElementsByTagName("a")[0];
                            sosi && (sosi.style.backgroundImage = "url(" + chrome.extension.getURL("images/words_tool.png") + ")",
                                sosi.style.backgroundPosition = "-26px -60px", epag(sosi, "mouseover", function () {
                                sosi.style.backgroundPosition = "-42px -60px";
                            }), epag(sosi, "mouseout", function () {
                                sosi.style.backgroundPosition = "-26px -60px";
                            }));
                        }
                        ogooy && (sosi = ogooy.getElementsByTagName("a")[0]) && (sosi.style.backgroundImage = "url(" + chrome.extension.getURL("images/words_tool.png") + ")",
                            sosi.style.backgroundPosition = "-26px -60px", epag(sosi, "mouseover", function () {
                            sosi.style.backgroundPosition = "-42px -60px";
                        }), epag(sosi, "mouseout", function () {
                            sosi.style.backgroundPosition = "-26px -60px";
                        }));
                        trole && (sosi = trole.getElementsByTagName("a")[0]) && (sosi.style.backgroundImage = "url(" + chrome.extension.getURL("images/words_tool.png") + ")",
                            sosi.style.backgroundPosition = "-26px -60px", epag(sosi, "mouseover", function () {
                            sosi.style.backgroundPosition = "-42px -60px";
                        }), epag(sosi, "mouseout", function () {
                            sosi.style.backgroundPosition = "-26px -60px";
                        }));
                        quiha.container.style.display = "block";
                    }
                    quiha.container.onclick = null;
                }
            });
        }
    }

    function dedug(bodran, snooku) {
        function umcik() {
        }

        for (var jichi = ['<div class="iciba_result ICIBA_normal"><ul class="ICIBA_normal">'], moque = 0, proophu = bodran.length; moque < proophu; moque++) {
            var nime = [], misi = bodran[moque];
            nime.push('<li class="ICIBA_normal">');
            snooku && nime.push('<p class="iciba_lf ICIBA_normal">');
            if (misi) {
                nime.push(misi.part);
                nime.push('</p><p class="iciba_rg ICIBA_normal">');
                for (var kaner = 0, odouf = misi.means.length; kaner < odouf; kaner++) umcik(),
                    snooku ? nime.push(misi.means[kaner]) : nime.push(misi.means[kaner].word_mean),
                    nime.push(";");
                snooku && nime.push("</p>");
                nime.push("</li>");
            }
            jichi.push(nime.join(""));
        }
        jichi.push('<ul class="ICIBA_normal"></ul></ul>');
        return jichi;
    }

    function tapla(ramo) {
        var tesob = [];
        if ("object" === typeof ramo) {
            var ranup = ramo.word_name;
            if (ramo.symbols && ramo.symbols[0]) if (kekam(ranup)) {
                var houpi = ramo.symbols[0].ph_am ? "[" + ramo.symbols[0].ph_am + "]" : "", cipib = ramo.symbols[0].ph_am_mp3 || ramo.symbols[0].ph_tts_mp3, racle = ramo.symbols[0].ph_en ? "[" + ramo.symbols[0].ph_en + "]" : "", vique = ramo.symbols[0].ph_en_mp3;
                ramo = ramo.symbols[0].parts;
                cipib = cipib ? '<a href="###" id= "http://res.iciba.com/resource/amp3' + cipib + '" onmouseover = "asplay_top(this.id)" onclick="asplay_top(this.id); return false;"></a>' : "";
                vique = vique ? '<a href="###" id= "http://res.iciba.com/resource/amp3' + vique + '" onmouseover = "asplay_top(this.id)" onclick="asplay_top(this.id); return false;"></a>' : "";
                ramo = dedug(ramo, !0);
                tesob.push(['<div class="iciba_words iciba_clear"><p class="ICIBA_normal">', ranup, "</p>", '<a target="_blank" href="http://www.iciba.com/' + ranup + '?from=roche_chrome_extension">详细&gt;&gt;</a></div>', '<div class="iciba_sound iciba_clear"><p class="ICIBA_normal" id="en_pron"><span>[英]</span><span>', racle, "</span>", vique, '</p><p class="ICIBA_normal" id="us_pron"><span>[美]</span><span>', houpi, "</span>", cipib, "</p></div>"].join(""));
                tesob.push(ramo.join(""));
            } else ranup = ['<div class="iciba_words iciba_clear"><p class="ICIBA_normal">', ranup, "</p>", '<a target="_blank"  href="http://www.iciba.com/' + ranup + '?from=roche_chrome_extension">详细&gt;&gt;</a></div>'],
                houpi = ramo.symbols[0].word_symbol, cipib = ramo.symbols[0].parts, ramo = (ramo = ramo.symbols[0].symbol_mp3) && "\n" !== ramo ? '<a href="###" id="http://res.iciba.com/' + ramo + '" onmouseover="asplay_top(this.id)" onclick="asplay_top(this.id); return false;"></a>' : "",
                cipib = dedug(cipib, !1), ranup.push(['<div class="iciba_sound iciba_clear"><p class="ICIBA_normal" id="chinese_pron"><span>', houpi, "</span>" + ramo + "</p></div>"].join("")),
                tesob.push(ranup.join("")), tesob.push(cipib.join(""));
        } else "string" === typeof ramo && tesob.push(['<div class="iciba_words iciba_clear"><p class="ICIBA_normal">', ramo, "</p></div>"].join(""));
        return tesob.length == 0 ? "No query result" : tesob.join("");
    }

    function fedig() {
        quiha.container && (quiha.container.innerHTML = "", clearTimeout(quiha.timer), quiha.canMove = !0);
    }

    function bura() {
        var cesna = document.createElement("style");
        cesna.type = "text/css";
        var femnaze = document.createTextNode('body,h1,h2,h3,h4,h5,h6,p,dl,dd,ol,ul,th,td,form,fieldset,legend,input,button,textarea{margin:0;padding:0}li{list-style:none;}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0;}legend{display:none;}a{text-decoration:none;outline:none;}em{font-style:normal}.iciba_fl{float:left;}.iciba_fr{float:right;}.iciba_clear{zoom:1;}.iciba_clear:after{content:"";display:block;clear:both;}#iciba_words-tool{width:276px;font-size:12px;}.iciba-yibtn{width:22px;height:22px;overflow:hidden;position:absolute;background:url(' + chrome.extension.getURL("images/dotwnd_bk.gif") + ") no-repeat 0 0;cursor:pointer;}#iciba_words-tool .iciba_top{padding-bottom:3px;visibility:hidden;}#iciba_words-tool .iciba_top:hover{visibility:visible;}#iciba_words-tool .iciba_top ul li{float:right;width:25px;height:19px;cursor:pointer;background-image:url(" + chrome.extension.getURL("images/words_tool.png") + ");background-repeat:no-repeat;list-style:none;}#iciba_words-tool .iciba_top ul li.iciba_close_btn{width:28px;background-position:0 0;list-style:none;}#iciba_words-tool .iciba_top ul li.iciba_fixed_btn{background-position:0 -20px;list-style:none;}#iciba_words-tool .iciba_top ul li.iciba_search_btn{background-position:-25px -40px;list-style:none;}#iciba_words-tool .iciba_top ul li.iciba_query_btn{background-position:0 -60px;list-style:none;}#iciba_words-tool .iciba_cont{border:1px solid #87B3E5; background-color:#FFFFFF;}#iciba_words-tool .iciba_search_bar{display:none;}#iciba_words-tool .iciba_search_bar input{width:264px;height:21px;line-height:21px;padding:0 5px;border:none;border-bottom:1px solid #87B3E5;font-size:12px;color:#000;margin:0;padding:0}#iciba_words-tool .iciba_loading{background-color:#FFFFFF;height:150px;width:100%;}#iciba_words-tool .iciba_words{padding:14px 12px 0;line-height:24px;}#iciba_words-tool .iciba_words p{float:left;font-size:14px;font-weight:bold;color:#000;}#iciba_words-tool .iciba_words a{float:right;color:#236FD4;}#iciba_words-tool .iciba_sound{padding:0 12px 10px;height:18px;line-height:18px;}#iciba_words-tool .iciba_sound p{float:left;padding-right:4px;}#iciba_words-tool .iciba_sound p span{padding-right:4px;color:#999;vertical-align:middle;}#iciba_words-tool .iciba_sound p a{display:inline-block;width:15px;height:13px;vertical-align:middle;background:url(" + chrome.extension.getURL("images/words_tool.png") + ") no-repeat -26px -60px;}#iciba_words-tool .iciba_sound p a:hover{background-position:-42px -60px;}#iciba_words-tool .iciba_result,#iciba_words-tool .iciba_net_explain,#iciba_words-tool .iciba_liju_use,#iciba_words-tool .iciba_baike{width:250px;margin:0 12px;padding-bottom:6px;line-height:20px;border-top:1px solid #C8C8C8;}#iciba_words-tool .iciba_result li{padding-top:6px;line-height:20px;overflow:hidden;zoom:1;list-style:none;}#iciba_words-tool .iciba_result li p.iciba_lf{float:left;padding-right:10px;}#iciba_words-tool .iciba_result li p.iciba_rg{float:left;width:80%;}#iciba_words-tool .iciba_result li a{color:#236FD4;text-decoration:underline;}#iciba_words-tool .iciba_net_explain .iciba_tt,#iciba_words-tool .iciba_liju_use .iciba_tt,#iciba_words-tool .iciba_baike .iciba_tt{padding:6px 0;}#iciba_words-tool .iciba_net_explain .iciba_tt h6,#iciba_words-tool .iciba_liju_use .iciba_tt h6,#iciba_words-tool .iciba_baike .iciba_tt h6{float:left;padding-left:8px;font-size:12px;font-weight:normal;border-left:2px solid #236FD4;}#iciba_words-tool .iciba_net_explain .iciba_tt a,#iciba_words-tool .iciba_liju_use .iciba_tt a,#iciba_words-tool .iciba_baike .iciba_tt a{float:right;color:#236FD4;}#iciba_words-tool .iciba_net_explain p{padding-left:10px;color:#666;}#iciba_words-tool .iciba_liju_use .iciba_l_u_E{padding-left:10px;color:#666;}#iciba_words-tool .iciba_liju_use .iciba_l_u_C{padding-left:10px;color:#666;}#iciba_words-tool .iciba_liju_use .iciba_l_u_from{padding-top:4px;text-align:right;color:#999;}#iciba_words-tool .iciba_baike p.iciba_b_txt{padding-left:10px;color:#666;}/* S huayi */#iciba_words-tool .iciba_huayi{padding-top:6px;border:none;word-wrap:break-word;word-break:break-all;}/* E huayi */");
        cesna.appendChild(femnaze);
        cesna = document.createElement("script");
        femnaze = document.createTextNode('var old = null;function asplay_top(c){var audio = document.createElement("audio");if(audio != null && audio.canPlayType && audio.canPlayType("audio/mpeg")){if(old){old.pause();}audio.src = c;old = audio;audio.play();}}');
        cesna.appendChild(femnaze);
        document.getElementsByTagName("head")[0].appendChild(cesna);
    }

    function dope() {
        if (confirm("您没有安装flash播放插件，所以无法发音，请先安装下吧！")) {
            var unel = window.open();
            setTimeout(function () {
                unel && (unel.location = "http://www.adobe.com/go/getflashplayer");
            }, 50);
        }
    }

    diha = meetirn = void 0;
    meetirn = !0;
    diha = !1;
    var quiha = {}, fagre = "http://open.iciba.com/huaci/chrome_interface.php?word=", cheha = "http://open.iciba.com/huaci/participle.php";
    quiha.isDrag = !1;
    quiha.canMove = !0;
    quiha.timer = null;
    quiha.container = document.getElementById("translatecontainer");
    quiha.startOffset = 0;
    quiha.endOffset = 0;
    quiha.curClientX = 0;
    quiha.curClientY = 0;
    quiha.mousedownClientX = 0;
    quiha.mousedownClientY = 0;
    quiha.containerLeftDiff = 0;
    quiha.containerTopDiff = 0;
    quiha.containerFixedLeft = 0;
    quiha.containerFixedTop = 0;
    quiha.isFixed = !1;
    quiha.currDoc = null;
    quiha.startOffset = 0;
    quiha.fetchSwitch = !1;
    var codin = ['<div id="iciba_words-tool"><div id="iciba_top_bar" class="iciba_top ICIBA_normal" style="display:none;"><ul class="iciba_clear ICIBA_normal" id="iciba_btn"><li title="关闭" class="iciba_close_btn ICIBA_normal"></li><li title="固定" class="iciba_fixed_btn ICIBA_normal"></li><li title="搜索框" class="iciba_search_btn ICIBA_normal" style="background-position:-25px -40px;"></li><li title="使用词霸查询" class="iciba_query_btn ICIBA_normal"></li></ul></div><!-- top --><div id="result-cont" class="iciba_cont "><form class="iciba_search_bar ICIBA_normal" action="#" method="get" id="searchBar" style="display: none;"><fieldset><legend>填写通行证账号与密码</legend><input type="text"></fieldset></form>', '<div id="loading"  class="iciba_loading"></div><object style="height:0px;width:0px;overflow:hidden;" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" width="0" height="0" id="plginsound" align="absmiddle"> <param name="allowScriptAccess" value="always"> <param name="movie" value="http://www.iciba.com/top/asound.swf"> <param name="quality" value="high"> <embed src="http://www.iciba.com/top/asound.swf" quality="high" width="0" height="0" name="asound_top" align="absmiddle" allowscriptaccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"> </object>'], rotig = null;
    window.asplay_top = function (folndip) {
        var jija = document.createElement("audio");
        if (null != jija && jija.canPlayType && jija.canPlayType("audio/mpeg")) rotig && rotig.pause(),
            jija.src = folndip, rotig = jija, jija.play(); else if (jija = window.document.asound_top ? window.document.asound_top : -1 == navigator.appName.indexOf("Microsoft Internet") ? document.embeds && document.embeds.asound_top ? document.embeds.asound_top : void 0 : document.getElementById("asound_top"),
                jija) try {
            jija.SetVariable("f", folndip), jija.GotoFrame(1);
        } catch (stoybrup) {
            dope();
        }
    };
    (function () {
        bura();
        chrome.storage.sync.get("curconfig", function (boumscib) {
            boumscib.curconfig && (config = boumscib.curconfig, aldit(config), console.log("init config success!"));
            epag(document, "mousemove", noreg);
            epag(document, "keydown", wuje);
            epag(document, "keyup", pisun);
        });
        chrome.runtime.onMessage.addListener(function (bueche, rusen, igank) {
            igank(bueche + ":Hello from contentJs!");
            aldit(bueche);
        });
    })();
})();