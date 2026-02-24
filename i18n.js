const I18N = {
    en: {
        // App title & UI
        appTitle: "Poker Preflop Trainer",
        score: "Score",
        streak: "Streak",
        btnFold: "Fold",
        btnCall: "Call",
        btnRaise: "Raise",
        btnAllIn: "All-In",
        scenarioTitle: "Scenario",
        waitingHand: "Waiting for next hand...",
        nextHand: "Next Hand",
        modeRFI: "Mode: RFI (Open)",
        modeDefend: "Mode: Facing Raise",
        modePushFold: "Mode: Push / Fold",

        // Position names
        position: { UTG: 'UTG', HJ: 'HJ', CO: 'CO', BTN: 'BTN', SB: 'SB', BB: 'BB' },
        positionBtnVsCo: 'BTN facing CO Raise',

        // Coach
        coachTitle: "Strategy Coach",
        coachSelect: "Select a mode to begin.",

        // Modals
        chartUtgRfiTitle: "UTG RFI Open Range",
        chartUtgPushTitle: "UTG 10bb Push Range",
        chartDefendTitle: "BTN vs CO Raise Strategy",
        legendRaise: "Play (Shove/Raise)",
        legendFold: "Fold",
        legend3Bet: "3-Bet (Raise)",
        legendCall: "Call",

        rulesTitle: "Poker Rules & Strategy",
        positionTitle: "Position (Who acts when)",
        positionDesc: "In poker, the order of action rotates clockwise every hand. The later you act, the more information you have about what your opponents will do.",
        utgDesc: "<strong>UTG (Under the Gun):</strong> Acts first. Has no information. Must play very strong hands (e.g. AA, KK, AKs).",
        hjCoDesc: "<strong>HJ (Hijack) & CO (Cutoff):</strong> Middle/Late positions. Can play slightly weaker hands.",
        btnDesc: "<strong>BTN (Button):</strong> Acts last post-flop. Most powerful position. Can play a very wide range of hands to steal the blinds.",
        sbBbDesc: "<strong>SB (Small Blind) & BB (Big Blind):</strong> Forced to put money in before the cards are dealt, and have to act first post-flop.",

        preflopStratTitle: "Preflop Strategy",
        preflopStratDesc: "When the action folds to you, you are deciding whether to <strong>Fold</strong> or <strong>Raise First In (RFI)</strong>. “Limping” (just calling the big blind) is generally a bad strategy for beginners. You should either raise to take control, or fold.",
        advStratTitle: "Advanced Strategy Concepts (via PokerVIP)",
        advUtgDesc: "<strong>UTG Tightness:</strong> Being Under the Gun puts you at a severe informational disadvantage. You must play very a tight range because you face actions from the entire table behind you.",
        adv3BetDesc: "<strong>Dealing with 3-Bets:</strong> A \"3-Bet\" is a re-raise preflop. If you open-raise from UTG and face a 3-bet, your opponent usually has a very strong hand. You must defend cautiously or 4-bet with premiums.",
        advImpliedDesc: "<strong>Implied Odds:</strong> The money you expect to win <em>after</em> making a big hand (like hitting a Set with a pocket pair). Small pairs can sometimes call 3-bets if the opponent's stack is deep enough to pay you off when you hit.",

        handRanksTitle: "Basic Hand Rankings (Strongest to Weakest)",
        rankRoyal: "<strong>Royal Flush:</strong> A<span class=\"suit-red\">♥</span> K<span class=\"suit-red\">♥</span> Q<span class=\"suit-red\">♥</span> J<span class=\"suit-red\">♥</span> T<span class=\"suit-red\">♥</span> (all same suit)",
        rankStrFlush: "<strong>Straight Flush:</strong> 9<span class=\"suit-black\">♠</span> 8<span class=\"suit-black\">♠</span> 7<span class=\"suit-black\">♠</span> 6<span class=\"suit-black\">♠</span> 5<span class=\"suit-black\">♠</span> (in sequence, same suit)",
        rankQuads: "<strong>Four of a Kind:</strong> Q<span class=\"suit-black\">♠</span> Q<span class=\"suit-red\">♥</span> Q<span class=\"suit-red\">♦</span> Q<span class=\"suit-black\">♣</span> 4<span class=\"suit-black\">♠</span>",
        rankBoat: "<strong>Full House:</strong> K<span class=\"suit-black\">♠</span> K<span class=\"suit-red\">♥</span> K<span class=\"suit-black\">♣</span> 2<span class=\"suit-red\">♦</span> 2<span class=\"suit-black\">♠</span> (three of a kind + pair)",
        rankFlush: "<strong>Flush:</strong> Any five cards of the same suit.",
        rankStraight: "<strong>Straight:</strong> 5 6 7 8 9 (in sequence, mixed suits)",
        rankTrips: "<strong>Three of a Kind:</strong> 7 7 7 A 2",
        rankTwoPair: "<strong>Two Pair:</strong> J J 9 9 4",
        rankPair: "<strong>One Pair:</strong> A A 8 5 3",
        rankHigh: "<strong>High Card:</strong> A K 9 5 2 (Highest card plays)",

        // Coach Content
        coachRfi: `
            <h3>Raise First In (Open)</h3>
            <p>You are the first player to voluntarily put money in the pot. Your goal is to construct a profitable opening range based on your position.</p>
            <ul>
                <li><strong>Early Position (UTG):</strong> Play very tight (premium pairs, strong broadways). You have many players behind you who might wake up with a monster hand.</li>
                <li><strong>Late Position (BTN):</strong> Play very wide. You can raise with speculative hands just to steal the blinds, because there are only two players left to act.</li>
            </ul>
            <p><strong>Rule of Thumb:</strong> Always Raise (usually 2x to 3x the big blind) when you are first in. Open-limping is almost always a mistake.</p>
        `,
        coachDefend: `
            <h3>Facing a Raise (Defense)</h3>
            <p>An opponent has already open-raised, signaling strength. You must defend your position carefully.</p>
            <ul>
                <li><strong>3-Bet (Re-raise):</strong> With your strongest hands (AA, KK, AK), 3-bet to build the pot. You also mix in 3-bet bluffs with hands that have good blockers.</li>
                <li><strong>Call (Flat):</strong> In position (like on the BTN), flat call a wide range of playable hands (suited connectors, medium pairs, broadways) to see a flop.</li>
                <li><strong>Fold:</strong> Be highly disciplined. Facing a raise means you must fold many marginal hands you would have normally opened yourself.</li>
            </ul>
        `,
        coachPushFold: `
            <h3>Short Stack: Push / Fold</h3>
            <p>In tournament poker, when your stack falls to 10 Big Blinds or less, your strategy drastically simplifies.</p>
            <ul>
                <li><strong>No Room for Postflop:</strong> Your stack is too short to raise conventionally or call to hit a flop.</li>
                <li><strong>The Only Options:</strong> You are strictly forced to either go All-In (Push) or Fold.</li>
                <li><strong>Math Dictates Play:</strong> Nash Equilibrium charts dictate exactly which hands have enough combined fold equity and card equity to profitably shove.</li>
            </ul>
        `,

        // Dynamic Text
        evalRfiUtgRaise: (combo) => `In position UTG, ${combo} is strong enough to play. UTG requires a very tight, precise range because you face actions and possible 3-bets from the entire table behind you. You must Raise to take control. (Suggested sizing: 2.5bb to 3bb)`,
        evalRfiRaise: (pos, combo) => `In position ${pos}, ${combo} is strong enough to play. Open limping is suboptimal, so you Raise. (Suggested sizing: 2.5bb to 3bb)`,
        evalRfiUtgFold: (combo) => `In position UTG, ${combo} is a fold. You must be extremely disciplined UTG to avoid post-flop or 3-betting disadvantages against the rest of the table.`,
        evalRfiFold: (pos, combo) => `In position ${pos}, ${combo} is generally considered a fold as an opening hand.`,

        evalPush: (pos, combo) => `With 10bb in position ${pos}, ${combo} is mathematically profitable to shove All-In based on Nash equilibrium.`,
        evalPushFold: (pos, combo) => `With 10bb in position ${pos}, ${combo} does not have enough equity to shove. Fold and wait for a better spot.`,

        evalDefendRaise: (combo) => `Facing a raise from the Cutoff, ${combo} is a premium hand on the Button. You should 3-Bet (Raise) for value and to take control.`,
        evalDefendCall: (combo) => `Facing a raise from the Cutoff, ${combo} is playable on the Button. You have position, so you should Call (flat) to see a flop.`,
        evalDefendFold: (combo) => `Facing a raise from the Cutoff, ${combo} is too weak to play on the Button. Fold and save your chips.`,

        scenarioRfi: (hand, pos) => `You are dealt ${hand}. You are first to act in position ${pos}.`,
        scenarioPush: (hand, pos) => `You are dealt ${hand}. You have a 10bb stack in position ${pos}.`,
        scenarioDefend: (hand) => `You are dealt ${hand}. The Cutoff (CO) raises to 2.5bb. You are on the Button.`,

        feedbackCorrect: "Correct!",
        feedbackIncorrect: "Incorrect.",
        feedbackDetail: (chose, correct) => `<strong>You chose ${chose}, correct was ${correct}.</strong>`,
        badgeRfi: "RFI",
        badgeDefend: "Defense",
        badgePushFold: "Push/Fold"
    },
    'zh-TW': {
        // App title & UI
        appTitle: "德州撲克翻牌前訓練器",
        score: "分數",
        streak: "連勝",
        btnFold: "棄牌 (Fold)",
        btnCall: "跟注 (Call)",
        btnRaise: "加注 (Raise)",
        btnAllIn: "全下 (All-In)",
        scenarioTitle: "情境",
        waitingHand: "等待下一手牌...",
        nextHand: "下一手牌",
        modeRFI: "模式：率先加注 (RFI)",
        modeDefend: "模式：面對加注 (防守)",
        modePushFold: "模式：全下/棄牌 (短碼)",

        // Position names
        position: { UTG: '槍口位(UTG)', HJ: '劫持位(HJ)', CO: '關門位(CO)', BTN: '按鈕位(BTN)', SB: '小盲(SB)', BB: '大盲(BB)' },
        positionBtnVsCo: '按鈕位 面對 關門位加注',

        // Coach
        coachTitle: "策略教練",
        coachSelect: "請選擇一個模式以開始。",

        // Modals
        chartUtgRfiTitle: "UTG 率先加注範圍",
        chartUtgPushTitle: "UTG 10bb 全下範圍",
        chartDefendTitle: "BTN 面對 CO 加注策略",
        legendRaise: "遊戲 (全下/加注)",
        legendFold: "棄牌",
        legend3Bet: "3-Bet (再加注)",
        legendCall: "跟注",

        rulesTitle: "德州撲克規則與策略",
        positionTitle: "位置 (行動順序)",
        positionDesc: "在德州撲克中，行動順序每局都會順時針輪轉。你行動得越晚，你擁有的對手資訊就越多。",
        utgDesc: "<strong>UTG (槍口位):</strong> 第一個行動。沒有任何資訊。必須玩非常強的牌（例如 AA, KK, AKs）。",
        hjCoDesc: "<strong>HJ (劫持位) & CO (關門位):</strong> 中後方位置。可以玩稍微弱一點的牌。",
        btnDesc: "<strong>BTN (莊家按鈕):</strong> 翻牌後最後一個行動。最具優勢的位置。可以玩非常廣泛的牌來偷盲。",
        sbBbDesc: "<strong>SB (小盲) & BB (大盲):</strong> 發牌前被迫投入盲注，且翻牌後必須最先行動。",

        preflopStratTitle: "翻牌前策略",
        preflopStratDesc: "當前面的人都棄牌到你時，你要決定是 <strong>棄牌 (Fold)</strong> 還是 <strong>率先加注 (Raise First In, RFI)</strong>。對於初學者來說，「溜入 (Limping)」（只跟注大盲）通常是糟糕的策略。你應該加注以奪取主動權，或者直接棄牌。",
        advStratTitle: "進階策略概念 (來自 PokerVIP)",
        advUtgDesc: "<strong>UTG 緊度:</strong> 在槍口位意味著你處於嚴重的資訊劣勢。你必須玩非常緊的範圍，因為你要面對身後所有玩家的行動與潛在的 3-bet。",
        adv3BetDesc: "<strong>應對 3-Bets:</strong> \"3-Bet\" 是指翻牌前的再加注。如果你在 UTG 加注並面對了 3-bet，你的對手通常有極強的牌。你必須謹慎防守，或用頂級好牌進行 4-bet。",
        advImpliedDesc: "<strong>隱含賠率:</strong> 當你湊成大牌（例如口袋對子中三條）<em>後</em> 預期能贏得的錢。如果對手的籌碼夠深，足以在你擊中牌時支付你，小對子有時也能跟注 3-bet。",

        handRanksTitle: "基本牌型大小 (從大到小)",
        rankRoyal: "<strong>同花大順:</strong> A<span class=\"suit-red\">♥</span> K<span class=\"suit-red\">♥</span> Q<span class=\"suit-red\">♥</span> J<span class=\"suit-red\">♥</span> T<span class=\"suit-red\">♥</span> (花色相同)",
        rankStrFlush: "<strong>同花順:</strong> 9<span class=\"suit-black\">♠</span> 8<span class=\"suit-black\">♠</span> 7<span class=\"suit-black\">♠</span> 6<span class=\"suit-black\">♠</span> 5<span class=\"suit-black\">♠</span> (點數相連且花色相同)",
        rankQuads: "<strong>四條:</strong> Q<span class=\"suit-black\">♠</span> Q<span class=\"suit-red\">♥</span> Q<span class=\"suit-red\">♦</span> Q<span class=\"suit-black\">♣</span> 4<span class=\"suit-black\">♠</span>",
        rankBoat: "<strong>葫蘆:</strong> K<span class=\"suit-black\">♠</span> K<span class=\"suit-red\">♥</span> K<span class=\"suit-black\">♣</span> 2<span class=\"suit-red\">♦</span> 2<span class=\"suit-black\">♠</span> (三條 + 一對)",
        rankFlush: "<strong>同花:</strong> 任意五張同花色的牌。",
        rankStraight: "<strong>順子:</strong> 5 6 7 8 9 (點數相連但花色不同)",
        rankTrips: "<strong>三條:</strong> 7 7 7 A 2",
        rankTwoPair: "<strong>兩對:</strong> J J 9 9 4",
        rankPair: "<strong>一對:</strong> A A 8 5 3",
        rankHigh: "<strong>高牌:</strong> A K 9 5 2 (以最大牌決定)",

        // Coach Content
        coachRfi: `
            <h3>率先加注 (Open)</h3>
            <p>你是第一個自願投入籌碼在底池的玩家。你的目標是根據你的位置建立一個有利可圖的開局範圍。</p>
            <ul>
                <li><strong>前方位置 (UTG):</strong> 玩法要非常緊（優質對子、強的同花大牌）。你身後還有許多玩家可能隨時拿到怪獸牌 (Monster Hand)。</li>
                <li><strong>後方位置 (BTN):</strong> 玩法可以非常寬。你可以用投機牌加注純粹為了偷盲，因為只剩兩名玩家行動。</li>
            </ul>
            <p><strong>經驗法則:</strong> 當你是第一個行動時永遠要加注（通常是 2 到 3 倍大盲）。溜入 (Open-limping) 幾乎都是錯誤的。</p>
        `,
        coachDefend: `
            <h3>面對加注 (防守)</h3>
            <p>對手已經率先加注，顯示了很強的牌力。你必須謹慎防守你的位置。</p>
            <ul>
                <li><strong>3-Bet (再加注):</strong> 用你最強的牌（AA, KK, AK）進行 3-bet 以擴大底池。你也可以混合用具有阻擋牌效應的牌進行 3-bet 詐唬。</li>
                <li><strong>跟注 (Flat):</strong> 在有利位置（例如 BTN），平跟廣泛的可玩牌（同花連牌、中對子、同花大牌）來看翻牌。</li>
                <li><strong>棄牌:</strong> 保持高度紀律。面對加注意味著你必須放棄許多原本如果你是第一個行動就會加注的邊緣牌。</li>
            </ul>
        `,
        coachPushFold: `
            <h3>短碼：全下/棄牌 (Push / Fold)</h3>
            <p>在錦標賽撲克中，當你的籌碼降至 10 個大盲或更少時，你的策略會大幅簡化。</p>
            <ul>
                <li><strong>沒有翻牌後空間:</strong> 你的籌碼太短，無法進行常規加注或跟注看翻牌。</li>
                <li><strong>唯一的選擇:</strong> 你被嚴格限制只能選擇全下 (Push) 或棄牌 (Fold)。</li>
                <li><strong>數學決定玩法:</strong> 納什均衡圖表準確指示了哪些牌具備足夠的棄牌勝率和底牌勝率可以進行獲利全下。</li>
            </ul>
        `,

        // Dynamic Text
        evalRfiUtgRaise: (combo) => `在槍口位 (UTG)，${combo} 夠強可以玩。UTG 需要非常緊且精確的範圍，因為你將面對身後所有玩家的行動和潛在的 3-bet。你必須加注以奪取主動權。(建議下注量：2.5bb 到 3bb)`,
        evalRfiRaise: (pos, combo) => `在 ${pos} 位置，${combo} 夠強可以玩。溜入 (Limp) 是不理想的，因此你應該加注。(建議下注量：2.5bb 到 3bb)`,
        evalRfiUtgFold: (combo) => `在槍口位 (UTG)，${combo} 應該棄牌。在 UTG 必須極度自律，以避免在翻牌後或面對 3-bet 時處於劣勢。`,
        evalRfiFold: (pos, combo) => `在 ${pos} 位置，${combo} 作為開局牌通常被認為應該棄牌。`,

        evalPush: (pos, combo) => `在 ${pos} 位置只有 10bb 籌碼，基於納什均衡，用 ${combo} 全下 (All-In) 在數學上是能獲利的。`,
        evalPushFold: (pos, combo) => `在 ${pos} 位置只有 10bb 籌碼，${combo} 沒有足夠的贏率全下。請棄牌等待更好的時機。`,

        evalDefendRaise: (combo) => `面對 Cutoff 的加注，${combo} 在 Button 是一個頂級好牌。你應該 3-Bet (再加注) 以獲取價值並奪取主動權。`,
        evalDefendCall: (combo) => `面對 Cutoff 的加注，${combo} 在 Button 是可以玩的。你擁有位置優勢，應該跟注 (Call) 來看翻牌。`,
        evalDefendFold: (combo) => `面對 Cutoff 的加注，${combo} 在 Button 顯得太弱。請棄牌以節省籌碼。`,

        scenarioRfi: (hand, pos) => `你拿到 ${hand}。在 ${pos} 位置你是第一個行動的玩家。`,
        scenarioPush: (hand, pos) => `你拿到 ${hand}。在 ${pos} 位置你只有 10bb 籌碼。`,
        scenarioDefend: (hand) => `你拿到 ${hand}。關門位 (CO) 加注到 2.5bb，你在莊家按鈕位 (BTN)。`,

        feedbackCorrect: "正確！",
        feedbackIncorrect: "不正確。",
        feedbackDetail: (chose, correct) => `<strong>你選擇了 ${chose}，正確答案是 ${correct}。</strong>`,
        badgeRfi: "RFI (率先加注)",
        badgeDefend: "防守",
        badgePushFold: "全下/棄牌"
    }
};
