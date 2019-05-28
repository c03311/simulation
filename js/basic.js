    //这是没有任何UP时候的基础池子抽卡算法
    //六星，五星，四星，三星的出货率分别为2%，8%，50%。40%
    //通过判断生成随机数的区间来决定一次抽卡结果的稀有度，然后通过生成另一个随即数随机选择稀有度区间中的一位干员
    //在前50连时，按照给定的概率算法进行判断
    //当进入没有抽出六星的后50连以后，启用另外一种算法，来递增六星的出货概率，来实现效果
    var R=["安塞尔","芬","芙蓉","卡提","克洛丝","翎羽","梅兰莎","米格鲁","史都华德","香草","炎熔","梓兰"];
    var SR=["白雪","杜宾","深海色","夜烟","远山","流星","末药","蛇屠箱","慕斯","暗锁","烁","调香师",
    "地灵","清道夫","霜叶","角峰","古米","缠丸","阿消","红豆","杰西卡"];
    var SSR=["芙兰卡","幽灵鲨","凛冬","白面鸮","德克萨斯","普罗旺斯","蓝莓","临光","雷蛇","红",
    "赫墨","天火","初雪","拉普兰德","华法琳","守林人","真理","狮蝎","白金","陨星","梅尔","可颂","崖心","食铁兽","空","因陀罗"];
    var SSSR=["艾雅法拉","星熊","能天使","银灰","塞雷娅","闪灵","推进之王","夜莺","安洁莉娜","伊芙利特"];
    var totalnum=0;//单抽在抽出六星之前的抽卡总数，在抽出六星时归零
    var absolute=101;//单抽的保底机制，50连没有六星之后没抽+2%，通过增加随机数的区间上限值来实现算法
    var oncecount=0;//单抽的总抽卡数
    var TTtotalnum=0;//十连在抽出六星之前的抽卡总数，在抽出六星时归零
    var TTabsolute=101;//十连的的保底机制，50连没有六星之后没抽+2%，通过增加随机数的区间上限值来实现算法
    var TToncecount=0;//十连的总抽卡数
    var SSSRNUM=undefined;
    $(document).ready(function(){
        //重置页面
        $(".reset").click(function(){
            location.reload();
        });
        //单抽
        $(".buttons img:first").click(function(){
            totalnum=totalnum+1;
            oncecount+=1;
            var JADE=oncecount*600;//单抽消耗的总合成玉数
            var oncecount2=50-totalnum;//距离开始增加概率的第五十次抽卡的剩余次数
            var oncepossibility=absolute-99;//当前的六星出货率
            $(".possibility:first").text("当前六星出货率：" + oncepossibility +"%");
            $(".count:first").text("已抽次数：" + oncecount);
            $(".count2:first").text("距离五十次开始提升概率的剩余次数：" + oncecount2 + "(负数即代表您已超出五十次多少次)");
            $(".combinejade:first").text("已消耗合成玉：" + JADE)
            if(totalnum<=50)//在没有每抽增加概率的前五十次抽卡的算法，使用通常的概率算法
        {
            var oncecheck=Math.floor(Math.random()*(99+1));
            if(oncecheck==0||oncecheck==1)
            {SSSRNUM=Math.floor(Math.random()*(9+1));//生成一个随机数用于确定是六星数组之中的哪一位干员
            $(".once img").attr("src","img/六星/" + SSSR[SSSRNUM] + ".png");
            $(".once img").attr("style","border:3px solid gold;margin-left:11%;");
            totalnum=0;//抽出六星时，将保底计数归0
            }
            else if(oncecheck>=2&&oncecheck<=9)
            {var SSRNUM=Math.floor(Math.random()*(25+1));
            $(".once img").attr("src","img/五星/" + SSR[SSRNUM] + ".png");
            $(".once img").attr("style","border:3px solid yellow;margin-left:11%;");
            }
            else if(oncecheck>=10&&oncecheck<=59)
            {var SRNUM=Math.floor(Math.random()*(20+1));
            $(".once img").attr("src","img/四星/" + SR[SRNUM] + ".png");
            $(".once img").attr("style","border:3px solid #EE82EE;margin-left:11%;");    
            }
            else
            {var RNUM=Math.floor(Math.random()*(11+1));
            $(".once img").attr("src","img/三星/" + R[RNUM] + ".png");
            $(".once img").attr("style","border:3px solid blue;margin-left:11%;");
            }
        }
        else if(totalnum>50)//在前50连没有抽出六星时，启用每抽增加概率的算法
        {
            var specialoncecheck=Math.floor(Math.random()*(absolute+1));//生成一个随机数，其上限也是变量，该变量值会随着六星沉船的次数而递增，直到出到六星为止
            if(specialoncecheck>=98||absolute==201)//将随机数的上限在100之上递增，这样不会影响其他稀有度的卡的概率，同时逐渐递增六星的出货几率
            {var SSSRNUM=Math.floor(Math.random()*(9+1));
            $(".once img").attr("src","img/六星/" + SSSR[SSSRNUM] + ".png");
            $(".once img").attr("style","border:3px solid gold;margin-left:11%;");
            SSSRNUM=undefined;
            totalnum=0;
            absolute=101;
            }
            else if(specialoncecheck>=0&&specialoncecheck<=7)
            {var SSRNUM=Math.floor(Math.random()*(25+1));
            $(".once img").attr("src","img/五星/" + SSR[SSRNUM] + ".png");
            $(".once img").attr("style","border:3px solid yellow;margin-left:11%;");
            absolute+=2;
            }
            else if(specialoncecheck>=8&&specialoncecheck<=57)
            {var SRNUM=Math.floor(Math.random()*(20+1));
            $(".once img").attr("src","img/四星/" + SR[SRNUM] + ".png");
            $(".once img").attr("style","border:3px solid #EE82EE;margin-left:11%;");
            absolute+=2;  
            }
            else if(specialoncecheck>=58&&specialoncecheck<=97)
            {var RNUM=Math.floor(Math.random()*(11+1));
            $(".once img").attr("src","img/三星/" + R[RNUM] + ".png");
            $(".once img").attr("style","border:3px solid blue;margin-left:11%;");
            absolute+=2;
            }
        }
        });
        //十连
        $(".buttons img:last").click(function(){
            for(var i=0;i<10;i++)
            {
                var TToncecount2=50-TTtotalnum;
                TToncecount+=1;
                var TTJADE=TToncecount*600;
                var TTpossibility=TTabsolute-99;
                $(".possibility:last").text("当前六星出货率：" + TTpossibility +"%");
                $(".count:last").text("已抽次数：" + TToncecount);
                $(".count2:last").text("距离五十次开始提升概率的剩余次数：" + TToncecount2 +"(负数即代表您已超出五十次多少次)");
                $(".combinejade:last").text("已消耗合成玉：" + TTJADE)
                TTtotalnum=TTtotalnum+1;
            if(TTtotalnum<=50)
            {var oncecheck=Math.floor(Math.random()*(99+1));
                if(oncecheck==0||oncecheck==1)
                {   var tSSSRNUM=Math.floor(Math.random()*(9+1));
                    $(".result li:eq(" + i + ") img").attr("src","img/六星/" + SSSR[tSSSRNUM] + ".png");
                    $(".result li:eq(" + i + ") img").attr("style","border:3px solid gold;");
                    TTtotalnum=0;
                }
                else if(oncecheck>=2&&oncecheck<=9)
                {   var tSSRNUM=Math.floor(Math.random()*(25+1));
                    $(".result li:eq(" + i + ") img").attr("src","img/五星/" + SSR[tSSRNUM] + ".png");
                    $(".result li:eq(" + i + ") img").attr("style","border:3px solid yellow;");
                }
                else if(oncecheck>=10&&oncecheck<=59)
                {   var tSRNUM=Math.floor(Math.random()*(20+1));
                    $(".result li:eq(" + i + ") img").attr("src","img/四星/" + SR[tSRNUM] + ".png");
                    $(".result li:eq(" + i + ") img").attr("style","border:3px solid #EE82EE;");
                }
                else
                {   var tRNUM=Math.floor(Math.random()*(11+1));
                    $(".result li:eq(" + i + ") img").attr("src","img/三星/" + R[tRNUM] + ".png");
                    $(".result li:eq(" + i + ") img").attr("style","border:3px solid blue;");
                }
            }
            else if(TTtotalnum>50)
            {
                var TTspecialoncecheck=Math.floor(Math.random()*(absolute+1));
                if(TTspecialoncecheck>=98||TTabsolute==201)
                {   var tSSSRNUM=Math.floor(Math.random()*(9+1));
                    $(".result li:eq(" + i + ") img").attr("src","img/六星/" + SSSR[tSSSRNUM] + ".png");
                    $(".result li:eq(" + i + ") img").attr("style","border:3px solid gold;");
                    tSSSRNUM=undefined;
                    TTtotalnum=0;
                    TTabsolute=101;
                }
                else if(TTspecialoncecheck>=0&&TTspecialoncecheck<=7)
                {   var tSSRNUM=Math.floor(Math.random()*(25+1));
                    $(".result li:eq(" + i + ") img").attr("src","img/五星/" + SSR[tSSRNUM] + ".png");
                    $(".result li:eq(" + i + ") img").attr("style","border:3px solid yellow;");
                    TTabsolute+=2;
                }
                else if(TTspecialoncecheck>=8&&TTspecialoncecheck<=57)
                {   var tSRNUM=Math.floor(Math.random()*(20+1));
                    $(".result li:eq(" + i + ") img").attr("src","img/四星/" + SR[tSRNUM] + ".png");
                    $(".result li:eq(" + i + ") img").attr("style","border:3px solid #EE82EE;");
                    TTabsolute+=2;
                }
                else if(TTspecialoncecheck>=58&&TTspecialoncecheck<=97)
                {   var tRNUM=Math.floor(Math.random()*(11+1));
                    $(".result li:eq(" + i + ") img").attr("src","img/三星/" + R[tRNUM] + ".png");
                    $(".result li:eq(" + i + ") img").attr("style","border:3px solid blue;");
                    TTabsolute+=2;
                }
            }
            }
        });
    });