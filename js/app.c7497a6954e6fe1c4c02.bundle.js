(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,n)=>{const s=n(89),a=n(863),o=new Array(20).fill(0).map(((e,t)=>({title:`Ch ${t+1}`}))),{lightningChart:i,AutoCursorModes:r,emptyLine:l,AxisTickStrategies:c,AxisScrollStrategies:h,synchronizeAxisIntervals:g,UIOrigins:d,UIDraggingModes:m,emptyFill:u,Themes:M}=s,{createProgressiveFunctionGenerator:p}=a,f=document.getElementById("chart")||document.body,y=document.createElement("div");f.append(y),y.style.width="100%",y.style.height="1400px",y.style.display="flex",y.style.flexDirection="column";const S=i(),x=o.map(((e,t)=>{const n=document.createElement("div");y.append(n),n.style.height="20vh";const s=S.ChartXY({container:n}).setTitle("").setPadding({top:0,bottom:0}).setAutoCursorMode(r.disabled).setBackgroundStrokeStyle(l).setMouseInteractions(!1),a=s.getDefaultAxisX().setTickStrategy(c.Empty).setStrokeStyle(l).setScrollStrategy(h.progressive).setDefaultInterval((e=>({end:e.dataMax,start:(e.dataMax??0)-1e4,stopAxisAfter:!1}))),o=s.getDefaultAxisY().setTickStrategy(c.Empty).setStrokeStyle(l).setTitle(e.title).setTitleRotation(0).setThickness(60),i=s.addPointLineAreaSeries({dataPattern:"ProgressiveX",automaticColorIndex:t}).setName(`Channel ${t+1}`).setMaxSampleCount(2e4).setAreaFillStyle(u).setStrokeStyle((e=>e.setThickness(-1)));return{chart:s,series:i,axisX:a,axisY:o}})),I=x[0],A=x[x.length-1];I.chart.setTitle(`Multi-channel real-time monitoring (${o.length} chs, 1000 Hz)`);const k=A.axisX.setTickStrategy(c.Time,(e=>e.setMajorTickStyle((e=>e.setGridStrokeStyle(l))).setMinorTickStyle((e=>e.setGridStrokeStyle(l)))));g(...x.map((e=>e.axisX))),k.setNibInteractionScaleByDragging(!1).setNibInteractionScaleByWheeling(!1).setAxisInteractionZoomByWheeling(!1);const w=(e,t)=>{const n=k.getInterval(),s=n.end-n.start,a=s+.1*Math.sign(t.deltaY)*Math.abs(s);k.setInterval({start:n.end-a,end:n.end,stopAxisAfter:!1}),t.preventDefault(),t.stopPropagation()};k.onAxisInteractionAreaMouseWheel(w),x.forEach((e=>{e.chart.onSeriesBackgroundMouseWheel(w),e.series.onMouseWheel(w)})),x[x.length-1].chart.addUIElement().setText("Reset").setPosition({x:0,y:0}).setOrigin(d.LeftBottom).setMargin({left:4,bottom:4}).setDraggingMode(m.notDraggable).onMouseClick((e=>{const t=x[0].series.getXMax();k.setInterval({start:t-1e4,end:t,stopAxisAfter:!1}),x.forEach((e=>e.axisY.fit()))}));const P=[{length:400*Math.PI,func:e=>Math.sin(e/200)},{length:400*Math.PI,func:e=>Math.cos(e/200)},{length:800*Math.PI,func:e=>Math.cos(e/400)+Math.sin(e/200)},{length:800*Math.PI,func:e=>Math.sin(e/100)+Math.cos(e/400)},{length:800*Math.PI,func:e=>Math.sin(e/200)*Math.cos(e/400)},{length:1800*Math.PI,func:e=>Math.cos(e/900)},{length:3200*Math.PI,func:e=>Math.sin(e/1600)},{length:2600*Math.PI,func:e=>Math.sin(e/400)*Math.cos(e/1300)}];Promise.all(P.map((e=>p().setStart(0).setEnd(e.length).setStep(1).setSamplingFunction(e.func).generate().toPromise().then((e=>e.map((e=>e.y))))))).then((e=>{let t=window.performance.now(),n=0;const s=()=>{const a=window.performance.now(),o=Math.floor(1e3*(a-t)/1e3),i=Math.min(o-n,1e3),r=[];for(let t=0;t<x.length;t++){const s=e[t%e.length],a=[];for(let e=0;e<i;e++){const t={x:1*(n+e),y:s[(n+e)%s.length]};a.push(t)}r[t]=a}x.forEach(((e,t)=>e.series.appendJSON(r[t]))),n+=i,requestAnimationFrame(s)};s()}));let T=window.performance.now(),v=0,C=0;const b=I.chart.getTitle(),E=()=>{v++;const e=window.performance.now();C=1e3/((e-T)/v),requestAnimationFrame(E),I.chart.setTitle(`${b} (FPS: ${C.toFixed(1)})`)};requestAnimationFrame(E),setInterval((()=>{T=window.performance.now(),v=0}),5e3)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);