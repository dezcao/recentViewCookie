/**
 * 
 */
    /*
     * 
     * 응용코드
     */

    // 쿠키 생성
    function setCookiePlus(cName, cValue, imgUrl, cDay){
        
        //있는 쿠키를 가져온다.
        var cookieValue  = getCookiePlus("recentView");
        
        //유니크 배열을 만든다.
        if (cookieValue) {
            var cookieArray = cookieValue.split(";");
            let uniqCookieArray = [];
            
            while(cookieArray.length != 0) {
                var obj = cookieArray.shift(); //앞에서 부터 가져온다.
                if (obj != cValue) uniqCookieArray.push(obj); //중복이 아니면 유니크배열에 담는다.
            }
            
            uniqCookieArray.unshift(cValue); //맨 앞에 이번 값을 담는다.
            uniqCookieArray.splice(9, uniqCookieArray.length); //9개만 남긴다.
            cValue = uniqCookieArray.join(";");
        }
        
        //쿠키를 설정한다.
        var expire = new Date();
        expire.setDate(expire.getDate() + cDay);
        cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.
        if(typeof cDay != 'undefined') cookies += ';expires=' + expire.toGMTString() + ';';
        document.cookie = cookies;
    }
    
    //페이지 로딩될때 마다 쿠키 값을 파싱한다. 보고있는 당시에 해당 화면에서 붙여줘도 큰 효과는 없고 공수는 많다.
    function loadPreview() {
        
        //쿠키 가져온다.
        var cookieValue  = getCookiePlus("recentView");
        
        //쿠키가 없으면 나간다.
        if (!cookieValue) return;
        
        //쿠키를 배열로 만든다.
        var cookieArray = cookieValue.split(";");
        var cnt = cookieArray.length;
        
        //미리보기 HTML을 만든다.
        var newPreviewHTML = "";
        
        for (var i=0; i < cnt ; i++) {
            var obj = cookieArray[i]; //앞에서 부터 가져온다.
            var IdAndUrl = obj.split(",");
            
            newPreviewHTML = newPreviewHTML + 
                            '<div><img src="'+ IdAndUrl[1] +'" width="50px;" alt="'+ IdAndUrl[0] +'"></div>';
        }
        
        // 3개가 안되면 빈자리를 채울 HTML을 붙인다.
        if ((cnt%3) != 0) {
            var emptyPreviewHTML  = '<div class="emptyPreView"><img src="http://via.placeholder.com/50x50"></div>';
            for (var i = (cnt%3); i < 3; i++) {
                newPreviewHTML = newPreviewHTML + emptyPreviewHTML;
            }
        }
        
        
        //붙인다.
        var recentViewDiv = document.querySelector("#recentView");
        
        recentViewDiv.innerHTML = newPreviewHTML;
        
        //미리보기 갯수를 써준다.
        document.getElementById("total").innerHTML = (cnt < 4) ? 1 : (cnt < 7) ? 2 : 3;
        
    }
    
    // 쿠키 가져오기
    function getCookiePlus(cName) {
        cName = cName + '=';        
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';
        if(start != -1){
            start += cName.length;
            var end = cookieData.indexOf(';', start);
            if(end == -1) end = cookieData.length;
            cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
    }
    
    // 머리가 안굴러 갑니다..... 아아..
    function slider(step) {
        // 표시 숫자를 제어 한다.
        var now = document.getElementById("now").innerHTML;
        var total = document.getElementById("total").innerHTML;
        if ((now == 1 && step == -1) || (now == total && step == 1)) {return;}
        var resultNumber = now*1 + step;
        document.getElementById("now").innerHTML = resultNumber;
        
        //슬라이드를 숨긴다.
        var recentViews = document.querySelectorAll("#recentView div");
        
        for (var i = 0; i < resultNumber*3; i++) { //3,6,9
            recentViews[i].style.display = 'none';
        }
        
        if (resultNumber == 1) {
            for (var i = 0; i < 3; i++) {
                recentViews[i].style.display = 'block';
            }
        }
        if (resultNumber == 2) {
            for (var i = 3; i < 6; i++) {
                recentViews[i].style.display = 'block';
            }
        }
        if (resultNumber == 3) {
            for (var i = 6; i < 9; i++) {
                recentViews[i].style.display = 'block';
            }
        }
    }
    
    loadPreview();