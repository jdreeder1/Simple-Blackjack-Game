       function hideSplit(){
           $("#playerSplitHit").hide();
            $("#playerSplitStand").hide();
           }
        function showSplit(){
            $("#playerSplitHit").show();
            $("#playerSplitStand").show();
        }
        function showCard1(){
            $("#crd1").show();
            $("#crd1Total").show();
        }
        function allowStand(){
            $("#playerStand").css("pointer-events", "auto");
        }
        function allowDouble(){
            $("#playerDouble").show();
        }
        function allowSplit(){
            $("#playerSplit").show();
        }
       //window.onload=function(){
       const reset = 0;
       var playerTotal = 0;
       var splitPlayerTotal = 0;
       var dealerTotal = 0;
       var splitImg = "";  //= [];
       var randIndex = 0;

       //var splitClicked;
       //var pClone = $("#pTotal").clone();
       //var dClone = $("#pTotal").clone();
      
       function resetTotals(){
           //var zero = 0;
           hideSplit();
           playerTotal = reset;
           splitPlayerTotal = reset;
           dealerTotal = reset;
            
           $("#pTotal").html(playerTotal);
           $("#dTotal").html(dealerTotal);
           $("#crd1").html("");
           $("#crd1Total").html("");
           $("#crd2").html("");
           $("#crd2Total").html("");
           $("#crd3").html("");
           $("#crd3Total").html("");
           $("#crd4").html("");
           $("#crd4Total").html("");

           $("#dlrCrd1").html("");
           $("#dlrCrd1Total").html("");
           $("#dlrCrd2").html("");
           $("#dlrCrd2Total").html("");
           $("#dlrCrd3").html("");
           $("#dlrCrd3Total").html("");
           $("#dlrCrd4").html("");
           $("#dlrCrd4Total").html("");
            
            $("#split1").html("");
           $("#split1Total").html("");
           $("#split2").html("");
           $("#split2Total").html("");
           $("#split3").html("");
           $("#split3Total").html("");
           $("#split4").html("");
           $("#split4Total").html("");
            $("#splitPlayerTotal").html("");
            $("#splitPlayerBet").html("");

            $("#crd1Image").html("");
            $("#crd2Image").html("");
            $("#crd3Image").html("");
            $("#crd4Image").html("");

            $("#split1Image").html("");
            $("#split2Image").html("");
            $("#split3Image").html("");
            $("#split4Image").html("");

            //var cb = "<img src='cardback.png'>";
            $("#dlrCrd2Image").html(""); //  hide();
            //'<img src="'+spl[0].image+'">'
            $("#dlrCrd3Image").html("");  //hide();
            $("#dlrCrd4Image").html("");  //hide();

       }
      
       /*function setCardTotal(){
          
           localStorage.setItem("playerHandTotal", );
       }*/
      
       var playerChips = 1000;
       localStorage.setItem("chips", playerChips);
      //https://depositphotos.com/214169678/stock-illustration-full-deck-of-cards.html
           var cardArr = [
               {face: "Ace of Hearts", value: 11, image: "../static/ace_hearts.png"},
               {face: "King of Hearts", value: 10, image: "../static/king_hearts.png"},
               {face: "Queen of Hearts", value: 10, image: "../static/queen_hearts.png"},
               {face: "Jack of Hearts", value: 10, image: "../static/jack_hearts.png"},
               {face: "Ten of Hearts", value: 10, image: "../static/ten_hearts.png"},
               {face: "Nine of Hearts", value: 9, image: "../static/nine_hearts.png"},
               {face: "Eight of Hearts", value: 8, image: "../static/eight_hearts.png"},
               {face: "Seven of Hearts", value: 7, image: "../static/seven_hearts.png"},
               {face: "Six of Hearts", value: 6, image: "../static/six_hearts.png"},
               {face: "Five of Hearts", value: 5, image: "../static/five_hearts.png"},
               {face: "Four of Hearts", value: 4, image: "../static/four_hearts.png"},
               {face: "Three of Hearts", value: 3, image: "../static/three_hearts.png"},
               {face: "Deuce of Hearts", value: 2, image: "../static/two_hearts.png"},
              
               {face: "Ace of Spades", value: 11, image: "../static/ace_spades.png"},
               {face: "King of Spades", value: 10, image: "../static/king_spades.png"},
               {face: "Queen of Spades", value: 10, image: "../static/queen_spades.png"},
               {face: "Jack of Spades", value: 10, image: "../static/jack_spades.png"},
               {face: "Ten of Spades", value: 10, image: "../static/ten_spades.png"},
               {face: "Nine of Spades", value: 9, image: "../static/nine_spades.png"},
               {face: "Eight of Spades", value: 8, image: "../static/eight_spades.png"},
               {face: "Seven of Spades", value: 7, image: "../static/seven_spades.png"},
               {face: "Six of Spades", value: 6, image: "../static/six_spades.png"},
               {face: "Five of Spades", value: 5, image: "../static/five_spades.png"},
               {face: "Four of Spades", value: 4, image: "../static/four_spades.png"},
               {face: "Three of Spades", value: 3, image: "../static/three_spades.png"},
               {face: "Deuce of Spades", value: 2, image: "../static/two_spades.png"},
              
               {face: "Ace of Diamonds", value: 11, image: "../static/ace_diamonds.png"},
               {face: "King of Diamonds", value: 10, image: "../static/king_diamonds.png"},
               {face: "Queen of Diamonds", value: 10, image: "../static/queen_diamonds.png"},
               {face: "Jack of Diamonds", value: 10, image: "../static/jack_diamonds.png"},
               {face: "Ten of Diamonds", value: 10, image: "../static/ten_diamonds.png"},
               {face: "Nine of Diamonds", value: 9, image: "../static/nine_diamonds.png"},
               {face: "Eight of Diamonds", value: 8, image: "../static/eight_diamonds.png"},
               {face: "Seven of Diamonds", value: 7, image: "../static/seven_diamonds.png"},
               {face: "Six of Diamonds", value: 6, image: "../static/six_diamonds.png"},
               {face: "Five of Diamonds", value: 5, image: "../static/five_diamonds.png"},
               {face: "Four of Diamonds", value: 4, image: "../static/four_diamonds.png"},
               {face: "Three of Diamonds", value: 3, image: "../static/three_diamonds.png"},
               {face: "Deuce of Diamonds", value: 2, image: "../static/two_diamonds.png"},
              
               {face: "Ace of Clubs", value: 11, image: "../static/ace_clubs.png"},
               {face: "King of Clubs", value: 10, image: "../static/king_clubs.png"},
               {face: "Queen of Clubs", value: 10, image: "../static/queen_clubs.png"},
               {face: "Jack of Clubs", value: 10, image: "../static/jack_clubs.png"},
               {face: "Ten of Clubs", value: 10, image: "../static/ten_clubs.png"},
               {face: "Nine of Clubs", value: 9, image: "../static/nine_clubs.png"},
               {face: "Eight of Clubs", value: 8, image: "../static/eight_clubs.png"},
               {face: "Seven of Clubs", value: 7, image: "../static/seven_clubs.png"},
               {face: "Six of Clubs", value: 6, image: "../static/six_clubs.png"},
               {face: "Five of Clubs", value: 5, image: "../static/five_clubs.png"},
               {face: "Four of Clubs", value: 4, image: "../static/four_clubs.png"},
               {face: "Three of Clubs", value: 3, image: "../static/three_clubs.png"},
               {face: "Deuce of Clubs", value: 2, image: "../static/two_clubs.png"}
              
           ];
          
           const arrayCopy = JSON.parse(JSON.stringify(cardArr));
           console.log(arrayCopy);

           function shuffleCards(){
                cardArr = arrayCopy.slice();
           }
          
           function leftInDeck(){
               var cardsLeft = cardArr.length;
               var cl = JSON.stringify(localStorage.setItem("cardsLeft", cardsLeft));
               //var left = Number(cl);
              
               //return left + " cards left in deck";
               //$("#cardsLeft").html(cardsLeft + " cards left in deck");
              
               // *BUG* only lets deck reshuffle once (on 2nd time, shows alert but doesn't assign arrayCopy to cardArr)
               if(cardsLeft < 20){
                   var shuffle = alert("Deck is running low - cards are being reshuffled.");
                    shuffleCards();
                    /*if(shuffle){
                        shuffleCards();
                        var dealAgain = confirm("Deal again?");
                        if(dealAgain){
                            hideSplit(); allowStand(); allowDouble();
                            var getChips = JSON.parse(localStorage.getItem("chips"));
                            $("#playerChips").html(getChips);
                            placeBet();
                            playerCard1(); playerCard2(); dealerCard1();
                        } */
                    }
                   //var chips = JSON.parse(localStorage.getItem("chips"));
                   //location.reload;
                   //JSON.stringify(localStorage.setItem("chips", chips));
                   
                   }
           //}
           /*var rand4 = Math.floor(Math.random()* cardArr.length);
          
           var rand5 = Math.floor(Math.random()* cardArr.length);
           var rand6 = Math.floor(Math.random()* cardArr.length);
           var rand7 = Math.floor(Math.random()* cardArr.length);
           var rand8 = Math.floor(Math.random()* cardArr.length);*/
          
           function playerCard1(){
               //document.getElementById("crd1").innerText = cardArr[rand].face;
               //playerTotal += cardArr[rand].value;
               /*var pc = Number(getChips);
               var pChips = $("#playerChips").html(pc);*/
               //var getChips =
              
               var rand = Math.floor(Math.random()* cardArr.length);
               var spl = cardArr.splice(rand, 1);
               $("#crd1").html(spl[0].face);
               //$("#crd1Image").html('<img src="cardback.png">');
               $("#crd1Image").html(`<img src="../static/${spl[0].image}">`);
               showCard1();
               //*BUG* NEED TO DECREASE ACE TO 1 IF TOTAL > 21
              
               var c1 = $("#crd1Total").html(spl[0].value);
               playerTotal += spl[0].value;//$("#pTotal").html()
               //console.log(spl[0].face + " length is " + cardArr.length);
               //document.getElementById("pTotal").innerText = playerTotal;
               //$("#pTotal").html("Total is: " + playerTotal);
           }
           function hideSplit1(){
            $("split1Image").hide();
           }
           function playerCard2(){
               //*BUG* if both playerCard1 and playerCard2 are aces, decrease total by 10
              var c1Total = $("#crd1Total").html();
              var c2Total = $("#crd2Total").html();
               //document.getElementById("crd2").innerText = cardArr[rand2].face;
               //playerTotal += cardArr[rand2].value;
               var rand3 = Math.floor(Math.random()* cardArr.length);
               var spl2 = cardArr.splice(rand3, 1);
               //c2Image = spl2[0].image;

               if($.trim($("#split1").html())==""){
                    splitImg = spl2.slice(); //[0].image; //.toString();
                    $("#split1Image").hide();
                    $("#split1Image").html(`<img src="../static/${splitImg[0].image}">`);
               }
               else{
                    $("#split1Image").show();  
                }
              //console.log(splitImg);
              // randIndex = rand3;
              //splitImg[0] = cardArr[rand3];
               //JSON.stringify(localStorage.setItem("splCrdImage", spl_img));


               $("#crd2").html(spl2[0].face);
               $("#crd2Image").html(`<img src="../static/${spl2[0].image}">`);
                
               /* if(splitClicked == false){
                    $("#split1Image").show();
                    //split();                
                }
                else{
                    $("#split1Image").hide();
                }*/
               //splitImg = spl2[0].image;
               //JSON.stringify(localStorage.setItem("card2Image", spl2[0].image));
               var c2 = $("#crd2Total").html(spl2[0].value);
               //var c1 = spl[0].value;  //$("#crd1Total").html();
               //var c1 = $("#crd1Total").val();
               playerTotal += spl2[0].value;

               if(c1Total == 11 && c2Total == 11){
                    $("#crd2Total").html(1)
                    playerTotal -= 10;
                }
              
              //*BUG* if player wins, add blackjack bet with localstorage bet instead of doubling player bet
               $("#pTotal").html("Total: " + playerTotal);
               //setTimeout(function(){
                   if(playerTotal == 21 && $.trim($("#crd3").html())==""){
                       var bet = $("#playerBet").html();
                        var newBet = Number(bet) * 1.5;
                        var bj = confirm("Player blackjack!");
                            if(bj){
                                $("#playerBet").html(newBet);
                                //playerStand();
                                // *BUG* if playerstand included and player selects stand again, 2nd dealer card is replaced
                                // *BUG* total amount added to player chips is incorrect after blackjack
                                // *BUG* whowon outputs tie if player BJ and dealer bust
                            }                           
                   }
                   /*var ps = playerStand();
                   setTimeout(ps, 1000);*/
                   return spl2[0].image;   
                  
               //}, 1000);
           }
           function playerCard3(){
               var rand5 = Math.floor(Math.random()* cardArr.length);
               var spl5 = cardArr.splice(rand5, 1);
               $("#crd3").html(spl5[0].face);
               $("#crd3Image").html(`<img src="../static/${spl5[0].image}">`);
               var c3 = $("#crd3Total").html(spl5[0].value);
               playerTotal += spl5[0].value;
               $("#pTotal").html("Total: " + playerTotal);
              
               //setTimeout(function(){
              
               var crd1 = $("#crd1").html();
               var crd2 = $("#crd2").html();
               var crd3 = $("#crd3").html();
              
               if(playerTotal > 21 && crd1 == "Ace of Hearts" || playerTotal > 21 && crd1 == "Ace of Spades" || playerTotal > 21 && crd1 == "Ace of Diamonds" || playerTotal > 21 && crd1 == "Ace of Clubs"){
                       //var pt = Number(playerTotal - 10);
                       $("#crd1Total").html(1);
                       playerTotal -= 10;
                       $("#pTotal").html("Total: " + playerTotal);
                   }
               else if(playerTotal > 21 && crd2 == "Ace of Hearts" || playerTotal > 21 && crd2 == "Ace of Spades" || playerTotal > 21 && crd2 == "Ace of Diamonds" || playerTotal > 21 && crd2 == "Ace of Clubs"){
                   //var pt2 = Number(playerTotal - 10);
                   $("#crd2Total").html(1);
                   playerTotal -= 10;
                   $("#pTotal").html("Total: " + playerTotal);
               }
               else if(playerTotal > 21 && crd3 == "Ace of Hearts" || playerTotal > 21 && crd3 == "Ace of Spades" || playerTotal > 21 && crd3 == "Ace of Diamonds" || playerTotal > 21 && crd3 == "Ace of Clubs"){
                   //var pt3 = Number(playerTotal - 10);
                   $("#crd3Total").html(1);
                   playerTotal -= 10;
                   $("#pTotal").html("Total: " + playerTotal);
               }             
              
              // *BUG* shouldn't fire if player split
              if(playerTotal > 21 && $.trim($("#splitPlayerTotal").html())==""){
                
                       whoWon();
                       /*var bet = $("#playerBet").html();
                       var pBet = Number(bet);
                       var chips = $("#playerChips").html();
                       var pChips = Number(chips);
                       var newTotal = $("#playerChips").html(pChips - pBet);*/
                     /*  var total = $("#playerChips").html();
                       var pc = JSON.stringify(localStorage.setItem("chips", total));
                       resetTotals();
                                             
                  
                   var dealAgain = confirm("Deal again?");
                       if(dealAgain){
                            hideSplit(); allowStand(); allowDouble();
                           var getChips = JSON.parse(localStorage.getItem("chips"));
                           $("#playerChips").html(getChips);
                            placeBet();
                           playerCard1(); playerCard2(); dealerCard1();
                               } */
                    }
                 
              
               if(playerTotal > 21 && $.trim($("#splitPlayerTotal").html())!=="") {
                    splitWhoWon(); whoWon();
               }    
             // }, 1000);    
               
           }
           //NEED TO GET CHIPS FROM LOCAL STORAGE REGARDLESS OF OUTCOME BEFORE EACH NEW DEAL
           // *BUG* if card 4 puts > 21, total should only subtract 10 once
           function playerCard4(){
               var rand = Math.floor(Math.random()* cardArr.length);
               var spl = cardArr.splice(rand, 1);
               $("#crd4").html(spl[0].face);
               $("#crd4Image").html(`<img src="../static/${spl[0].image}">`);

               var c4 = $("#crd4Total").html(spl[0].value);
               playerTotal += spl[0].value;
               $("#pTotal").html("Total: " + playerTotal);
              
               var crd1 = $("#crd1").html();
               var crd2 = $("#crd2").html();
               var crd3 = $("#crd3").html();
               var crd4 = $("#crd4").html();
              
               //issue with incorrect count after hitting twice, having ace counted as 1
               /*if(playerTotal > 21 && crd1 == "Ace of Hearts" || playerTotal > 21 && crd1 == "Ace of Spades" || playerTotal > 21 && crd1 == "Ace of Diamonds" || playerTotal > 21 && crd1 == "Ace of Clubs"){
                       //var pt = Number(playerTotal - 10);
                       $("#crd1Total").html(1);
                       playerTotal -= 10;
                       $("#pTotal").html("Total: " + playerTotal);
                   }
               else if(playerTotal > 21 && crd2 == "Ace of Hearts" || playerTotal > 21 && crd2 == "Ace of Spades" || playerTotal > 21 && crd2 == "Ace of Diamonds" || playerTotal > 21 && crd2 == "Ace of Clubs"){
                   //var pt2 = Number(playerTotal - 10);
                   $("#crd2Total").html(1);
                   playerTotal -= 10;
                   $("#pTotal").html("Total: " + playerTotal);
               }
               else if(playerTotal > 21 && crd3 == "Ace of Hearts" || playerTotal > 21 && crd3 == "Ace of Spades" || playerTotal > 21 && crd3 == "Ace of Diamonds" || playerTotal > 21 && crd3 == "Ace of Clubs"){
                   //var pt3 = Number(playerTotal - 10);
                   $("#crd3Total").html(1);
                   playerTotal -= 10;
                   $("#pTotal").html("Total: " + playerTotal);
               }
               else */
               if(playerTotal > 21 && crd4 == "Ace of Hearts" || playerTotal > 21 && crd4 == "Ace of Spades" || playerTotal > 21 && crd4 == "Ace of Diamonds" || playerTotal > 21 && crd4 == "Ace of Clubs"){
                   //var pt4 = Number(playerTotal - 10);
                   $("#crd4Total").html(1);
                   playerTotal -= 10;
                   $("#pTotal").html("Total: " + playerTotal);
               }
              
               if(playerTotal > 21 && $.trim($("#splitPlayerTotal").html())==""){
                    whoWon();
               }
               if(playerTotal > 21 && $.trim($("#splitPlayerTotal").html())!==""){
                    splitWhoWon(); whoWon();
               }
           }

           function dealerCard1(){
               var rand2 = Math.floor(Math.random()* cardArr.length);
               var spl3 = cardArr.splice(rand2, 1);
               //$("crd3").html(spl3[0].face);
               document.getElementById("dlrCrd1").innerHTML = spl3[0].face;

               $("#dlrCrd1Image").html(`<img src="../static/${spl3[0].image}">`);
              
               dealerTotal += spl3[0].value;
                $("#dlrCrd1Total").html(spl3[0].value);
               //document.getElementById("crd3").innerText = cardArr[rand2].face;
               //dealerTotal += cardArr[rand2].value;
               //console.log("Dealer card: " + spl3[0].face + " length is " + cardArr.length);
               document.getElementById("dTotal").innerText = "Total: " + dealerTotal;
           }

           //*BUG* need ace 1 or 11 logic for dealer cards
            function dealerCard2(){
                var d1Total = $("#dlrCrd1Total").html();
                var d2Total = $("#dlrCrd2Total").html();

               var rand = Math.floor(Math.random()* cardArr.length);
               var spl = cardArr.splice(rand, 1);
               //$("crd3").html(spl3[0].face);
               document.getElementById("dlrCrd2").innerHTML = spl[0].face;

               $("#dlrCrd2Image").html(`<img src="../static/${spl[0].image}">`);
              
               dealerTotal += spl[0].value;
                $("#dlrCrd2Total").html(spl[0].value);
               //document.getElementById("crd3").innerText = cardArr[rand2].face;
               //dealerTotal += cardArr[rand2].value;
               //console.log("Dealer card: " + spl3[0].face + " length is " + cardArr.length);
               if(d1Total == 11 && d2Total == 11){
                    $("#dlrCrd2Total").html(1)
                    dealerTotal -= 10;
                    $("#dTotal").html("Total: " + dealerTotal);

                }
               
               $("#dTotal").html("Total: " + dealerTotal);
 
                //var dTotal = $("#dTotal").html();
               // return dealerTotal;
            if($.trim($("#splitPlayerTotal").html())=="") {

                if(dealerTotal <= 16){
                    setTimeout(function(){
                        dealerCard3();
                    }, 500);
                }
                else{ 
                    setTimeout(function(){
                        whoWon();
                    }, 500);

                }
            }
            else {
                if(dealerTotal <= 16){
                    setTimeout(function(){
                        dealerCard3();
                    }, 500);
                }
                else {
                    setTimeout(function(){
                        splitWhoWon(); whoWon();
                    }, 500);
                }
            }
           }
        function dealerCard3(){
                var crd1 = $("#dlrCrd1Total").html();
                var crd2 = $("#dlrCrd2Total").html();
                var crd3 = $("#dlrCrd3Total").html();
                //var crd4 = $("#dlrCrd4").html();

               var rand = Math.floor(Math.random()* cardArr.length);
               var spl = cardArr.splice(rand, 1);
               //$("crd3").html(spl3[0].face);
               document.getElementById("dlrCrd3").innerHTML = spl[0].face;

               $("#dlrCrd3Image").html(`<img src="../static/${spl[0].image}">`);

              
               dealerTotal += spl[0].value;
                $("#dlrCrd3Total").html(spl[0].value);

                if(dealerTotal > 21 && crd1 == 11){
                       //var pt = Number(dealerTotal - 10);
                       $("#dlrCrd1Total").html(1);
                       dealerTotal -= 10;
                       $("#dTotal").html("Total: " + dealerTotal);
                   }
               if(dealerTotal > 21 && crd2 == 11){
                   //var pt2 = Number(dealerTotal - 10);
                   $("#dlrCrd2Total").html(1);
                   dealerTotal -= 10;
                   $("#dTotal").html("Total: " + dealerTotal);
               }
               if(dealerTotal > 21 && crd3 == 11){
                   //var pt3 = Number(dealerTotal - 10);
                   $("#dlrCrd3Total").html(1);
                   dealerTotal -= 10;
                   $("#dTotal").html("Total: " + dealerTotal);
               }
               //document.getElementById("crd3").innerText = cardArr[rand2].face;
               //dealerTotal += cardArr[rand2].value;
               //console.log("Dealer card: " + spl3[0].face + " length is " + cardArr.length);
               document.getElementById("dTotal").innerText = "Total: " + dealerTotal;
        if($.trim($("#splitPlayerTotal").html())=="") {

                if(dealerTotal <= 16){
                    setTimeout(function(){
                        dealerCard4();
                    }, 500);
               }
              else if(dealerTotal > 21){
                setTimeout(function(){
                var res = confirm("Dealer busts. Player wins!");
                if(res){
                    leftInDeck();
                    resetTotals();
                    
                    var bet = $("#playerBet").html() * 2;
                    var chips = $("#playerChips").html();
                    var pChips = Number(bet) + Number(chips);
                    var pc = $("#playerChips").html(pChips);
                    var c = JSON.stringify(localStorage.setItem("chips", pChips));
                    }
                
                var dealAgain = confirm("Deal again?");
                        if(dealAgain){
                            hitCount = 0;
                            hideSplit(); allowStand(); allowDouble(); allowSplit();
                            var getChips = JSON.parse(localStorage.getItem("chips"));
                            $("#playerChips").html(getChips);
                            placeBet();
                            playerCard1(); playerCard2(); dealerCard1();
                        }  
                }, 500);
                  }
                  
            
                else {
                    whoWon();
                }
            }

        else {
                if(dealerTotal <= 16){
                    dealerCard4();
                }
                // *BUG* if split busts, player < 21 & dealer busts, split hand would lose
                else if(dealerTotal > 21 && splitPlayerTotal <= 21 && playerTotal <= 21){
                    var res = confirm("Dealer busts. Split hand and player hand win!");
                   if(res){
                       leftInDeck();
                       resetTotals();

                       var getSplit = JSON.parse(localStorage.getItem("splitWager"));
                       var getWager = JSON.parse(localStorage.getItem("wager"));
                       var chips = $("#playerChips").html();
                      
                       var bet = Number(getWager) * 2;
                       var splitBet = Number(getSplit) * 2;

                       var pChips = Number(bet) + Number(splitBet) + Number(chips);

                       $("#playerChips").html(pChips);
                       JSON.stringify(localStorage.setItem("chips", pChips));
                       }
                  
                   var dealAgain = confirm("Deal again?");
                           if(dealAgain){
                            hitCount = 0;
                                hideSplit(); allowStand(); allowDouble(); allowSplit();
                               var getChips = JSON.parse(localStorage.getItem("chips"));
                               $("#playerChips").html(getChips);
                               placeBet();
                               playerCard1(); playerCard2(); dealerCard1();
                           }  
                      
                       }
                else if(dealerTotal > 21 && splitPlayerTotal > 21 && playerTotal <= 21){
                    var res = confirm("Dealer busts. Split hand loses but player hand wins!");
                    if(res){
                        leftInDeck();
                        resetTotals();

                       // var getSplit = JSON.parse(localStorage.getItem("splitWager"));
                       var getWager = JSON.parse(localStorage.getItem("wager"));
                       var chips = $("#playerChips").html();
                      
                       var bet = Number(getWager) * 2;
                       //var splitBet = Number(getSplit) * 2;

                       var pChips = Number(bet) + Number(chips);

                       $("#playerChips").html(pChips);
                       JSON.stringify(localStorage.setItem("chips", pChips));
                       }
                  
                   var dealAgain = confirm("Deal again?");
                           if(dealAgain){
                            hitCount = 0;
                                hideSplit(); allowStand(); allowDouble(); allowSplit();
                               var getChips = JSON.parse(localStorage.getItem("chips"));
                               $("#playerChips").html(getChips);
                               placeBet();
                               playerCard1(); playerCard2(); dealerCard1();
                           } 
                    }
                  
                else {
                    splitWhoWon(); whoWon();
                }
            }                  
                
           }
           // *BUG* if one of cards is an ace & total > 21, dealer running total shouldn't have 10 subtracted twice
            function dealerCard4(){
                var crd1 = $("#dlrCrd1").html();
                var crd2 = $("#dlrCrd2").html();
                var crd3 = $("#dlrCrd3").html();
                var crd4 = $("#dlrCrd4").html();

               var rand = Math.floor(Math.random()* cardArr.length);
               var spl = cardArr.splice(rand, 1);
               //$("crd3").html(spl3[0].face);
               document.getElementById("dlrCrd4").innerHTML = spl[0].face;

               $("#dlrCrd4Image").html(`<img src="../static/${spl[0].image}">`);
              
               dealerTotal += spl[0].value;
                $("#dlrCrd4Total").html(spl[0].value);
               //document.getElementById("crd3").innerText = cardArr[rand2].face;
               //dealerTotal += cardArr[rand2].value;
               //console.log("Dealer card: " + spl3[0].face + " length is " + cardArr.length);
               if(dealerTotal > 21 && crd1 == "Ace of Hearts" || dealerTotal > 21 && crd1 == "Ace of Spades" || dealerTotal > 21 && crd1 == "Ace of Diamonds" || dealerTotal > 21 && crd1 == "Ace of Clubs"){
                       //var pt = Number(playerTotal - 10);
                       $("#dlrCrd1Total").html(1);
                       dealerTotal -= 10;
                       $("#pTotal").html("Total: " + playerTotal);
                   }
               else if(dealerTotal > 21 && crd2 == "Ace of Hearts" || dealerTotal > 21 && crd2 == "Ace of Spades" || dealerTotal > 21 && crd2 == "Ace of Diamonds" || dealerTotal > 21 && crd2 == "Ace of Clubs"){
                   //var pt2 = Number(playerTotal - 10);
                   $("#dlrCrd2Total").html(1);
                   dealerTotal -= 10;
                   $("#pTotal").html("Total: " + dealerTotal);
               }
               else if(dealerTotal > 21 && crd3 == "Ace of Hearts" || dealerTotal > 21 && crd3 == "Ace of Spades" || dealerTotal > 21 && crd3 == "Ace of Diamonds" || dealerTotal > 21 && crd3 == "Ace of Clubs"){
                   //var pt3 = Number(playerTotal - 10);
                   $("#dlrCrd3Total").html(1);
                   dealerTotal -= 10;
                   $("#pTotal").html("Total: " + dealerTotal);
               }
               else if(dealerTotal > 21 && crd4 == "Ace of Hearts" || dealerTotal > 21 && crd4 == "Ace of Spades" || dealerTotal > 21 && crd4 == "Ace of Diamonds" || dealerTotal > 21 && crd4 == "Ace of Clubs"){
                   //var pt4 = Number(playerTotal - 10);
                   $("#dlrCrd4Total").html(1);
                   dealerTotal -= 10;
                   $("#pTotal").html("Total: " + dealerTotal);
               }

               document.getElementById("dTotal").innerText = "Total: " + dealerTotal;

               //return dealerTotal;
               if($.trim($("#splitPlayerTotal").html())=="") {

                    if(dealerTotal <= 16){
                        setTimeout(function(){
                            whoWon();
                        }, 500);
                    }
                    else if(dealerTotal > 21){
                        //setTimeout(function(){
                           var bustRes = confirm("Dealer busts. Player wins!");
                        //}, 500);
                    if(bustRes){
                        leftInDeck();
                        resetTotals();
                        
                        var bet = $("#playerBet").html() * 2;
                        var chips = $("#playerChips").html();
                        var pChips = Number(bet) + Number(chips);
                        var pc = $("#playerChips").html(pChips);
                        var c = JSON.stringify(localStorage.setItem("chips", pChips));
                        }

                    var dealAgain = confirm("Deal again?");
                            if(dealAgain){
                                hitCount = 0;
                                hideSplit(); allowStand(); allowDouble(); allowSplit();
                                var getChips = JSON.parse(localStorage.getItem("chips"));
                                $("#playerChips").html(getChips);
                                placeBet();
                                playerCard1(); playerCard2(); dealerCard1();
                            }  
                        
                    }
                    else {
                        setTimeout(function(){
                            whoWon();
                        }, 500);
                    }
                }

                else {
                    if(dealerTotal <= 16){
                        setTimeout(function(){
                            whoWon();
                        }, 500);
                    }
                    else if(dealerTotal > 21){
                        //setTimeout(function(){
                           var bustRes2 = confirm("Dealer busts. Split hand and player hand win!");
                      //  }, 500);
                    if(bustRes2){
                        leftInDeck();
                        resetTotals();

                        var getSplit = JSON.parse(localStorage.getItem("splitWager"));
                        var getWager = JSON.parse(localStorage.getItem("wager"));
                        var chips = $("#playerChips").html();
                        
                        var bet = Number(getWager) * 2;
                        var splitBet = Number(getSplit) * 2;

                        var pChips = Number(bet) + Number(splitBet) + Number(chips);

                        $("#playerChips").html(pChips);
                        JSON.stringify(localStorage.setItem("chips", pChips));
                        }
                    
                    var dealAgain = confirm("Deal again?");
                            if(dealAgain){
                                hitCount = 0;
                                    hideSplit(); allowStand(); allowDouble(); allowSplit();
                                var getChips = JSON.parse(localStorage.getItem("chips"));
                                $("#playerChips").html(getChips);
                                placeBet();
                                playerCard1(); playerCard2(); dealerCard1();
                            }  
                        
                        }  

                    else {
                        setTimeout(function(){
                            splitWhoWon(); whoWon();
                        }, 500);
                    }
                } 
           }
           function isNumeric(num){
                   return !isNaN(parseInt(num)) && isFinite(num);
               }
           //place bet
           function placeBet(){
               var cl = leftInDeck();
               
            var getChips = JSON.parse(localStorage.getItem("chips"));
            $("#playerChips").html(getChips);
            //var chips = $("#playerChips").html();
               var bet = parseInt(prompt("Place your bet!", "0"));

                while(isNumeric(bet) == false){
                    bet = parseInt(prompt("Invalid bet! Try again!"));
                }
               //document.getElementById("playerChips").innerHTML; // = Number(getChips) - Number(bet);
                
               //if(bet <= 0){
                while(bet <= 0 || bet > getChips) {
                   bet = parseInt(prompt("Invalid bet! Try again!"));
                   //chips = document.getElementById("playerChips").innerHTML = Number(getChips) - Number(bet);
                }          
                
                       chips = $("#playerChips").html(Number(getChips) - Number(bet));

                       var playerBet = $("#playerBet").html(Number(bet));
                       var b = JSON.stringify(localStorage.setItem("wager", bet));
                       //var pCh = JSON.stringify(localStorage.setItem("chips", chips));
                   //}
               }
               //var b = JSON.stringify(localStorage.setItem("wager", bet));
               //var chips = parseInt(document.getElementById("playerChips").value);
               //var pBet = document.getElementById("playerBet").innerHTML = bet;             
          
           //display chips
           //function chips(){
               //document.getElementById("playerChips").innerText = playerChips;
               //}
           //deal button
           //document.getElementById("deal").addEventListener("click", function(){
               //document.getElementById("crd1").innerText = cardArr[rand].face;
               //document.getElementById("crd2").innerText = cardArr[rand2].face;
            function dealCards(){
               playerCard1(); playerCard2(); dealerCard1();

               $("#deal").css("pointer-events", "none");
               $("#playerHit").css("pointer-events", "auto");

               //var pTotal = $()             
           }
          
           function allowDeal(){
                $("#deal").css("pointer-events", "auto");
            }
 
           
           //*BUG* IF CARD THREE IS AN ACE, DEALS CARD 4
           // *BUG* if split, hit count can be incorrect
           var hitCount = 0;

           $("#playerHit").click(function(){
            if($.trim($("#crd1Image").html())==""){
                alert("Can't hit before cards are dealt!");
                /*if(deal){
                    dealCards();               }*/
            }
            if($.trim($("#crd1").html())!==""){
                hitCount+=1;
                countHits();
            }
        })    
           function countHits(){

               if(hitCount == 1){
                console.log(hitCount);
                   $("#playerDouble").hide();
                   $("#playerSplit").hide();
                    playerCard3();
                    //console.log(1);
                }
                
                if(hitCount == 2){
                    console.log(hitCount);
                    playerCard4();
                    // console.log(2);
                }
                if(hitCount == 3){
                console.log(hitCount);
                    //playerStand();
                    //var stand =
                    alert("Four cards is the limit!")
                    //if(stand){
                        playerStand();
                    //}
                }
           } 
               //$("split1").html(hitCount);
              
           
           //double down
           /*document.getElementById("playerDouble").addEventListener("click", function(){
               document.getElementById("")
           }*/
          
           //*BUG* need to disallow player from doubling for more chips than they have
           //*BUG* disallow player from doubling after hitting once
           function doubleDown(){
               var pb = $("#playerBet").html();
               var dbl = Number(pb) * 2;
               $("#playerBet").html(dbl);
               var bet = JSON.stringify(localStorage.setItem("wager", dbl));
              
               var chips = $("#playerChips").html();
               var newChips = Number(chips) - Number(pb);
              
               $("#playerChips").html(newChips);
              
               playerCard3();
            setTimeout(function(){
                playerStand();
            }, 1000);
               
           }
           //split
           // *BUG* need 1.5:1 odds for blackjack
           // *BUG* when remove crd1, split then splitstand, then hit player hand twice, crd4 covers up crd3

           //NEED TO REMOVE CRD2, PUT AS SPLIT CARD 1
           // *BUG* after split, hit count for player hand doesn't work

           // *BUG* split player wins, player busts, chips are short
           //function split(){
           /* $("#playerSplit").click(function(){
                $(this).data('clicked', true);
            })*/

            function split(){  
                //splitClicked = true;
                $("#split1Image").show();
                showSplit();
                var getWager = JSON.parse(localStorage.getItem("wager"));
                var setSplitWager = JSON.stringify(localStorage.setItem("splitWager", getWager));

                $("#splitPlayerBet").html(getWager);

                var getChips = $("#playerChips").html();
                var newChips = Number(getChips) - Number(getWager);

                $("#playerChips").html(newChips);
                /*var pc = $("playerChips").html();
                var newChips = Number(pc) - Number(plyrBet);
                $("playerChips").html(newChips);*/
                
                $("#playerHit").css("pointer-events", "none");
                $("#playerDouble").css("pointer-events", "none");
                $("#playerStand").css("pointer-events", "none");
                $("#playerSplit").css("pointer-events", "none");
                                
               var c2 = $("#crd2").html();
               //var c2Img =  JSON.parse(localStorage.getItem("splCrdImage")); 
               var c2Total = $("#crd2Total").html();

               var c1Total = $("#crd1Total").html();


                
               $("#split1").html(c2);
               $("split1Image").html(`<img src="../static/${splitImg[0].image}">`);        
               //console.log(c2Img);
               $("#split1Total").html(c2Total);
              
               $("#crd2").empty();
               $("#crd2Image").empty();
               $("#crd2Total").empty();
                //var c1 = $("#crd1Total").html();
                playerTotal = reset;
                playerTotal += Number(c1Total);
                $("#pTotal").html("Total: " + playerTotal);
                
               var rand = Math.floor(Math.random()* cardArr.length);
               var spl = cardArr.splice(rand, 1);
               $("#split2").html(spl[0].face);
               $("#split2Image").html(`<img src="../static/${spl[0].image}">`);
               var st = $("#split2Total").html(spl[0].value);
                
                //var spl1Tot = $("#split1Total").html();
              
               //var splTot = 0;
               splitPlayerTotal += spl[0].value + Number(c2Total);
              
              //*BUG* split blackjack, player lose, incorrect math (reset to original bal)
               $("#splitPlayerTotal").html("Total: " + splitPlayerTotal);
               if(splitPlayerTotal == 21 && $.trim($("#split3").html())==""){
                   var bj = confirm("Split hand blackjack!");
                   if(bj){
                        var spb = $("#splitPlayerBet").html();
                        var newBet = Number(spb) * 1.5;
                        $("#splitPlayerBet").html(newBet);
                        //JSON.stringify(localStorage.setItem("splitWager", newBet));
                        }
                    }              
                }
            

           function splitCard3(){
               var rand = Math.floor(Math.random()* cardArr.length);
               var spl = cardArr.splice(rand, 1);
               $("#split3").html(spl[0].face);
               var st = $("#split3Total").html(spl[0].value);

               splitPlayerTotal += spl[0].value;
               $("#splitPlayerTotal").html("Total: " + splitPlayerTotal);

               var crd1 = $("#split1").html();
               var crd2 = $("#split2").html();
               var crd3 = $("#split3").html();
              
               if(splitPlayerTotal > 21 && crd1 == "Ace of Hearts" || splitPlayerTotal > 21 && crd1 == "Ace of Spades" || splitPlayerTotal > 21 && crd1 == "Ace of Diamonds" || splitPlayerTotal > 21 && crd1 == "Ace of Clubs"){
                       //var pt = Number(playerTotal - 10);
                       $("#split1Total").html(1);
                       splitPlayerTotal -= 10;
                       $("#splitPlayerTotal").html("Total: " + splitPlayerTotal);
                   }
               else if(splitPlayerTotal > 21 && crd2 == "Ace of Hearts" || splitPlayerTotal > 21 && crd2 == "Ace of Spades" || splitPlayerTotal > 21 && crd2 == "Ace of Diamonds" || splitPlayerTotal > 21 && crd2 == "Ace of Clubs"){
                   //var pt2 = Number(playerTotal - 10);
                   $("#split2Total").html(1);
                   splitPlayerTotal -= 10;
                   $("#splitPlayerTotal").html("Total: " + splitPlayerTotal);
               }
               else if(splitPlayerTotal > 21 && crd3 == "Ace of Hearts" || splitPlayerTotal > 21 && crd3 == "Ace of Spades" || splitPlayerTotal > 21 && crd3 == "Ace of Diamonds" || splitPlayerTotal > 21 && crd3 == "Ace of Clubs"){
                   //var pt3 = Number(playerTotal - 10);
                   $("#split3Total").html(1);
                   splitPlayerTotal -= 10;
                   $("#splitPlayerTotal").html("Total: " + splitPlayerTotal);
               }             
              
               else if(splitPlayerTotal > 21){
                   $("#playerSplitHit").hide();
                   $("#playerSplitStand").hide();
                   setTimeout(function(){
                   var res = confirm("Split hand busted!");
                  //*BUG* 
                   if(res){
                       //leftInDeck();
                       playerSplitStand();
                       /*var total = $("#playerChips").html();
                       var pc = JSON.stringify(localStorage.setItem("chips", total));*/

                       /*var bet = $("#playerBet").html();
                       var pBet = Number(bet);
                       var chips = $("#playerChips").html();
                       var pChips = Number(chips);
                       var newTotal = $("#playerChips").html(pChips - pBet);*/
                      /* var total = $("#playerChips").html();
                       var pc = JSON.stringify(localStorage.setItem("chips", total));
                       resetTotals();
                                             
                  
                   var dealAgain = confirm("Deal again?");
                       if(dealAgain){
                            hideSplit(); allowStand(); allowDouble();
                           var getChips = JSON.parse(localStorage.getItem("chips"));
                           $("#playerChips").html(getChips);
                            placeBet();
                           playerCard1(); playerCard2(); dealerCard1();
                               } */
                    }
                    
                           }, 1000);
               }

           }

           function splitCard4(){
            var rand = Math.floor(Math.random()* cardArr.length);
               var spl = cardArr.splice(rand, 1);
               $("#split4").html(spl[0].face);
              
               var c4 = $("#split4Total").html(spl[0].value);
               splitPlayerTotal += spl[0].value;
               $("#splitPlayerTotal").html("Total: " + splitPlayerTotal);
              
               var crd1 = $("#split1").html();
               var crd2 = $("#split2").html();
               var crd3 = $("#split3").html();
               var crd4 = $("#split4").html();
              
               //issue with incorrect count after hitting twice, having ace counted as 1
               /*if(playerTotal > 21 && crd1 == "Ace of Hearts" || playerTotal > 21 && crd1 == "Ace of Spades" || playerTotal > 21 && crd1 == "Ace of Diamonds" || playerTotal > 21 && crd1 == "Ace of Clubs"){
                       //var pt = Number(playerTotal - 10);
                       $("#crd1Total").html(1);
                       playerTotal -= 10;
                       $("#pTotal").html("Total: " + playerTotal);
                   }
               else if(playerTotal > 21 && crd2 == "Ace of Hearts" || playerTotal > 21 && crd2 == "Ace of Spades" || playerTotal > 21 && crd2 == "Ace of Diamonds" || playerTotal > 21 && crd2 == "Ace of Clubs"){
                   //var pt2 = Number(playerTotal - 10);
                   $("#crd2Total").html(1);
                   playerTotal -= 10;
                   $("#pTotal").html("Total: " + playerTotal);
               }
               else if(playerTotal > 21 && crd3 == "Ace of Hearts" || playerTotal > 21 && crd3 == "Ace of Spades" || playerTotal > 21 && crd3 == "Ace of Diamonds" || playerTotal > 21 && crd3 == "Ace of Clubs"){
                   //var pt3 = Number(playerTotal - 10);
                   $("#crd3Total").html(1);
                   playerTotal -= 10;
                   $("#pTotal").html("Total: " + playerTotal);
               }
               else */
               if(splitPlayerTotal > 21 && crd4 == "Ace of Hearts" || splitPlayerTotal > 21 && crd4 == "Ace of Spades" || splitPlayerTotal > 21 && crd4 == "Ace of Diamonds" || splitPlayerTotal > 21 && crd4 == "Ace of Clubs"){
                   //var pt4 = Number(playerTotal - 10);
                   $("#split4Total").html(1);
                   splitPlayerTotal -= 10;
                   $("#splitPlayerTotal").html("Total: " + splitPlayerTotal);
               }
              
               else if(splitPlayerTotal > 21){ //FIX THIS
                   setTimeout(function(){ 
                   var res = confirm("Split hand busted! Dealer wins!");
                  
                   if(res){
                       //leftInDeck();
                       playerSplitStand();
                       var total = $("#playerChips").html();
                       var pc = JSON.stringify(localStorage.setItem("chips", total));
                       
                   /*    resetTotals();
                      
                       var bet = $("#splitPlayerBet").html();
                       var pBet = Number(bet);
                       var chips = $("#playerChips").html();
                       var pChips = Number(chips);
                       var newTotal = $("#playerChips").html(pChips - pBet);
                       var total = $("#playerChips").html();
                       var pc = JSON.stringify(localStorage.setItem("chips", total));
                   }
                   var dealAgain = confirm("Deal again?");
                       if(dealAgain){
                           hideSplit(); allowStand(); allowDouble();
                           var getChips = JSON.parse(localStorage.getItem("chips"));
                           $("#playerChips").html(getChips);
                           placeBet();
                           playerCard1(); playerCard2(); dealerCard1();
                       } */
                   }
                        }, 1000);
                       
               }
           
           }
           var count = 0;
           $("#playerSplitHit").click(function(){
                count++;
                if(count == 1)
                    splitCard3();
                if(count == 2)
                    splitCard4();
                if(count == 3){
                    var stand = confirm("Reached split hand card limit!");
                    if(stand)
                        playerSplitStand();
                }
           });
            
            //$("#playerSplitStand").click(function(){
                function playerSplitStand(){
                    $("#playerHit").css("pointer-events", "auto");
                    $("#playerDouble").css("pointer-events", "auto");
                    $("#playerStand").css("pointer-events", "auto");
                    $("#playerSplit").css("pointer-events", "auto");
                    
                    hideSplit();
                    $("split1Image").show();
                    playerCard2();

                    hitCount = 0;
                    count = 0;
                    
                }
          
           //SHOULD HAVE HIGHER PAYOUT FOR BLACKJACK
            //*BUG* should be disabled once clicked
           //stand button
           function playerStand(){
               hitCount = 0;
                //$("#playerDouble").show();
                /*$("#playerHit").css("pointer-events", "none");
                $("#playerDouble").css("pointer-events", "none");
                $("#playerStand").css("pointer-events", "none");
                $("#playerSplit").css("pointer-events", "none");*/
           //document.getElementById("playerStand").addEventListener("click", function(){
           //$("#playerStand").click(function playerStand(){
               //document.getElementById("crd1").innerText = cardArr[rand].face;
               $("#playerStand").css("pointer-events", "none");
                    dealerCard2();
            
               
               //if(dealerTotal <= 16)
                
            }
 
            // *BUG* should forfeit turn and chips as soon as hand busts
            // *BUG* split hand where dealer and player bust?
            function whoWon(){
              
               setTimeout(function(){

            //var splPlyrTot = $("#splitPlayerTotal").html();
            //if($.trim($("#splitPlayerTotal").html())=="") {
              
               if(playerTotal > 21){
              
               var res = confirm("Player busts. Dealer wins!");
                   if(res){
                       leftInDeck();
                       resetTotals();
                       var total = $("#playerChips").html();
                       var pc = JSON.stringify(localStorage.setItem("chips", total));
                       var dealAgain = confirm("Deal again?");
                   }
                  
                           if(dealAgain){
                               //var newTotal = $("#playerChips").html(pChips + pBet);
                               hitCount = 0;
                               hideSplit(); allowStand(); allowDouble(); allowSplit();
                                var getChips = JSON.parse(localStorage.getItem("chips"));
                               $("#playerChips").html(getChips);
                               placeBet();
                               playerCard1(); playerCard2(); dealerCard1();
                           }
               }
               else if(dealerTotal > playerTotal && dealerTotal <= 21){
              
                   var res = confirm("Dealer wins!");
                       if(res){
                       //location.reload();
                           leftInDeck();
                           resetTotals();
                          
                           var chips = $("#playerChips").html();
                           var pc = JSON.stringify(localStorage.setItem("chips", chips));
                       }
                      
                   var dealAgain = confirm("Deal again?");
                       if(dealAgain){
                        hitCount = 0;
                            hideSplit(); allowStand(); allowDouble(); allowSplit();
                           var getChips = JSON.parse(localStorage.getItem("chips"));
                           $("#playerChips").html(getChips);
                           placeBet();
                           playerCard1(); playerCard2(); dealerCard1();
                           }
                   }
               else if(playerTotal > dealerTotal && playerTotal <= 21) {
              
                   var res = confirm("Player wins!");
                       if(res){
                           leftInDeck();
                           resetTotals();
                      
                       var bet = $("#playerBet").html();
                       var lsBet = JSON.parse(localStorage.getItem("wager"));
                        //*BUG* player win should be bet plus localstorage bet (in case of blackjack)

                       var pBet = Number(bet) + Number(lsBet);
                       var chips = $("#playerChips").html();
                       var pChips = Number(chips);
                       var newTotal = $("#playerChips").html(pChips + pBet);
                       var total = $("#playerChips").html();
                       var pc = JSON.stringify(localStorage.setItem("chips", total));
               }
              
                           var dealAgain = confirm("Deal again?");
                               if(dealAgain){
                                hitCount = 0;
                                hideSplit(); allowStand(); allowDouble(); allowSplit();
                               var getChips = JSON.parse(localStorage.getItem("chips"));
                               $("#playerChips").html(getChips);
                                   placeBet();
                                   playerCard1(); playerCard2(); dealerCard1();
                               }
                  
                       }
                  
               else if(playerTotal == dealerTotal) {
                  
                   var res = confirm("It's a push!");
                       if(res){
                           leftInDeck();
                           resetTotals();
                           var bet = $("#playerBet").html();
                           var pBet = Number(bet);
                           
                           var chips = $("#playerChips").html();
                           var pChips = Number(chips);
                           var newTotal = $("#playerChips").html(pChips + pBet);
                           var total = $("#playerChips").html();
                           var pc = JSON.stringify(localStorage.setItem("chips", total));
                           }
                  
                       var dealAgain = confirm("Deal again?");
                               if(dealAgain){
                                hitCount = 0;
                                hideSplit(); allowStand(); allowDouble(); allowSplit();
                               var getChips = JSON.parse(localStorage.getItem("chips"));
                               $("#playerChips").html(getChips);
                                   placeBet();
                                   playerCard1(); playerCard2(); dealerCard1();
                               }
                      
                           
                //}, 1000);
                }            
           
            }, 1000);
        }
            // *BUG* when dealer busts and new hands are dealt, playerstand is alled immed
            // *BUG* math incorrect - doesn't add split AND wager to chip total
            
            //DON'T NEED TO SET LOCALSTORAGE CHIPS BC WHOWON DOES THAT
            // *BUG* split hand where dealer and split bust?
            function splitWhoWon(){
                 setTimeout(function(){             
               
                if(splitPlayerTotal <= 21 && splitPlayerTotal > dealerTotal){
                    var res = confirm("Split hand wins!")
                    //    multiply split bet by 2 and add to playerchips
                    if(res){
                        var getSplit = JSON.parse(localStorage.getItem("splitWager"));
                        var sb = $("#splitPlayerBet").html();

                        var pc = $("#playerChips").html();
                        
                        var bet = Number(getSplit) + Number(sb);

                        var plyrChips = Number(bet) + Number(pc);

                        $("#playerChips").html(plyrChips);
                        JSON.stringify(localStorage.setItem("chips", plyrChips));
                    }
                    
                }
                else if(dealerTotal <= 21 && dealerTotal > splitPlayerTotal){
                    confirm("Dealer hand beats split hand!");                    
                }    

                else if(dealerTotal == splitPlayerTotal) {                   
                    var res = confirm("Dealer hand and split hand push!");
                    if(res){
                        var getSplit = $("#splitPlayerBet").html();
                        var pc = $("#playerChips").html();

                        //var bet = Number(getSplit);
                        var plyrChips = Number(getSplit) + Number(pc);
                        //*BUG* plyrChips not defined

                        var c = $("#playerChips").html(plyrChips);
                        JSON.stringify(localStorage.setItem("chips", plyrChips));

                    }
                }
                 }, 1000);
            }