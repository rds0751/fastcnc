function copytextid(elementId) {

// Create a "hidden" input
var aux = document.createElement("input");

// Assign it the value of the specified element
aux.setAttribute("value", document.getElementById(elementId).innerHTML);

// Append it to the body
document.body.appendChild(aux);

// Highlight its content
aux.select();

// Copy the highlighted text
document.execCommand("copy");
   

// Remove it from the body
document.body.removeChild(aux);
        /* $.toast({
            heading: 'Copied',
            position: 'top-right',
            loaderBg:'#ff6849',
            icon: 'success',
            hideAfter: 3500, 
            stack: 10
          }); */
		  alert("Text Copied sucessfully \n"+ aux.value);
		
}

var bnbPrice = $('#bnbprice').html();


						
						

//console.log($('#bnbprice').html());

const contract_address = "0x8C705C8814D5A1E4b7b12ca4c6c745FFf5C42469";
	const abi= [{"constant":true,"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDownlineCount","outputs":[{"name":"referrals","type":"uint256[10]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAvailable","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"Liquidity","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"started","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"senderAddress","type":"address"},{"name":"dataId","type":"uint256"}],"name":"getDownlineRef","outputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"TIME_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferrer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"RefUser","outputs":[{"name":"refUserAddress","type":"address"},{"name":"refLevel","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralTotalBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PROJECT_FEE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getSiteInfo","outputs":[{"name":"_totalInvested","type":"uint256"},{"name":"_totalBonus","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalSeedWithdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalInvested","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERCENT_STEP","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"referrer","type":"address"},{"name":"plan","type":"uint8"}],"name":"invest","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"name":"totalDeposit","type":"uint256"},{"name":"totalWithdrawn","type":"uint256"},{"name":"totalReferrals","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRefBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralWithdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getContractBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"commissionWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserAmountOfDeposits","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"plan","type":"uint8"}],"name":"getPlanInfo","outputs":[{"name":"time","type":"uint256"},{"name":"percent","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"},{"name":"index","type":"uint256"}],"name":"getUserDepositInfo","outputs":[{"name":"plan","type":"uint8"},{"name":"percent","type":"uint256"},{"name":"amount","type":"uint256"},{"name":"start","type":"uint256"},{"name":"finish","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"SEED_PERCENTS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserCheckpoint","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserSeedIncome","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"INVEST_MIN_AMOUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"referralCount_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserReferralBonus","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PLANPER_DIVIDER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getcurrentseedincome","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalWithdrawn","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserTotalReferrals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"wallet","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"plan","type":"uint8"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":true,"name":"referral","type":"address"},{"indexed":true,"name":"level","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RefBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"referrer","type":"address"},{"indexed":true,"name":"referral","type":"address"},{"indexed":true,"name":"level","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"SeedIncome","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"user","type":"address"},{"indexed":false,"name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"}];

async function connect(){
	if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
          // ask user for permission
         await ethereum.request({ method: 'eth_requestAccounts' }); 
          // user approved permission
		 
		  getAccount();
      } catch (error) {
          // user rejected permission
          alert("User Rejected Permission");
          console.log('user rejected permission');
      }
    }
    // Old web3 provider
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        console.log('all ok');
        // no need to ask for permission
    }
    // No web3 provider
    else {
        console.log('No web3 provider detected');
        alert("Metamask Not Connected");
    }
		

}


function getAccount() {
	//getAccount();
   // web3js = new Web3(web3.currentProvider);
		var account;
			//web3 = new Web3(new Web3.providers.HttpProvider()); 
			
			const provider = 'https://holy-divine-sun.bsc.quiknode.pro/a6e7a52a3f7979c274122d6147adb32d1d35780b/';
			const web3 = new Web3(provider);
			web3.eth.setProvider(Web3.givenProvider);
			web3.eth.getBlockNumber().then(blockNum => console.log(blockNum));
			
			web3.eth.getAccounts().then(answer => console.log(answer));
			web3.eth.getAccounts(function(err, accounts) {
				if (err != null) {
					//alert("Error Retrieving Accounts.");
					return;
				}
				if (accounts.length == 0) {
					//alert("No account found! Make sure the Ethereum client is configured properly.");
					return;
				}
				account = accounts[0];
				console.log('Account: ' + account);
				web3.eth.defaultAccount = account;
				
				  $("#connect").hide();
				 $("#dashboard").html('Dashboard');
				 $("#dashboard").show();
				 $("#btnc").attr("data-src", "#stat");
				 $("#btnc").prop("onclick", null);
				 $("#address").html(account);
                $("#address").show();
				getuser(account);
			  }); 
			
           
}



