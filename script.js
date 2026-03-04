// ============================================================
// CONSTANTS
// ============================================================
const POSITIONS = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB'];
const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const CHART_RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const LS_KEY = 'pokerTrainer_v1';

// ============================================================
// RAISE FIRST IN RANGES (by position)
// ============================================================
const RFI_RANGES = {
    UTG: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', 'AKs', 'AQs', 'AJs', 'ATs', 'KQs', 'KJs', 'KTs', 'QJs', 'QTs', 'JTs', 'T9s', 'AKo', 'AQo']),
    HJ: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'Q9s', 'JTs', 'J9s', 'T9s', '98s', '87s', 'AKo', 'AQo', 'AJo', 'ATo', 'KQo']),
    CO: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'JTs', 'J9s', 'J8s', 'T9s', 'T8s', '98s', '87s', '76s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'KQo', 'KJo', 'KTo', 'QJo']),
    BTN: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s', 'Q4s', 'Q3s', 'Q2s', 'JTs', 'J9s', 'J8s', 'J7s', 'T9s', 'T8s', 'T7s', '98s', '97s', '87s', '86s', '76s', '75s', '65s', '54s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o', 'KQo', 'KJo', 'KTo', 'K9o', 'QJo', 'QTo', 'Q9o', 'JTo', 'J9o', 'T9o']),
};
RFI_RANGES.SB = RFI_RANGES.BTN;

// ============================================================
// PUSH / FOLD RANGES (multiple stack sizes)
// ============================================================
const PUSH_6BB = {
    UTG: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'QJs', 'QTs', 'Q9s', 'JTs', 'T9s', '98s', '87s', '76s', '65s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'KQo', 'KJo', 'KTo', 'QJo', 'JTo']),
    HJ: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'JTs', 'J9s', 'T9s', 'T8s', '98s', '87s', '76s', '65s', '54s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'KQo', 'KJo', 'KTo', 'K9o', 'QJo', 'QTo', 'JTo']),
    CO: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'JTs', 'J9s', 'J8s', 'T9s', 'T8s', '98s', '87s', '76s', '65s', '54s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'KQo', 'KJo', 'KTo', 'K9o', 'QJo', 'QTo', 'Q9o', 'JTo', 'T9o']),
};
PUSH_6BB.BTN = new Set([...PUSH_6BB.CO, 'K5s', 'K4s', 'K3s', 'K2s', 'Q6s', 'Q5s', 'Q4s', 'J7s', 'J6s', 'T7s', '97s', '86s', '75s', 'A4o', 'A3o', 'A2o', 'K8o', 'K7o', 'Q8o', 'J9o', 'J8o', 'T8o', '98o', '87o']);
PUSH_6BB.SB = new Set([...PUSH_6BB.BTN, 'Q3s', 'Q2s', 'J5s', 'J4s', 'T6s', '96s', '85s', '74s', 'K6o', 'K5o', 'Q7o', 'J7o', 'T7o', '97o', '76o']);
PUSH_6BB.BB = PUSH_6BB.SB;

const PUSH_8BB = {
    UTG: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'Q9s', 'JTs', 'T9s', '98s', '87s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'KQo', 'KJo']),
    HJ: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'QJs', 'QTs', 'Q9s', 'JTs', 'J9s', 'T9s', '98s', '87s', '76s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'KQo', 'KJo', 'KTo', 'QJo']),
    CO: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'JTs', 'J9s', 'T9s', 'T8s', '98s', '87s', '76s', '65s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'KQo', 'KJo', 'KTo', 'QJo', 'QTo', 'JTo']),
};
PUSH_8BB.BTN = new Set([...PUSH_8BB.CO, 'K6s', 'K5s', 'Q7s', 'J8s', 'T7s', '97s', '86s', '75s', '65s', '54s', 'A5o', 'A4o', 'A3o', 'A2o', 'K9o', 'K8o', 'Q9o', 'Q8o', 'J9o', 'J8o', 'T9o', 'T8o', '98o']);
PUSH_8BB.SB = new Set([...PUSH_8BB.BTN, 'K4s', 'K3s', 'K2s', 'Q6s', 'Q5s', 'J7s', '96s', '85s', '74s', 'K7o', 'K6o', 'Q7o', 'J7o', 'T7o', '97o', '87o', '76o']);
PUSH_8BB.BB = PUSH_8BB.SB;

const PUSH_10BB = {
    UTG: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'KQs', 'KJs', 'KTs', 'QJs', 'QTs', 'JTs', 'T9s', 'AKo', 'AQo', 'AJo', 'ATo', 'KQo']),
    HJ: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'KQs', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'Q9s', 'JTs', 'T9s', '98s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'KQo', 'KJo']),
    CO: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'JTs', 'J9s', 'T9s', 'T8s', '98s', '87s', '76s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A5o', 'KQo', 'KJo', 'KTo', 'QJo']),
};
PUSH_10BB.BTN = new Set([...PUSH_10BB.CO, 'K6s', 'K5s', 'K4s', 'K3s', 'K2s', 'Q7s', 'Q6s', 'Q5s', 'J8s', 'J7s', 'T7s', '97s', '86s', '65s', 'A6o', 'A4o', 'A3o', 'A2o', 'K9o', 'K8o', 'QTo', 'Q9o', 'JTo']);
PUSH_10BB.SB = new Set([...PUSH_10BB.BTN, 'Q4s', 'Q3s', 'Q2s', 'J6s', 'J5s', 'T6s', '96s', '75s', 'K7o', 'K6o', 'K5o', 'Q8o', 'J9o', 'J8o', 'T9o', 'T8o', '98o']);
PUSH_10BB.BB = PUSH_10BB.SB;

const PUSH_12BB = {
    UTG: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'KQs', 'KJs', 'AKo', 'AQo', 'AJo']),
    HJ: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'KQs', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'JTs', 'T9s', 'AKo', 'AQo', 'AJo', 'ATo', 'KQo', 'KJo']),
    CO: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'QJs', 'QTs', 'Q9s', 'JTs', 'J9s', 'T9s', '98s', '87s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'KQo', 'KJo', 'KTo', 'QJo']),
};
PUSH_12BB.BTN = new Set([...PUSH_12BB.CO, 'K7s', 'K6s', 'K5s', 'K4s', 'Q8s', 'Q7s', 'J8s', 'T8s', '97s', '86s', '76s', '65s', 'A7o', 'A6o', 'A5o', 'A4o', 'K9o', 'K8o', 'Q9o', 'JTo', 'J9o', 'T9o']);
PUSH_12BB.SB = new Set([...PUSH_12BB.BTN, 'K3s', 'K2s', 'Q6s', 'Q5s', 'J7s', 'T7s', '96s', '85s', '75s', 'A3o', 'A2o', 'K7o', 'K6o', 'Q8o', 'J8o', 'T8o', '98o', '87o']);
PUSH_12BB.BB = PUSH_12BB.SB;

