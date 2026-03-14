const COST=6160,TOTAL_TWD=200000,FUND_END=new Date('2026-03-15T23:59:59');
const PORTFOLIO=[
  {sym:'BTC',name:'Bitcoin',gid:'bitcoin',amt:0.02002066,cost:400},
  {sym:'ETH',name:'Ethereum',gid:'ethereum',amt:0.77086015,cost:2200},
  {sym:'ADA',name:'Cardano',gid:'cardano',amt:2263.148986,cost:1600},
  {sym:'SUI',name:'Sui',gid:'sui',amt:108.46626518,cost:115},
  {sym:'SOL',name:'Solana',gid:'solana',amt:2.01357722,cost:300},
  {sym:'LINK',name:'Chainlink',gid:'chainlink',amt:9.54441335,cost:120},
  {sym:'PENDLE',name:'Pendle',gid:'pendle',amt:18.7230096,cost:90},
  {sym:'DOT',name:'Polkadot',gid:'polkadot',amt:16.165636,cost:60},
  {sym:'POL',name:'Polygon',gid:'polygon-ecosystem-token',amt:184.0067,cost:90},
  {sym:'LDO',name:'Lido DAO',gid:'lido-dao',amt:29.39276696,cost:60},
  {sym:'TON',name:'Toncoin',gid:'the-open-network',amt:8.5489,cost:60},
  {sym:'DOGE',name:'Dogecoin',gid:'dogecoin',amt:99.92,cost:30},
];
const FALLBACK={bitcoin:70830.18,ethereum:2094.41,cardano:0.2653,sui:0.9913,solana:88.21,chainlink:9.0865,pendle:1.2666,polkadot:1.447,'polygon-ecosystem-token':0.09564,'lido-dao':0.2957,'the-open-network':1.3064,dogecoin:0.09563};
const MONTHLY=[
  {m:'2024/04',pnl:-2},{m:'2024/05',pnl:-208},{m:'2024/06',pnl:-96},{m:'2024/07',pnl:-645},
  {m:'2024/08',pnl:-1048},{m:'2024/09',pnl:-1053},{m:'2024/10',pnl:-538},{m:'2024/11',pnl:1063},
  {m:'2024/12',pnl:3562},{m:'2025/01',pnl:2478},{m:'2025/02',pnl:1159},{m:'2025/03',pnl:-309},
  {m:'2025/04',pnl:-783},{m:'2025/05',pnl:766},{m:'2025/06',pnl:292},{m:'2025/07',pnl:1216},
  {m:'2025/08',pnl:2886},{m:'2025/09',pnl:2668},{m:'2025/10',pnl:1688},{m:'2025/11',pnl:82},
  {m:'2025/12',pnl:-410},{m:'2026/01',pnl:-62},{m:'2026/02',pnl:-2099},{m:'2026/03',pnl:-2061},
];
const REALIZED=[
  {c:'AEVO',inv:90,ret:37.66,t:'2024/06'},{c:'BLUR',inv:60,ret:27.17,t:'2024/06'},
  {c:'GPT',inv:30,ret:12.93,t:'2024/06'},{c:'SAND',inv:15,ret:7.83,t:'2024/06'},
  {c:'LOOKS',inv:15,ret:6.10,t:'2024/06'},{c:'WLD',inv:60,ret:28.62,t:'2024/06'},
  {c:'FET',inv:60,ret:80,t:'2024/12'},{c:'ZKJ',inv:75,ret:81,t:'2024/12'},
  {c:'STRK',inv:120,ret:67,t:'2024/12'},{c:'ARB',inv:150,ret:54,t:'2025/08'},
  {c:'APT',inv:90,ret:45,t:'2025/08'},{c:'JTO',inv:60,ret:47,t:'2025/08'},
  {c:'DYDX',inv:150,ret:41,t:'2025/08'},{c:'PYTH',inv:150,ret:39,t:'2025/08'},
  {c:'UNI',inv:30,ret:34,t:'2025/08'},{c:'JUP',inv:60,ret:30,t:'2025/08'},
  {c:'OP',inv:90,ret:28,t:'2025/08'},{c:'GMX',inv:60,ret:28,t:'2025/08'},
  {c:'AVAX',inv:30,ret:17,t:'2025/08'},
];
const PROSP_DATA=[
  {t:'動機',b:'受美國審核通過的比特幣 ETF 啟發，決定建構自己的基金組合，並親自操盤。加密貨幣領域目前一般人不夠容易進入，希望藉由此計畫帶大家參與加密貨幣市場。\n\n我有策略，你有閒錢。'},
  {t:'目的',b:'擴大利潤、利益共享。\n\n我能體驗基金經理人的壓力，想辦法讓大家賺錢；你能參與加密貨幣市場，體驗漲跌波動。'},
  {t:'原則',b:'• 一切金流、操作，公開透明，經得起查驗與審問\n• 基金端將確保投資人身份、資料完全保密\n• 投資之本金須為投資人閒錢，請勿借錢投資\n• 佛系投資計畫，沒有集資壓力，也不用幫我做人情\n• 若對此計畫之投資合作關係有任何擔心或疑慮，請千萬別加入，你們是我最珍貴的寶藏'},
  {t:'分潤機制',b:'投資人優先，經理人劣後 —— 你們全部人都賺錢了，我才會開始賺錢。\n\n【虧損】經理人全數負擔，償還投資人本金\n【獲利 10% 以內】本金 + 獲利全數歸投資人\n【獲利 10% 以上】本金 + 10% 利息 + 剩餘獲利 10% Bonus\n\n投資人最大損失：歸還本金，兩年內沒半毛利息\n經理人最大損失：虧光 10 萬台幣'},
  {t:'投資期間',b:'2024/3 ~ 2026/3（共兩年，無法在中間贖回）\n\n預計 2025/9 ~ 2026/3 左右陸續賣出，直到計畫到期。\n\n費用：手續費約 0.2~0.5%（交易所收取），管理費 0 元。'},
  {t:'極端情況 & 擔保',b:'極端情況（最差情況為資金歸 0，本基金無融資行為，不會有負債產生）：投資失利、交易所倒閉、戰爭開打。\n\n擔保：\n• 一般狀況：以存款現金優先償還\n• 次等狀況：以股票、資產變賣償還\n• 最差狀況：以未來所得作為還款計畫\n\n確定合作後，會簽署借貸契約書，此契約具法律效益，可以強制執行。'},
  {t:'大戶福利',b:'投資超過 1 萬元者為大戶，享有：\n• 優先償還權\n• 個人化財務分析 & 建議\n• 限定款 NFT\n• VIP 招待餐會活動\n\n餐會規格視獲利而定，從便當＋麥香奶茶到遊艇派對＋香檳，甚至國外旅行！'},
];
const PIE_C=['#c9956c','#7ab8d4','#d4a05f','#5dba7d','#d45555','#a17dc9','#d4c75d'];
const COIN_COLORS={BTC:'#f5a623',ETH:'#8b6cf6',ADA:'#2dd4a0',SOL:'#2563eb',SUI:'#67d8f9',LINK:'#22b07d','其他':'#ef5555'};

