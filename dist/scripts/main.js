"use strict";var utils={getFF:function(e,t){window.jsonFlickrFeed=function(e){window.jsonFlickrFeed=void 0;try{delete window.jsonFlickrFeed}catch(i){}a&&a.removeChild(n),t(e)};var a=document.getElementsByTagName("head")[0],n=document.createElement("script");return n.charset="UTF-8",n.src=utils.addtags(e.url,e.tags),a.appendChild(n),!0},addtags:function(e,t){return""===t?e:e+"&tags="+t},getCompater:function(e){return function(t,a){return t[e]<a[e]?-1:t[e]>a[e]?1:0}}},myapp={feed:[],params:{url:"https://api.flickr.com/services/feeds/photos_public.gne?format=json&lang=en-us",filter:"count",tags:""},saveFeed:function(e){var t=0;myapp.feed=e.items.map(function(e){return e.count=t++,e}),myapp.drawFeed()},getItem:function(e){var t=document.createElement("a");return t.className="item",t.target="_blank",t.href=e.link,t.innerHTML='       <div class="img"><img src="'+e.media.m+'"></div>       <div class="desc">         <h4>'+e.title+'</h4>         <p class="date">'+e.date_taken+'</p>         <p class="tags">'+e.tags+"</p>       </div> ",t},drawFeed:function(){var e=document.createElement("div");e.className="feed",myapp.feed.sort(utils.getCompater(myapp.params.filter)).map(myapp.getItem).forEach(function(t){e.appendChild(t)}),feedrplace.replaceChild(e,feedrplace.childNodes[0])},updatefilter:function(){myapp.params.filter=feedfilter.value,myapp.drawFeed()},updatetags:function(){myapp.params.tags=feedtags.value,myapp.init()},init:function(){utils.getFF(myapp.params,myapp.saveFeed)}};myapp.init();