const PUSH_15BB = {
    UTG: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', 'AKs', 'AQs', 'AJs', 'KQs', 'AKo', 'AQo']),
    HJ: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A5s', 'KQs', 'KJs', 'KTs', 'QJs', 'JTs', 'AKo', 'AQo', 'AJo', 'ATo', 'KQo']),
    CO: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'Q9s', 'JTs', 'T9s', '98s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'KQo', 'KJo', 'QJo']),
};
PUSH_15BB.BTN = new Set([...PUSH_15BB.CO, '22', 'K8s', 'K7s', 'K6s', 'K5s', 'Q8s', 'Q7s', 'J9s', 'J8s', 'T8s', 'T7s', '87s', '76s', '65s', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o', 'K9o', 'K8o', 'QTo', 'Q9o', 'JTo', 'J9o', 'T9o']);
PUSH_15BB.SB = new Set([...PUSH_15BB.BTN, 'K4s', 'K3s', 'K2s', 'Q6s', 'J7s', '97s', '86s', '75s', 'A3o', 'A2o', 'K7o', 'K6o', 'Q8o', 'J8o', 'T8o', '98o']);
PUSH_15BB.BB = PUSH_15BB.SB;

const PUSH_RANGES_BY_STACK = { '6': PUSH_6BB, '8': PUSH_8BB, '10': PUSH_10BB, '12': PUSH_12BB, '15': PUSH_15BB };

// ============================================================
// DEFEND SCENARIOS
// ============================================================
const DEFEND_SCENARIOS = {
    BTN_VS_CO: {
        hero: 'BTN', villain: 'CO',
        THREE_BET: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', 'AQs', 'AJs', 'KQs', 'AKo', 'AQo']),
        CALL: new Set(['99', '88', '77', '66', '55', '44', '33', '22', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'Q9s', 'JTs', 'J9s', 'T9s', '98s', '87s', '76s', 'AJo', 'ATo', 'KQo', 'KJo', 'QJo'])
    },
    BTN_VS_HJ: {
        hero: 'BTN', villain: 'HJ',
        THREE_BET: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', 'AQs', 'AJs', 'KQs', 'AKo', 'AQo']),
        CALL: new Set(['99', '88', '77', '66', '55', '44', '33', '22', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'Q9s', 'JTs', 'J9s', 'T9s', '98s', '87s', '76s', 'AJo', 'ATo', 'KQo', 'KJo'])
    },
    BB_VS_BTN: {
        hero: 'BB', villain: 'BTN',
        THREE_BET: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', 'AQs', 'AJs', 'KQs', 'A5s', 'A4s', 'AKo', 'AQo']),
        CALL: new Set(['99', '88', '77', '66', '55', '44', '33', '22', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A3s', 'A2s', 'KJs', 'KTs', 'K9s', 'K8s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'JTs', 'J9s', 'J8s', 'T9s', 'T8s', '98s', '87s', '76s', '65s', 'AJo', 'ATo', 'A9o', 'KQo', 'KJo', 'KTo', 'QJo', 'QTo', 'JTo', 'T9o'])
    },
    BB_VS_SB: {
        hero: 'BB', villain: 'SB',
        THREE_BET: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', 'AQs', 'AJs', 'KQs', 'A5s', 'A4s', 'A3s', 'AKo', 'AQo', 'AJo']),
        CALL: new Set(['99', '88', '77', '66', '55', '44', '33', '22', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A2s', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'JTs', 'J9s', 'J8s', 'T9s', 'T8s', '98s', '97s', '87s', '86s', '76s', '65s', '54s', 'ATo', 'A9o', 'KQo', 'KJo', 'KTo', 'K9o', 'QJo', 'QTo', 'Q9o', 'JTo', 'J9o', 'T9o', '98o'])
    },
    SB_VS_BTN: {
        hero: 'SB', villain: 'BTN',
        THREE_BET: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', 'AKs', 'AQs', 'AJs', 'ATs', 'KQs', 'KJs', 'A5s', 'A4s', 'A3s', 'A2s', 'AKo', 'AQo', 'AJo']),
        CALL: new Set() // SB folds or 3-bets — minimal calling
    }
};

// ============================================================
// ALL 169 COMBOS (for weighted sampling)
// ============================================================
function buildAllCombos() {
    const combos = [];
    for (let i = 0; i < CHART_RANKS.length; i++) {
        for (let j = 0; j < CHART_RANKS.length; j++) {
            const r1 = CHART_RANKS[i], r2 = CHART_RANKS[j];
            if (i === j) {
                combos.push({ name: r1 + r2, baseWeight: 6 }); // pair: 6 combos
            } else if (j > i) {
                combos.push({ name: r1 + r2 + 's', baseWeight: 4 }); // suited: 4
            } else {
                combos.push({ name: r2 + r1 + 'o', baseWeight: 12 }); // offsuit: 12
            }
        }
    }
    return combos;
}
const ALL_COMBOS = buildAllCombos();

// ============================================================
// STATE
// ============================================================
let state = {
    score: 0,
    streak: 0,
    currentMode: 'RFI',
    currentHand: null,
    currentPosition: null,
    correctAction: null,
    explanation: '',
    lang: 'en',
    currentStack: '10',
    currentDefendScenario: 'BTN_VS_CO',
    handHistory: [],
    comboWeights: {},
    chartPosition: 'UTG',
    rangeEditorData: {},    // cellName -> 'raise'|'call'|'fold'
    customRanges: {},       // name -> { raise: [...], call: [...] }
    stats: {
        totalHands: 0,
        totalCorrect: 0,
        byPosition: {},
        byMode: {}
    }
};

// ============================================================
// LOCAL STORAGE
// ============================================================
function loadFromStorage() {
    try {
        const raw = localStorage.getItem(LS_KEY);
        if (!raw) return;
        const saved = JSON.parse(raw);
        if (saved.stats) state.stats = saved.stats;
        if (saved.comboWeights) state.comboWeights = saved.comboWeights;
        if (saved.handHistory) state.handHistory = saved.handHistory;
        if (saved.customRanges) state.customRanges = saved.customRanges;
        else state.customRanges = {};
        refreshRangeDropdown();
    } catch (e) { console.warn('Could not load storage', e); state.customRanges = {}; }
}

function saveToStorage() {
    try {
        localStorage.setItem(LS_KEY, JSON.stringify({
            stats: state.stats,
            comboWeights: state.comboWeights,
            handHistory: state.handHistory.slice(-20),
            customRanges: state.customRanges
        }));
    } catch (e) { console.warn('Could not save storage', e); }
}

function recordStat(position, mode, isCorrect) {
    state.stats.totalHands++;
    if (isCorrect) state.stats.totalCorrect++;
    if (!state.stats.byPosition[position]) state.stats.byPosition[position] = { hands: 0, correct: 0 };
    state.stats.byPosition[position].hands++;
    if (isCorrect) state.stats.byPosition[position].correct++;
    if (!state.stats.byMode[mode]) state.stats.byMode[mode] = { hands: 0, correct: 0 };
    state.stats.byMode[mode].hands++;
    if (isCorrect) state.stats.byMode[mode].correct++;
}

function updateComboWeight(combo, isCorrect) {
    const cur = state.comboWeights[combo] || 1.0;
    state.comboWeights[combo] = isCorrect
        ? Math.max(0.5, cur * 0.8)
        : Math.min(5.0, cur * 1.5);
}

// ============================================================
// WEIGHTED HAND SAMPLING (Adaptive Difficulty)
// ============================================================
function generateHandWeighted() {
    const weights = ALL_COMBOS.map(c => c.baseWeight * (state.comboWeights[c.name] || 1.0));
    const total = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * total;
    let chosen = ALL_COMBOS[ALL_COMBOS.length - 1];
    for (let i = 0; i < ALL_COMBOS.length; i++) {
        rand -= weights[i];
        if (rand <= 0) { chosen = ALL_COMBOS[i]; break; }
    }
    return comboToHand(chosen.name);
}

function comboToHand(comboName) {
    const isPair = comboName.length === 2 && comboName[0] === comboName[1];
    const isSuited = comboName.endsWith('s');
    const isOffsuit = comboName.endsWith('o');
    let r1, r2;
    if (isPair) {
        r1 = r2 = comboName[0];
    } else {
        r1 = comboName[0];
        r2 = comboName[1];
    }
    const shuffled = [...SUITS].sort(() => Math.random() - 0.5);
    let s1 = shuffled[0], s2 = shuffled[1];
    if (isSuited) s2 = s1;
    if (isOffsuit) { while (s2 === s1) { s2 = SUITS[Math.floor(Math.random() * 4)]; } }
    if (isPair) { while (s2 === s1) { s2 = SUITS[Math.floor(Math.random() * 4)]; } }
    return { c1: { rank: r1, suit: s1 }, c2: { rank: r2, suit: s2 } };
}

// ============================================================
// HELPERS
// ============================================================
function getComboName(hand) {
    if (!hand) return '';
    const isSuited = hand.c1.suit === hand.c2.suit;
    const isPair = hand.c1.rank === hand.c2.rank;
    const r1Idx = CHART_RANKS.indexOf(hand.c1.rank);
    const r2Idx = CHART_RANKS.indexOf(hand.c2.rank);
    const high = r1Idx <= r2Idx ? hand.c1.rank : hand.c2.rank;
    const low = r1Idx <= r2Idx ? hand.c2.rank : hand.c1.rank;
    return isPair ? `${high}${low}` : `${high}${low}${isSuited ? 's' : 'o'}`;
}

function suitSymbol(suit) {
    return { hearts: '♥', diamonds: '♦', clubs: '♣', spades: '♠' }[suit] || '';
}
function cardColor(suit) {
    return (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black';
}
function renderCard(card) {
    const sym = suitSymbol(card.suit);
    const cls = cardColor(card.suit);
    return `<div class="card ${cls}"><div class="rank">${card.rank}</div><div class="suit">${sym}</div></div>`;
}

// Toast System
window.showToast = function (msg, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icon = { success: '✅', error: '❌', info: 'ℹ️' }[type] || 'ℹ️';
    toast.innerHTML = `<span>${icon}</span><span>${msg}</span>`;
    container.appendChild(toast);
    setTimeout(() => { toast.remove(); }, 3200);
};

function pct(correct, total) {
    return total === 0 ? 0 : Math.round((correct / total) * 100);
}

// ============================================================
// GAME LOGIC — EVALUATE
// ============================================================
function evaluateAction(hand, position) {
    if (state.currentMode === 'RFI') return evaluateRFI(hand, position);
    if (state.currentMode === 'PUSH_FOLD') return evaluatePushFold(hand, position);
    if (state.currentMode === 'DEFEND') return evaluateDefend(hand);
    if (state.currentMode === 'CUSTOM') return evaluateCustom(hand, state.currentCustomRangeName);
}

function evaluateCustom(hand, rangeName) {
    const combo = getComboName(hand);
    const range = state.customRanges[rangeName];
    if (!range) return { action: 'Fold', explanation: 'No range selected.' };

    if (range.raise && range.raise.includes(combo)) {
        return { action: 'Raise', explanation: `Custom Range [${rangeName}]: ${combo} is a Raise.` };
    }
    if (range.call && range.call.includes(combo)) {
        return { action: 'Call', explanation: `Custom Range [${rangeName}]: ${combo} is a Call.` };
    }
    return { action: 'Fold', explanation: `Custom Range [${rangeName}]: ${combo} is a Fold.` };
}

function evaluateRFI(hand, position) {
    const combo = getComboName(hand);
    const range = RFI_RANGES[position];
    const isRaise = range && range.has(combo);
    if (isRaise) {
        return {
            action: 'Raise', explanation: position === 'UTG'
                ? I18N[state.lang].evalRfiUtgRaise(combo)
                : I18N[state.lang].evalRfiRaise(position, combo)
        };
    }
    return {
        action: 'Fold', explanation: position === 'UTG'
            ? I18N[state.lang].evalRfiUtgFold(combo)
            : I18N[state.lang].evalRfiFold(position, combo)
    };
}

function evaluatePushFold(hand, position) {
    const combo = getComboName(hand);
    const ranges = PUSH_RANGES_BY_STACK[state.currentStack] || PUSH_10BB;
    const range = ranges[position];
    if (range && range.has(combo)) return { action: 'All-In', explanation: I18N[state.lang].evalPush(position, combo, state.currentStack) };
    return { action: 'Fold', explanation: I18N[state.lang].evalPushFold(position, combo, state.currentStack) };
}

function evaluateDefend(hand) {
    const combo = getComboName(hand);
    const sc = DEFEND_SCENARIOS[state.currentDefendScenario];
    if (!sc) return { action: 'Fold', explanation: '' };
    if (sc.THREE_BET.has(combo)) return { action: 'Raise', explanation: I18N[state.lang].evalDefendRaise(combo, sc.villain, sc.hero) };
    if (sc.CALL && sc.CALL.has(combo)) return { action: 'Call', explanation: I18N[state.lang].evalDefendCall(combo, sc.villain, sc.hero) };
    return { action: 'Fold', explanation: I18N[state.lang].evalDefendFold(combo, sc.villain, sc.hero) };
}

// ============================================================
// DOM ELEMENTS (initialized on load)
// ============================================================
let feedbackEl, feedbackTitleEl, feedbackMsgEl, feedbackIconEl, scoreEl, streakEl, lifetimeHandsEl;
let holeCardsEl, heroPositionEl, scenarioTextEl, chartModalEl, infoModalEl;
let coachContentEl, coachBadgeEl, btnCallEl, btnRaiseEl, btnAllInEl, btnRangeEditorEl;
let accuracyHudEl;

function initElements() {
    feedbackEl = document.getElementById('feedback');
    feedbackTitleEl = document.getElementById('feedback-title');
    feedbackMsgEl = document.getElementById('feedback-message');
    feedbackIconEl = document.getElementById('feedback-icon');
    scoreEl = document.getElementById('score');
    streakEl = document.getElementById('streak');
    lifetimeHandsEl = document.getElementById('lifetime-hands');
    holeCardsEl = document.getElementById('hole-cards');
    heroPositionEl = document.getElementById('hero-position');
    scenarioTextEl = document.getElementById('scenario-text');
    chartModalEl = document.getElementById('chart-modal');
    infoModalEl = document.getElementById('info-modal');
    coachContentEl = document.getElementById('coach-content');
    coachBadgeEl = document.getElementById('coach-badge');
    btnCallEl = document.getElementById('btn-call');
    btnRaiseEl = document.getElementById('btn-raise');
    btnAllInEl = document.getElementById('btn-allin');
    btnRangeEditorEl = document.getElementById('btn-range-editor');
    accuracyHudEl = document.getElementById('accuracy-hud');
}

function updateScenarioUI() {
    if (!state.currentHand) return;
    const t = I18N[state.lang];
    const combo = getComboName(state.currentHand);
    const pos = t.position[state.currentPosition] || state.currentPosition;
    if (state.currentMode === 'RFI') {
        scenarioTextEl.innerText = t.scenarioRfi(combo, pos);
        heroPositionEl.innerText = t.position[state.currentPosition] || state.currentPosition;
    } else if (state.currentMode === 'PUSH_FOLD') {
        scenarioTextEl.innerText = t.scenarioPush(combo, pos, state.currentStack);
        heroPositionEl.innerText = t.position[state.currentPosition] || state.currentPosition;
    } else if (state.currentMode === 'DEFEND') {
        const sc = DEFEND_SCENARIOS[state.currentDefendScenario];
        scenarioTextEl.innerText = t.scenarioDefendFull(combo, sc.villain, sc.hero);
        heroPositionEl.innerText = `${sc.hero} vs ${sc.villain}`;
    } else if (state.currentMode === 'CUSTOM') {
        scenarioTextEl.innerText = `You are dealt ${combo}. You are in position ${pos}.`;
        heroPositionEl.innerText = pos;
    }
}

function startTurn() {
    feedbackEl.classList.add('hidden');

    // pick position
    if (state.currentMode === 'DEFEND') {
        const keys = Object.keys(DEFEND_SCENARIOS);
        state.currentDefendScenario = keys[Math.floor(Math.random() * keys.length)];
        const sc = DEFEND_SCENARIOS[state.currentDefendScenario];
        state.currentPosition = sc.hero;
    } else {
        const validPos = ['UTG', 'HJ', 'CO', 'BTN', 'SB'];
        state.currentPosition = validPos[Math.floor(Math.random() * validPos.length)];
    }

    const hand = generateHandWeighted();
    state.currentHand = hand;

    holeCardsEl.innerHTML = renderCard(hand.c1) + renderCard(hand.c2);
    if (navigator.vibrate) navigator.vibrate(20); // Light haptic deal

    updateScenarioUI();

    const result = evaluateAction(hand, state.currentPosition);
    state.correctAction = result.action;
    state.explanation = result.explanation;
}

window.handleAction = function (action) {
    if (!state.currentHand) return;
    const isCorrect = action === state.correctAction;
    const combo = getComboName(state.currentHand);

    if (isCorrect) {
        state.score += 10;
        state.streak++;
        feedbackTitleEl.innerText = I18N[state.lang].feedbackCorrect;
        feedbackEl.className = 'feedback success';
        if (feedbackIconEl) feedbackIconEl.innerText = '✅';
        if (navigator.vibrate) navigator.vibrate([30, 50, 30]); // Success chime pattern
    } else {
        state.score = Math.max(0, state.score - 5);
        state.streak = 0;
        feedbackTitleEl.innerText = I18N[state.lang].feedbackIncorrect;
        feedbackEl.className = 'feedback error';
        if (feedbackIconEl) feedbackIconEl.innerText = '❌';
        if (navigator.vibrate) navigator.vibrate(200); // Heavy error buzz
    }

    feedbackMsgEl.innerHTML = `${I18N[state.lang].feedbackDetail(action, state.correctAction)}<br><br>${state.explanation}`;
    if (scoreEl) scoreEl.innerText = state.score;
    streakEl.innerText = state.streak;
    feedbackEl.classList.remove('hidden');

    // Record stats + adaptive weight
    recordStat(state.currentPosition, state.currentMode, isCorrect);
    updateComboWeight(combo, isCorrect);
    if (lifetimeHandsEl) lifetimeHandsEl.innerText = state.stats.totalHands;

    // Hand history
    const entry = {
        combo, position: state.currentPosition, mode: state.currentMode,
        stack: state.currentMode === 'PUSH_FOLD' ? state.currentStack : null,
        userAction: action, correctAction: state.correctAction, correct: isCorrect
    };
    state.handHistory.unshift(entry);
    if (state.handHistory.length > 20) state.handHistory.pop();

    saveToStorage();
    renderHandHistory();

    // Update live accuracy HUD
    if (accuracyHudEl && state.stats.totalHands > 0) {
        const pct = Math.round((state.stats.totalCorrect / state.stats.totalHands) * 100);
        accuracyHudEl.innerText = pct + '%';
        accuracyHudEl.style.color = pct >= 70 ? 'var(--color-raise)' : pct >= 50 ? '#f6ad55' : 'var(--color-fold)';
    }
};

window.nextHand = function () { startTurn(); };

// ============================================================
// MODE CHANGE
// ============================================================
window.changeMode = function (newMode, preserveScore) {
    state.currentMode = newMode;
    if (!preserveScore) {
        state.score = 0; state.streak = 0;
        if (scoreEl) scoreEl.innerText = '0';
        streakEl.innerText = '0';
    }
    document.body.className = '';
    const t = I18N[state.lang];

    const stackSelector = document.getElementById('stack-selector');

    if (newMode === 'PUSH_FOLD') {
        document.body.classList.add('theme-pushfold');
        coachBadgeEl.innerText = t.badgePushFold;
        coachBadgeEl.style.background = '#e53e3e';
        coachContentEl.innerHTML = t.coachPushFold;
        btnCallEl.classList.add('hidden');
        btnRaiseEl.classList.add('hidden');
        btnAllInEl.classList.remove('hidden');
        if (stackSelector) stackSelector.classList.remove('hidden');
        const customCtrl = document.getElementById('custom-mode-controls');
        if (customCtrl) customCtrl.classList.add('hidden');
    } else if (newMode === 'DEFEND') {
        document.body.classList.add('theme-defend');
        coachBadgeEl.innerText = t.badgeDefend;
        coachBadgeEl.style.background = '#3182ce';
        coachContentEl.innerHTML = t.coachDefend;
        btnCallEl.classList.remove('hidden');
        btnRaiseEl.classList.remove('hidden');
        btnAllInEl.classList.add('hidden');
        if (stackSelector) stackSelector.classList.add('hidden');
        if (stackSelector) stackSelector.classList.add('hidden');
        const customCtrl = document.getElementById('custom-mode-controls');
        if (customCtrl) customCtrl.classList.add('hidden');
    } else if (newMode === 'CUSTOM') {
        document.body.classList.add('theme-custom');
        coachBadgeEl.innerText = t.badgeCustom || 'Custom';
        coachBadgeEl.style.background = '#4c51bf';
        coachContentEl.innerHTML = t.coachCustom;
        btnCallEl.classList.remove('hidden');
        btnRaiseEl.classList.remove('hidden');
        btnAllInEl.classList.remove('hidden');
        if (stackSelector) stackSelector.classList.add('hidden');
        const customCtrl = document.getElementById('custom-mode-controls');
        if (customCtrl) customCtrl.classList.remove('hidden');
        refreshCustomPracticePicker();
    } else { // RFI
        document.body.classList.add('theme-rfi');
        coachBadgeEl.innerText = t.badgeRfi;
        coachBadgeEl.style.background = '#38a169';
        coachContentEl.innerHTML = t.coachRfi;
        btnCallEl.classList.remove('hidden');
        btnRaiseEl.classList.remove('hidden');
        btnAllInEl.classList.add('hidden');
        if (stackSelector) stackSelector.classList.add('hidden');
        const customCtrl = document.getElementById('custom-mode-controls');
        if (customCtrl) customCtrl.classList.add('hidden');
    }

    if (btnRangeEditorEl) {
        if (newMode === 'CUSTOM') {
            btnRangeEditorEl.classList.remove('hidden');
        } else {
            btnRangeEditorEl.classList.add('hidden');
        }
    }

    startTurn();
    renderHandHistory();
};

// ============================================================
// STACK SIZE SELECTOR (Push/Fold)
// ============================================================
window.setStack = function (size) {
    state.currentStack = String(size);
    document.querySelectorAll('.stack-btn').forEach(b => b.classList.toggle('active', b.dataset.stack === String(size)));
    startTurn();
};

// ============================================================
// HAND HISTORY
// ============================================================
function renderHandHistory() {
    const el = document.getElementById('hand-history-list');
    if (!el) return;
    if (state.handHistory.length === 0) {
        el.innerHTML = `<p class="history-empty">${I18N[state.lang].historyEmpty || 'No hands yet.'}</p>`;
        return;
    }
    el.innerHTML = state.handHistory.map(h => {
        const icon = h.correct ? '✅' : '❌';
        const stackLabel = h.stack ? ` ${h.stack}bb` : '';
        return `<div class="history-item ${h.correct ? 'correct' : 'incorrect'}">
            ${icon} <strong>${h.combo}</strong> · ${h.position}${stackLabel} · ${h.mode}
            <span class="history-action">${h.userAction}→<em>${h.correctAction}</em></span>
        </div>`;
    }).join('');
}

// ============================================================
// STATS MODAL
// ============================================================
window.openStatsModal = function () {
    const modal = document.getElementById('stats-modal');
    if (!modal) return;
    const t = I18N[state.lang];
    const s = state.stats;
    const overall = pct(s.totalCorrect, s.totalHands);

    let posRows = POSITIONS.map(pos => {
        const d = s.byPosition[pos] || { hands: 0, correct: 0 };
        const p = pct(d.correct, d.hands);
        return `<tr>
            <td>${pos}</td>
            <td>${d.hands}</td>
            <td>
              <div class="progress-bar-wrap"><div class="progress-bar" style="width:${p}%"></div></div>
            </td>
            <td>${p}%</td>
        </tr>`;
    }).join('');

    const modeNames = { RFI: 'RFI (Open)', DEFEND: 'Defense', PUSH_FOLD: 'Push/Fold', CUSTOM: 'Custom' };
    let modeRows = Object.keys(modeNames).map(m => {
        const d = s.byMode[m] || { hands: 0, correct: 0 };
        const p = pct(d.correct, d.hands);
        return `<tr>
            <td>${modeNames[m]}</td>
            <td>${d.hands}</td>
            <td>
              <div class="progress-bar-wrap"><div class="progress-bar" style="width:${p}%"></div></div>
            </td>
            <td>${p}%</td>
        </tr>`;
    }).join('');

    document.getElementById('stats-content').innerHTML = `
        <div class="stats-overall">
            <div class="overall-label">Overall Accuracy</div>
            <div class="overall-value">${overall}%</div>
            <div class="overall-sub">${s.totalCorrect} / ${s.totalHands} hands</div>
        </div>
        <h3>By Position</h3>
        <table class="stats-table"><thead><tr><th>Pos</th><th>Hands</th><th>Accuracy</th><th>%</th></tr></thead><tbody>${posRows}</tbody></table>
        <h3>By Mode</h3>
        <table class="stats-table"><thead><tr><th>Mode</th><th>Hands</th><th>Accuracy</th><th>%</th></tr></thead><tbody>${modeRows}</tbody></table>
        <button class="btn-reset-stats" onclick="resetStats()">🗑 Reset All Stats</button>
    `;
    modal.classList.remove('hidden');
};

window.closeStatsModal = function () {
    const el = document.getElementById('stats-modal');
    if (el) el.classList.add('hidden');
};

window.resetStats = function () {
    if (!confirm('Reset all lifetime stats?')) return;
    state.stats = { totalHands: 0, totalCorrect: 0, byPosition: {}, byMode: {} };
    state.comboWeights = {};
    state.handHistory = [];
    saveToStorage();
    renderHandHistory();
    if (lifetimeHandsEl) lifetimeHandsEl.innerText = '0';
    if (accuracyHudEl) {
        accuracyHudEl.innerText = '—';
        accuracyHudEl.style.color = 'var(--text-secondary)';
    }
    openStatsModal();
};

// ============================================================
// SERVICE WORKER REGISTRATION (PWA)
// ============================================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js').then(reg => {
            console.log('SW registered: ', reg.scope);
        }).catch(err => {
            console.log('SW registration failed: ', err);
        });
    });
}