window.addEventListener('load', function () {
	
	 getAccount();
	

});

function getuser(account){
	web3 = new Web3('https://holy-divine-sun.bsc.quiknode.pro/a6e7a52a3f7979c274122d6147adb32d1d35780b/'); 
	const contract = new web3.eth.Contract(abi,contract_address);
		
					//account = '0xC93b31664c1f7D57217fb0DAFA1c08f72c93a612';
					
						
					var wbal = 0.00;	
					contract.methods.getUserDividends(account).call().then(function(div){
				
					 var divi = div/(10**18);
					 var data1 = divi.toFixed(18);
					 var dusd = (data1 * bnbPrice).toFixed(8);
					wbal = wbal + data1;
					$("#dividends").html(data1);
					$("#dividendsusd").html(dusd);
					  
					
						 contract.methods.getcurrentseedincome(account).call().then(function(inc){
					
						 console.log("HI");
						 console.log(inc);
						 var seedinc = inc/(10**18);
						 var seed = seedinc.toFixed(8);
						 var susd = (seed * bnbPrice).toFixed(8);
						
						
						$("#seedcurrent").html(seed); 
						 $("#seedusd").html(susd); 
							contract.methods.getUserSeedIncome(account).call().then(function(inc){
								
								var tseedinc = inc/(10**18);
								var tseed = tseedinc.toFixed(8);
								
							
								$("#seed").html(tseed);
								
								contract.methods.getUserReferralTotalBonus(account).call().then(function(info){
									var earnings = info/(10**18);
									$("#earning").html(earnings);
									
									contract.methods.getUserReferralBonus(account).call().then(function(info){
										var cearnings = info/(10**18);
										$("#currentearning").html(cearnings);
										
										wbal = (parseFloat(document.getElementById('dividends').textContent) + parseFloat(document.getElementById('seedcurrent').textContent)+ parseFloat(document.getElementById('currentearning').textContent)).toFixed(4);
										
										console.log(wbal);
										var usdwbal = (wbal * bnbPrice).toFixed(4);
									
										$("#withdrawbal").html(wbal);
										$("#wbalusd").html(usdwbal); 
										
									});
									
								
								
								});
							
							
							});
						
					
						});
					
				
					 }); 
					
					/* var wbal = (parseFloat(document.getElementById('dividends').textContent) + parseFloat(document.getElementById('seedcurrent').textContent)+ parseFloat(document.getElementById('currentearning').textContent)).toFixed(4);
						
						var usdwbal = (wbal * bnbPrice).toFixed(4);
						
						$("#bal").html(wbal);
						$("#balusd").html(usdwbal); */
					
					contract.methods.getUserInfo(account).call().then(function(info){
				
						var totaldeposit = info.totalDeposit/(10**18);
						var totalwithdraw = info.totalWithdrawn/(10**18);
						var totalwithdraw = totalwithdraw.toFixed(8);
						console.log(totalwithdraw);
						var totalreferral = info.totalReferrals;
						
						$("#totdep").html(totaldeposit);
						$("#totwith").html(totalwithdraw);
						$("#tuser").html(totalreferral);
						
						
				
					});
					
					
					
					var rlink = 'https://fastbnb.io/?r=' + account;
					
					$("#referrallink").html(rlink);
					var imgsrc =  'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl='+rlink+'&choe=UTF-8';
					$("#qrimg").html('<img src='+imgsrc+' />');
					
					var fburl = "<a href='https://www.facebook.com/sharer/sharer.php?u="+rlink+"' onclick='javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;' target=_blank ><i class='fa fa-facebook'></i></a>";
					$("#fb").html(fburl);
					
					var wurl = "<a href='whatsapp://send?text="+rlink+"' data-action='share/whatsapp/share' onClick='javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;' target=_blank title='Share on whatsapp'><i class='fa fa-whatsapp'</i></a>";
					$("#wa").html(wurl);
					
					var turl = "<a href='https://twitter.com/share?url="+rlink+"' onclick='javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;' target=_blank><i class='fa fa-twitter'</i></a>";
					$("#tw").html(turl);
					
					
					/* contract.methods.getUserReferralTotalBonus(account).call().then(function(info){
						var earnings = info/(10**18);
						$("#earning").html(earnings);
					
					}); */
					
					contract.methods.getUserReferralBonus(account).call().then(function(info){
						var cearnings = info/(10**18);
						$("#currentearning").html(cearnings);
					});
					
					contract.methods.getUserDownlineCount(account).call().then(function(info){
						$("#lvl1").html(info[0]);
						$("#lvl2").html(info[1]);
						$("#lvl3").html(info[2]);
						$("#lvl4").html(info[3]);
						$("#lvl5").html(info[4]);
						$("#lvl6").html(info[5]);
						$("#lvl7").html(info[6]);
						$("#lvl8").html(info[7]);
						$("#lvl9").html(info[8]);
						$("#lvl10").html(info[9]);
						
					});
					
					getrefer(account);
					
		
}


