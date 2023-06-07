let slideWrap = $(".slide_wrap"),
slideShow = slideWrap.find(".slide_show"),
slideList = slideShow.find(".slide_list"),
slides = slideList.find(".slide"),
slideBtn = slideWrap.find(".slide_btn");

let slideCount = slides.length,
slideWidth = slides.innerWidth(),
showNum = 3,
num = 0,
currentIndex = 0,

slideCopy = $(".slide:lt(" + showNum + ")").clone();
slideList.append(slideCopy);

// 이미지 움직이기
function backShow() {
    if (num == 0) {
     // 시작
    num = slideCount;
    slideList.css("left", -num * slideWidth + "px");
    }
num--;
slideList.stop().animate({ left: -slideWidth * num + "px" }, 400);
}

function nextShow() {
if (num == slideCount) {
    // 마지막
    num = 0;
    slideList.css("left", num);
}
num++;
slideList.stop().animate({ left: -slideWidth * num + "px" }, 400);
}

// 자동 슬라이드 기능 추가
let slideInterval = setInterval(nextShow, 3000);

// 슬라이드 정지 기능 추가
slideWrap.hover(
    function () {
        clearInterval(slideInterval);
    },
    function () {
        slideInterval = setInterval(nextShow, 3000);
    }
);

// 왼쪽, 오른쪽 버튼 설정
slideBtn.on("click", "button", function () {
    if ($(this).hasClass("prev")) {
        // 왼쪽 버튼을 클릭
        backShow();
    } else {
        // 오른쪽 버튼을 클릭
        nextShow();
    }
});

$(document).ready(function() {
    $('.indexPage').show(); //페이지를 로드할 때 표시할 요소
    $('.createPage').hide(); //페이지를 로드할 때 숨길 요소
    $('.CreateBtn').click(function(){
    $('.indexPage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.createPage').show(); //클릭 시 두 번째 요소 표시
    return false;
    });
});

var nation = document.querySelector('.nationSearch');

nation.onchange = function() {
    var genre = document.querySelector('.genreSearch');
    var nationOption = nation.options[nation.selectedIndex].value;
    switch (nationOption) {
        case '대한민국':
            var genreOption = genreOptions.korea;
            break;
        case '일본':
            var genreOption = genreOptions.japan;
            break;
        case '미국':
            var genreOption = genreOptions.usa;
            break;
    }
    
    genre.options.length = 0;
    
    for (var i = 0; i < genreOption.length; i++) {
        var option = document.createElement('option');
        option.innerText = genreOption[i];
        genre.append(option);
    }
}

var genreOptions = {
    korea : ['순정만화', '소년만화', '성인만화', '기획도서', '만화잡지'],
    japan : ['순정만화', '소년만화', '성인만화', '기획도서'],
    usa : ['DC코믹스마블', '코믹스리터러리', '그래픽노블']
}

$(document).ready(function() {
    $('.indexPage').show(); //페이지를 로드할 때 표시할 요소
    $('.savePage').hide(); //페이지를 로드할 때 숨길 요소
    $('.saveBtn').click(function(){
    $('.createPage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.savePage').show(); //클릭 시 두 번째 요소 표시
    return false;
    });
});

$(document).ready(function() {
    $('.indexPage').show(); //페이지를 로드할 때 표시할 요소
    $('.retouchPage').hide(); //페이지를 로드할 때 숨길 요소
    $('.retouchBtn').click(function(){
    $('.savePage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.retouchPage').show(); //클릭 시 두 번째 요소 표시
    return false;
    });
});

$(document).ready(function() {
    $('.save2Btn').click(function(){
    $('.retouchPage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.indexPage').show(); //클릭 시 두 번째 요소 표시
    return false;
    });
});

$(document).ready(function() {
    $('.HOME').click(function(){
    $('.createPage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.savePage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.retouchPage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.indexPage').show(); //클릭 시 두 번째 요소 표시
    return false;
    });
});

$(document).ready(function() {
    $('.HOME2').click(function(){
    $('.createPage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.savePage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.retouchPage').hide(); //클릭 시 첫 번째 요소 숨김
    $('.indexPage').show(); //클릭 시 두 번째 요소 표시
    return false;
    });
});