// ============================================================
// RANGE EDITOR
// ============================================================
let editorState = {}; // comboName -> 'raise'|'call'|'fold'

// ============================================================
// RANGE CODE (offline export/import, lossless)
// - 169 cells, each in {fold, raise, call}
// - Pack 5 trits (base-3 digits) into 1 byte since 3^5 = 243 < 256
// - Append CRC16-CCITT to detect typos
// - Encode bytes as Base64URL without padding
// ============================================================
const RANGE_CODE_PREFIX = 'PT1.'; // versioned prefix, safe for copy/paste
const RANGE_CELL_COUNT = CHART_RANKS.length * CHART_RANKS.length; // 169
const TRITS_PER_BYTE = 5;
const TRIT_POW3 = [1, 3, 9, 27, 81]; // 3^0..3^4
const RANGE_STATES = /** @type {const} */ ({ fold: 0, raise: 1, call: 2 });
const RANGE_STATES_REV = /** @type {const} */ (['fold', 'raise', 'call']);

function crc16Ccitt(bytes) {
    let crc = 0xffff;
    for (let i = 0; i < bytes.length; i++) {
        crc ^= (bytes[i] & 0xff) << 8;
        for (let b = 0; b < 8; b++) {
            crc = (crc & 0x8000) ? ((crc << 1) ^ 0x1021) : (crc << 1);
            crc &= 0xffff;
        }
    }
    return crc & 0xffff;
}