let prices=null,fundValue=0,fundGain=null,reports=[];
const $=id=>document.getElementById(id);
const fmt=(n,d=2)=>n==null?'—':Number(n).toLocaleString(undefined,{minimumFractionDigits:d,maximumFractionDigits:d});
const fmtPct=n=>n==null?'—':(n>=0?'+':'')+((n*100).toFixed(2))+'%';
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}
function linkify(t,isThoughts){
  let h=esc(t);
  // Remove 基金儀表板 lines (performance section cleanup)
  h=h.replace(/.*基金儀表板.*(?:\n|$)/g,'');
  h=h.replace(/.*Google Sheet.*即時資料.*(?:\n|$)/g,'');
  // Convert markdown links [text](url)
  h=h.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g,'<a href="$2" target="_blank" rel="noopener">$1</a>');
  // Convert bare URLs not already in <a> tags
  h=h.replace(/(?<!href="|">)(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');
  // Convert **bold**
  h=h.replace(/\*\*([^*]+)\*\*/g,'<strong>$1</strong>');
  // Convert > blockquotes
  h=h.replace(/^&gt;\s?(.*)$/gm,'<blockquote style="border-left:2px solid var(--gold-d);padding-left:12px;margin:8px 0;color:var(--t2);font-style:italic">$1</blockquote>');
  // Style thoughts titles: lines starting with 關於、論、淺談 etc
  if(isThoughts){
    h=h.replace(/^(關於.+|論.+|淺談.+|記.+|致.+)$/gm,'<div class="thoughts-title">$1</div>');
  }
  return h;
}
function getCountdown(){const d=FUND_END-new Date();return d<=0?'已到期':Math.floor(d/864e5);}
function settlement(p,g){if(g==null)return null;if(g<=0)return p;if(g<=0.1)return p*(1+g);return p*1.1+p*(g-0.1)*0.1;}
function scrollTo_(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'});}

const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)document.querySelectorAll('.nav-link').forEach(l=>l.classList.toggle('on',l.dataset.s===e.target.id));});},{threshold:0.15,rootMargin:'-60px 0px -60% 0px'});
document.querySelectorAll('section[id]').forEach(s=>obs.observe(s));

