// --- STATE ---
let state = {
    score: 0,
    streak: 0,
    currentMode: 'RFI', // RFI, DEFEND, PUSH_FOLD
    currentHand: null,
    currentPosition: null,
    correctAction: null,
    explanation: "",
    lang: 'en'
};

// --- CONSTANTS ---
const POSITIONS = ['UTG', 'HJ', 'CO', 'BTN', 'SB', 'BB'];
const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];
const CHART_RANKS = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

// Basic Raise First In (RFI) Models by Position
const RFI_RANGES = {
    UTG: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', 'AKs', 'AQs', 'AJs', 'ATs', 'KQs', 'KJs', 'KTs', 'QJs', 'QTs', 'JTs', 'T9s', 'AKo', 'AQo']),
    HJ: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'Q9s', 'JTs', 'J9s', 'T9s', '98s', '87s', 'AKo', 'AQo', 'AJo', 'ATo', 'KQo']),
    CO: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'JTs', 'J9s', 'J8s', 'T9s', 'T8s', '98s', '87s', '76s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'KQo', 'KJo', 'KTo', 'QJo']),
    BTN: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s', 'Q4s', 'Q3s', 'Q2s', 'JTs', 'J9s', 'J8s', 'J7s', 'T9s', 'T8s', 'T7s', '98s', '97s', '87s', '86s', '76s', '75s', '65s', '54s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o', 'KQo', 'KJo', 'KTo', 'K9o', 'QJo', 'QTo', 'Q9o', 'JTo', 'J9o', 'T9o']),
};
RFI_RANGES.SB = RFI_RANGES.BTN;

// Basic 10bb Push/Fold Nash Chart Ranges (Simplified broad overview)
const PUSH_10BB = {
    UTG: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'KQs', 'KJs', 'KTs', 'QJs', 'QTs', 'JTs', 'T9s', 'AKo', 'AQo', 'AJo', 'ATo', 'KQo']),
    HJ: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'KQs', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'Q9s', 'JTs', 'T9s', '98s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'KQo', 'KJo']),
    CO: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22', 'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'QJs', 'QTs', 'Q9s', 'Q8s', 'JTs', 'J9s', 'T9s', 'T8s', '98s', '87s', '76s', 'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A5o', 'KQo', 'KJo', 'KTo', 'QJo']),
};

// Simplified BTN vs CO Raise Defense Ranges (3-Bet and Call)
const DEFEND_BTN = {
    // Premium hands to 3-Bet for value
    THREE_BET: new Set(['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', 'AQs', 'AJs', 'KQs', 'AKo', 'AQo']),
    // Broad, playable hands to Call in position
    CALL: new Set(['99', '88', '77', '66', '55', '44', '33', '22', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'KJs', 'KTs', 'K9s', 'QJs', 'QTs', 'Q9s', 'JTs', 'J9s', 'T9s', '98s', '87s', '76s', 'AJo', 'ATo', 'KQo', 'KJo', 'QJo'])
};

// Use roughly similar or wider logic for BTN and SB on 10bb.
PUSH_10BB.BTN = new Set([...PUSH_10BB.CO, 'K6s', 'K5s', 'K4s', 'K3s', 'K2s', 'Q7s', 'Q6s', 'Q5s', 'J8s', 'J7s', 'T7s', '97s', '86s', '65s', 'A6o', 'A4o', 'A3o', 'A2o', 'K9o', 'K8o', 'QTo', 'Q9o', 'JTo']);
PUSH_10BB.SB = new Set([...PUSH_10BB.BTN, 'Q4s', 'Q3s', 'Q2s', 'J6s', 'J5s', 'T6s', '96s', '75s', 'K7o', 'K6o', 'K5o', 'Q8o', 'J9o', 'J8o', 'T9o', 'T8o', '98o']);

