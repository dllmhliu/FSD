(function(t){
    function e(e){
        for(var r,i,l=e[0],u=e[1],s=e[2],d=0,f=[];d<l.length;d++)
        i=l[d],n[i]&&f.push(n[i][0]),n[i]=0;
        for(r in u)
        Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);c&&c(e);
        while(f.length)
        f.shift()();
        return o.push.apply(o,s||[]),a()
    }
    function a(){
        for(var t,e=0;e<o.length;e++){
            for(var a=o[e],r=!0,l=1;l<a.length;l++){
                var u=a[l];0!==n[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))
        }
        return t
    }
    var r={},n={app:0},o=[];
    function i(e){
        if(r[e])
            return r[e].exports;
        var a=r[e]={i:e,l:!1,exports:{}};
        return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports
    }

    i.m=t,i.c=r,
    i.d=function(t,e,a){
        i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})
    },
    i.r=function(t){
        "undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),
        Object.defineProperty(t,"__esModule",{value:!0})
    },
    i.t=function(t,e){
        if(1&e&&(t=i(t)),8&e)
        return t;
        if(4&e&&"object"===typeof t&&t&&t.__esModule)
        return t;
        var a=Object.create(null);
        if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)
        for(var r in t)
            i.d(a,r,function(e){return t[e]}.bind(null,r));
        return a
    }
    ,i.n=function(t){
        var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};
        return i.d(e,"a",e),e
    },
    i.o=function(t,e){
        return Object.prototype.hasOwnProperty.call(t,e)
    },
    i.p="/";
    var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);
    l.push=e,l=l.slice();
    for(var s=0;s<l.length;s++)
        e(l[s]);
    var c=u;
    o.push([0,"chunk-vendors"]),a()
})
({
    0:function(t,e,a){t.exports=a("56d7")},
    "034f":function(t,e,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},
    "4a20":function(t,e,a){},
    "56d7":function(t,e,a){
        "use strict";
        a.r(e);
        a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("5df3"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf"),a("0cdd");
        var r=a("2b0e"),n=a("5f5b");a("ab8b"),a("2dd8");
        r["default"].use(n["a"]);
        var o=function(){
            var t=this,e=t.$createElement,a=t._self._c||e;
            return a("div",{attrs:{id:"app"}},[a("h3",[t._v("Salary Income Predictor")]),a("Salary")],1)
        },
        i=[],l=function()
        {
            var t=this,e=t.$createElement,a=t._self._c||e;
            return a(
                "b-container",{attrs:{fluid:""}},
                [
                    a("b-row",{staticClass:"my-1",staticStyle:{width:"600px",margin:"auto"}},
                        [
                            a("b-col",{attrs:{sm:"4"}},[a("label",{attrs:{for:"input-live"}},[t._v("StartSalary:")])]),
                            a("b-col",{attrs:{sm:"8"}},
                                [
                                    a(
                                        "b-form-input",
                                        {
                                            attrs:{
                                                id:"input-live",
                                                state:t.salaryState,
                                                "aria-describedby":"input-live-help input-live-salary",
                                                placeholder:"Input your salary",trim:""},
                                                model:{
                                                    value:t.salary,
                                                    callback:function(e){
                                                        t.salary=e
                                                    },expression:"salary"}
                                                }
                                    ),
                                    a(
                                        "b-form-invalid-feedback",
                                        {
                                            attrs:{id:"input-live-salary"}
                                        },
                                        [t._v("\n      Do not Input Salary Less Than 1\n    ")]
                                    )
                                ],1)
                        ],1
                    ),
                    a("b-row",{staticClass:"my-1",staticStyle:{width:"600px",margin:"auto"}},
                        [
                            a("b-col",{attrs:{sm:"4"}},[a("label",{attrs:{for:"input-live"}},[t._v("Increment:(%)")])]),
                            a(
                                "b-col",
                                {attrs:{sm:"8"}},
                                [
                                    a("b-form-input",{attrs:{id:"input-live",state:t.inquotaState,placeholder:"Input your Increase Quota:","aria-describedby":"input-live-help input-live-inquota",trim:""},model:{value:t.inquota,callback:function(e){t.inquota=e},expression:"inquota"}}),
                                    a("b-form-invalid-feedback",{attrs:{id:"input-live-inquota"}},[t._v("\n      Do not Input Negative Number\n    ")])
                                ],1
                            )
                        ],1
                    ),
                    a("b-row",{staticClass:"my-1",staticStyle:{width:"600px",margin:"auto"}},
                        [
                            a("b-col",{attrs:{sm:"4"}},[a("label",{attrs:{for:"input-live"}},[t._v("Deductions:(%)")])]),
                            a("b-col",{attrs:{sm:"8"}},
                            [
                                a("b-form-input",{attrs:{id:"input-live",state:t.dequotaState,"aria-describedby":"input-live-help input-live-dequota",placeholder:"Input your Decrease Quota:",trim:""},model:{value:t.dequota,callback:function(e){t.dequota=e},expression:"dequota"}}
                                ),
                                a("b-form-invalid-feedback",{attrs:{id:"input-live-dequota"}},[t._v("\n      Do not Input Negative Number\n    ")])
                            ],1)
                        ],1
                    ),
                    a("b-row",{staticClass:"my-1",staticStyle:{width:"600px",margin:"auto"}},
                        [
                            a("b-col",{attrs:{sm:"4"}},[a("label",{attrs:{for:"input-live"}},[t._v("Frequently:")])]),
                            a("b-col",{attrs:{sm:"8"}},
                            [
                                a("b-form-select",{attrs:{options:t.options},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})
                            ],1)
                        ],1
                    ),
                    a("b-row",{staticClass:"my-1",staticStyle:{width:"600px",margin:"auto"}},
                        [
                            a("b-col",{attrs:{sm:"8"}}),
                            a("b-col",{staticStyle:{"text-align":"end"},attrs:{sm:"4"}},
                                [a("b-button",{attrs:{variant:"success"},on:{click:function(e){return t.querysalary()}}},[t._v("Button")])]
                            ,1)
                        ],1
                    ),
                    a(
                        "b-row",{staticClass:"my-1"},
                        [   
                            a("b-col",{attrs:{sm:"4"}},[a("Inreport",{attrs:{inreport:t.inreport}})],1),
                            a("b-col",{attrs:{sm:"4"}},[a("Dereport",{attrs:{dereport:t.dereport}})],1),
                            a("b-col",{attrs:{sm:"4"}},[a("Predictreport",{attrs:{predict:t.predict}})],1)
                        ]
                        ,1
                    )
                ],1
            )
        },
            u=[],s=a("bc3a"),c=a.n(s),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t.inreport?a("b-table",{attrs:{striped:"",hover:"",items:t.inreport,fields:t.fields}}):t._e()],1)},f=[function(){var t=this,e=t.$createElement,a=t._self._c||e;
                return a("label",[a("strong",[t._v("Increment Report")])])}],p={name:"Inreport",props:{inreport:Array},
                data:function(){return{fields:["salary","inquota","count","amount","year"]}}},b=p,v=a("2877"),m=Object(v["a"])(b,d,f,!1,null,null,null),y=m.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t.dereport?a("b-table",{attrs:{striped:"",hover:"",items:t.dereport,fields:t.fields}}):t._e()],1)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[a("strong",[t._v("Deduction Report")])])}],q={name:"Dereport",props:{dereport:Array},data:function(){return{fields:["salary","dequota","count","amount","year"]}}},x=q,S=Object(v["a"])(x,h,_,!1,null,null,null),g=S.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;
                return a("div",[t._m(0),t.predict?a("b-table",{attrs:{striped:"",hover:"",items:t.predict,fields:t.fields}}):t._e()],1)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",[a("strong",[t._v("Prediction Report")])])}],j={name:"Predictreport",props:{predict:Array},data:function(){return{fields:["salary","dequota","inquota","amount","year"]}}},I=j,P=Object(v["a"])(I,w,O,!1,null,null,null),k=P.exports,D={name:"Salary",components:{Inreport:y,Dereport:g,Predictreport:k},computed:{salaryState:function(){return this.salary>1},inquotaState:function(){return this.inquota>0},dequotaState:function(){return this.dequota>0}},data:function(){return{salary:"",inquota:"",dequota:"",inreport:[],dereport:[],predict:[],count:null,
                options:[{value:null,text:"Please select an option"},{value:"3",text:"Quarterly"},{value:"6",text:"Half-Yearly"},{value:"12",text:"Annually"}]}},methods:{querysalary:function(){var t=this;c.a.post("/increase",{salary:this.salary,inquota:this.inquota,dequota:this.dequota,count:this.count}).then(function(e){t.inreport=e.data.data}),
                c.a.post("/decrease",{salary:this.salary,inquota:this.inquota,
                    dequota:this.dequota,count:this.count}).then(function(e){t.dereport=e.data.data}),
                    c.a.post("/predict",{salary:this.salary,inquota:this.inquota,dequota:this.dequota,count:this.count}).then(function(e){t.predict=e.data.data})}}},$=D,E=(a("bfef"),Object(v["a"])($,l,u,!1,null,"14c9d73e",null)),C=E.exports,A={name:"app",components:{Salary:C}},M=A,N=(a("034f"),Object(v["a"])(M,o,i,!1,null,null,null)),T=N.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(T)}}).$mount("#app")},"64a9":function(t,e,a){},bfef:function(t,e,a){"use strict";var r=a("4a20"),n=a.n(r);n.a}
                });
    //# sourceMappingURL=app.5a04ca29.js.map