function base64UrlEncode(bytes) {
    let binary = '';
    for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
    const b64 = btoa(binary);
    return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

function base64UrlDecodeToBytes(str) {
    const padded = str.replace(/-/g, '+').replace(/_/g, '/')
        + '==='.slice((str.length + 3) % 4);
    const binary = atob(padded);
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i) & 0xff;
    return out;
}

function getRangeCellOrder() {
    // Must match renderEditorGrid() order for stable encoding across devices.
    const names = [];
    for (let r1 of CHART_RANKS) {
        for (let r2 of CHART_RANKS) {
            const i1 = CHART_RANKS.indexOf(r1), i2 = CHART_RANKS.indexOf(r2);
            const isPair = i1 === i2;
            const isSuited = i2 > i1;
            const high = i1 <= i2 ? r1 : r2, low = i1 <= i2 ? r2 : r1;
            const name = isPair ? `${high}${low}` : `${high}${low}${isSuited ? 's' : 'o'}`;
            names.push(name);
        }
    }
    return names;
}
const RANGE_CELL_ORDER = getRangeCellOrder();

function encodeEditorStateToRangeCode(es) {
    const trits = new Array(RANGE_CELL_COUNT);
    for (let i = 0; i < RANGE_CELL_COUNT; i++) {
        const name = RANGE_CELL_ORDER[i];
        const st = es[name] || 'fold';
        trits[i] = RANGE_STATES[st] ?? 0;
    }

    const byteCount = Math.ceil(RANGE_CELL_COUNT / TRITS_PER_BYTE);
    const packed = new Uint8Array(byteCount + 2); // + CRC16
    let t = 0;
    for (let bi = 0; bi < byteCount; bi++) {
        let val = 0;
        for (let k = 0; k < TRITS_PER_BYTE; k++) {
            const trit = (t < trits.length) ? trits[t] : 0;
            val += trit * TRIT_POW3[k];
            t++;
        }
        packed[bi] = val & 0xff;
    }
    const crc = crc16Ccitt(packed.slice(0, byteCount));
    packed[byteCount] = (crc >> 8) & 0xff;
    packed[byteCount + 1] = crc & 0xff;

    return RANGE_CODE_PREFIX + base64UrlEncode(packed);
}

