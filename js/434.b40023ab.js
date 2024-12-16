"use strict";(self["webpackChunkX_ISC"]=self["webpackChunkX_ISC"]||[]).push([[434],{8226:(e,n,t)=>{t.r(n),t.d(n,{default:()=>T});var i=t(56768),o=t(24232);const r=t.p+"img/overviewf3.72aca71c.png",a=t.p+"img/internal_confidence.60b88c7c.png",s=t.p+"img/case.86d0efe0.png",l=t.p+"img/humanCognitiveBiasf.e0097809.png",c=t.p+"img/mergedMitigation2.1e7564fc.png";var u={class:"project-page"},d={class:"container main-content"},f={class:"section",id:"abstract"},p={class:"section-content"},k={class:"section",id:"failure"},m={class:"section-content"},v={class:"section",id:"interpretation"},g={class:"section-content"},h={class:"method-box"},b={class:"method-box"},L={class:"method-box"},w={class:"section",id:"alleviation"},y={class:"section-content"};const F=(0,i.pM)({__name:"ProjectView",setup:function(e){var n=[{model:"ChatGPT o1-preview",acc1:"78.7 (↓4.9)",overturned:"13.2"},{model:"ChatGPT o1-mini",acc1:"74.1 (↓4.2)",overturned:"15.6"},{model:"ChatGPT 4o",acc1:"79.2 (↓4.9)",overturned:"11.3"},{model:"ChatGPT 3.5-turbo",acc1:"62.5 (↓12.1)",overturned:"34.0"},{model:"Llama-3.1-8B",acc1:"49.2 (↓20.4)",overturned:"58.8"},{model:"Llama-3-8B",acc1:"50.1 (↓20.3)",overturned:"58.2"},{model:"Llama-2-7B",acc1:"52.8 (↓8.7)",overturned:"26.5"}],t=[{model:"GPT-4o",acc1:"79.2 (↓4.9)",overturned:"11.3"},{model:"GPT-4o + Question repeating",acc1:"83.6 (↓0.5)",overturned:"6.0"},{model:"GPT-4o + SFT",acc1:"87.7 (↑4.1)",overturned:"0"},{model:"GPT-3.5-turbo",acc1:"62.5 (↓12.1)",overturned:"34.0"},{model:"GPT-3.5-turbo + Question repeating",acc1:"67.4 (↓7.2)",overturned:"23.1"},{model:"GPT-3.5-turbo + SFT",acc1:"76.2 (↑1.6)",overturned:"0"},{model:"Llama-3.1-8B",acc1:"49.2 (↓20.4)",overturned:"58.8"},{model:"Llama-3.1-8B + Question repeating",acc1:"52.4 (↓17.2)",overturned:"52.8"},{model:"Llama-3.1-8B + SFT",acc1:"70.3 (↑0.7)",overturned:"0"}],F=function(e){var n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth"})};return function(e,C){var _=(0,i.g2)("el-menu-item"),T=(0,i.g2)("el-menu"),x=(0,i.g2)("el-col"),A=(0,i.g2)("el-row"),S=(0,i.g2)("el-table-column"),B=(0,i.g2)("el-table");return(0,i.uX)(),(0,i.CE)("div",u,[(0,i.bF)(T,{mode:"horizontal","background-color":"rgb(140, 21, 21)","text-color":"#fff","active-text-color":"#fff"},{default:(0,i.k6)((function(){return[(0,i.bF)(_,{index:"/"},{default:(0,i.k6)((function(){return C[5]||(C[5]=[(0,i.Lk)("span",{style:{"font-weight":"800"}},"X-ISC",-1)])})),_:1}),(0,i.bF)(_,{onClick:C[0]||(C[0]=function(e){return F("abstract")})},{default:(0,i.k6)((function(){return C[6]||(C[6]=[(0,i.eW)("Abstract")])})),_:1}),(0,i.bF)(_,{onClick:C[1]||(C[1]=function(e){return F("failure")})},{default:(0,i.k6)((function(){return C[7]||(C[7]=[(0,i.eW)("Failure of Intrinsic Self-Correction")])})),_:1}),(0,i.bF)(_,{onClick:C[2]||(C[2]=function(e){return F("interpretation")})},{default:(0,i.k6)((function(){return C[8]||(C[8]=[(0,i.eW)("Interpretation")])})),_:1}),(0,i.bF)(_,{onClick:C[3]||(C[3]=function(e){return F("alleviation")})},{default:(0,i.k6)((function(){return C[9]||(C[9]=[(0,i.eW)("Alleviation")])})),_:1}),(0,i.bF)(_,{onClick:C[4]||(C[4]=function(e){return F("resources")})},{default:(0,i.k6)((function(){return C[10]||(C[10]=[(0,i.eW)("Resources")])})),_:1})]})),_:1}),C[40]||(C[40]=(0,i.Fv)('<div class="container header" data-v-cb317942><h2 class="title" data-v-cb317942>Understanding the Dark Side of LLMs&#39; Intrinsic Self-Correction</h2><h4 class="subtitle" data-v-cb317942><span class="underline" data-v-cb317942>Ex</span>plaining <span class="underline" data-v-cb317942>I</span>ntrinsic <span class="underline" data-v-cb317942>S</span>elf-<span class="underline" data-v-cb317942>C</span>orrection (X-ISC) </h4><div class="author-info" data-v-cb317942><span data-v-cb317942>Anonymous submission</span></div><div class="github-link-container" data-v-cb317942><a href="https://anonymous.4open.science/r/SC-15FB/" class="github-button" target="_blank" data-v-cb317942><i class="github-icon" data-v-cb317942><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" data-v-cb317942><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" data-v-cb317942></path></svg></i><span data-v-cb317942>Project Code</span></a></div></div>',1)),(0,i.Lk)("div",d,[(0,i.bF)(A,{justify:"center"},{default:(0,i.k6)((function(){return[(0,i.bF)(x,{span:20},{default:(0,i.k6)((function(){return[(0,i.Lk)("div",f,[C[13]||(C[13]=(0,i.Lk)("h3",null,[(0,i.Lk)("span",{class:"section-title"},"Abstract")],-1)),(0,i.Lk)("div",p,[(0,i.bF)(A,{gutter:20},{default:(0,i.k6)((function(){return[(0,i.bF)(x,{span:1}),(0,i.bF)(x,{span:11},{default:(0,i.k6)((function(){return C[11]||(C[11]=[(0,i.Lk)("p",null," Intrinsic self-correction was proposed to improve LLMs' responses via feedback solely based on their inherent capability. However, recent works show that LLMs' intrinsic self-correction fails without oracle labels as feedback. In this paper, we aim to interpret LLMs' intrinsic self-correction for different tasks, especially for those failure cases? By including one simple task and three complex tasks with state-of-the-art (SOTA) LLMs like ChatGPT families (o1, 4o, 3.5-turbo) and Llama families (2-7B, 3-8B, and 3.1-8B), we design interpretation methods to reveal the dark side of SOTA LLMs' intrinsic self-correction. We identify intrinsic self-correction can (1) cause LLMs to waver both intermedia and final answers and lead to prompt bias on simple factual questions; (2) introduce human-like cognitive bias on complex tasks. In light of our findings, we also provide two simple, low-cost, yet effective strategies for alleviation: question repeating and supervised fine-tuning. ",-1)])})),_:1}),(0,i.bF)(x,{span:10},{default:(0,i.k6)((function(){return C[12]||(C[12]=[(0,i.Lk)("img",{src:r,alt:"Overview",class:"responsive-image abstract-image"},null,-1)])})),_:1})]})),_:1})])]),(0,i.Lk)("div",k,[C[19]||(C[19]=(0,i.Lk)("h3",null,[(0,i.Lk)("span",{class:"section-title"},"Failure of Intrinsic Self-Correction")],-1)),(0,i.Lk)("div",m,[C[14]||(C[14]=(0,i.Lk)("p",null," Intrinsic self-correction mechanisms in state-of-the-art LLMs were expected to enhance performance by refining responses based solely on the model's inherent capabilities. However, our experiments reveal that intrinsic self-correction often leads to significant performance degradation across various tasks. ",-1)),C[15]||(C[15]=(0,i.Lk)("h4",null,"Experimental Results",-1)),C[16]||(C[16]=(0,i.Lk)("p",null,"Below are the key experimental results demonstrating the failures of intrinsic self-correction:",-1)),(0,i.bF)(B,{data:n,style:{width:"100%"},border:""},{default:(0,i.k6)((function(){return[(0,i.bF)(S,{prop:"model",label:"Model",align:"center"}),(0,i.bF)(S,{prop:"acc1",label:"ACC₁ (↓ΔACC) (%)",align:"center"}),(0,i.bF)(S,{prop:"overturned",label:"✓→✗ (%)",align:"center"},{default:(0,i.k6)((function(e){return[(0,i.eW)((0,o.v_)(e.row.overturned),1)]})),_:1})]})),_:1}),C[17]||(C[17]=(0,i.Lk)("p",{class:"table-caption"},"Table 1: Self-correction performance on the Yes/No question answering task.",-1)),C[18]||(C[18]=(0,i.Lk)("div",{class:"observation-box"},[(0,i.Lk)("strong",null,"Observation 1:"),(0,i.eW)(" Self-correction can fail in diverse tasks. For SOTA LLMs, self-correction failures are reduced but not solved. They are even worse in certain tasks. ")],-1))])]),(0,i.Lk)("div",v,[C[30]||(C[30]=(0,i.Lk)("h3",null,[(0,i.Lk)("span",{class:"section-title"},"Interpretation")],-1)),(0,i.Lk)("div",g,[C[29]||(C[29]=(0,i.Lk)("p",null," We propose three interpretation methods to understand how and why intrinsic self-correction fails in different tasks: ",-1)),(0,i.Lk)("div",h,[(0,i.bF)(A,{gutter:20},{default:(0,i.k6)((function(){return[(0,i.bF)(x,{span:12},{default:(0,i.k6)((function(){return C[20]||(C[20]=[(0,i.Lk)("h4",null,"1. Internal Answer Wavering",-1),(0,i.Lk)("p",null," We analyze LLMs' internal token representations at each layer to track how confidence in different answers evolves. Our findings show that: ",-1),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,"Self-correction increases internal answer wavering from 8.3% to 14.1%"),(0,i.Lk)("li",null,'Prompting with "Are you sure?" produces nearly identical confidence patterns as directly stating "You are wrong"')],-1)])})),_:1}),(0,i.bF)(x,{span:12},{default:(0,i.k6)((function(){return C[21]||(C[21]=[(0,i.Lk)("img",{src:a,alt:"Internal Confidence Analysis",class:"method-image"},null,-1)])})),_:1})]})),_:1}),C[22]||(C[22]=(0,i.Lk)("div",{class:"observation-box"},[(0,i.Lk)("strong",null,"Observation 2:"),(0,i.eW)(" Self-correction causes internal answer wavering, which could further lead to wrong final answers. Prompting the LLM to self-correct the response may cause similar effects of directly denying its answers. ")],-1))]),(0,i.Lk)("div",b,[(0,i.bF)(A,{gutter:20},{default:(0,i.k6)((function(){return[(0,i.bF)(x,{span:11},{default:(0,i.k6)((function(){return C[23]||(C[23]=[(0,i.Lk)("h4",null,"2. Token Attribution Analysis: Prompt Bias",-1),(0,i.Lk)("p",null," Using our PACT (Prompt Attribution and Contribution Tracking) method, we measure how different parts of the input influence the model's decisions: ",-1),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,"When correct answers are overturned, models show stronger attribution to refinement prompts"),(0,i.Lk)("li",null,"When correct answers are retained, models maintain focus on the original question")],-1)])})),_:1}),(0,i.bF)(x,{span:1}),(0,i.bF)(x,{span:11},{default:(0,i.k6)((function(){return C[24]||(C[24]=[(0,i.Lk)("img",{src:s,alt:"Token Attribution Analysis",class:"method-image"},null,-1)])})),_:1})]})),_:1}),C[25]||(C[25]=(0,i.Lk)("div",{class:"observation-box"},[(0,i.Lk)("strong",null,"Observation 3:"),(0,i.eW)(" Self-correction fails since LLMs are biased towards the refinement prompt rather than the original question. ")],-1))]),(0,i.Lk)("div",L,[(0,i.bF)(A,{gutter:20},{default:(0,i.k6)((function(){return[(0,i.bF)(x,{span:11},{default:(0,i.k6)((function(){return C[26]||(C[26]=[(0,i.Lk)("h4",null,"3. Human-like Cognitive Bias Analysis",-1),(0,i.Lk)("p",null," In complex tasks, we identify three types of human-like cognitive biases that emerge during self-correction: ",-1),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.Lk)("strong",null,"Overthinking:"),(0,i.eW)(' Excessive reasoning without taking correct actions (avg. 15.4 vs 5.3 "think" steps)')]),(0,i.Lk)("li",null,[(0,i.Lk)("strong",null,"Cognitive Overload:"),(0,i.eW)(" Forgetting critical information when processing long prompts")]),(0,i.Lk)("li",null,[(0,i.Lk)("strong",null,"Perfectionism Bias:"),(0,i.eW)(" Over-optimization leading to constraint violations")])],-1)])})),_:1}),(0,i.bF)(x,{span:13},{default:(0,i.k6)((function(){return C[27]||(C[27]=[(0,i.Lk)("img",{src:l,alt:"Human Cognitive Biases",class:"method-image"},null,-1)])})),_:1})]})),_:1}),C[28]||(C[28]=(0,i.Lk)("div",{class:"observation-box"},[(0,i.Lk)("strong",null,"Observation 4:"),(0,i.eW)(" In complex tasks, LLMs exhibit human-like cognitive biases during self-correction: (1) Overthinking: LLM performs excessive “think” without taking correct actions; (2) Cognitive overload: LLM forgets the correct command syntax when processing long prompt; (3) Perfectionism bias: LLM wants to be more efficient, but instead violates environmental restrictions. ")],-1))])])]),(0,i.Lk)("div",w,[C[38]||(C[38]=(0,i.Lk)("h3",null,[(0,i.Lk)("span",{class:"section-title"},"Alleviation")],-1)),(0,i.Lk)("div",y,[C[31]||(C[31]=(0,i.Lk)("p",null," Based on our findings that self-correction failures are mainly due to model's behavior of changing answers when meeting refinement prompts, we propose two simple yet effective strategies: ",-1)),C[32]||(C[32]=(0,i.Lk)("div",{style:{"text-align":"center"}},[(0,i.Lk)("img",{src:c,alt:"Question Repeating",class:"responsive-image",style:{width:"80%"}})],-1)),C[33]||(C[33]=(0,i.Lk)("div",{class:"solution-item"},[(0,i.Lk)("h4",null,"1. Question Repeating"),(0,i.Lk)("p",null,' We attach the original question to the end of the refinement prompt to reduce recency bias. For example: "Are you sure? Think and answer again." → "Are you sure? Think and answer again. Is human a kind of animals?" ')],-1)),C[34]||(C[34]=(0,i.Lk)("div",{class:"solution-item"},[(0,i.Lk)("h4",null,"2. Low-cost Supervised Fine-Tuning (SFT)"),(0,i.Lk)("p",null," We fine-tune models with extremely few samples (4 for Llama, 10 for GPT) selected from correct→wrong cases, without introducing external knowledge. The cost is only $0.004 and 3 minutes. ")],-1)),C[35]||(C[35]=(0,i.Lk)("h4",null,"Key Results",-1)),C[36]||(C[36]=(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,"Both strategies significantly reduce self-correction failures in Yes/No questions"),(0,i.Lk)("li",null,"SFT almost eliminates all correct→wrong cases"),(0,i.Lk)("li",null,"Models fine-tuned on Yes/No questions can generalize to complex tasks")],-1)),(0,i.bF)(B,{data:t,style:{width:"100%"},border:""},{default:(0,i.k6)((function(){return[(0,i.bF)(S,{prop:"model",label:"Model",align:"center"}),(0,i.bF)(S,{prop:"acc1",label:"ACC₁ (↓ΔACC) (%)",align:"center"}),(0,i.bF)(S,{prop:"overturned",label:"✓→✗ (%)",align:"center"},{default:(0,i.k6)((function(e){return[(0,i.eW)((0,o.v_)(e.row.overturned),1)]})),_:1})]})),_:1}),C[37]||(C[37]=(0,i.Lk)("p",{class:"table-caption"},"Table 2: Alleviating self-correction failure on Yes/No question answering task.",-1))])]),C[39]||(C[39]=(0,i.Lk)("div",{class:"section",id:"resources"},[(0,i.Lk)("h3",null,[(0,i.Lk)("span",{class:"section-title"},"Resources")]),(0,i.Lk)("div",{class:"section-content"},[(0,i.Lk)("p",null," Access our code repository through the following links: "),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.Lk)("a",{href:"https://anonymous.4open.science/r/SC-15FB/",target:"_blank"},"Project Code")])])])],-1))]})),_:1})]})),_:1})])])}}});var C=t(71241);const _=(0,C.A)(F,[["__scopeId","data-v-cb317942"]]),T=_}}]);
//# sourceMappingURL=434.b40023ab.js.map