// --- DOM ELEMENTS ---
const holeCardsEl = document.getElementById('hole-cards');
const heroPositionEl = document.getElementById('hero-position');
const scenarioTextEl = document.getElementById('scenario-text');
const feedbackEl = document.getElementById('feedback');
const feedbackTitleEl = document.getElementById('feedback-title');
const feedbackMessageEl = document.getElementById('feedback-message');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const chartModalEl = document.getElementById('chart-modal');
let chartGridEl = document.getElementById('chart-grid');
const infoModalEl = document.getElementById('info-modal');
const btnFoldEl = document.getElementById('btn-fold');
const btnCallEl = document.getElementById('btn-call');
const btnRaiseEl = document.getElementById('btn-raise');
const btnAllInEl = document.getElementById('btn-allin');
const coachContentEl = document.getElementById('coach-content');
const coachBadgeEl = document.getElementById('coach-badge');

window.toggleLanguage = function () {
    state.lang = state.lang === 'en' ? 'zh-TW' : 'en';
    const btn = document.getElementById('lang-toggle');
    btn.innerText = state.lang === 'en' ? '繁' : 'EN';

    // Update all static i18n data
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N[state.lang][key]) {
            el.innerHTML = I18N[state.lang][key];
        }
    });

    // Update dynamic text
    changeMode(state.currentMode, true); // preserve score
    if (state.currentHand && state.currentPosition) {
        updateScenarioUI();
    }

    // Update active feedback modal text if visible
    if (!feedbackEl.classList.contains('hidden')) {
        const isCorrect = Array.from(feedbackEl.classList).includes('success');
        feedbackTitleEl.innerText = isCorrect ? I18N[state.lang].feedbackCorrect : I18N[state.lang].feedbackIncorrect;
        // Ideally we would regenerate the full explanation text in the new language here,
        // but it requires re-evaluating. For simplicity, next hand will be strictly correct.
        // We will just update scenario text.
    }
};

function updateScenarioUI() {
    if (!state.currentHand) return;
    const comboName = getComboName(state.currentHand);
    if (state.currentMode === 'RFI') {
        scenarioTextEl.innerText = I18N[state.lang].scenarioRfi(comboName, I18N[state.lang].position[state.currentPosition]);
        heroPositionEl.innerText = I18N[state.lang].position[state.currentPosition];
    } else if (state.currentMode === 'PUSH_FOLD') {
        scenarioTextEl.innerText = I18N[state.lang].scenarioPush(comboName, I18N[state.lang].position[state.currentPosition]);
        heroPositionEl.innerText = I18N[state.lang].position[state.currentPosition];
    } else if (state.currentMode === 'DEFEND') {
        scenarioTextEl.innerText = I18N[state.lang].scenarioDefend(comboName);
        heroPositionEl.innerText = I18N[state.lang].positionBtnVsCo;
    }
}

// I18N removed from here since it lives in i18n.js
// --- HELPER FUNCS ---
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

// --- GAME LOGIC ---

// Simple Preflop Chart Logic (Placeholder / Simplified)
function evaluateAction(hand, position) {
    if (state.currentMode === 'RFI') {
        return evaluateRFI(hand, position);
    } else if (state.currentMode === 'PUSH_FOLD') {
        return evaluatePushFold(hand, position);
    } else if (state.currentMode === 'DEFEND') {
        return evaluateDefend(hand, position);
    }
}

function evaluateRFI(hand, position) {
    // BB is a special case since it can't RFI. For this trainer, BB scenario doesn't mean much without action before.
    // If BB, let's treat it functionally as folded to SB, so BB gets a walk.
    if (position === 'BB') {
        return { action: 'Raise', explanation: state.lang === 'zh-TW' ? '所有人都對大盲棄牌，大盲(BB)無行動贏得底池 (Walk)。為了練習我們將其標記為加注。' : 'Everyone folded to the BB, so BB wins the pot without action (Walk). For practice we just mark it Raise.' };
    }

    const comboName = getComboName(hand);
    const range = RFI_RANGES[position];
    let isRaise = range && range.has(comboName);

    let explanation = "";

    if (isRaise) {
        if (position === 'UTG') {
            explanation = I18N[state.lang].evalRfiUtgRaise(comboName);
        } else {
            explanation = I18N[state.lang].evalRfiRaise(position, comboName);
        }
        return { action: 'Raise', explanation: explanation };
    } else {
        if (position === 'UTG') {
            explanation = I18N[state.lang].evalRfiUtgFold(comboName);
        } else {
            explanation = I18N[state.lang].evalRfiFold(position, comboName);
        }
        return { action: 'Fold', explanation: explanation };
    }
}

