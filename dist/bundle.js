!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=fabric},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o);let r=!1,a=null,l=null;function c(){r&&(l.remove(a),r=!1,document.getElementById("labelNamePopUp").style.display="none")}window.labelBndBox=function(){const t=document.getElementById("label-title").value;document.getElementById("labelNamePopUp").style.display="none";const e=new i.a.Text(t,{fontSize:10,fill:"yellow",left:a.left,top:a.top,width:a.width,height:a.height}),n=new i.a.Group([a,e],{left:a.left,top:a.top,width:a.width,height:a.height,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0.1)"});r=!0,l.remove(a),l.add(n)};let u=null,s=!1,d=!1;const f={};function h(){u.backgroundColor&&(c(),s=!0,u.discardActiveObject(),u.renderAll(),u.forEachObject(t=>{t.selectable=!1}),u.defaultCursor="crosshair",u.hoverCursor="crosshair")}function g(t){if(d){s=!1,d=!1,f.rect.setCoords(),f.rect.selectable=!1,u.defaultCursor="default",u.hoverCursor="move",u.forEachObject(t=>{t.selectable=!0});const e=u.getPointer(t.e);!function(t,e,n,o){a=n,l=o;const i=document.getElementById("labelNamePopUp");i.style.display="block";const c=document.getElementById("canvas-wrapper").getBoundingClientRect(),u=c.top,s=c.left;i.style.top=`${e+u}px`,i.style.left=`${t+s}px`,r=!0}(e.x,e.y,f.rect,u)}}function m(){c(),u.remove(u.getActiveObject())}function b(t){u=t,t.on("mouse:down",()=>{!function(){if(s){d=!0;const t=u.getPointer(u.e);f.origX=t.x,f.origY=t.y,f.rect=new i.a.Rect({left:f.origX,top:f.origY,width:t.x-f.origX,height:t.y-f.origY,stroke:"rgba(255,0,0)",strokeWidth:2,fill:"rgba(255,0,0,0)"}),u.add(f.rect)}}()}),t.on("mouse:over",t=>{!function(t){t.target&&t.target._objects&&(t.target._objects[0].set("fill","rgba(255,0,0,0.2)"),u.renderAll())}(t)}),t.on("mouse:out",t=>{!function(t){t.target&&t.target._objects&&(t.target._objects[0].set("fill","rgba(255,0,0,0"),u.renderAll())}(t)}),t.on("mouse:move",t=>{!function(t){if(!d)return;const e=u.getPointer(t.e);f.origX>e.x&&f.rect.set({left:Math.abs(e.x)}),f.origY>e.y&&f.rect.set({top:Math.abs(e.y)}),f.rect.set({width:Math.abs(f.origX-e.x)}),f.rect.set({height:Math.abs(f.origY-e.y)}),u.renderAll()}(t)}),t.on("mouse:up",t=>{g(t)})}const p={uploaded:!1,name:null},w={};let x=null;function y(t,e){e?function(t,e){const n=document.createElement("canvas");n.width=e.width,n.height=e.height,n.getContext("2d").drawImage(t,0,0,e.width,e.height),x.setWidth(n.width),x.setHeight(n.height),x.setBackgroundColor({source:n.toDataURL()},()=>{x.renderAll()})}(t,e):function(t){x.setWidth(t.width),x.setHeight(t.height),x.setBackgroundColor({source:t.src},()=>{x.renderAll()})}(t)}function v(t){const e={},n=w.maximumCanvasWidth/t.width;return e.width=w.maximumCanvasWidth,e.height=t.height*n,e}function j(){p.uploaded=!0;const t=this;if(w.maximumCanvasHeight<t.height){let e=function(t){const e={},n=w.maximumCanvasHeight/t.height;return e.height=w.maximumCanvasHeight,e.width=t.width*n,e}(t);w.maximumCanvasWidth<e.width&&(e=v(e)),y(t,e)}else if(w.maximumCanvasWidth<t.width){y(t,v(t))}else y(t)}function C(t){const e=new Image;e.src=t.target.result,e.onload=j}function B(t){if(c(),t.files&&t.files[0]){const e=new FileReader;p.name=t.files[0].name,e.onload=C,e.readAsDataURL(t.files[0])}}function O(t){x=t,w.maximumCanvasHeight=window.innerHeight-54,w.maximumCanvasWidth=window.innerWidth-110}function k(t){return function t(e){let n="";return Object.keys(e).forEach(o=>{"object"==typeof e[o]?n+=`<${o}>${t(e[o])}</${o}>`:n+=`<${o}>${e[o]}</${o}>`}),n}(t)}let E=null;function _(t){const e=document.createElement("a"),n=new Blob([t],{type:"text/plain"});return e.setAttribute("href",window.URL.createObjectURL(n)),e.setAttribute("download",`${new RegExp("^([^.]+)").exec(p.name)[0]}.xml`),e.dataset.downloadurl=["text/plain",e.download,e.href].join(":"),e.draggable=!0,e.classList.add("dragout"),e}function A(){if(c(),E.backgroundColor){!function(t){_(t).click()}(k(function(t,e){const n={};return n.annotations=function(t,e){return{folder:"Unknown",filename:e.name,path:"Unknown",source:{database:"Unknown"},size:{width:t.getWidth(),height:t.getHeight(),depth:1},segmented:0}}(t,e),n.annotations.object=function(t){let e={};return t.forEachObject(t=>{const n=t._objects[0],o=t._objects[1].text;e={name:o,pose:"Unspecified",truncated:1,difficult:0,bndbox:{xmin:n.left,ymin:n.top,xmax:n.left+n.width,ymax:n.top+n.height}}}),e}(t),n}(E,p)))}}!function(){const t=new i.a.Canvas("c",{selection:!1});i.a.Object.prototype.transparentCorners=!1,function(t){b(t)}(t),O(t),E=t}(),window.createNewBndBox=h,window.removeBndBox=m,window.uploadImage=B,window.downloadXML=A}]);