(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[6],{92:function(e,t,n){"use strict";n.r(t);var r=n(56),a=n.n(r),c=n(57),i=n(58),s=n(59),o=n(62),u=n(61),h=n(60),p=n.n(h),v=n(0),l=n(1),j=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={review:null},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.prev=1,e.next=4,p.a.get("".concat("https://api.themoviedb.org","/3/movie/").concat(t,"/reviews?api_key=").concat("3c3f31939cc89ca41e272b4d5922ad13"));case 4:n=e.sent,r=n.data,this.setState({review:r.results}),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(1);case 11:case"end":return e.stop()}}),e,this,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.review;return e&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{children:e.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("p",{children:e.author}),Object(l.jsx)("p",{children:e.content})]})}))})})&&Object(l.jsx)("strong",{children:"We don`t have eny reviws for this move"})}}]),n}(v.Component);t.default=j}}]);
//# sourceMappingURL=6.7e3471d5.chunk.js.map