function evaluatePushFold(hand, position) {
    if (position === 'BB') {
        return { action: 'All-In', explanation: state.lang === 'zh-TW' ? '所有人都對大盲棄牌，大盲無行動贏得底池 (Walk)。為了練習我們將其標記為全下。' : 'Everyone folded to the BB, so BB wins the pot without action (Walk). For practice we just mark it All-In.' };
    }

    const comboName = getComboName(hand);
    const range = PUSH_10BB[position];
    let isPush = range && range.has(comboName);

    if (isPush) {
        return { action: 'All-In', explanation: I18N[state.lang].evalPush(position, comboName) };
    } else {
        return { action: 'Fold', explanation: I18N[state.lang].evalPushFold(position, comboName) };
    }
}

function evaluateDefend(hand, position) {
    // For simplicity in this beginner trainer, we assume we are BTN facing a CO Open Raise.
    const comboName = getComboName(hand);

    // Check if it's a 3-bet
    if (DEFEND_BTN.THREE_BET.has(comboName)) {
        return { action: 'Raise', explanation: I18N[state.lang].evalDefendRaise(comboName) };
    }

    // Check if it's a Call
    if (DEFEND_BTN.CALL.has(comboName)) {
        return { action: 'Call', explanation: I18N[state.lang].evalDefendCall(comboName) };
    }

    // Default to Fold
    return { action: 'Fold', explanation: I18N[state.lang].evalDefendFold(comboName) };
}

function generateHand() {
    let r1 = RANKS[Math.floor(Math.random() * RANKS.length)];
    let s1 = SUITS[Math.floor(Math.random() * SUITS.length)];
    let r2 = RANKS[Math.floor(Math.random() * RANKS.length)];
    let s2 = SUITS[Math.floor(Math.random() * SUITS.length)];

    // Ensure not identical cards
    while (r1 === r2 && s1 === s2) {
        r2 = RANKS[Math.floor(Math.random() * RANKS.length)];
        s2 = SUITS[Math.floor(Math.random() * SUITS.length)];
    }

    return { c1: { rank: r1, suit: s1 }, c2: { rank: r2, suit: s2 } };
}

function suitSymbol(suit) {
    switch (suit) {
        case 'hearts': return '♥';
        case 'diamonds': return '♦';
        case 'clubs': return '♣';
        case 'spades': return '♠';
        default: return '';
    }
}

