const I18N = {
    en: {
        // App title & UI
        appTitle: "Poker Preflop Trainer",
        score: "Score",
        streak: "Streak",
        lifetimeHands: "Hands",
        btnFold: "Fold",
        btnCall: "Call",
        btnRaise: "Raise",
        btnAllIn: "All-In",
        scenarioTitle: "Scenario",
        waitingHand: "Waiting for next hand...",
        nextHand: "Next Hand <span class='btn-hint'>Space</span>",
        modeRFI: "Mode: RFI (Open)",
        modeDefend: "Mode: Defense",
        modePushFold: "Mode: Push / Fold",
        modeCustom: "Mode: Custom Practice",

        // Position names
        position: { UTG: 'UTG', HJ: 'HJ', CO: 'CO', BTN: 'BTN', SB: 'SB', BB: 'BB' },
        positionBtnVsCo: 'BTN vs CO',

        // Coach
        coachTitle: "Strategy Coach",
        coachSelect: "Select a mode to begin.",

        // Modals
        chartUtgRfiTitle: "UTG RFI Open Range",
        chartUtgPushTitle: "UTG Push Range",
        chartDefendTitle: "Defense Strategy",
        legendRaise: "Play (Raise/Shove)",
        legendFold: "Fold",
        legend3Bet: "3-Bet (Re-raise)",
        legendCall: "Call",

        // Stats modal
        statsTitle: "Progress & Accuracy",
        statsReset: "Reset All Stats",

        // Range editor
        rangeEditorTitle: "Range Editor",
        rangeEditorSave: "Save Range",
        rangeEditorLoad: "Load",
        rangeEditorDelete: "Delete",
        rangeEditorClear: "Clear All",
        rangeEditorNamePlaceholder: "Range name...",
        rangeNameLabel: "Name:",
        rangeEditorHelp: "Click cells to toggle: Fold → Raise → Call → Fold",
        rangeEditorPurpose: "Use this tool to visualize and save your custom preflop ranges for study.",

        // Hand history
        handHistoryTitle: "Hand History",
        historyEmpty: "No hands played yet.",

        // Keyboard hint
        kbdHint: "F·C·R·A (All-In)",

        // Stack selector
        stackLabel: "Stack:",

        // Rules info
        rulesTitle: "Poker Rules & Strategy",
        positionTitle: "Position (Who acts when)",
        positionDesc: "In poker, the order of action rotates clockwise every hand. The later you act, the more information you have about what your opponents will do.",
        utgDesc: "<strong>UTG (Under the Gun):</strong> Acts first. Has no information. Must play very strong hands (e.g. AA, KK, AKs).",
        hjCoDesc: "<strong>HJ (Hijack) & CO (Cutoff):</strong> Middle/Late positions. Can play slightly weaker hands.",
        btnDesc: "<strong>BTN (Button):</strong> Acts last post-flop. Most powerful position. Can play a very wide range of hands to steal the blinds.",
        sbBbDesc: "<strong>SB (Small Blind) & BB (Big Blind):</strong> Forced to put money in before the cards are dealt, and have to act first post-flop.",
        preflopStratTitle: "Preflop Strategy",
        preflopStratDesc: "When the action folds to you, you are deciding whether to <strong>Fold</strong> or <strong>Raise First In (RFI)</strong>. 'Limping' (just calling the big blind) is generally a bad strategy for beginners. You should either raise to take control, or fold.",
        advStratTitle: "Advanced Strategy Concepts",
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
            <p>You are the first player to voluntarily put money in the pot. Construct a profitable opening range based on your position.</p>
            <ul>
                <li><strong>Early Position (UTG):</strong> Very tight — premium pairs and strong broadways only.</li>
                <li><strong>Late Position (BTN):</strong> Very wide — steal the blinds with speculative hands.</li>
            </ul>
            <p><strong>Rule of Thumb:</strong> Always Raise (2x–3x BB) when first in. Open-limping is almost always a mistake.</p>
        `,
        coachDefend: `
            <h3>Facing a Raise (Defense)</h3>
            <p>An opponent has already opened, signaling strength. You face multiple scenarios:</p>
            <ul>
                <li><strong>3-Bet (Re-raise):</strong> With your strongest hands + some bluffs with good blockers (A2s–A5s).</li>
                <li><strong>Call (Flat):</strong> In position with playable hands to see a flop.</li>
                <li><strong>Fold from SB:</strong> SB is OOP post-flop — prefer 3-bet or fold, rarely flat.</li>
                <li><strong>BB Defense:</strong> BB gets a discount — defend wider than other positions.</li>
            </ul>
        `,
        coachPushFold: `
            <h3>Short Stack: Push / Fold</h3>
            <p>In tournament poker, when your stack falls below ~15BB, strategy simplifies to push or fold only.</p>
            <ul>
                <li><strong>No Postflop Play:</strong> Stack too short for conventional raises.</li>
                <li><strong>Only Options:</strong> All-In (Push) or Fold.</li>
                <li><strong>Math Dictates:</strong> Nash Equilibrium charts define which hands profit from shoving based on fold equity + card equity.</li>
                <li><strong>Stack Matters:</strong> Ranges widen significantly as stack shrinks — use the stack size buttons above.</li>
            </ul>
        `,
        coachCustom: `
            <h3>Custom Practice Mode</h3>
            <p>Practice against your own hand-crafted ranges from the Range Editor.</p>
            <ul>
                <li><strong>Your Choice:</strong> Select any of your saved ranges.</li>
                <li><strong>Infinite Drill:</strong> Random hands will be sampled according to your notation.</li>
                <li><strong>No Restrictions:</strong> Test specific sub-ranges or weird edge cases.</li>
            </ul>
        `,

        // Dynamic Text — Scenario
        scenarioRfi: (hand, pos) => `You are dealt ${hand}. You are first to act in position ${pos}.`,
        scenarioPush: (hand, pos, stack) => `You are dealt ${hand}. You have a ${stack}bb stack in position ${pos}.`,
        scenarioDefend: (hand) => `You are dealt ${hand}. The CO raises to 2.5bb. You are on the BTN.`,
        scenarioDefendFull: (hand, villain, hero) => `You are dealt ${hand}. ${villain} raises to 2.5bb. You are in the ${hero}.`,

        // Dynamic Text — Evaluations
        evalRfiUtgRaise: (combo) => `In position UTG, ${combo} is strong enough to play. UTG requires a very tight range — you face possible 3-bets from the entire table. Raise to take control (2.5bb–3bb).`,
        evalRfiRaise: (pos, combo) => `In position ${pos}, ${combo} is in your opening range. Raise to 2.5bb–3bb.`,
        evalRfiUtgFold: (combo) => `In position UTG, ${combo} is a fold. Be extremely disciplined UTG — you must be tight to avoid post-flop disadvantages.`,
        evalRfiFold: (pos, combo) => `In position ${pos}, ${combo} is generally a fold as an opening hand.`,

        evalPush: (pos, combo, stack) => `With ${stack || 10}bb in position ${pos}, ${combo} is mathematically profitable to shove All-In (Nash equilibrium). The combination of fold equity + card equity makes this a +EV push.`,
        evalPushFold: (pos, combo, stack) => `With ${stack || 10}bb in position ${pos}, ${combo} does not have enough equity to shove profitably. Fold and wait for a stronger hand or better position.`,

        evalDefendRaise: (combo, villain, hero) => `Facing ${villain}'s raise, ${combo} in the ${hero} is strong enough to 3-Bet for value. Build the pot and take control.`,
        evalDefendCall: (combo, villain, hero) => `Facing ${villain}'s raise, ${combo} in the ${hero} is worth calling to see a flop. You have enough equity and playability post-flop.`,
        evalDefendFold: (combo, villain, hero) => `Facing ${villain}'s raise, ${combo} in the ${hero} is too weak to continue. Fold and save your chips.`,

        // Feedback
        feedbackCorrect: "Correct!",
        feedbackIncorrect: "Incorrect.",
        feedbackDetail: (chose, correct) => `<strong>You chose ${chose}, correct was ${correct}.</strong>`,

        // Badges
        badgeRfi: "RFI",
        badgeDefend: "Defense",
        badgePushFold: "Push/Fold",
        badgeCustom: "Custom",
    },

    'zh-TW': {
        // App title & UI
        appTitle: "德州撲克翻牌前訓練器",
        score: "分數",
        streak: "連勝",
        lifetimeHands: "手數",
        btnFold: "棄牌 (Fold)",
        btnCall: "跟注 (Call)",
        btnRaise: "加注 (Raise)",
        btnAllIn: "全下 (All-In)",
        scenarioTitle: "情境",
        waitingHand: "等待下一手牌...",
        nextHand: "下一手牌 <span class='btn-hint'>Space</span>",
        modeRFI: "模式：率先加注 (RFI)",
        modeDefend: "模式：面對加注 (防守)",
        modePushFold: "模式：全下/棄牌 (短碼)",
        modeCustom: "模式：自定義練習",

        // Position names
        position: { UTG: '槍口位(UTG)', HJ: '劫持位(HJ)', CO: '關門位(CO)', BTN: '按鈕位(BTN)', SB: '小盲(SB)', BB: '大盲(BB)' },
        positionBtnVsCo: 'BTN 面對 CO',

        // Coach
        coachTitle: "策略教練",
        coachSelect: "請選擇一個模式以開始。",

        // Modals
        chartUtgRfiTitle: "UTG 率先加注範圍",
        chartUtgPushTitle: "UTG 全下範圍",
        chartDefendTitle: "防守策略",
        legendRaise: "遊戲 (全下/加注)",
        legendFold: "棄牌",
        legend3Bet: "3-Bet (再加注)",
        legendCall: "跟注",

        // Stats modal
        statsTitle: "進度與準確率",
        statsReset: "重置所有統計",

        // Range editor
        rangeEditorTitle: "範圍編輯器",
        rangeEditorSave: "儲存範圍",
        rangeEditorLoad: "載入",
        rangeEditorDelete: "刪除",
        rangeEditorClear: "全部清除",
        rangeEditorNamePlaceholder: "範圍名稱...",
        rangeNameLabel: "名稱：",
        rangeEditorHelp: "點擊格子切換：棄牌 → 加注 → 跟注 → 棄牌",
        rangeEditorPurpose: "使用此工具來視覺化並保存您的自定義翻牌前範圍，以便學習。",

        // Hand history
        handHistoryTitle: "手牌記錄",
        historyEmpty: "尚未遊玩任何手牌。",

        // Keyboard hint
        kbdHint: "快捷鍵：F·C·R·A (All-In)",

        // Stack selector
        stackLabel: "碼量：",

        // Rules info
        rulesTitle: "德州撲克規則與策略",
        positionTitle: "位置 (行動順序)",
        positionDesc: "在德州撲克中，行動順序每局都會順時針輪轉。你行動得越晚，你擁有的對手資訊就越多。",
        utgDesc: "<strong>UTG (槍口位):</strong> 第一個行動。沒有任何資訊。必須玩非常強的牌（例如 AA, KK, AKs）。",
        hjCoDesc: "<strong>HJ (劫持位) & CO (關門位):</strong> 中後方位置。可以玩稍微弱一點的牌。",
        btnDesc: "<strong>BTN (莊家按鈕):</strong> 翻牌後最後一個行動。最具優勢的位置。可以玩非常廣泛的牌來偷盲。",
        sbBbDesc: "<strong>SB (小盲) & BB (大盲):</strong> 發牌前被迫投入盲注，且翻牌後必須最先行動。",
        preflopStratTitle: "翻牌前策略",
        preflopStratDesc: "當前面的人都棄牌到你時，你要決定是 <strong>棄牌 (Fold)</strong> 還是 <strong>率先加注 (RFI)</strong>。溜入 (Limping) 對初學者通常是糟糕的策略。",
        advStratTitle: "進階策略概念",
        advUtgDesc: "<strong>UTG 緊度:</strong> 在槍口位意味著你處於嚴重的資訊劣勢。你必須玩非常緊的範圍。",
        adv3BetDesc: "<strong>應對 3-Bets:</strong> \"3-Bet\" 是指翻牌前的再加注。面對 3-bet，你的對手通常有極強的牌。",
        advImpliedDesc: "<strong>隱含賠率:</strong> 當你湊成大牌後預期能贏得的錢。",
        handRanksTitle: "基本牌型大小 (從大到小)",
        rankRoyal: "<strong>同花大順:</strong> A<span class=\"suit-red\">♥</span> K<span class=\"suit-red\">♥</span> Q<span class=\"suit-red\">♥</span> J<span class=\"suit-red\">♥</span> T<span class=\"suit-red\">♥</span>",
        rankStrFlush: "<strong>同花順:</strong> 9<span class=\"suit-black\">♠</span> 8<span class=\"suit-black\">♠</span> 7<span class=\"suit-black\">♠</span> 6<span class=\"suit-black\">♠</span> 5<span class=\"suit-black\">♠</span>",
        rankQuads: "<strong>四條:</strong> Q<span class=\"suit-black\">♠</span> Q<span class=\"suit-red\">♥</span> Q<span class=\"suit-red\">♦</span> Q<span class=\"suit-black\">♣</span> 4<span class=\"suit-black\">♠</span>",
        rankBoat: "<strong>葫蘆:</strong> K<span class=\"suit-black\">♠</span> K<span class=\"suit-red\">♥</span> K<span class=\"suit-black\">♣</span> 2<span class=\"suit-red\">♦</span> 2<span class=\"suit-black\">♠</span>",
        rankFlush: "<strong>同花:</strong> 任意五張同花色的牌。",
        rankStraight: "<strong>順子:</strong> 5 6 7 8 9 (點數相連但花色不同)",
        rankTrips: "<strong>三條:</strong> 7 7 7 A 2",
        rankTwoPair: "<strong>兩對:</strong> J J 9 9 4",
        rankPair: "<strong>一對:</strong> A A 8 5 3",
        rankHigh: "<strong>高牌:</strong> A K 9 5 2 (以最大牌決定)",

        // Coach Content
        coachRfi: `
            <h3>率先加注 (Open)</h3>
            <p>你是第一個自願投入籌碼的玩家。根據你的位置建立有利可圖的開局範圍。</p>
            <ul>
                <li><strong>前方位置 (UTG):</strong> 非常緊 — 只玩優質對子和強的同花大牌。</li>
                <li><strong>後方位置 (BTN):</strong> 非常寬 — 用投機牌偷盲。</li>
            </ul>
            <p><strong>經驗法則:</strong> 第一個行動時永遠要加注 (2x–3x 大盲)。</p>
        `,
        coachDefend: `
            <h3>面對加注 (防守)</h3>
            <p>對手已經率先加注，顯示了很強的牌力。你面對多種情境：</p>
            <ul>
                <li><strong>3-Bet (再加注):</strong> 用最強的牌 + 阻擋牌詐唬。</li>
                <li><strong>跟注 (Flat):</strong> 在有利位置用可玩牌看翻牌。</li>
                <li><strong>SB 棄牌:</strong> SB 翻牌後無位置 — 偏好 3-bet 或棄牌。</li>
                <li><strong>BB 防守:</strong> BB 享有折扣 — 防守範圍比其他位置更寬。</li>
            </ul>
        `,
        coachPushFold: `
            <h3>短碼：全下/棄牌</h3>
            <p>在錦標賽中，當你的籌碼低於約 15BB 時，策略簡化為全下或棄牌。</p>
            <ul>
                <li><strong>沒有翻牌後空間:</strong> 籌碼太短，無法常規加注。</li>
                <li><strong>唯一選擇:</strong> 全下或棄牌。</li>
                <li><strong>數學決定玩法:</strong> 納什均衡決定哪些牌可以獲利全下。</li>
                <li><strong>碼量影響範圍:</strong> 籌碼越少，範圍越寬。</li>
            </ul>
        `,
        coachCustom: `
            <h3>自定義練習模式</h3>
            <p>使用您在範圍編輯器中親自製作的範圍進行練習。</p>
            <ul>
                <li><strong>您的選擇:</strong> 選擇任何您已儲存的範圍。</li>
                <li><strong>無限練習:</strong> 系統將根據您的標記隨機抽樣手牌。</li>
                <li><strong>無限制:</strong> 測試特定的子範圍或特殊的邊緣情況。</li>
            </ul>
        `,

        // Dynamic Text — Scenario
        scenarioRfi: (hand, pos) => `你拿到 ${hand}。在 ${pos} 位置你是第一個行動的玩家。`,
        scenarioPush: (hand, pos, stack) => `你拿到 ${hand}。在 ${pos} 位置你只有 ${stack || 10}bb 籌碼。`,
        scenarioDefend: (hand) => `你拿到 ${hand}。關門位 (CO) 加注，你在莊家按鈕位 (BTN)。`,
        scenarioDefendFull: (hand, villain, hero) => `你拿到 ${hand}。${villain} 加注到 2.5bb，你在 ${hero}。`,

        // Dynamic Text — Evaluations
        evalRfiUtgRaise: (combo) => `在槍口位 (UTG)，${combo} 夠強可以玩。UTG 需要非常緊的範圍。加注 (2.5bb–3bb)。`,
        evalRfiRaise: (pos, combo) => `在 ${pos} 位置，${combo} 在你的開局範圍內。加注 2.5bb–3bb。`,
        evalRfiUtgFold: (combo) => `在槍口位 (UTG)，${combo} 應該棄牌。在 UTG 必須極度自律。`,
        evalRfiFold: (pos, combo) => `在 ${pos} 位置，${combo} 作為開局牌通常應該棄牌。`,

        evalPush: (pos, combo, stack) => `在 ${pos} 位置只有 ${stack || 10}bb 籌碼，基於納什均衡，${combo} 全下 (All-In) 在數學上是獲利的。`,
        evalPushFold: (pos, combo, stack) => `在 ${pos} 位置只有 ${stack || 10}bb 籌碼，${combo} 沒有足夠的勝率全下。棄牌等待更好的時機。`,

        evalDefendRaise: (combo, villain, hero) => `面對 ${villain} 的加注，${combo} 在 ${hero} 是頂級好牌。應該 3-Bet (再加注) 以獲取價值。`,
        evalDefendCall: (combo, villain, hero) => `面對 ${villain} 的加注，${combo} 在 ${hero} 值得跟注。你有足夠的底牌勝率和翻牌後可玩性。`,
        evalDefendFold: (combo, villain, hero) => `面對 ${villain} 的加注，${combo} 在 ${hero} 顯得太弱。棄牌以節省籌碼。`,

        // Feedback
        feedbackCorrect: "正確！",
        feedbackIncorrect: "不正確。",
        feedbackDetail: (chose, correct) => `<strong>你選擇了 ${chose}，正確答案是 ${correct}。</strong>`,

        // Badges
        badgeRfi: "RFI (率先加注)",
        badgeDefend: "防守",
        badgePushFold: "全下/棄牌",
        badgeCustom: "自定義",
    }
};
