const PLAY="https://play.google.com/store/apps/details?id=io.sigmanetwork.app&pcampaignid=web_share";
const R=c=>`<button class="run" data-cmd="${c}">${c}</button>`;
const NAV=`<span class="m">next:</span> ${R("how")}  ${R("vs")}  ${R("phases")}  ${R("safety")}  ${R("transparency")}  ${R("mine")}`;
const G="";
const CMDS={
help:[`<span class="h">Available commands</span>`,
`  ${R("about")}         what is Sigma Network`,
`  ${R("problem")}       why GPU-mined coins struggle`,
`  ${R("how")}           how mining works`,
`  ${R("vs")}            Sigma vs other coins`,
`  ${R("phases")}        the two-phase roadmap`,
`  ${R("safety")}        fairness and anti-abuse`,
`  ${R("transparency")}  is this a Ponzi? no.`,
`  ${R("mine")}          start mining`,
`  ${R("clear")}         clear the screen`,G,
`<span class="m">tips: Tab = autocomplete · ↑/↓ = history · secret commands: ${R("whoami")} ${R("hack")} ${R("sudo")} ${R("ping")}</span>`],
about:[`<span class="big">Σ Sigma Network</span>`,`<span class="v">Mine · Earn · Grow</span>`,G,
`A fair, transparent, community-first coin. Press one button every 24 hours.`,
`No hardware. No electricity. No KYC. No cost.`,G,
`<span class="ok">●</span> Phase I   <span class="h">PoE</span>  Proof-of-Engagement — <span class="ok">live now</span>`,
`<span class="m">○</span> Phase II  <span class="h">PoW</span>  GPU mining mainnet — coming soon`,G,
`supply ........ TBD (depends on PoE amount)`,
`boost cap ..... 2.9× base rate`,
`halving ....... every 180 days`,G,NAV],
problem:[`<span class="h">$ cat problem.txt</span>`,G,
`<span class="no">[!]</span> <span class="h">Miners must sell to survive</span>`,
`    GPU miners face huge electricity bills, so they sell a large share`,
`    of every coin they mine. Sell pressure starts on day one.`,G,
`<span class="no">[!]</span> <span class="h">Price crashes before adoption</span>`,
`    Dumping beats buying, mining turns unprofitable, miners leave and`,
`    security weakens. The death spiral starts before a community forms.`,G,
`<span class="no">[!]</span> <span class="h">Only large operations survive</span>`,
`    Industrial farms absorb losses that destroy small miners and`,
`    concentrate ownership in a few hands.`,G,NAV],
how:[`<span class="h">$ sigma --how-it-works</span>`,
`<span class="m">Simple enough for anyone. Powerful enough to matter.</span>`,G,
`<span class="p">[01]</span> <span class="h">Download the app</span>`,
`     Install Sigma on Android, sign in with Google. No seed phrases.`,
`<span class="p">[02]</span> <span class="h">Press mine once</span>`,
`     Once every 24 hours, press the mine button. That's it.`,
`<span class="p">[03]</span> <span class="h">Earn Sigma coins</span>`,
`     Your session mines for 24h on its own. Zero power cost.`,
`<span class="p">[04]</span> <span class="h">Build your team</span>`,
`     Invite friends with your referral code. Each active member`,
`     boosts your mining rate.`,G,`<span class="ok">done.</span> ${R("mine")} to begin, or ${R("vs")} to compare.`],
vs:[`<span class="h">$ diff other-coins sigma</span>`,G,
`<span class="no">- Coins locked for years with no warning</span>`,
`<span class="ok">+ Earned coins go straight to your wallet, no lockups</span>`,
`<span class="no">- Mandatory KYC excludes early miners</span>`,
`<span class="ok">+ No KYC. Your identity is yours</span>`,
`<span class="no">- Referral boosts locked until further notice</span>`,
`<span class="ok">+ All referral boosts credited in full</span>`,
`<span class="no">- Vague roadmap, repeated delays</span>`,
`<span class="ok">+ Two-phase roadmap from day one: PoE then PoW</span>`,
`<span class="no">- Centralized control of release and wallets</span>`,
`<span class="ok">+ Anti-bot and double-account detection for fairness</span>`,G,NAV],
phases:[`<span class="h">$ sigma roadmap --list</span>`,G,
`<span class="ok">● PHASE I — NOW LIVE</span>  <span class="h">Proof-of-Engagement (PoE)</span>`,
`  Distribution phase. Engage once per 24h from your phone.`,
`  Coins are distributed to the community.`,
`  - press once per 24h  - referral boost  - no cost / hardware / KYC`,
`  - base emission halves every 180 days`,G,
`<span class="m">○ PHASE II — COMING SOON</span>  <span class="h">GPU Mining Mainnet</span>`,
`  The real chain goes live with GPU Proof of Work.`,
`  - Phase I coins transfer to community wallets`,
`  - CEX listings open  - GPU miners secure the network`,G,
`total supply: <span class="v">TBD</span> <span class="m">(depends on PoE distribution)</span>`,G,NAV],
safety:[`<span class="h">$ sigma security --status</span>`,G,
`<span class="ok">[ON]</span> Device fingerprinting   one device, one account`,
`<span class="ok">[ON]</span> Bot detection           bot-like accounts permanently blocked`,
`<span class="ok">[ON]</span> Fair referrals          fully credited, no hidden locks`,
`<span class="ok">[ON]</span> No KYC                  we never ask for documents`,
`<span class="ok">[ON]</span> No coin lockups         balance transfers to your wallet at mainnet`,
`<span class="ok">[ON]</span> Transparent supply      final supply set by PoE amount, no team reserves`,
`<span class="ok">[ON]</span> Anti-whale cap          referral boost maxes at 2.9× — 10,000`,
`                         referrals earn the same as ~100 active ones`,
`<span class="ok">[ON]</span> Decaying emission       halving rewards early believers`,G,NAV],
transparency:[`<span class="h">$ sigma ponzi --check</span>`,
`<span class="m">We know the question crosses your mind. Straight answer:</span>`,G,
`<span class="m">A Ponzi pays old participants with new participants' money.</span>`,
`<span class="m">Sigma asks for zero money. Nothing to buy. No fee, no premium tier.</span>`,G,
`<span class="ok">✓</span> We charge nothing — joining, mining and referring are free`,
`<span class="ok">✓</span> No promises of returns — value, if any, comes from adoption`,
`<span class="ok">✓</span> Referrals boost you, not us — we receive nothing`,
`<span class="ok">✓</span> Transparent supply — final amount depends on PoE, no pre-mine, no team wallet`,G,
`<span class="v">"The worst case is Sigma never reaches mainnet and you've lost`,
` nothing but a few seconds a day. The best case is you're an early`,
` participant in something that matters."</span>  <span class="m">— Sigma Network Team</span>`,G,
`<span class="h">RESULT:</span> <span class="ok">not a Ponzi.</span>  ${R("mine")}`],
mine:[`<span class="h">$ sigma mine --start</span>`,
`<span class="ok">PoE is live. Free. Android. No hardware.</span>`,
`→ <a href="${PLAY}" target="_blank" rel="noopener">Download Sigma Network on Google Play</a>`,G,
`<span class="m">Cryptocurrency involves risk. Past performance of similar projects`,
`does not guarantee future results.</span>`]
};
CMDS.start=CMDS.mine; CMDS.ls=CMDS.help; CMDS.man=CMDS.help; CMDS["?"]=CMDS.help;
CMDS.whoami=[`<span class="h">guest@sigma</span>`,`early participant in the making. ${R("mine")} to make it official.`];
CMDS.sudo=[`<span class="no">guest is not in the sudoers file. This incident will be reported.</span>`,`<span class="m">(to nobody. relax.)</span>`];
CMDS.hack=[`<span class="m">[*] scanning ports...</span>`,`<span class="m">[*] bypassing firewall...</span>`,`<span class="m">[*] decrypting mainframe...</span>`,`<span class="no">[!] ACCESS DENIED</span>`,`<span class="ok">Real hackers just press ${R("mine")}.</span>`];
CMDS.ping=[`PING sigma.network (the community)`,`<span class="ok">reply: alive and growing — time=24h</span>`];
CMDS.date=()=>[`<span class="v">${new Date().toString()}</span>`];
CMDS.exit=[`<span class="m">There is no escape. Only ${R("help")}.</span>`];
function lev(a,b){const m=[...Array(b.length+1).keys()];for(let i=1;i<=a.length;i++){let p=m[0];m[0]=i;for(let j=1;j<=b.length;j++){const t=m[j];m[j]=Math.min(m[j]+1,m[j-1]+1,p+(a[i-1]===b[j-1]?0:1));p=t}}return m[b.length]}