function cardColor(suit) {
    return (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black';
}

function renderCard(card) {
    const symbol = suitSymbol(card.suit);
    const colorClass = cardColor(card.suit);
    return `
        <div class="card ${colorClass}">
            <div class="rank">${card.rank}</div>
            <div class="suit">${symbol}</div>
        </div>
    `;
}

function startTurn() {
    feedbackEl.classList.add('hidden');

    // Generate scenario
    state.currentPosition = POSITIONS[Math.floor(Math.random() * POSITIONS.length)];

    const hand = generateHand();
    state.currentHand = hand;

    if (state.currentMode === 'DEFEND') {
        // Force BTN position for this simplified scenario
        state.currentPosition = 'BTN';
    }

    // Render cards
    holeCardsEl.innerHTML = renderCard(hand.c1) + renderCard(hand.c2);

    // Update scenario text using i18n-aware helper
    updateScenarioUI();

    // Evaluate logic
    const evalResult = evaluateAction(hand, state.currentPosition);
    state.correctAction = evalResult.action;
    state.explanation = evalResult.explanation;
}

// --- USER ACTION ---
window.handleAction = function (action) {
    if (!state.currentHand) return; // Prevent action if no hand

    const isCorrect = action === state.correctAction;

    if (isCorrect) {
        state.score += 10;
        state.streak += 1;
        feedbackTitleEl.innerText = I18N[state.lang].feedbackCorrect;
        feedbackEl.className = "feedback success";
    } else {
        state.score -= 5;
        state.streak = 0;
        feedbackTitleEl.innerText = I18N[state.lang].feedbackIncorrect;
        feedbackEl.className = "feedback error";
    }

    feedbackMessageEl.innerHTML = `${I18N[state.lang].feedbackDetail(action, state.correctAction)}<br><br>${state.explanation}`;

    scoreEl.innerText = state.score;
    streakEl.innerText = state.streak;

    feedbackEl.classList.remove('hidden');
};

window.nextHand = function () {
    startTurn();
};

window.changeMode = function (newMode, preserveScore) {
    state.currentMode = newMode;
    if (!preserveScore) {
        state.score = 0;
        state.streak = 0;
        scoreEl.innerText = state.score;
        streakEl.innerText = state.streak;
    }

    // Reset body theme class
    document.body.className = '';

    const t = I18N[state.lang];

    if (newMode === 'PUSH_FOLD') {
        document.body.classList.add('theme-pushfold');
        coachBadgeEl.innerText = t.badgePushFold;
        coachBadgeEl.style.background = '#e53e3e';
        coachContentEl.innerHTML = t.coachPushFold;

        btnCallEl.classList.add('hidden');
        btnRaiseEl.classList.add('hidden');
        btnAllInEl.classList.remove('hidden');
    } else if (newMode === 'DEFEND') {
        document.body.classList.add('theme-defend');
        coachBadgeEl.innerText = t.badgeDefend;
        coachBadgeEl.style.background = '#3182ce';
        coachContentEl.innerHTML = t.coachDefend;

        btnCallEl.classList.remove('hidden');
        btnRaiseEl.classList.remove('hidden');
        btnAllInEl.classList.add('hidden');
    } else { // RFI mode
        document.body.classList.add('theme-rfi');
        coachBadgeEl.innerText = t.badgeRfi;
        coachBadgeEl.style.background = '#38a169';
        coachContentEl.innerHTML = t.coachRfi;

        btnCallEl.classList.remove('hidden');
        btnRaiseEl.classList.remove('hidden');
        btnAllInEl.classList.add('hidden');
    }

    startTurn();
};

window.renderChartGrid = function () {
    if (!chartGridEl) return;
    chartGridEl.innerHTML = '';

    // Only support UTG right now for both modes
    let range;
    let titleHTML = '';
    let legendHTML = '';
    let gridHTML = '';

    if (state.currentMode === 'RFI') {
        range = RFI_RANGES['UTG'];
        titleHTML = `
            <div class="modal-header">
                <h2>${I18N[state.lang].chartUtgRfiTitle}</h2>
                <button class="btn-close" onclick="toggleChartModal()">&times;</button>
            </div>
        `;
        legendHTML = `<div class="chart-legend"><div class="legend-item"><span class="color-box raise"></span> ${I18N[state.lang].legendRaise}</div><div class="legend-item"><span class="color-box fold"></span> ${I18N[state.lang].legendFold}</div></div>`;
    } else if (state.currentMode === 'PUSH_FOLD') {
        range = PUSH_10BB['UTG'];
        titleHTML = `
            <div class="modal-header">
                <h2>${I18N[state.lang].chartUtgPushTitle}</h2>
                <button class="btn-close" onclick="toggleChartModal()">&times;</button>
            </div>
        `;
        legendHTML = `<div class="chart-legend"><div class="legend-item"><span class="color-box raise"></span> ${I18N[state.lang].legendRaise}</div><div class="legend-item"><span class="color-box fold"></span> ${I18N[state.lang].legendFold}</div></div>`;
    } else if (state.currentMode === 'DEFEND') {
        // Special render for Defend 
        titleHTML = `
            <div class="modal-header">
                <h2>${I18N[state.lang].chartDefendTitle}</h2>
                <button class="btn-close" onclick="toggleChartModal()">&times;</button>
            </div>
        `;
        legendHTML = `<div class="chart-legend"><div class="legend-item"><span class="color-box raise"></span> ${I18N[state.lang].legend3Bet}</div><div class="legend-item" style="display:flex; align-items:center; gap:5px;"><div style="width:20px;height:20px;background:#3182ce;border-radius:4px;"></div> ${I18N[state.lang].legendCall}</div><div class="legend-item"><span class="color-box fold"></span> ${I18N[state.lang].legendFold}</div></div>`;

        let range3Bet = DEFEND_BTN.THREE_BET;
        let rangeCall = DEFEND_BTN.CALL;

        for (let r1 of CHART_RANKS) {
            for (let r2 of CHART_RANKS) {
                let i1 = CHART_RANKS.indexOf(r1);
                let i2 = CHART_RANKS.indexOf(r2);
                let isSuited = i2 > i1;
                let isPair = i1 === i2;
                let high = i1 <= i2 ? r1 : r2;
                let low = i1 <= i2 ? r2 : r1;

                let cellName = isPair ? `${high}${low}` : `${high}${low}${isSuited ? 's' : 'o'}`;
                let currentCombo = state.currentHand ? getComboName(state.currentHand) : null;
                let isCurrent = currentCombo === cellName;

                let bgClass = 'fold';
                if (range3Bet.has(cellName)) { bgClass = 'raise'; }
                else if (rangeCall.has(cellName)) { bgClass = 'defend-call'; }

                let hlClass = isCurrent ? 'highlight' : '';

                gridHTML += `<div class="chart-cell ${bgClass} ${hlClass}">${cellName}</div>`;
            }
        }

        document.querySelector('#chart-modal .modal-content').innerHTML = titleHTML + `<div id="chart-grid" class="chart-grid">${gridHTML}</div>` + legendHTML;
        chartGridEl = document.getElementById('chart-grid');
        return;
    } else {
        chartGridEl.innerHTML = '<p>Charts not yet available.</p>';
        return;
    }

    for (let r1 of CHART_RANKS) {
        for (let r2 of CHART_RANKS) {
            let i1 = CHART_RANKS.indexOf(r1);
            let i2 = CHART_RANKS.indexOf(r2);

            let isSuited = i2 > i1; // upper right is suited (j > i means r2 lower mathematically in rank but index is bigger)
            let isPair = i1 === i2;
            let high = i1 <= i2 ? r1 : r2;
            let low = i1 <= i2 ? r2 : r1;

            let cellName = isPair ? `${high}${low}` : `${high}${low}${isSuited ? 's' : 'o'}`;
            let isRaise = range.has(cellName);
            let currentCombo = state.currentHand ? getComboName(state.currentHand) : null;
            let isCurrent = currentCombo === cellName;

            let bgClass = isRaise ? 'raise' : 'fold';
            let hlClass = isCurrent ? 'highlight' : '';

            gridHTML += `<div class="chart-cell ${bgClass} ${hlClass}">${cellName}</div>`;
        }
    }

    // Replace the inner contents of the modal with the dynamic title and grid
    document.querySelector('#chart-modal .modal-content').innerHTML = titleHTML + `<div id="chart-grid" class="chart-grid">${gridHTML}</div>` + legendHTML;

    // Update the reference just in case it got overwritten
    chartGridEl = document.getElementById('chart-grid');
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
    if (infoModalEl.classList.contains('hidden')) {
        infoModalEl.classList.remove('hidden');
    } else {
        infoModalEl.classList.add('hidden');
    }
};

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    // Apply initial language state translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (I18N[state.lang][key]) {
            el.innerHTML = I18N[state.lang][key];
        }
    });

    // This will format coach box and call startTurn()
    changeMode('RFI');
});