function decodeRangeCodeToEditorState(code) {
    if (typeof code !== 'string') throw new Error('invalid');
    if (!code.startsWith(RANGE_CODE_PREFIX)) throw new Error('prefix');
    const raw = code.slice(RANGE_CODE_PREFIX.length).trim();
    const bytes = base64UrlDecodeToBytes(raw);
    const expectedPackedBytes = Math.ceil(RANGE_CELL_COUNT / TRITS_PER_BYTE);
    if (bytes.length !== expectedPackedBytes + 2) throw new Error('length');

    const data = bytes.slice(0, expectedPackedBytes);
    const gotCrc = ((bytes[expectedPackedBytes] & 0xff) << 8) | (bytes[expectedPackedBytes + 1] & 0xff);
    const wantCrc = crc16Ccitt(data);
    if (gotCrc !== wantCrc) throw new Error('crc');

    const es = {};
    let cellIdx = 0;
    for (let bi = 0; bi < data.length; bi++) {
        let v = data[bi];
        for (let k = 0; k < TRITS_PER_BYTE; k++) {
            if (cellIdx >= RANGE_CELL_COUNT) break;
            const trit = v % 3;
            v = Math.floor(v / 3);
            const st = RANGE_STATES_REV[trit] || 'fold';
            if (st !== 'fold') es[RANGE_CELL_ORDER[cellIdx]] = st;
            cellIdx++;
        }
    }
    return es;
}