const term=document.getElementById("term"),inp=document.getElementById("inp");
let busy=false,queue=[];
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const bottom=()=>{term.scrollTop=term.scrollHeight};
function line(html){const d=document.createElement("div");d.className=html===""?"gap":"l";d.innerHTML=html;term.appendChild(d);bottom();return d}
async function run(name,typed){
  name=name.trim().toLowerCase(); if(!name) return;
  const d=line(`<span class="p">sigma@network:~$</span> <span class="cmd"></span><span class="cursor"></span>`);
  const span=d.querySelector(".cmd");
  for(const ch of name){span.textContent+=ch;bottom();await sleep(typed?0:28)}
  await sleep(typed?0:160); d.querySelector(".cursor").remove();
  if(name==="clear"){term.innerHTML="";return}
  const key=/^sudo(\s|$)/.test(name)?"sudo":name;
  let out=CMDS[key];
  if(typeof out==="function")out=out();
  if(!out){
    const safe=name.replace(/[<>&"]/g,"");
    const first=name.split(/\s+/)[0];
    const best=Object.keys(CMDS).map(k=>[k,lev(first,k)]).sort((a,b)=>a[1]-b[1])[0];
    line(`<span class="no">bash: ${safe}: command not found</span>`);
    if(best[1]<=2||best[0].startsWith(first))line(`<span class="m">did you mean</span> ${R(best[0])}<span class="m">?</span>`);
    line(`<span class="m">type</span> ${R("help")} <span class="m">to see all commands</span>`);line("");return}
  for(const l of out){line(l);await sleep(l===""?10:35)}
  line("");
}
async function pump(){
  if(busy) return; busy=true;
  while(queue.length){const [n,t]=queue.shift();await run(n,t)}
  busy=false;
}
function enqueue(n,t){queue.push([n,t]);pump()}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-cmd]"); if(b) enqueue(b.dataset.cmd,false);
});
const hist=[];let hi=0;
inp.addEventListener("keydown",e=>{
  if(e.key==="Enter"){const v=inp.value.trim();if(v){hist.push(v);hi=hist.length}enqueue(inp.value,true);inp.value=""}
  else if(e.key==="ArrowUp"){e.preventDefault();if(hi>0){hi--;inp.value=hist[hi]}}
  else if(e.key==="ArrowDown"){e.preventDefault();if(hi<hist.length-1){hi++;inp.value=hist[hi]}else{hi=hist.length;inp.value=""}}
  else if(e.key==="Tab"){e.preventDefault();const v=inp.value.trim().toLowerCase();if(!v)return;const m=Object.keys(CMDS).filter(k=>k.startsWith(v));if(m.length===1)inp.value=m[0];else if(m.length>1)line(`<span class="m">${m.join("  ")}</span>`)}
});
term.addEventListener("click",()=>{if(!getSelection().toString())inp.focus()});
if(!matchMedia("(pointer: coarse)").matches)inp.focus();
const q=document.getElementById("quick");
["about","how","vs","phases","safety","transparency","mine","help","clear"].forEach(c=>{
  const b=document.createElement("button");b.textContent=c;b.dataset.cmd=c;q.appendChild(b)});