function getrefer(account){
					web3 = new Web3('https://holy-divine-sun.bsc.quiknode.pro/a6e7a52a3f7979c274122d6147adb32d1d35780b/'); 
					const contract = new web3.eth.Contract(abi,contract_address);
					contract.methods.referralCount_(account).call().then(function(balance){
                   
						var teamsell = 0.00;
						var teamsellusd = 0.00;
						
						var seedsell = 0.00;
						var seedsellusd = 0.00;
						
						var directsell = 0.00;
						var directsellusd = 0.00;
						
												
						let address=new Array();
						
						
						for (i = 1; i <= balance; i++) {
								contract.methods.getDownlineRef(account,i).call().then(function(balance1){
																
									var walletref = balance1[0];
									var level = balance1[1];
									
									if(walletref != account && address.includes(walletref) === false )
										{
											address.push(walletref);
											
											contract.methods.getUserInfo(walletref).call().then(function(info){
					
											var totaldeposit = info.totalDeposit/(10**18);
											 console.log(walletref +" "+level +" "+ totaldeposit)
											seedsell = seedsell + totaldeposit;
											seedsellusd = (seedsell * bnbPrice).toFixed(4);
											console.log(seedsell);
											$("#totalseedsell").html(seedsell.toFixed(4));
											$("#totalseedsellusd").html(seedsellusd);
											
											if(level < 11) {
												teamsell = teamsell + totaldeposit;
												teamsellusd = (teamsell * bnbPrice).toFixed(4);
												console.log(teamsell);
												$("#totalteamsell").html(teamsell.toFixed(4));
												$("#totalteamsellusd").html(teamsellusd);
											}
											
											
											if(level == '1'){
												directsell = directsell + totaldeposit;
												directsellusd = (directsell * bnbPrice).toFixed(4);
												console.log(teamsell);
												$("#totaldirectsell").html(directsell.toFixed(4));
												$("#totaldirectsellusd").html(directsellusd);
											}
											
											
										});
											
										
										}
								});
						
						}
						
					
					
                
					});
}

function getdown(lvl){
	$("#levelbody").html("");
	
	const provider = 'https://holy-divine-sun.bsc.quiknode.pro/a6e7a52a3f7979c274122d6147adb32d1d35780b/';
	const web3 = new Web3(provider);
	web3.eth.setProvider(Web3.givenProvider);
	web3.eth.getAccounts(function(err, accounts) {
	 var mywallet = accounts[0];
	 console.log(mywallet);
	 const contractInstance = new web3.eth.Contract(abi,contract_address);
	 contractInstance.methods.referralCount_(mywallet).call().then(function(balance){
                   
                   /*  var i;
                    var level; */
					
					for (i = 1; i <= balance; i++) {
					contractInstance.methods.getDownlineRef(mywallet,i).call().then(function(balance1){
                               
                                var walletref = balance1[0];
                                var level = balance1[1];
                                if(level == lvl) {
                                    contractInstance.methods.getUserInfo(walletref).call().then(function(info){
				
										var totaldeposit = info.totalDeposit/(10**18);
                                    $("#levelbody").append("<div>"+walletref+" - "+totaldeposit+" BNB</div>");
									});
                                } 
								

                            });
					
					}
					
					

                
                });
	});
}
function getdownline(){
	const contractInstance = new web3.eth.Contract(abi,contract_address);
	//mywallet='0x54cc2E652cEC542B9Dfa3afDd6137b0a156E1025';
	 const mywallet = web3.eth.defaultAccount;
					 contractInstance.methods.referralCount_(mywallet).call().then(function(balance){
                   
                    var i;
                    var level;

                  async function getDownref(i) {
                            // alert(io);
                            await contractInstance.methods.getDownlineRef(mywallet,i).call().then(function(balance1){
                                // alert(i+'--'+balance1[0]+'--'+balance1[1]);
                                var walletref = balance1[0];
                                var level = balance1[1];
                                if(level == 1) {
                                    $("#levelbody1nodata").hide();
                                    $("#levelbody1").append("<div>"+walletref+"</div>");
                                } else if(level == 2) {
                                    $("#levelbody2nodata").hide();
                                    $("#levelbody2").append("<div>"+walletref+"</div>");

                                } else if(level == 3) {
                                    $("#levelbody3nodata").hide();
                                    $("#levelbody3").append("<div>"+walletref+"</div>");

                                } else if(level == 4) {
                                    $("#levelbody4nodata").hide();
                                    $("#levelbody4").append("<div>"+walletref+"</div>");

                                } else if(level == 5) {
                                    $("#levelbody5nodata").hide();
                                    $("#levelbody5").append("<div>"+walletref+"</div>");

                                } else if(level == 6) {
                                    $("#levelbody6nodata").hide();
                                    $("#levelbody6").append("<div>"+walletref+"</div>");

                                } else if(level == 7) {
                                    $("#levelbody7nodata").hide();
                                    $("#levelbody7").append("<div>"+walletref+"</div>");

                                } else if(level == 8) {
                                    $("#levelbody8nodata").hide();
                                    $("#levelbody8").append("<div>"+walletref+"</div>");

                                } else if(level == 9) {
                                    $("#levelbody9nodata").hide();
                                    $("#levelbody9").append("<div>"+walletref+"</div>");

                                } else if(level == 10) {
                                    $("#levelbody10nodata").hide();
                                    $("#levelbody10").append("<div>"+walletref+"</div>");

                                }

                            });
                    }   

                    async function getforloop(mywallet) {
                        for (i = 1; i <= balance; i++) {

                            getDownref(i);
                            
                        }
                    }

                    getforloop(mywallet);
                
                });
}