window.openRangeEditor = function () {
    editorState = Object.assign({}, state.rangeEditorData);
    renderEditorGrid();
    document.getElementById('range-editor-modal').classList.remove('hidden');
    // populate saved ranges dropdown
    refreshRangeDropdown();
};
window.closeRangeEditor = function () {
    document.getElementById('range-editor-modal').classList.add('hidden');
};

function renderEditorGrid() {
    const grid = document.getElementById('range-editor-grid');
    if (!grid) return;
    let html = '';
    for (let r1 of CHART_RANKS) {
        for (let r2 of CHART_RANKS) {
            const i1 = CHART_RANKS.indexOf(r1), i2 = CHART_RANKS.indexOf(r2);
            const isPair = i1 === i2;
            const isSuited = i2 > i1;
            const high = i1 <= i2 ? r1 : r2, low = i1 <= i2 ? r2 : r1;
            const name = isPair ? `${high}${low}` : `${high}${low}${isSuited ? 's' : 'o'}`;
            const state_ = editorState[name] || 'fold';
            html += `<div class="chart-cell editor-cell ${state_}" data-combo="${name}" onclick="toggleEditorCell('${name}')">${name}</div>`;
        }
    }
    grid.innerHTML = html;
}

window.toggleEditorCell = function (name) {
    const cur = editorState[name] || 'fold';
    const cycle = { fold: 'raise', raise: 'call', call: 'fold' };
    editorState[name] = cycle[cur];
    const el = document.querySelector(`.editor-cell[data-combo="${name}"]`);
    if (el) { el.className = `chart-cell editor-cell ${editorState[name]}`; }
};

