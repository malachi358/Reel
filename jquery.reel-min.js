/*
 Copyright (c) 2009-2013 Petr Vostrel (http://petr.vostrel.cz/)
 Licensed under the MIT License (LICENSE.txt).

 jQuery Reel
 http://reel360.org
 Version: 1.3rc
 Updated: 2013-10-07

 Requires jQuery 1.5 or higher
*/
(function(k){var R=typeof define=="function"&&define.amd&&(define(["jquery"],k)||true),Y=!R&&typeof module=="object"&&typeof module.exports=="object"&&(module.exports=k);!R&&!Y&&k()})(function(){return jQuery.reel||function(k,R,Y,t){function vc(f){return o.instances.push(f[0])&&f}function wc(f){return(o.instances=o.instances.not(Ca(f.attr(ja))))&&f}function Z(f){return o.instances.first().data(f)}function xc(f){return"data:image/gif;base64,R0lGODlh"+f}function V(f){return"<"+f+"/>"}function x(f){return"."+
(f||"")}function Ua(f){return f.replace(Da,o.cdn)}function Ea(f){return"url('"+tb(f)+"')"}function Wb(f,j){return typeof j==ub?j[f]:j}function Fa(f,j,p){return vb(f,Ga(j,p))}function Ha(f,j){return H(f)*(j?-1:1)}function Va(f){return ka?f.touch||f.originalEvent.touches[0]:f}function wb(f){return f.originalEvent}function A(f){return f===t?0:typeof f==xb?f:f+"px"}function Ca(f){return"#"+f}function yc(f,j,p){for(;f.length<j;)f=p+f;return f}function tb(f){return encodeURI(decodeURI(f))}function yb(f){return o.re.array.exec(f)?
f.split(o.re.array):f}function Xb(f){return!f.parents(zb).length}function Yb(f){return typeof f==xb?f:k.each(f,function(j,p){f[j]=p?+p:t})}function zc(f){try{console.error(f)}catch(j){}}if(!(!k||+k().jquery.replace(".",S).substr(0,2)<15)){var o=k.reel={version:"1.3rc",def:{frame:1,frames:36,loops:true,clickfree:false,draggable:true,scrollable:true,steppable:true,throwable:true,wheelable:true,orientable:false,cw:false,revolution:t,stitched:0,directional:false,row:1,rows:0,rowlock:false,framelock:false,
orbital:0,vertical:false,inversed:false,footage:6,spacing:0,horizontal:true,suffix:"-reel",image:t,images:"",path:"",preload:"fidelity",shy:false,speed:0,delay:0,timeout:2,duration:t,rebound:0.5,entry:t,opening:0,brake:0.23,velocity:0,tempo:36,laziness:6,cursor:t,hint:"",indicator:0,klass:"",preloader:2,area:t,attr:{},annotations:t,responsive:false,graph:t,monitor:t},scan:function(){return k(x(B)+":not("+x(Ab)+" >)").each(function(f,j){f=k(j);j=f.data();j.images=yb(j.images);var p={};k(x(Zb)+"[data-for="+
f.attr(ja)+"]").each(function(u,r){u=k(r);r=u.data();r.x=Yb(yb(r.x));r.y=Yb(yb(r.y));var g=u.attr(ja);r.node=u.removeData();p[g]=r});j.annotations=p;f.removeData().reel(j)})},fn:{reel:function(){var f=arguments,j=k(this),p=j.data(),u=f[0]||{},r=f[1];if(typeof u=="object"){var g=k.extend({},o.def,u),N=[];j.filter(Bb).unreel().filter(function(){var i=k(this),d=g.attr,a=d.src||i.attr("src"),I=d.width||i.width();i=d.height||i.height();if(a&&I&&i)return true;else zc("Missing attributes: Image needs `src` and both dimensions to be set to Reel")}).each(function(){var i=
k(this),d=function(b,e){return i.reel(b,e)&&i.data(b)},a=function(b){return i.reel(b)},I={setup:function(){if(!(i.hasClass(B)&&i.parent().hasClass(Ab))){d(Ia,g);var b=i.attr(g.attr).attr("src"),e=d(ja,i.attr(ja)||i.attr(ja,B+"-"+ +new Date).attr(ja)),c=k.extend({},i.data()),h=d($,g.images||[]),n=d(W,g.stitched),m=!h.length||n;m=d(Wa,g.responsive&&(Ac?true:!m));var l=d($b,{}),q=g.loops,w=g.orbital,s=g.revolution,y=g.rows,C=d(ra,Ga(g.footage,g.frames));d(Xa,g.spacing);var K=d(J,i.width()),la=d(aa,i.height()),
Bc=d(Ja,g.shy),ac=d(O,w&&C||y<=1&&h.length||g.frames),Cc=y>1||w;d(Ka,Wb("x",s)||n/2||K*2);d(Cb,!Cc?0:Wb("y",s)||(y>3?la:la/(5-y)));y=n?1:ma(ac/C);d(Db,n-(q?0:K));d(Ya,0);e=Ca(e+g.suffix);s=i[0].className||S;C=k(V(sa),{id:e.substr(1),"class":s+D+Ab+D+bc+"0"});C=i.wrap(C.addClass(g.klass)).attr({"class":B});N.push(vc(C)[0]);C=C.parent().bind(I.instance);d(Eb,h.length?S:g.image||b.replace(o.re.image,"$1"+g.suffix+".$2"));d(Za,k(V(sa)));d(cc,[]);d(L,null);d(z,null);d(X,null);d(ta,null);d(Fb,y);d(dc,g.rowlock);
d(ec,g.framelock);d($a,d(La,d(ab,0)));d(bb,1/(ac-(q&&!n?0:1)));d(fc,e);d(P,d(ua,g.speed)<0);d(Ma,false);d(na,0);d(va,g.vertical);d(ba,0);d(wa,Ha(1,!g.cw&&!n));d(cb,{});d(ca,false);d(db,d(Gb,0));d(eb,d(fb,0));d(Na,false);d(Hb,false);d(da,false);d(gc,g.brake);d(Ib,!!w);d(ea,g.tempo/(o.lazy?g.laziness:1));d(xa,-1);d(gb,-1);d(Oa,g.annotations||C.unbind(x(Oa))&&{});d(Jb,1);d(hc,{src:b,classes:s,data:c,style:i.attr(ya)||S});g.steppable||C.unbind("up.steppable");g.indicator||C.unbind(".indicator");E(S,{overflow:Kb,
position:"relative"});m||E(S,{width:K,height:la});m&&k.each(Dc,function(Yc,ic){l[ic]=a(ic)});E(oa+D+x(B),{display:Lb});fa.bind(I.pool);i.trigger(Bc?"prepare":"setup")}},instance:{teardown:function(){var b=i.data(hc);i.parent().unbind(I.instance);if(a(Ja))i.unbind(hb,ga);else a(ya).remove()&&a(ib).unbind(F);a(Za).empty();clearTimeout(Mb);clearTimeout(Nb);k(R).unbind(jc,kc);wc(i.unbind(F).removeData().siblings().unbind(F).remove().end().attr({"class":b.classes,src:b.src,style:b.style}).data(b.data).unwrap());
jb();fa.unbind(I.pool);ha.unbind(ia);k(R).unbind(F)},setup:function(){function b(q){return i.trigger("down",[Va(q).clientX,Va(q).clientY,q])&&q.give}function e(q,w){return!w||i.trigger("wheel",[w,q])&&q.give}var c=i.parent().append(za()),h=d(ib,k(g.area||c)),n=g.rows>1;E(D+x(B),{MozUserSelect:kb,WebkitUserSelect:kb,MozTransform:"translateZ(0)"});i.unbind(hb,ga);if(ka)h.bind(Ec,b);else{var m=g.cursor,l=m==lc?Fc:m||Gc;m=m==lc?Hc+D+"!important":t;E(S,{cursor:Ua(l)});E(x(Ob),{cursor:"wait"});E(x(lb)+
oa+x(lb)+" *",{cursor:Ua(m||l)},true);h.bind(g.wheelable?Ic:null,e).bind(g.clickfree?Jc:Kc,b).bind(Lc,function(){return false})}if(a(Wa)){E(D+x(B),{width:"100%",height:Pb});k(R).bind(jc,kc)}g.hint&&h.attr("title",g.hint);g.indicator&&c.append(Pa("x"));n&&g.indicator&&c.append(Pa("y"));g.monitor&&c.append(mc=k(V(sa),{"class":nc}))&&E(D+x(nc),{position:mb,left:0,top:0})},preload:function(){function b(w,s){setTimeout(function(){!Xb(e)&&s.attr({src:tb(w)})},(l-m.length)*2)}var e=i.parent(),c=a($),h=!c.length,
n=o.preload[g.preload]||o.preload[o.def.preload],m=h?[a(Eb)]:n(c.slice(0),g,a),l=m.length;d(ba,h?0.5:0);c=a(Za).empty();h=[];e.addClass(Ob);d(ya,a(ya)||k("<"+ya+' type="text/css">'+E.rules.join("\n")+"</"+ya+">").prependTo(Qb));d(Ma,true);i.trigger("stop");g.responsive&&Rb();for(i.trigger("resize",true);m.length;){n=o.substitute(g.path+m.shift(),a);var q=k(V(Bb)).appendTo(c);q.bind("load error abort",function(w){w.type!="load"&&i.trigger(w.type);return!Xb(e)&&i.trigger("preloaded")&&false});b(n,q);
h.push(n)}d(cc,h);d(Ja,false)},preloaded:function(){var b=a($).length||1,e=d(ba,Ga(a(ba)+1,b));if(e===b){i.parent().removeClass(Ob);i.trigger("loaded")}e===1&&i.trigger("frameChange",[t,a(L)])},loaded:function(){a($).length>1||i.css({backgroundImage:Ea(o.substitute(g.path+a(Eb),a))}).attr({src:Ua(oc)});a(W)&&i.attr({src:Ua(oc)});a(Hb)||d(na,g.velocity||0);d(Ma,false);pa=true},prepare:function(){i.css("display",Lb).one(hb,ga)},opening:function(){if(!g.opening)return i.trigger("openingDone");d(da,true);
d(Sb,!a(ua));var b=g.entry||g.speed,e=a(z),c=g.opening;d(z,e-b*c);d(xa,ma(c*Z(ea)))},openingDone:function(){function b(c){return i.trigger("orient",[wb(c).alpha,wb(c).beta,wb(c).gamma,c])&&c.give}d(Qa,false);d(da,false);var e=nb+x(da);fa.unbind(e,I.pool[e]);ka&&g.orientable&&k(R).bind(Mc,b);if(g.delay>0)Mb=setTimeout(function(){i.trigger("play")},g.delay*1E3);else i.trigger("play")},play:function(b,e){e=e?d(ua,e):a(ua)*Ha(1,a(P));(b=g.duration)&&d(gb,ma(b*Z(ea)));d(P,e<0);e=d(Qa,!!e);d(Sb,!e);Aa()},
reach:function(b,e,c){if(e!=a(L)){b=a(O);d(X,ma(e/b));var h=d($a,a(L));e=d(La,e);e=d(ab,o.math.distance(h,e,b));c=H(c||a(ua))*Ha(1,e<0);i.trigger("play",c)}},pause:function(){v()},stop:function(){var b=d(Sb,true);d(Qa,!b)},down:function(b,e,c,h){function n(l){return i.trigger("pan",[Va(l).clientX,Va(l).clientY,l])&&l.give}function m(l){return i.trigger("up",[l])&&l.give}if(!(h&&h.button!=Nc&&!g.clickfree))if(g.draggable){d(ca,a(L));b=g.clickfree;d(na,0);ob=pb(a(Ka),e,c);ka||h&&h.preventDefault();
v();jb();G=0;k(zb,ha).addClass(lb);ka?ha.bind(Oc,n).bind(Pc+D+Qc,m):(b?a(ib):ha).bind(Rc,n).bind(b?Sc:Tc,m)}},up:function(){d(ca,false);d(Na,false);var b=g.throwable,e=H(Ra[0]+Ra[1])/60;Q=d(na,!b?0:b===true?e:Ga(b,e))?1:0;v();jb();k(zb,ha).removeClass(lb);(g.clickfree?a(ib):ha).unbind(ia)},pan:function(b,e,c,h){if(g.draggable&&Sa){Sa=false;v();b=g.rows;var n=g.orbital,m=ka&&!a(Na)&&b<=1&&!n&&g.scrollable,l={x:e-ob.x,y:c-ob.y},q={x:H(l.x),y:H(l.y)};if(h&&m&&q.x<q.y)return h.give=true;if(q.x>0||q.y>
0){h&&(h.give=false);G=vb(q.x,q.y);ob={x:e,y:c};h=a(Ka);m=a(cb);q=a(va);if(!a(ec)){var w=d(z,pc(q?c-m.y:e-m.x,a(db),h,a(eb),a(fb),a(wa),q?c-m.y:e-m.x));d(Na,a(Na)||a(L)!=a(ca));(l=qc(q?l.y:l.x||0))&&d(P,l<0)}if(n&&a(Ib)){d(va,H(c-m.y)>H(e-m.x));m=pb(h,e,c)}if(b>1&&!a(dc)){b=a(Cb);n=a(Gb);l=-n*b;d(ta,o.math.envelope(c-m.y,n,b,l,l+b,-1))}!(w%1)&&!g.loops&&pb(h,e,c)}}},wheel:function(b,e,c){if(e){qb=true;b=ma(qa.sqrt(H(e))/2);b=Ha(b,e>0);e=0.0833*a(Ka);pb(e);b&&d(P,b<0);d(na,0);d(z,pc(b,a(db),e,a(eb),
a(fb),a(wa)));c&&c.preventDefault();c&&(c.give=false);v();i.trigger("up",[c])}},orient:function(b,e){if(!(!Sa||T)){rc=true;b=e/360;fraction=d(z,+(g.stitched||g.cw?1-b:b).toFixed(2));Sa=false}},fractionChange:function(b,e,c){if(e===t){b=1+rb(c/a(bb));e=g.rows>1;c=g.orbital;d(Ib,!!c&&(b<=c||b>=a(ra)-c+2));if(e)b+=(a(X)-1)*a(O);d(L,b)}},tierChange:function(b,e,c){if(e===t){b=d(X,M(Ta(c,1,g.rows)));e=a(O);c=a(L)%e||e;d(L,c+b*e-e)}},rowChange:function(b,e,c){e===t&&d(ta,1/(g.rows-1)*(c-1))},frameChange:function(b,
e,c){if(e===t){this.className=this.className.replace(o.re.frame_klass,bc+c);var h=a(O);e=g.rows;b=g.path;var n=c%h||h,m=!!a(ba),l=((c-n)/h+1-1)/(e-1),q=M(Ta(l,1,e)),w=a(X);m&&q===w?a(ta):d(ta,l);n=Ga((n-1)/(h-1),0.9999);l=w*h-h;h=M(Ta(n,l+1,l+h));l=H((a(z)||0)-n)<1/(a(O)-1);m&&h===c&&l?a(z):d(z,n);var s=a(ra);if(g.orbital&&a(va)){c=g.inversed?s+1-c:c;c+=s}l=g.horizontal;var y=a(W);h=a($);var C=!h.length||y;q=a(Xa);var K=a(J),la=a(aa);if(C){if(y){c=d(Ya,M(Ta(n,0,a(Db)))%y);e=e<=1?0:(la+q)*(e-w);c=
[A(-c),A(-e)];e=h.length>1&&h[w-1];b=o.substitute(b+e,a);e&&i.css("backgroundImage").search(b)<0&&i.css({backgroundImage:Ea(b)})}else{b=c%s-1;b=b<0?s-1:b;c=rb((c-0.1)/s);c+=e>1?0:a(P)?0:!g.directional?0:a(Fb);c=c*((l?la:K)+q);b=b*((l?K:la)+q);c=h.length?[0,0]:l?[A(-b),A(-c)]:[A(-c),A(-b)]}i.css({backgroundPosition:c.join(D)})}else{c=h[c-1];a(Wa)&&Rb();m&&i.attr({src:tb(o.substitute(b+c,a))})}}},"frameChange.reach":function(b,e,c){if(!(!a(La)||e!==t)){b=o.math.distance(a($a),c,a(O));if(H(b)>=H(a(ab))){d(L,
d(La));d(La,d(ab,d($a,0)));i.trigger("stop")}}},"imageChange imagesChange":function(){i.trigger("preload")},"fractionChange.indicator":function(b,e,c){if(g.indicator&&e===t){b=g.indicator;var h=g.orbital;e=h&&a(va)?a(aa):a(J);h=h?a(ra):g.images.length||a(O);h=ma(e/h);e-=h;c=M(Ta(c,0,e));c=!g.cw||a(W)?c:e-c;Pa.$x.css(a(va)?{left:0,top:A(c),bottom:Pb,width:b,height:h}:{bottom:0,left:A(c),top:Pb,width:h,height:b})}},"tierChange.indicator":function(b,e,c){if(g.rows>1&&g.indicator&&e===t){var h=a(aa);
b=g.indicator;e=ma(h/g.rows);h-=e;c=M(c*h);Pa.$y.css({left:0,top:c,width:b,height:e})}},"setup.annotations":function(){var b=i.parent();k.each(a(Oa),function(e,c){var h=typeof c.node==xb?k(c.node):c.node||{};h=h.jquery?h:k(V(sa),h);h=h.attr({id:e}).addClass(Zb);var n=c.image?k(V(Bb),c.image):k(),m=c.link?k(V("a"),c.link).click(function(){i.trigger("up.annotations",{target:m})}):k();E(Ca(e),{display:kb,position:mb},true);c.image||c.link&&h.append(m);c.link||c.image&&h.append(n);c.link&&c.image&&h.append(m.append(n));
h.appendTo(b)})},"prepare.annotations":function(){k.each(a(Oa),function(b){k(Ca(b)).hide()})},"frameChange.annotations":function(b,e){if(!(!a(ba)||e!==t)){var c=a(J),h=a(W),n=a(Ya);k.each(a(Oa),function(m,l){m=k(Ca(m));var q=l.start||1,w=l.end,s=s||a(L),y=s-1,C=l.at?l.at[y]=="+":false;y=l.at?y:y-q+1;s=typeof l.x!=ub?l.x:l.x[y];var K=typeof l.y!=ub?l.y:l.y[y];l=s!==t&&K!==t&&(l.at?C:y>=0&&(!w||y<=w-q));if(h){q=s>h-c&&n>=0&&n<c;s=!(s<c&&n>h-c)?s:s+h;s=!q?s:s-h;s-=n}if(a(Wa)){q=a(Jb);s=s&&s*q;K=K&&K*
q}s={display:l?Lb:kb,left:A(s),top:A(K)};m.css(s)})}},"up.annotations":function(b,e){if(!(G>10||qb)){b=k(e.target);(b.is("a")?b:b.parents("a")).attr("href")&&(G=10)}},"up.steppable":function(){G||qb||i.trigger(a(cb).x-i.offset().left>0.5*a(J)?"stepRight":"stepLeft")},"stepLeft stepRight":function(){v()},stepLeft:function(){d(P,false);d(z,a(z)-a(bb)*a(wa))},stepRight:function(){d(P,true);d(z,a(z)+a(bb)*a(wa))},stepUp:function(){d(X,a(X)-1)},stepDown:function(){d(X,a(X)+1)},resize:function(b,e){if(!(a(Ma)&&
!e)){var c=a(W),h=a(Xa);b=a(aa);var n=!a($).length||c,m=g.rows||1;c=a($).length?!c?t:A(c)+D+A(b):c&&A(c)+D+A((b+h)*m-h)||A((a(J)+h)*a(ra)-h)+D+A((b+h)*a(Fb)*m*(g.directional?2:1)-h);i.css({height:n?A(b):null,backgroundSize:c});e||i.trigger("imagesChange")}},"setup.fu":function(){d(L,g.frame+(g.row-1)*a(O));i.trigger("preload")},"wheel.fu":function(){qb=false},"clean.fu":function(){i.trigger("teardown")},"loaded.fu":function(){i.trigger("opening")}},pool:{"tick.reel.preload":function(){if(!(!(pa||
a(Ma))||a(Ja))){var b=a(J),e=Uc(za.$.css(J)),c=a($).length||1,h=M(1/c*a(ba)*b);za.$.css({width:e+(h-e)/3+1});if(a(ba)===c&&e>b-1){pa=false;za.$.fadeOut(300,function(){za.$.css({opacity:1,width:0})})}}},"tick.reel":function(b){if(!a(Ja)){var e=a(na),c=Z(ea),h=g.monitor;if(!(!o.intense&&Vc())){if(Q){e=e-a(gc)/c*Q;e=d(na,e>0.1?e:(Q=T=0))}h&&mc.text(a(h));e&&Q++;T&&T++;qc(0);Sa=true;if(T&&!e)return U(b);if(a(ca))return U(b,v());if(!(a(xa)>0)){if(!g.loops&&g.rebound){!T&&!(a(z)%1)?Tb++:(Tb=0);Tb>=g.rebound*
1E3/c&&d(P,!a(P))}b=a(wa)*Ha(1,a(P));c=a(gb);e=(!a(Qa)||rc||!c?e:H(a(ua))+e)/Z(ea);d(z,a(z)-e*b);c=!g.duration?c:c>0&&d(gb,c-1);!c&&a(Qa)&&i.trigger("stop")}}}},"tick.reel.opening":function(){if(a(da)){var b=(g.entry||g.speed)/Z(ea)*(g.cw?-1:1),e=d(xa,a(xa)-1);d(z,a(z)+b);e||i.trigger("openingDone")}}}},pa=false,U=function(b,e){return b.stopImmediatePropagation()||e},ga=function(){i.trigger("setup")},T,Q=0,Aa=function(){return T=0},v=function(){clearTimeout(Mb);fa.unbind(nb+x(da),I.pool[nb+x(da)]);
d(xa,0);d(Hb,true);return T=-g.timeout*Z(ea)},G=0,qb=false,rc=false,mc=k(),za=function(){E(D+x(sc),{position:mb,left:0,bottom:0,height:g.preloader,overflow:Kb,backgroundColor:"#000"});return za.$=k(V(sa),{"class":sc})},Pa=function(b){E(D+x(tc)+x(b),{position:mb,width:0,height:0,overflow:Kb,backgroundColor:"#000"});return Pa["$"+b]=k(V(sa),{"class":tc+D+b})},E=function(b,e,c){function h(n){var m=[];k.each(n,function(l,q){m.push(l.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+A(q)+";")});return"{"+m.join(S)+
"}"}c=c?S:a(fc);b=b.replace(/^/,c).replace(oa,oa+c);return E.rules.push(b+h(e))&&e},Vc=function(){var b=a(aa),e=a(J),c=i[0].getBoundingClientRect();return c.top<-b||c.left<-e||c.right>e+k(R).width()||c.bottom>b+k(R).height()},Tb=0,ob={x:0,y:0},qc=function(b){return Ra.push(b)&&Ra.shift()&&b},jb=function(){return Ra=[0,0]},Ra=jb(),pc=g.graph||o.math[g.loops?"hatch":"envelope"],kc=function(){clearTimeout(Nb);Nb=setTimeout(Rb,o.resize_gauge)},Rb=function(){if(i.width()!=a(J)){var b=a($b),e=d(Jb,i.width()/
b.width);k.each(b,function(c,h){d(c,M(h*e))});i.trigger("resize")}},Mb,Nb,pb=function(b,e,c){var h=d(db,a(z));d(Gb,a(ta));var n=g.loops;d(eb,n?0:-h*b);d(fb,n?b:b-h*b);return e!==t&&d(cb,{x:e,y:c})||t},Sa=true,ha=fa;try{if(fa[0]!=top.document)ha=fa.add(top.document)}catch(Zc){}top===self?k():function(b){k("iframe",ha.last()).each(function(){try{if(k(this).contents().find(Qb).html()==k(Qb).html())return(b=k(this))&&false}catch(e){}});return b}();E.rules=[];I.setup()});sb=sb||function i(){var d=+new Date,
a=Z(ea);if(!a)return sb=null;fa.trigger(nb);o.cost=(+new Date+o.cost-d)/2;return sb=setTimeout(i,vb(4,1E3/a-o.cost))}();return k(N)}else if(typeof u=="string")if(f.length==1)return p[u];else{if(r!==t){o.normal[u]&&(r=o.normal[u](r,p));if(p[u]===t)p[u]=r;else if(p[u]!==r)j.trigger(u+"Change",[t,p[u]=r])}return j}},unreel:function(){return this.trigger("teardown")}},re:{image:/^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,ua:[/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i,/(webkit)\/([\d.]+)/i,/(mozilla)\/([\d.]+)/i],
array:/ *, */,lazy_agent:/\(iphone|ipod|android|fennec|blackberry/i,frame_klass:/frame-\d+/,substitution:/(@([A-Z]))/g,sequence:/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/},cdn:"http://code.vostrel.net/",math:{envelope:function(f,j,p,u,r,g){return j+Fa(u,r,-f*g)/p},hatch:function(f,j,p,u,r,g){f=(f<u?r:0)+f%r;f=j+-f*g/p;return f-rb(f)},interpolate:function(f,j,p){return j+f*(p-j)},distance:function(f,j,p){var u=p/2;f=j-f;return f<-u?f+p:f>u?f-p:f}},preload:{fidelity:function(f,
j,p){function u(d,a,I){function pa(G){for(;!(G>=1&&G<=Q);)G+=G<1?+Q:-Q;return i[I+G]||(i[I+G]=!!U.push(G))}if(!d.length)return[];var U=[],ga=4*a,T=j.frame,Q=d.length;a=true;for(var Aa=Q/ga,v=0;v<ga;v++)pa(T+M(v*Aa));for(;Aa>1;){v=0;ga=U.length;Aa/=2;for(a=!a;v<ga;v++)pa(U[v]+(a?1:-1)*M(Aa))}for(v=0;v<=Q;v++)pa(v);for(v=0;v<U.length;v++)U[v]=d[U[v]-1];return U}var r=j.orbital,g=r?2:j.rows||1,N=r?p(ra):p(O);p=(j.row-1)*N;r=[].concat(f);var i=new Array(f.length+1);f=g<2?[]:r.slice(p,p+N);return u(f,
1,p).concat(u(r,g,0))},linear:function(f){return f}},substitute:function(f,j){return f.replace(o.re.substitution,function(p,u,r){return typeof o.substitutes[r]=="function"?o.substitutes[r](j):uc[r]?j(uc[r]):u})},substitutes:{T:function(){return+new Date}},normal:{fraction:function(f,j){if(f===null)return f;return j[Ia].loops?f-rb(f):Fa(0,1,f)},tier:function(f){if(f===null)return f;return Fa(0,1,f)},row:function(f,j){if(f===null)return f;return M(Fa(1,j[Ia].rows,f))},frame:function(f,j){if(f===null)return f;
var p=j[Ia];j=j[O]*(p.orbital?2:p.rows||1);f=M(p.loops?f%j||j:Fa(1,j,f));return f<0?f+j:f},images:function(f,j){var p=o.re.sequence.exec(f);return!p?f:o.sequence(p,j[Ia])}},sequence:function(f,j){if(f.length<=1)return j.images;var p=[],u=j.orbital,r=f[1],g=f[2],N=f[4];N=N!==t?+N:1;var i=u?2:j.rows||1;j=u?j.footage:j.stitched?1:j.frames;i=+(f[5]||i*j)-N;f=+f[7]||1;for(j=0;j<=i;){p.push(r.replace(g,yc(N+j+S,g.length,"0")));j+=f}return p},instances:k(),leader:Z,resize_gauge:300,cost:0},fa=k(Y);Y=navigator.userAgent;
var Ba=o.re.ua[0].exec(Y)||o.re.ua[1].exec(Y)||o.re.ua[2].exec(Y),Ub=+Ba[2].split(".").slice(0,2).join(".");Ba=Ba[1]=="MSIE";var Wc=!(Ba&&Ub<8),Ac=!(Ba&&Ub<9),sb,B="reel",Ab=B+"-overlay",tc=B+"-indicator",sc=B+"-preloader",nc=B+"-monitor",Zb=B+"-annotation",lb=B+"-panning",Ob=B+"-loading",bc="frame-",qa=Math,M=qa.round,rb=qa.floor,ma=qa.ceil,Ga=qa.min,vb=qa.max,H=qa.abs,Uc=parseInt,Ta=o.math.interpolate,Oa="annotations",ib="area",Pb="auto",hc="backup",P="backwards",bb="bit",gc="brake",Za="cache",
cc=Za+"d",Ib="center",hb="click",ca=hb+"ed",cb=ca+"_location",db=ca+"_on",Gb=ca+"_tier",wa="cwish",$a="departure",La="destination",ab="distance",ra="footage",z="fraction",L="frame",ec="framelock",O="frames",aa="height",fb="hi",Kb="hidden",Eb="image",$="images",Ma="loading",da="opening",xa=da+"_ticks",eb="lo",Ia="options",Qa="playing",ba="preloaded",Jb="ratio",Na="reeling",Hb="reeled",Wa="responsive",Ka="revolution",Cb="revolution_y",X="row",dc="rowlock",Fb="rows",Ja="shy",Xa="spacing",ua="speed",
fc="stage",W="stitched",Ya=W+"_shift",Db=W+"_travel",Sb="stopped",ya="style",ea="tempo",gb="ticks",ta="tier",$b="truescale",na="velocity",va="vertical",J="width",F=x(B),ia=x("pan")+F,Lc="dragstart"+F,Kc="mousedown"+F,Jc="mouseenter"+F,Sc="mouseleave"+ia,Rc="mousemove"+ia,Tc="mouseup"+ia,Ic="mousewheel"+F,nb="tick"+F,Qc="touchcancel"+ia,Pc="touchend"+ia,Ec="touchstart"+F,Oc="touchmove"+ia,Mc="deviceorientation"+F,jc="resize"+F,S="",D=" ",oa=",",mb="absolute",Lb="block",Da="@CDN@",sa="div",lc="hand",
Qb="head",zb="html",ja="id",Bb="img",Vb="jquery."+B,kb="none",ub="object",xb="string",Dc=[J,aa,Xa,Ka,Cb,W,Ya,Db],uc={W:J,H:aa},oc=Wc?xc("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7"):Da+"blank.gif",Gc=Ea(Da+Vb+".cur")+oa+"move",Fc=Ea(Da+Vb+"-drag.cur")+oa+"move",Hc=Ea(Da+Vb+"-drag-down.cur")+oa+"move",ka=o.touchy="ontouchstart"in R||!!navigator.msMaxTouchPoints;o.lazy=o.re.lazy_agent.test(Y);var Nc=ka?t:Ba&&Ub<9?1:0,Xc=k.cleanData;k.cleanData=function(f){Xc(k(f).each(function(){k(this).triggerHandler("clean")}))};
k.extend(k.fn,o.fn)&&k(o.scan);return o}}(jQuery,window,document)});