// matrix rain
const cv=document.getElementById("rain"),cx=cv.getContext("2d");
if(matchMedia("(prefers-reduced-motion: reduce)").matches){cv.style.display="none"}else{
  const chars="ΣΣ01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾅﾆﾇﾈﾉ",fs=16;let cols,drops;
  const acc=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
  const size=()=>{cv.width=innerWidth;cv.height=innerHeight;cols=Math.ceil(cv.width/fs);drops=Array.from({length:cols},()=>Math.random()*-50)};
  size();addEventListener("resize",size);
  setInterval(()=>{
    cx.fillStyle="rgba(10,10,10,.08)";cx.fillRect(0,0,cv.width,cv.height);
    cx.fillStyle=acc;cx.font=fs+"px monospace";
    for(let i=0;i<cols;i++){
      if(drops[i]>0)cx.fillText(chars[Math.random()*chars.length|0],i*fs,drops[i]*fs);
      if(drops[i]*fs>cv.height&&Math.random()>.975)drops[i]=0;
      drops[i]++;
    }
  },55);
}
// auto-load on start
line(`<span class="m">Wake up... the network has you.</span>`);
line(`<span class="m">Sigma Network OS v2.0 — type a command or click one below</span>`);line("");
enqueue("about",false);enqueue("help",false);