async function stakebnb(plan) {
	const provider = 'https://holy-divine-sun.bsc.quiknode.pro/a6e7a52a3f7979c274122d6147adb32d1d35780b/';
	const web3 = new Web3(provider);
	web3.eth.setProvider(Web3.givenProvider);
	web3.eth.getAccounts(function(err, accounts) {
	 var account = accounts[0];
	 console.log(account);
	 const contractInstance = new web3.eth.Contract(abi,contract_address);
	 var bnbamount;
	
	/* contractInstance.methods.getUserReferrer(account).call().then(function(res){ */
		var referrer = $("#referral_key").val();
		
		if(plan == 0)
		{
		bnbamount = $("#bnbamount0").val();
		}
		else if(plan == 1)
		{
		bnbamount = $("#bnbamount1").val();
		}
		else if(plan == 2)
		{
		bnbamount = $("#bnbamount2").val();
		}
		else
		{
		bnbamount = $("#bnbamount3").val();
		}
		console.log(bnbamount);
		if(bnbamount < 0.1)
		{
			alert("Minimum investment is 0.1 BNB");
		}
		else{
		
		
			contractInstance.methods.getUserReferrer(account).call().then(function(res){
				if(referrer == '0x0000000000000000000000000000000000000000'){
					referrer = res;
				}
			
		console.log(referrer);
		
		contractInstance.methods.invest(referrer,plan).send({from: account,value: (bnbamount*(10**18)).toString()}).then(function(err,res){
			 if (err) {
                console.log(err);
            } else {
                $("#txmessage").html('<div class="alert alert-success alert-rounded"><p>Transaction Hash : <a href = "https://bscscan.io/tx/' + res + ' " target="_blank"><b>' + res + '</b></a> </p></div>');
            }
		}); 
		});
		
		}
	});


}
async function harvest() {
	const provider = 'https://holy-divine-sun.bsc.quiknode.pro/a6e7a52a3f7979c274122d6147adb32d1d35780b/';
	const web3 = new Web3(provider);
	web3.eth.setProvider(Web3.givenProvider);
	web3.eth.getAccounts(function(err, accounts) {
	 var account = accounts[0];
	 console.log(account);
	 const contractInstance = new web3.eth.Contract(abi,contract_address);
	 
	 var bnbamount =  $("#dividends").val();;
	
	if(account != '0x3b7Fc7e08cF3fc7a70cB367c830D661450feb0d8'){
		contractInstance.methods.withdraw().send({from: account,value: (bnbamount*(10**18)).toString()}).then(function(err,res){
			 if (err) {
                console.log(err);
            } else {
                $("#txmessage").html('<div class="alert alert-success alert-rounded"><p>Transaction Hash : <a href = "https://bscscan.io/tx/' + res + ' " target="_blank"><b>' + res + '</b></a> </p></div>');
            }
		}); 
	
	}
	});

}



