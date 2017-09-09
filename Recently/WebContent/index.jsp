<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>최근본상품</title>
<LINK rel="stylesheet" type="text/css" href="/resource/recent.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</head>
<body>
    
    <div class="container">
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_1,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_2,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_3,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_4,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_5,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_6,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_7,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_8,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_9,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_10,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_11,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_12,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_13,http://via.placeholder.com/100x100', 1)">
        </div>
        <div>
            <img src="http://via.placeholder.com/100x100" onclick="setCookiePlus('recentView', 'product_id_14,http://via.placeholder.com/100x100', 1)">
        </div>
    </div>
    <br>
    <div id="floater">
        <span>최근본 상품</span>
        <div id="recentBanner">
            <div class="recentView" id="recentView">
                <div class="emptyPreView"><img src="http://via.placeholder.com/50x50"></div>
                <div class="emptyPreView"><img src="http://via.placeholder.com/50x50"></div>
                <div class="emptyPreView"><img src="http://via.placeholder.com/50x50"></div>
            </div>
        </div>
        <button onclick="slider(-1)">&lt;</button>
            <span id="now">1</span>/<span id="total">1</span>
        <button onclick="slider(1)">&gt;</button>
    </div>
    <script src="/resource/recent.js"></script>
</body>
</html>