async function fetchPrices(){
  const ids=PORTFOLIO.map(p=>p.gid).join(',');
  try{const r=await fetch('https://api.coingecko.com/api/v3/simple/price?ids='+ids+'&vs_currencies=usd');if(!r.ok)throw 0;prices=await r.json();}
  catch(e){prices={};Object.keys(FALLBACK).forEach(k=>{prices[k]={usd:FALLBACK[k]}});$('priceStatus').textContent='⚠ 即時幣價取得失敗，顯示為最近快照價格';$('priceStatus').classList.remove('hidden');}
  renderPortfolio();renderHero();updateCalc();
}
function renderHero(){
  $('heroCountdown').textContent=getCountdown();
  if(fundValue>0){$('heroValue').innerHTML='$'+fmt(fundValue,0);const g=fundGain;$('heroPnl').innerHTML='<span class="'+(g>=0?'up':'dn')+'">'+fmtPct(g)+'</span>';const u=fundValue-COST;$('heroPnlSub').textContent=(u>=0?'+':'')+fmt(u,0)+' U';}
}
function renderPortfolio(){
  const data=PORTFOLIO.map(c=>{const p=prices?.[c.gid]?.usd??null;const v=p!=null?p*c.amt:null;return{...c,price:p,val:v};}).sort((a,b)=>(b.val??0)-(a.val??0));
  fundValue=data.reduce((s,c)=>s+(c.val??0),0);fundGain=fundValue>0?(fundValue-COST)/COST:null;
  let html='';
  data.forEach(c=>{const isInt=c.sym==='BTC'||c.sym==='ETH';const pStr=c.price!=null?(c.price<1?'$'+c.price.toFixed(4):isInt?'$'+Math.round(c.price).toLocaleString():'$'+fmt(c.price)):'—';const vStr=c.val!=null?'$'+fmt(c.val,0):'—';
    html+='<tr><td><span class="sym">'+c.sym+'</span><br><span class="sub">'+c.name+'</span></td><td class="mono" style="font-size:12px">'+pStr+'</td><td class="mono">'+vStr+'</td><td class="mono" style="color:var(--t2)">$'+c.cost+'</td></tr>';});
  $('portBody').innerHTML=html;
  const wv=data.filter(c=>c.val!=null&&c.val>0);const top6=wv.slice(0,6);const ov=wv.slice(6).reduce((s,c)=>s+c.val,0);
  const pd=[...top6.map(c=>({name:c.sym,value:c.val}))];if(ov>0)pd.push({name:'其他',value:ov});
  if(pd.length>0){const ctx=$('pieChart').getContext('2d');if(window._pie)window._pie.destroy();
    const pieColors=pd.map(c=>COIN_COLORS[c.name]||'#888');
    window._pie=new Chart(ctx,{type:'doughnut',data:{labels:pd.map(c=>c.name),datasets:[{data:pd.map(c=>c.value),backgroundColor:pieColors,borderWidth:0,hoverOffset:6}]},
      options:{responsive:true,maintainAspectRatio:true,cutout:'55%',plugins:{legend:{display:false},tooltip:{backgroundColor:'#1a1a22',titleColor:'#ede6db',bodyColor:'#ede6db',borderColor:'#252530',borderWidth:1,callbacks:{label:c=>c.label+': $'+fmt(c.raw,0)}}}}});
    let lg='';pd.forEach((c,i)=>{lg+='<span><span class="pie-dot" style="background:'+pieColors[i]+'"></span>'+c.name+'</span>';});$('pieLegend').innerHTML=lg;}
}
function renderCharts(){
  const labels=MONTHLY.map(m=>{const p=m.m.split('/');return p[0].slice(2)+"'"+parseInt(p[1])+'月';});
  const fv=MONTHLY.map(m=>COST+m.pnl);const deltas=MONTHLY.map((m,i)=>i===0?m.pnl:m.pnl-MONTHLY[i-1].pnl);
  let mx=-Infinity,mn=Infinity,mxi=0,mni=0;fv.forEach((v,i)=>{if(v>mx){mx=v;mxi=i;}if(v<mn){mn=v;mni=i;}});
  const pr=fv.map((_,i)=>(i===mxi||i===mni)?7:3);const pc=fv.map((_,i)=>i===mxi?'#4ecb71':i===mni?'#e8555a':'#c9956c');
  const ann={};
  ann.hi={type:'label',xValue:labels[mxi],yValue:mx,content:['$'+mx.toLocaleString()],backgroundColor:'rgba(78,203,113,.15)',color:'#4ecb71',font:{size:11,family:'JetBrains Mono',weight:'600'},padding:{top:3,bottom:3,left:6,right:6},borderRadius:6,xAdjust:50,yAdjust:0};
  ann.hiLine={type:'line',xMin:labels[mxi],xMax:labels[mxi],yMin:mx,yMax:mx,borderColor:'rgba(78,203,113,.3)',borderWidth:1,xAdjust:0,
    label:{display:false},arrowHeads:{end:{display:false}}};
  ann.lo={type:'label',xValue:labels[mni],yValue:mn,content:['$'+mn.toLocaleString()],backgroundColor:'rgba(232,85,90,.15)',color:'#e8555a',font:{size:11,family:'JetBrains Mono',weight:'600'},padding:{top:3,bottom:3,left:6,right:6},borderRadius:6,xAdjust:-50,yAdjust:-20};
  ann.loLine={type:'line',xMin:labels[mni],xMax:labels[mni],yMin:mn,yMax:mn,borderColor:'rgba(232,85,90,.3)',borderWidth:1,
    label:{display:false}};
  ann.cost={type:'line',yMin:COST,yMax:COST,borderColor:'rgba(138,130,144,.3)',borderDash:[6,4],borderWidth:1,label:{display:true,content:'成本 $'+COST.toLocaleString(),position:'start',backgroundColor:'rgba(26,26,34,.8)',color:'#8a8290',font:{size:10,family:'JetBrains Mono'},padding:{top:2,bottom:2,left:6,right:6}}};
  new Chart($('lineChart').getContext('2d'),{type:'line',data:{labels,datasets:[{label:'基金現值',data:fv,borderColor:'#c9956c',backgroundColor:'rgba(201,149,108,.08)',fill:true,tension:.3,pointRadius:pr,pointHoverRadius:8,pointBackgroundColor:pc,borderWidth:2}]},
    options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},
      scales:{x:{ticks:{font:{size:9,family:'JetBrains Mono'},color:'#504a58',maxRotation:45},grid:{color:'rgba(37,37,48,.5)'}},y:{ticks:{font:{size:9,family:'JetBrains Mono'},color:'#504a58',callback:v=>'$'+v.toLocaleString()},grid:{color:'rgba(37,37,48,.5)'}}},
      plugins:{legend:{display:false},annotation:{annotations:ann},tooltip:{backgroundColor:'#1a1a22',titleColor:'#ede6db',bodyColor:'#ede6db',borderColor:'#252530',borderWidth:1,callbacks:{label:c=>{const v=c.raw,p=v-COST;return '現值: $'+fmt(v,0)+' ('+(p>=0?'+':'')+fmt(p,0)+' U, '+((p/COST)*100).toFixed(1)+'%)';}}}}
    }});
  new Chart($('barChart').getContext('2d'),{type:'bar',data:{labels,datasets:[{label:'當月變動',data:deltas,backgroundColor:deltas.map(v=>v>=0?'rgba(78,203,113,.7)':'rgba(232,85,90,.7)'),borderRadius:3,borderSkipped:false}]},
    options:{responsive:true,maintainAspectRatio:false,
      scales:{x:{ticks:{font:{size:9,family:'JetBrains Mono'},color:'#504a58',maxRotation:45},grid:{color:'rgba(37,37,48,.5)'}},y:{ticks:{font:{size:9,family:'JetBrains Mono'},color:'#504a58',callback:v=>(v>=0?'+':'')+v},grid:{color:'rgba(37,37,48,.5)'}}},
      plugins:{legend:{display:false},tooltip:{backgroundColor:'#1a1a22',titleColor:'#ede6db',bodyColor:'#ede6db',borderColor:'#252530',borderWidth:1,callbacks:{label:c=>'月變動: '+(c.raw>=0?'+':'')+fmt(c.raw,0)+' U'}}}}});
}
function updateCalc(){
  const amt=parseFloat($('calcInput')?.value)||0;const box=$('calcResult');
  if(amt<=0||fundGain==null){box.classList.add('hidden');return;}box.classList.remove('hidden');
  const share=amt/TOTAL_TWD,usdCost=share*COST,usdNow=share*fundValue,sn=settlement(amt,fundGain),cls=fundGain>=0?'up':'dn';
  box.innerHTML='<div class="calc-row"><div class="card"><div style="font-size:10px;color:var(--t2);font-family:var(--mono);letter-spacing:1px">你的 USD 成本</div><div style="font-family:var(--serif);font-size:24px;margin-top:6px">$'+fmt(usdCost)+'</div></div><div class="card"><div style="font-size:10px;color:var(--t2);font-family:var(--mono);letter-spacing:1px">目前帳面 USD</div><div class="'+cls+'" style="font-family:var(--serif);font-size:24px;margin-top:6px">$'+fmt(usdNow)+'</div></div></div><div class="scenario"><div class="scenario-label">目前帳面狀況（基金 '+fmtPct(fundGain)+'）</div><div class="scenario-val">預估結算拿回 <span class="'+cls+'">NT$'+fmt(sn,0)+'</span></div><div class="scenario-note">'+(fundGain<=0?'虧損由經理人負擔，退還全額本金':fundGain<=0.1?'獲利 10% 以內，本金 + 獲利全歸你':'本金 + 10% 利息 + 剩餘獲利 10% Bonus')+'</div></div>';
}
function loadReports(){
  // Start with embedded reports
  reports=[...REPORTS_DATA];
  // Merge any admin-added reports from localStorage
  try{const d=localStorage.getItem('goose_reports_custom');if(d){const custom=JSON.parse(d);reports=[...custom,...reports];}}catch{}
  renderReportList();
}
function saveReports(){
  // Only save admin-added reports (not embedded ones)
  const custom=reports.filter(r=>!REPORTS_DATA.some(e=>e.id===r.id));
  localStorage.setItem('goose_reports_custom',JSON.stringify(custom));
}
function renderReportList(){$('reportList').classList.remove('hidden');$('reportDetail').classList.add('hidden');
  if(!reports.length){$('reportList').innerHTML='<p style="color:var(--t3)">尚無月報，請從經理人後台新增。</p>';return;}
  // Group by year
  const groups={};reports.forEach((r,i)=>{const y=r.date.split('/')[0];if(!groups[y])groups[y]=[];groups[y].push({r,i});});
  let h='';const years=Object.keys(groups).sort((a,b)=>b-a);
  years.forEach((y,yi)=>{
    h+='<div style="margin-bottom:24px">';
    h+='<div style="font-family:var(--mono);font-size:18px;color:var(--gold);letter-spacing:2px;margin-bottom:14px;cursor:pointer;display:flex;align-items:center;gap:10px;padding:8px 0;-webkit-tap-highlight-color:transparent" onclick="toggleYear(\''+y+'\')"><span style="font-size:22px;transition:.3s;display:inline-block" id="yearArr'+y+'">'+(yi===0?'▾':'▸')+'</span>'+y+'</div>';
    h+='<div id="yearGroup'+y+'" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:12px;'+(yi===0?'':'display:none')+'">';
    groups[y].forEach(({r,i})=>{
      // Extract subtitle from thoughts (first line that's not a header marker)
      let sub=r.thoughts||r.strategy||'';
      sub=sub.replace(/^(心得小記|未來策略|關於)\s*/,'');
      const lines=sub.split('\\n').filter(l=>l.trim()&&!l.startsWith('#'));
      let subtitle=lines[0]||'';
      // If starts with 關於 or ### pattern, use it as subtitle
      const thLines=(r.thoughts||'').split('\\n').filter(l=>l.trim());
      for(const l of thLines){if(l.match(/^關於|^### /)){subtitle=l.replace(/^###\s*/,'');break;}}
      if(subtitle.length>30)subtitle=subtitle.slice(0,30)+'…';
      h+='<div class="card rpt-card" style="padding:16px" onclick="showReport('+i+')"><div class="rpt-date">'+esc(r.date.split('/').slice(0,2).join('/'))+'</div><div style="font-family:var(--serif);font-size:17px;margin:4px 0;font-weight:600">'+esc(r.title.replace(/\s*基金月報/,''))+'</div>'+(subtitle?'<div style="font-size:12px;color:var(--t2);margin-top:2px">'+esc(subtitle)+'</div>':'')+'</div>';
    });
    h+='</div></div>';
  });
  $('reportList').innerHTML=h;
}
function toggleYear(y){const g=$('yearGroup'+y),a=$('yearArr'+y);if(!g)return;const open=g.style.display!=='none';g.style.display=open?'none':'grid';a.textContent=open?'▸':'▾';}
function showReport(i){const r=reports[i];if(!r)return;$('reportList').classList.add('hidden');const d=$('reportDetail');d.classList.remove('hidden');
  d.innerHTML='<div class="rpt-back" onclick="renderReportList()">← 返回所有月報</div><h2 style="font-family:var(--serif);font-size:clamp(24px,5vw,32px);margin-bottom:6px">'+esc(r.title)+'</h2><div style="font-family:var(--mono);font-size:11px;color:var(--t2);margin-bottom:24px">'+esc(r.date)+'</div><div class="rpt-tabs"><div class="rpt-tab on" onclick="switchTab(this,\'performance\','+i+')">基金表現</div><div class="rpt-tab" onclick="switchTab(this,\'strategy\','+i+')">未來策略</div><div class="rpt-tab" onclick="switchTab(this,\'thoughts\','+i+')">心得小記</div><div class="rpt-tab" onclick="switchTab(this,\'resources\','+i+')">近期推薦</div></div><div class="rpt-body" id="rptContent">'+linkify(r.performance||'尚無內容',false)+'</div>';
  window.scrollTo({top:$('reports').offsetTop-60,behavior:'smooth'});}
function switchTab(el,key,i){el.parentElement.querySelectorAll('.rpt-tab').forEach(t=>t.classList.remove('on'));el.classList.add('on');$('rptContent').innerHTML=linkify(reports[i][key]||'尚無內容',key==='thoughts');}
function renderProsp(){let h='';PROSP_DATA.forEach((p,i)=>{h+='<div class="prosp-item"><div class="prosp-hd" onclick="toggleProsp('+i+')"><span>'+p.t+'</span><span class="prosp-arr" id="prospArr'+i+'">▾</span></div><div class="prosp-bd hidden" id="prospBd'+i+'">'+p.b+'</div></div>';});$('prospList').innerHTML=h;}
function toggleProsp(i){const bd=$('prospBd'+i),ar=$('prospArr'+i);const o=!bd.classList.contains('hidden');PROSP_DATA.forEach((_,j)=>{$('prospBd'+j).classList.add('hidden');$('prospArr'+j).classList.remove('open');});if(!o){bd.classList.remove('hidden');ar.classList.add('open');}}
function renderTrades(){let h='<table class="trades-table"><thead><tr><th>幣種</th><th>投入</th><th>收回</th><th>盈虧</th><th>時間</th></tr></thead><tbody>';let ti=0,tr=0;
  REALIZED.forEach(t=>{const p=t.ret-t.inv;ti+=t.inv;tr+=t.ret;h+='<tr><td class="sym">'+t.c+'</td><td class="mono">'+t.inv+'</td><td class="mono">'+fmt(t.ret)+'</td><td class="mono '+(p>=0?'up':'dn')+'">'+(p>=0?'+':'')+fmt(p)+'</td><td style="color:var(--t2)">'+t.t+'</td></tr>';});
  const tp=tr-ti;h+='</tbody><tfoot><tr style="border-top:2px solid var(--b1)"><td style="font-weight:600">合計</td><td class="mono">'+ti+'</td><td class="mono">'+fmt(tr)+'</td><td class="mono dn" style="font-weight:600">'+fmt(tp)+'</td><td></td></tr></tfoot></table>';$('tradesWrap').innerHTML=h;}
function openAdmin(){$('adminOverlay').classList.remove('hidden');}
function closeAdmin(){$('adminOverlay').classList.add('hidden');}
function tryLogin(){if($('adminPw').value==='goose2024'){$('adminAuth').classList.add('hidden');$('adminMain').classList.remove('hidden');renderAdminList();}}
function publishReport(){const t=$('arTitle').value.trim(),d=$('arDate').value.trim();if(!t||!d)return alert('請填寫標題和日期');
  reports.unshift({id:d.replace(/\//g,'-'),date:d,title:t,performance:$('arPerf').value,strategy:$('arStrat').value,thoughts:$('arThoughts').value,resources:$('arRes').value});
  saveReports();renderReportList();renderAdminList();['arTitle','arDate','arPerf','arStrat','arThoughts','arRes'].forEach(id=>$(id).value='');alert('月報已發布！');}
function renderAdminList(){let h='';reports.forEach((r,i)=>{h+='<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--b1)"><span style="font-size:13px;flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+esc(r.title)+' <span style="font-size:10px;color:var(--t3)">('+esc(r.date)+')</span></span><button style="background:var(--dn);color:#fff;border:0;padding:4px 10px;border-radius:4px;font-size:10px;cursor:pointer;flex-shrink:0;margin-left:8px" onclick="deleteReport('+i+')">刪除</button></div>';});
  $('adminReportList').innerHTML=h||'<p style="color:var(--t3);font-size:13px">尚無月報</p>';}
function deleteReport(i){
  if(REPORTS_DATA.some(e=>e.id===reports[i].id))return alert('內建月報無法刪除');
  if(!confirm('確定要刪除這篇月報嗎？'))return;
  reports.splice(i,1);saveReports();renderReportList();renderAdminList();
}
setInterval(()=>{$('heroCountdown').textContent=getCountdown();},60000);

// Name cycling animation
const NAMES=['郭胖鵝','郭巧草','郭冠妤','老郭','郭郭','郭小鵝'];
const NEON_COLORS=['#ff6b9d','#c084fc','#60d5f7','#4ecb71','#fbbf24','#f97316','#e879f9','#22d3ee'];
let nameIdx=0;
function cycleName(){
  nameIdx=(nameIdx+1)%NAMES.length;
  const el=$('nameEl');if(!el)return;
  el.style.color=NEON_COLORS[Math.floor(Math.random()*NEON_COLORS.length)];
  el.textContent=NAMES[nameIdx];
}
setInterval(cycleName,1000);

// ═══════════════════════════════════════════════════
//  CHAT with Gemini
// ═══════════════════════════════════════════════════
const GEMINI_KEY='AIzaSyC3VFUFkQCrHH10h1wJgXFfKfH2ZFFQZaM';
const GEMINI_URL='https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key='+GEMINI_KEY;

function toggleChat(){
  $('chatWin').classList.toggle('hidden');
  if(!$('chatWin').classList.contains('hidden'))$('chatInput').focus();
}

function buildReportContext(){
  return REPORTS_DATA.map(r=>{
    return `【${r.title}（${r.date}）】\n基金表現：${r.performance}\n未來策略：${r.strategy}\n心得小記：${r.thoughts}\n近期推薦：${r.resources}`;
  }).join('\n\n---\n\n');
}

function addMsg(text,role){
  const msgs=$('chatMsgs');
  const div=document.createElement('div');
  div.className='chat-msg '+role;
  div.innerHTML=text;
  msgs.appendChild(div);
  msgs.scrollTop=msgs.scrollHeight;
  return div;
}

async function sendChat(){
  const input=$('chatInput');
  const q=input.value.trim();
  if(!q)return;
  input.value='';
  $('chatSend').disabled=true;

  addMsg(esc(q),'user');
  const typingDiv=addMsg('<span class="chat-typing">胖鵝思考中...</span>','bot');

  const systemPrompt=`你是「胖鵝基金」的 AI 助手，名字叫胖鵝。你的任務是根據以下 23 篇月報的內容來回答投資人的問題。

規則：
- 用繁體中文、親切口語化的語氣回答
- 回答要簡潔，控制在 200 字以內
- 如果找到相關月報，請告訴使用者是「哪一年幾月」的月報
- 如果問題跟月報內容無關，友善地說你只能回答月報相關的問題
- 不要編造月報裡沒有的資訊
- 可以用 emoji 增加親切感

以下是所有月報內容：

${buildReportContext()}`;

  try{
    const res=await fetch(GEMINI_URL,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        contents:[{role:'user',parts:[{text:systemPrompt+'\n\n用戶問題：'+q}]}],
        generationConfig:{maxOutputTokens:500,temperature:0.7}
      })
    });
    const data=await res.json();
    const answer=data?.candidates?.[0]?.content?.parts?.[0]?.text||'抱歉，我暫時無法回答，請稍後再試 😅';
    typingDiv.innerHTML=answer.replace(/\n/g,'<br>');
  }catch(e){
    console.error('Gemini error:',e);
    typingDiv.innerHTML='連線失敗，請稍後再試 😅';
  }
  $('chatSend').disabled=false;
  $('chatMsgs').scrollTop=$('chatMsgs').scrollHeight;
}

document.addEventListener('DOMContentLoaded',()=>{$('heroCountdown').textContent=getCountdown();fetchPrices();renderCharts();renderProsp();renderTrades();loadReports();});
