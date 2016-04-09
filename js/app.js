/**
 * Created by XuânNam on 4/9/2016.
 */
var isLog   =   false;
var ref     =   new Firebase('https://namtxchat.firebaseio.com/');
$(document).ready(function(){
    $('#btn-logout').hide();
    if(typeof localStorage['firebase:session::namtxchat'] != 'undefined'){
        var data        =   localStorage['firebase:session::namtxchat'];
        data            =   jQuery.parseJSON(data);
        var email       = data.password.email;
        if(typeof email != 'undefined'){
            $('#btn-login').hide();
            $('#btn-logout').show();
            $('#btn-signup').hide();
            $('#name').val(email);
            ref.limitToLast(50).on('child_added', function(snapshot){
                var data= snapshot.val();
                displayMessage(data.name, data.text, data.time);
                isLog   = true;
            });
        }else{
            $('#message').val('Login to chat');
            $('#message').prop('readonly','readonly');
        }
    }
    var definition = {"smile":{"title":"Smile","codes":[":)",":=)",":-)"]},"sad-smile":{"title":"Sad Smile","codes":[":(",":=(",":-("]},"big-smile":{"title":"Big Smile","codes":[":D",":=D",":-D",":d",":=d",":-d"]},"cool":{"title":"Cool","codes":["8)","8=)","8-)","B)","B=)","B-)","(cool)"]},"wink":{"title":"Wink","codes":[":o",":=o",":-o",":O",":=O",":-O"]},"crying":{"title":"Crying","codes":[";(",";-(",";=("]},"sweating":{"title":"Sweating","codes":["(sweat)","(:|"]},"speechless":{"title":"Speechless","codes":[":|",":=|",":-|"]},"kiss":{"title":"Kiss","codes":[":*",":=*",":-*"]},"tongue-out":{"title":"Tongue Out","codes":[":P",":=P",":-P",":p",":=p",":-p"]},"blush":{"title":"Blush","codes":["(blush)",":$",":-$",":=$",":\">"]},"wondering":{"title":"Wondering","codes":[":^)"]},"sleepy":{"title":"Sleepy","codes":["|-)","I-)","I=)","(snooze)"]},"dull":{"title":"Dull","codes":["|(","|-(","|=("]},"in-love":{"title":"In love","codes":["(inlove)"]},"evil-grin":{"title":"Evil grin","codes":["]:)",">:)","(grin)"]},"talking":{"title":"Talking","codes":["(talk)"]},"yawn":{"title":"Yawn","codes":["(yawn)","|-()"]},"puke":{"title":"Puke","codes":["(puke)",":&",":-&",":=&"]},"doh!":{"title":"Doh!","codes":["(doh)"]},"angry":{"title":"Angry","codes":[":@",":-@",":=@","x(","x-(","x=(","X(","X-(","X=("]},"it-wasnt-me":{"title":"It wasn't me","codes":["(wasntme)"]},"party":{"title":"Party!!!","codes":["(party)"]},"worried":{"title":"Worried","codes":[":S",":-S",":=S",":s",":-s",":=s"]},"mmm":{"title":"Mmm...","codes":["(mm)"]},"nerd":{"title":"Nerd","codes":["8-|","B-|","8|","B|","8=|","B=|","(nerd)"]},"lips-sealed":{"title":"Lips Sealed","codes":[":x",":-x",":X",":-X",":#",":-#",":=x",":=X",":=#"]},"hi":{"title":"Hi","codes":["(hi)"]},"call":{"title":"Call","codes":["(call)"]},"devil":{"title":"Devil","codes":["(devil)"]},"angel":{"title":"Angel","codes":["(angel)"]},"envy":{"title":"Envy","codes":["(envy)"]},"wait":{"title":"Wait","codes":["(wait)"]},"bear":{"title":"Bear","codes":["(bear)","(hug)"]},"make-up":{"title":"Make-up","codes":["(makeup)","(kate)"]},"covered-laugh":{"title":"Covered Laugh","codes":["(giggle)","(chuckle)"]},"clapping-hands":{"title":"Clapping Hands","codes":["(clap)"]},"thinking":{"title":"Thinking","codes":["(think)",":?",":-?",":=?"]},"bow":{"title":"Bow","codes":["(bow)"]},"rofl":{"title":"Rolling on the floor laughing","codes":["(rofl)"]},"whew":{"title":"Whew","codes":["(whew)"]},"happy":{"title":"Happy","codes":["(happy)"]},"smirking":{"title":"Smirking","codes":["(smirk)"]},"nodding":{"title":"Nodding","codes":["(nod)"]},"shaking":{"title":"Shaking","codes":["(shake)"]},"punch":{"title":"Punch","codes":["(punch)"]},"emo":{"title":"Emo","codes":["(emo)"]},"yes":{"title":"Yes","codes":["(y)","(Y)","(ok)"]},"no":{"title":"No","codes":["(n)","(N)"]},"handshake":{"title":"Shaking Hands","codes":["(handshake)"]},"skype":{"title":"Skype","codes":["(skype)","(ss)"]},"heart":{"title":"Heart","codes":["(h)","<3","(H)","(l)","(L)"]},"broken-heart":{"title":"Broken heart","codes":["(u)","(U)"]},"mail":{"title":"Mail","codes":["(e)","(m)"]},"flower":{"title":"Flower","codes":["(f)","(F)"]},"rain":{"title":"Rain","codes":["(rain)","(london)","(st)"]},"sun":{"title":"Sun","codes":["(sun)"]},"time":{"title":"Time","codes":["(o)","(O)","(time)"]},"music":{"title":"Music","codes":["(music)"]},"movie":{"title":"Movie","codes":["(~)","(film)","(movie)"]},"phone":{"title":"Phone","codes":["(mp)","(ph)"]},"coffee":{"title":"Coffee","codes":["(coffee)"]},"pizza":{"title":"Pizza","codes":["(pizza)","(pi)"]},"cash":{"title":"Cash","codes":["(cash)","(mo)","($)"]},"muscle":{"title":"Muscle","codes":["(muscle)","(flex)"]},"cake":{"title":"Cake","codes":["(^)","(cake)"]},"beer":{"title":"Beer","codes":["(beer)"]},"drink":{"title":"Drink","codes":["(d)","(D)"]},"dance":{"title":"Dance","codes":["(dance)","\o/","\:D/","\:d/"]},"ninja":{"title":"Ninja","codes":["(ninja)"]},"star":{"title":"Star","codes":["(*)"]},"mooning":{"title":"Mooning","codes":["(mooning)"]},"finger":{"title":"Finger","codes":["(finger)"]},"bandit":{"title":"Bandit","codes":["(bandit)"]},"drunk":{"title":"Drunk","codes":["(drunk)"]},"smoking":{"title":"Smoking","codes":["(smoking)","(smoke)","(ci)"]},"toivo":{"title":"Toivo","codes":["(toivo)"]},"rock":{"title":"Rock","codes":["(rock)"]},"headbang":{"title":"Headbang","codes":["(headbang)","(banghead)"]},"bug":{"title":"Bug","codes":["(bug)"]},"fubar":{"title":"Fubar","codes":["(fubar)"]},"poolparty":{"title":"Poolparty","codes":["(poolparty)"]},"swearing":{"title":"Swearing","codes":["(swear)"]},"tmi":{"title":"TMI","codes":["(tmi)"]},"heidy":{"title":"Heidy","codes":["(heidy)"]},"myspace":{"title":"MySpace","codes":["(MySpace)"]},"malthe":{"title":"Malthe","codes":["(malthe)"]},"tauri":{"title":"Tauri","codes":["(tauri)"]},"priidu":{"title":"Priidu","codes":["(priidu)"]}};
    $.emoticons.define(definition);

    $('#message').keypress(function(e){
        if(e.keyCode==13){
            var name    =   $('#name').val();
            var mess    =   $('#message').val();
            var date    =   new Date();
            var tmStr   =   date.getHours()+':'+date.getMinutes();
            name= name==''?'guest':name;
            if(mess !='' && isLog == true){
                ref.push({name: name, text: mess, time: tmStr});
                $('#message').val('');
            }
        }
    });
    function displayMessage(name, text, time){
        var textWithEmoticons = $.emoticons.replace(text);
        var element =   '<blockquote>';
        time        =   time==undefined?'':'('+time+')';
        element     +=  '<span><kbd>'+name+time+'</kbd></span>';
        element     +=  '<span class="text-primary padding-l-10">'+textWithEmoticons+'</span>';
        element     +=  '</bloclqoute>'
        $('#old_messages').append(element);
        $('.old-messages').animate({ scrollTop: $('.old-messages').prop("scrollHeight")}, 10);
        $('#message').focus();
    }
});
$(document).on('click','#btn-login-modal',function(){
    var email       =   $('#user_email').val();
    var password    =   $('#user_password').val();
    ref.authWithPassword({
        email       : email,
        password    : password
    }, function(error, authData){
        if(error){
            var err_msg                 =   error.message;
            console.log(err_msg);
            $('span#login-status').text(err_msg);
        }else{
            isLog   = true;
            $('#login-modal').modal('toggle');
            var email_logged    = authData['password']['email'];
            $('#name').val(email_logged);
            $('#btn-login').hide();
            $('#btn-logout').show();
            location.reload();
        }
    });
    return false;
});
$(document).on('click', '#btn-logout', function(){
    localStorage.clear();
    location.reload();
});
$(document).on('click', '#btn-login', function(){
    $('span#login-status').text('');
});
$(document).on('click','#btn-signup-modal',function(){
    var email    =   $('#signup_email').val();
    var password    =   $('#signup_password').val();
    var repassword  =   $('#signup_repassword').val();
    if(password !== repassword){
        $('#signup-status').text('These passwords don\'t match');
    }else{
        ref.createUser({email:email, password:password}, function(error, userData){
            if(error){
                $('#signup-status').text(error.message);
            }else{
                $('#user_email').val(email);
                $('#user_password').val(password);
                $('#signup-modal').modal('hide');
                $('#login-modal').modal('show');
            }
        });
    }
    return false;
});
$(document).on('click','#btn-register', function(){
    $('#login-modal').modal('hide');
    $('#signup-modal').modal('show');
});