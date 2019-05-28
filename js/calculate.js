var R=["安塞尔","芬","芙蓉","卡提","克洛丝","翎羽","梅兰莎","米格鲁","史都华德","香草","炎熔","梓兰"];
var SR=["白雪","杜宾","深海色","夜烟","远山","流星","末药","蛇屠箱","慕斯","暗锁","烁","调香师",
"地灵","清道夫","霜叶","角峰","古米","缠丸","阿消","红豆","杰西卡"];
var SSR=["芙兰卡","幽灵鲨","凛冬","白面鸮","德克萨斯","普罗旺斯","蓝莓","临光","雷蛇","红",
"赫墨","天火","初雪","拉普兰德","华法琳","守林人","真理","狮蝎","白金","陨星","梅尔","可颂","崖心","食铁兽","空","因陀罗"];
var SSSR=["艾雅法拉","星熊","能天使","银灰","塞雷娅","闪灵","推进之王","夜莺","安洁莉娜","伊芙利特"];
var absolute=101;
var totalnum=0;
var TTabsolute=101;
var TTtotalnum=0;
var SSSRNUM=undefined;
$(document).ready(function(){
    $(".buttons img:first").click(function(){
        totalnum=totalnum+1;
        if(totalnum<=50)
    {
        var oncecheck=Math.floor(Math.random()*(99+1));
        if(oncecheck==0||oncecheck==1)
        {SSSRNUM=Math.floor(Math.random()*(9+1));
        $(".once img").attr("src","https://c03311.github.io/simulation/img/六星/" + SSSR[SSSRNUM] + ".png");
        $(".once img").attr("style","border:3px solid gold;margin-left:11%;");
        totalnum=0;
        }
        else if(oncecheck>=2&&oncecheck<=9)
        {var SSRNUM=Math.floor(Math.random()*(25+1));
        $(".once img").attr("src","https://c03311.github.io/simulation/img/五星/" + SSR[SSRNUM] + ".png");
        $(".once img").attr("style","border:3px solid yellow;margin-left:11%;");
        }
        else if(oncecheck>=10&&oncecheck<=59)
        {var SRNUM=Math.floor(Math.random()*(20+1));
        $(".once img").attr("src","https://c03311.github.io/simulation/img/四星/" + SR[SRNUM] + ".png");
        $(".once img").attr("style","border:3px solid #EE82EE;margin-left:11%;");    
        }
        else
        {var RNUM=Math.floor(Math.random()*(11+1));
        $(".once img").attr("src","https://c03311.github.io/simulation/img/三星/" + R[RNUM] + ".png");
        $(".once img").attr("style","border:3px solid blue;margin-left:11%;");
        }
    }
    else if(totalnum>50)
    {
        var specialoncecheck=Math.floor(Math.random()*(absolute+1));
        if(specialoncecheck>=98)
        {var SSSRNUM=Math.floor(Math.random()*(9+1));
        $(".once img").attr("src","https://c03311.github.io/simulation/img/六星/" + SSSR[SSSRNUM] + ".png");
        $(".once img").attr("style","border:3px solid gold;margin-left:11%;");
        SSSRNUM=undefined;
        totalnum=0;
        absolute=101;
        }
        else if(specialoncecheck>=0&&specialoncecheck<=7)
        {var SSRNUM=Math.floor(Math.random()*(25+1));
        $(".once img").attr("src","https://c03311.github.io/simulation/img/五星/" + SSR[SSRNUM] + ".png");
        $(".once img").attr("style","border:3px solid yellow;margin-left:11%;");
        absolute+=2;
        }
        else if(specialoncecheck>=8&&specialoncecheck<=57)
        {var SRNUM=Math.floor(Math.random()*(20+1));
        $(".once img").attr("src","https://c03311.github.io/simulation/img/四星/" + SR[SRNUM] + ".png");
        $(".once img").attr("style","border:3px solid #EE82EE;margin-left:11%;");
        absolute+=2;  
        }
        else if(specialoncecheck>=58&&specialoncecheck<=97)
        {var RNUM=Math.floor(Math.random()*(11+1));
        $(".once img").attr("src","https://c03311.github.io/simulation/img/三星/" + R[RNUM] + ".png");
        $(".once img").attr("style","border:3px solid blue;margin-left:11%;");
        absolute+=2;
        }
    }
    });
    $(".buttons img:last").click(function(){
        for(var i=0;i<10;i++)
        {
            TTtotalnum=TTtotalnum+1;
            console.log(TTtotalnum);
            console.log(TTabsolute);
        if(TTtotalnum<=50)
        {var oncecheck=Math.floor(Math.random()*(99+1));
            if(oncecheck==0||oncecheck==1)
            {   var tSSSRNUM=Math.floor(Math.random()*(9+1));
                $(".result li:eq(" + i + ") img").attr("src","https://c03311.github.io/simulation/img/六星/" + SSSR[tSSSRNUM] + ".png");
                $(".result li:eq(" + i + ") img").attr("style","border:3px solid gold;");
                TTtotalnum=0;
            }
            else if(oncecheck>=2&&oncecheck<=9)
            {   var tSSRNUM=Math.floor(Math.random()*(25+1));
                $(".result li:eq(" + i + ") img").attr("src","https://c03311.github.io/simulation/img/五星/" + SSR[tSSRNUM] + ".png");
                $(".result li:eq(" + i + ") img").attr("style","border:3px solid yellow;");
            }
            else if(oncecheck>=10&&oncecheck<=59)
            {   var tSRNUM=Math.floor(Math.random()*(20+1));
                $(".result li:eq(" + i + ") img").attr("src","https://c03311.github.io/simulation/img/四星/" + SR[tSRNUM] + ".png");
                $(".result li:eq(" + i + ") img").attr("style","border:3px solid #EE82EE;");
            }
            else
            {   var tRNUM=Math.floor(Math.random()*(11+1));
                $(".result li:eq(" + i + ") img").attr("src","https://c03311.github.io/simulation/img/三星/" + R[tRNUM] + ".png");
                $(".result li:eq(" + i + ") img").attr("style","border:3px solid blue;");
            }
        }
        else if(TTtotalnum>50)
        {
            var TTspecialoncecheck=Math.floor(Math.random()*(absolute+1));
            if(TTspecialoncecheck>=98)
            {   var tSSSRNUM=Math.floor(Math.random()*(9+1));
                $(".result li:eq(" + i + ") img").attr("src","https://c03311.github.io/simulation/img/六星/" + SSSR[tSSSRNUM] + ".png");
                $(".result li:eq(" + i + ") img").attr("style","border:3px solid gold;");
                tSSSRNUM=undefined;
                TTtotalnum=0;
                TTabsolute=101;
            }
            else if(TTspecialoncecheck>=0&&TTspecialoncecheck<=7)
            {   var tSSRNUM=Math.floor(Math.random()*(25+1));
                $(".result li:eq(" + i + ") img").attr("src","https://c03311.github.io/simulation/img/五星/" + SSR[tSSRNUM] + ".png");
                $(".result li:eq(" + i + ") img").attr("style","border:3px solid yellow;");
                TTabsolute+=2;
            }
            else if(TTspecialoncecheck>=8&&TTspecialoncecheck<=57)
            {   var tSRNUM=Math.floor(Math.random()*(20+1));
                $(".result li:eq(" + i + ") img").attr("src","https://c03311.github.io/simulation/img/四星/" + SR[tSRNUM] + ".png");
                $(".result li:eq(" + i + ") img").attr("style","border:3px solid #EE82EE;");
                TTabsolute+=2;
            }
            else if(TTspecialoncecheck>=58&&TTspecialoncecheck<=97)
            {   var tRNUM=Math.floor(Math.random()*(11+1));
                $(".result li:eq(" + i + ") img").attr("src","https://c03311.github.io/simulation/img/三星/" + R[tRNUM] + ".png");
                $(".result li:eq(" + i + ") img").attr("style","border:3px solid blue;");
                TTabsolute+=2;
            }
        }
        }
    });
});