window.clearEditorGrid = function () {
    editorState = {};
    renderEditorGrid();
};

window.saveCustomRange = function () {
    const name = (document.getElementById('range-name-input').value || '').trim();
    if (!name) { showToast('Please enter a range name.', 'error'); return; }
    const raise = Object.keys(editorState).filter(k => editorState[k] === 'raise');
    const call = Object.keys(editorState).filter(k => editorState[k] === 'call');
    state.customRanges[name] = { raise, call };
    state.rangeEditorData = { ...editorState };
    saveToStorage();
    refreshRangeDropdown();
    showToast(`Range "${name}" saved!`, 'success');
};

window.loadCustomRange = function () {
    const sel = document.getElementById('range-load-select');
    const name = sel ? sel.value : '';
    if (!name || !state.customRanges[name]) return;
    editorState = {};
    state.customRanges[name].raise.forEach(c => editorState[c] = 'raise');
    state.customRanges[name].call.forEach(c => editorState[c] = 'call');
    renderEditorGrid();
};

window.deleteCustomRange = function () {
    const sel = document.getElementById('range-load-select');
    const name = sel ? sel.value : '';
    if (!name || !state.customRanges[name]) return;
    delete state.customRanges[name];
    saveToStorage();
    refreshRangeDropdown();
};

function refreshRangeDropdown() {
    const sel = document.getElementById('range-load-select');
    if (!sel) return;
    const names = Object.keys(state.customRanges);
    sel.innerHTML = names.length === 0
        ? '<option value="">-- No saved ranges --</option>'
        : names.map(n => `<option value="${n}">${n}</option>`).join('');
}

window.selectCustomRange = function (name) {
    state.currentCustomRangeName = name;
    document.querySelectorAll('#custom-range-picker-list .stack-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-range') === name);
    });
    nextHand();
};

function refreshCustomPracticePicker() {
    const container = document.getElementById('custom-range-picker-list');
    if (!container) return;
    const names = Object.keys(state.customRanges);
    if (names.length === 0) {
        container.innerHTML = '<span style="font-size:0.8rem; opacity:0.6;">No saved ranges.</span>';
        return;
    }
    if (!state.currentCustomRangeName) state.currentCustomRangeName = names[0];
    container.innerHTML = names.map(n => `
        <button class="stack-btn ${state.currentCustomRangeName === n ? 'active' : ''}" 
                data-range="${n}" onclick="selectCustomRange('${n}')">${n}</button>
    `).join('');
}

window.exportRange = function () {
    const sel = document.getElementById('range-load-select');
    const name = sel ? sel.value : '';
    if (!name || !state.customRanges[name]) { showToast('Select a range to export.', 'error'); return; }
    // Prefer compact offline "Range Code" over verbose JSON.
    // The code represents the *current editor grid* (raise/call/fold for all 169 cells).
    // This is lossless and does not require any online service to decode.
    const code = encodeEditorStateToRangeCode(editorState);
    navigator.clipboard.writeText(code).then(() => {
        showToast('Range code copied to clipboard!', 'success');
    }).catch(() => {
        // Fallback to JSON if clipboard write fails (older browsers / permissions).
        const data = JSON.stringify({ name, ...state.customRanges[name] });
        prompt('Copy range JSON:', data);
    });
};

window.importRange = function () {
    const raw = prompt('Paste range code (PT1.…) or legacy JSON:');
    if (!raw) return;
    try {
        const trimmed = raw.trim();

        // New format: PT1.<base64url>
        if (trimmed.startsWith(RANGE_CODE_PREFIX)) {
            const es = decodeRangeCodeToEditorState(trimmed);
            // Apply to editor immediately
            editorState = es;
            state.rangeEditorData = { ...editorState };
            renderEditorGrid();

            // Optionally save as a named custom range
            const defaultName = 'Imported Range';
            const name = (prompt('Name this imported range:', defaultName) || defaultName).trim();
            const raise = Object.keys(editorState).filter(k => editorState[k] === 'raise');
            const call = Object.keys(editorState).filter(k => editorState[k] === 'call');
            state.customRanges[name] = { raise, call };
            saveToStorage();
            refreshRangeDropdown();
            showToast(`Range "${name}" imported!`, 'success');
            return;
        }

        // Legacy: JSON payload { name, raise: [...], call?: [...] }
        const data = JSON.parse(trimmed);
        if (!data.name || !data.raise) throw new Error('json');
        state.customRanges[data.name] = { raise: data.raise, call: data.call || [] };
        saveToStorage();
        refreshRangeDropdown();
        showToast(`Range "${data.name}" imported!`, 'success');
    } catch (e) {
        showToast('Invalid range code / data.', 'error');
    }
};

