(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c,a,r=n(0),i=n(36),s=n.n(i),o=n(8),l=n(18),u=n(19),h=u.a.header(c||(c=Object(l.a)(["\nheight: 60px;\nbackground-color: lightgray;\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\npadding: 0 20px;\n\n\n\n\n\n\n"]))),p=n(14),j=n.n(p),m=n(20),d=n(10),b=n(11),v=n(13),x=n(12),O=n(21),f=n.n(O),g=n(1),y=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={muvies:[]},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat("https://api.themoviedb.org","/3/trending/movie/day?api_key=").concat("3c3f31939cc89ca41e272b4d5922ad13"));case 3:t=e.sent,n=t.data,this.setState({muvies:n.results}),console.log(this.state.muvies),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.props.match.url);var e=this.state.muvies;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Trending today"}),Object(g.jsx)("ul",{children:e.map((function(e){return Object(g.jsx)("li",{children:Object(g.jsx)(o.b,{to:"/movies/".concat(e.id),children:e.title})},e.id)}))})]})}}]),n}(r.Component),k=function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={muvie:{}},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var e=Object(m.a)(j.a.mark((function e(){var t,n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.muvieId,e.prev=1,e.next=4,f.a.get("".concat("https://api.themoviedb.org","/3/movie/").concat(t,"?api_key=").concat("3c3f31939cc89ca41e272b4d5922ad13"));case 4:n=e.sent,c=n.data,this.setState({muvie:c}),console.log(c),console.log(this.state.muvie.genres),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state.muvie;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("h1",{children:[t.title," ",t.release_date]}),Object(g.jsx)("img",{width:"300",src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:t.title}),Object(g.jsxs)("p",{children:["User score: ",Math.floor(t.popularity),"%"]}),Object(g.jsx)("h2",{children:"Overview"}),Object(g.jsx)("p",{children:t.overview}),Object(g.jsx)("strong",{children:"Genres"}),Object(g.jsx)("ul",{children:null===(e=t.genres)||void 0===e?void 0:e.map((function(e){return Object(g.jsx)("li",{children:e.name})}))})]})}}]),n}(r.Component),w=[{name:"Home",path:"/",exact:!0,component:y},{name:"Movies",path:"/movies",exact:!0,component:function(e){Object(v.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(g.jsx)("h1",{children:"MoviesPage"})}}]),n}(r.Component)},{name:"",path:"/movies/:muvieId",exact:!1,component:k}],I=u.a.nav(a||(a=Object(l.a)(["\n.list{\nlist-style: none;\ndisplay: flex;\nalign-items: center;\nmargin-right:- 30px;\n}\n\n.listItem{\nmargin-right: 30px;\n}\n\n.link{\n    text-decoration: none;\n    text-transform: uppercase;\n    color: salmon;\n\n}\n.activeLink{\n  color: blue;  \n}\n\n"]))),M=function(){return Object(g.jsx)(I,{children:Object(g.jsx)("ul",{className:"list",children:w.map((function(e){return Object(g.jsx)("li",{className:"listItem",children:Object(g.jsx)(o.b,{to:e.path,className:"link",activeClassName:"activeLink",exact:e.exact,children:e.name})},e.path)}))})})},C=function(){return Object(g.jsx)(h,{children:Object(g.jsx)(M,{})})},F=n(2),N=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(F.c,{children:w.map((function(e){return Object(g.jsx)(F.a,{path:e.path,exact:e.exact,component:e.component},e.path)}))})})},_=function(){return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(C,{}),Object(g.jsx)(N,{})]})};n(68);s.a.render(Object(g.jsx)(o.a,{children:Object(g.jsx)(_,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.df4ca611.chunk.js.map