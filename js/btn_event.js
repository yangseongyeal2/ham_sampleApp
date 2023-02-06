var page = 1;
$('#passbtn').click(function(){
    console.log('passbtn Clicked');
    
    if (page == 1){
        page = 2;
        //첫번쨰 페이지 기능
        console.log('page::' + page);
        // id image 변경
        $('#customimg').attr("src", "assets/img/test2.png");    
        //id 버튼 보여주기
        $('#passbtn').css({
            "display":"block",
            "top": "75%"
        });
        $('#passbtn2').css({
            "display":"block",
            "top": "85%"
        });
        $('#passbtn').html('결제해서 보기');
        //$('#passbtn1').prop('value',"GGG");
        
    }else if(page == 2){
        //두번째 페이지 기능
        page = 1;
        console.log('page::' + page);
        $('#customimg').css("src", "assets/img/test2.jpeg");
        location.href='https://qr.kakaopay.com/281006011170227422004956'
        //https://qr.kakaopay.com/281006011170227422004956
    }
    
});

$('#passbtn2').click(function(){
    
});

$(function(){
	$("#customimg").click(function(){
		//사용하고자 하는 함수
		imageClickEvent();
	});
});	

function imageClickEvent(){
	//alert("loginType : " + type);
    console.log('page::' + page);
    if (page == 1){
        page = 2;
        //첫번쨰 페이지 기능
        console.log('page::' + page);
        // id image 변경
        //if man
        console.log('window.location.href::'+window.location.href);
        var urlstr = window.location.href;
        if (urlstr.includes('women')){
            $('#customimg').attr("src", "assets/img/005.png"); 
        }else{
            $('#customimg').attr("src", "assets/img/006.png");    
        }

        
        //if women
       
        $('.jb-text').css('display','none')
        
        //$('#passbtn1').prop('value',"GGG");
        
    }else if(page == 2){
        //두번째 페이지 기능
        page = 1;
        console.log('page::' + page);
        //$('#customimg').css("src", "assets/img/test2.jpeg");
        location.href='https://qr.kakaopay.com/281006011170227422004956'
        //https://qr.kakaopay.com/281006011170227422004956
    }
}

