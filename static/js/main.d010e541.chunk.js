(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(19),o=a.n(r),c=(a(26),a(10)),i=a(4),s=a(5),u=a(7),l=a(6),h=a(20),p=a.n(h),m=function(e){var t=e.searchQuery,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n,o="https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("20328481-fd22f6b33af33c123ae9427ab","&image_type=photo&orientation=horizontal&per_page=12");return p.a.get(o).then((function(e){return e.data.hits}))},d=(a(45),a(8)),b=a.n(d),j=a(1),f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.props.onSubmit(e.state.query),e.setState({query:""})},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:b.a.Searchbar,onSubmit:this.handleSubmit,children:Object(j.jsxs)("form",{className:b.a.SearchForm,children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchForm_button,children:Object(j.jsx)("span",{className:b.a.SearchForm_button_label,children:"Search"})}),Object(j.jsx)("input",{className:b.a.SearchForm_input,type:"text",autocomplete:"off",autofocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})]})})}}]),a}(n.Component),g=(a(47),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("ul",{className:"ImageGallery",children:this.props.children})}}]),a}(n.Component)),O=(a(48),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("li",{className:"ImageGalleryItem",id:this.props.id,children:Object(j.jsx)("img",{src:this.props.imageURL,alt:this.props.imageURL,className:"ImageGalleryItem-image",onClick:function(){return e.props.onClick(e.props.modalURL)}})},this.props.id)}}]),a}(n.Component)),y=a(21),v=a.n(y),S=function(){return Object(j.jsx)(v.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3})},_=(a(69),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(j.jsx)("button",{className:"Button",type:"button",onClick:function(){return e.props.onClick()}})}}]),a}(n.Component));_.defaultProps={};var x=_,k=(a(70),function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(j.jsx)("div",{className:"Modal",children:Object(j.jsx)("img",{src:this.props.modalURL,alt:this.props.modalURL})})})}}]),a}(n.Component)),C=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],showModal:!1,searchQuery:"",page:1,isLoading:!1,error:null,modalImage:""},e.onChangeQuery=function(t){e.setState({searchQuery:t,page:1,images:[],error:null})},e.fetchImages=function(){var t=e.state,a={searchQuery:t.searchQuery,page:t.page};e.setState({isLoading:!0}),m(a).then((function(t){e.setState((function(e){return{images:[].concat(Object(c.a)(e.images),Object(c.a)(t)),page:e.page+1}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenModal=function(t){e.setState({modalImage:t}),e.toggleModal()},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchImages()}},{key:"render",value:function(){var e=this,t=this.state,a=t.images,n=t.isLoading,r=t.error,o=t.showModal,c=t.modalImage;return Object(j.jsxs)("div",{className:"App",children:[o&&Object(j.jsx)(k,{modalURL:c,onClose:this.toggleModal}),r&&Object(j.jsx)("p",{children:"Oops!"}),Object(j.jsx)(f,{onSubmit:this.onChangeQuery}),Object(j.jsx)(g,{children:a.map((function(t){return Object(j.jsx)(O,{id:t.id,imageURL:t.webformatURL,modalURL:t.largeImageURL,onClick:e.onOpenModal})}))}),n&&Object(j.jsx)(S,{}),a.length>0&&Object(j.jsx)(x,{onClick:this.fetchImages})]})}}]),a}(n.Component);C.defaultProps={};var w=C;o.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1ks5o",SearchForm:"Searchbar_SearchForm__2z-RK",SearchForm_button:"Searchbar_SearchForm_button__3Oyra",SearchForm_button_label:"Searchbar_SearchForm_button_label__2jOh5",SearchForm_input:"Searchbar_SearchForm_input__P9gni"}}},[[71,1,2]]]);
//# sourceMappingURL=main.d010e541.chunk.js.map