// ============================================================
// CHART MODAL (all positions)
// ============================================================
window.renderChartGrid = function () {
    const chartPos = state.chartPosition || 'UTG';
    let range, range3Bet, rangeCall;
    let titleHTML = '', legendHTML = '', gridHTML = '';

    if (state.currentMode === 'RFI') {
        range = RFI_RANGES[chartPos] || RFI_RANGES.UTG;
        const posLabel = `${chartPos} RFI Open Range`;
        titleHTML = `<div class="modal-header"><h2>${posLabel}</h2><button class="btn-close" onclick="toggleChartModal()">&times;</button></div>`;
        legendHTML = `<div class="chart-legend"><div class="legend-item"><span class="color-box raise"></span>${I18N[state.lang].legendRaise}</div><div class="legend-item"><span class="color-box fold"></span>${I18N[state.lang].legendFold}</div></div>`;
    } else if (state.currentMode === 'PUSH_FOLD') {
        const pRanges = PUSH_RANGES_BY_STACK[state.currentStack] || PUSH_10BB;
        range = pRanges[chartPos] || pRanges.UTG;
        titleHTML = `<div class="modal-header"><h2>${chartPos} ${state.currentStack}bb Push Range</h2><button class="btn-close" onclick="toggleChartModal()">&times;</button></div>`;
        legendHTML = `<div class="chart-legend"><div class="legend-item"><span class="color-box raise"></span>Push</div><div class="legend-item"><span class="color-box fold"></span>${I18N[state.lang].legendFold}</div></div>`;
    } else if (state.currentMode === 'DEFEND') {
        const sc = DEFEND_SCENARIOS[state.currentDefendScenario] || DEFEND_SCENARIOS.BTN_VS_CO;
        range3Bet = sc.THREE_BET; rangeCall = sc.CALL || new Set();
        titleHTML = `<div class="modal-header"><h2>${sc.hero} vs ${sc.villain} Defense</h2><button class="btn-close" onclick="toggleChartModal()">&times;</button></div>`;
        legendHTML = `<div class="chart-legend"><div class="legend-item"><span class="color-box raise"></span>3-Bet</div><div class="legend-item" style="display:flex;align-items:center;gap:5px"><div style="width:14px;height:14px;background:#3182ce;border-radius:4px"></div>Call</div><div class="legend-item"><span class="color-box fold"></span>${I18N[state.lang].legendFold}</div></div>`;
    }

    const currentCombo = state.currentHand ? getComboName(state.currentHand) : null;
    for (let r1 of CHART_RANKS) {
        for (let r2 of CHART_RANKS) {
            const i1 = CHART_RANKS.indexOf(r1), i2 = CHART_RANKS.indexOf(r2);
            const isPair = i1 === i2, isSuited = i2 > i1;
            const high = i1 <= i2 ? r1 : r2, low = i1 <= i2 ? r2 : r1;
            const name = isPair ? `${high}${low}` : `${high}${low}${isSuited ? 's' : 'o'}`;
            const isCurrent = name === currentCombo;
            let bg;
            if (state.currentMode === 'DEFEND') {
                bg = range3Bet.has(name) ? 'raise' : (rangeCall.has(name) ? 'defend-call' : 'fold');
            } else {
                bg = range && range.has(name) ? 'raise' : 'fold';
            }
            gridHTML += `<div class="chart-cell ${bg}${isCurrent ? ' highlight' : ''}">${name}</div>`;
        }
    }

    // Position selector tabs for non-defend modes
    let posSelector = '';
    if (state.currentMode !== 'DEFEND') {
        posSelector = `<div class="chart-pos-tabs">${['UTG', 'HJ', 'CO', 'BTN', 'SB'].map(p =>
            `<button class="chart-pos-btn${p === chartPos ? ' active' : ''}" onclick="setChartPosition('${p}')">${p}</button>`
        ).join('')}</div>`;
    }

    const wrapper = document.querySelector('#chart-modal .modal-content');
    wrapper.innerHTML = titleHTML + posSelector + `<div id="chart-grid" class="chart-grid">${gridHTML}</div>` + legendHTML;
};

window.setChartPosition = function (pos) {
    state.chartPosition = pos;
    renderChartGrid();
};

window.toggleChartModal = function () {
    if (chartModalEl.classList.contains('hidden')) {
        renderChartGrid();
        chartModalEl.classList.remove('hidden');
    } else {
        chartModalEl.classList.add('hidden');
    }
};

window.toggleInfoModal = function () {
    infoModalEl.classList.toggle('hidden');
};

// ============================================================
// KEYBOARD SHORTCUTS
// ============================================================
document.addEventListener('keydown', function (e) {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

    // Skip if any modal is open (except feedback)
    const activeModals = document.querySelectorAll('.modal:not(.hidden)');
    if (activeModals.length > 0) return;

    if (!feedbackEl.classList.contains('hidden')) {
        if (e.code === 'Space') { e.preventDefault(); nextHand(); }
        return;
    }
    if (!state.currentHand) return;
    const map = { KeyF: 'Fold', KeyC: 'Call', KeyR: 'Raise', KeyA: 'All-In' };
    if (map[e.code]) { e.preventDefault(); handleAction(map[e.code]); }
});

// ============================================================
// LANGUAGE TOGGLE
// ============================================================
window.toggleLanguage = function () {
    state.lang = state.lang === 'en' ? 'zh-TW' : 'en';
    document.getElementById('lang-toggle').innerText = state.lang === 'en' ? '繁' : 'EN';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N[state.lang][key]) el.innerHTML = I18N[state.lang][key];
    });
    changeMode(state.currentMode, true);
    if (state.currentHand) updateScenarioUI();
};

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialise element references
    initElements();

    // 2. Load state
    loadFromStorage();

    // 3. Apply static i18n
    applyStaticI18n();

    // 4. Start first hand
    changeMode('RFI');

    // 5. Update stats
    if (lifetimeHandsEl) lifetimeHandsEl.innerText = state.stats.totalHands;

    // 6. Restore accuracy HUD
    if (accuracyHudEl && state.stats.totalHands > 0) {
        const pct = Math.round((state.stats.totalCorrect / state.stats.totalHands) * 100);
        accuracyHudEl.innerText = pct + '%';
        accuracyHudEl.style.color = pct >= 70 ? 'var(--color-raise)' : pct >= 50 ? '#f6ad55' : 'var(--color-fold)';
    }

    // 7. Range dropdown init
    refreshRangeDropdown();
});

function applyStaticI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const langData = I18N[state.lang];
        if (langData && typeof langData[key] === 'string') {
            el.innerHTML = langData[key];
        }
    });
}
