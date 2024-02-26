// in an effort to at least have these examples map to the flat-embed sdk
// the entry point/ "constructor" for the tttb expects a reference to a dom element
// console.log('ttt.js loaded', board);

// future?
// win state?
// rectangle or larger than 3x3
// customize symbols or css or appearance

const tttSymbols = ['X', 'O'];
let symbolsEntered = 0;

function createTTBoard(elem) {
  const board = document.createElement('div');
  const rows = createRows()
  board.classList.add('tt-board');
  rows.forEach(row => board.appendChild(row));
  elem.appendChild(board);
  board.addEventListener('click', onClick);
  return board;
}

function createRows() {
  const rows = [];
  for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.classList.add('tt-row');
    for (let j = 0; j < 3; j++) {
      const cell = document.createElement('div');
      cell.classList.add('tt-cell');
      row.appendChild(cell);
    }
    rows.push(row);
  }
  return rows;
}



function onClick (ev) {
  console.log('clicked', ev.target);
  // cell is currently empty, so start with X for now
  const cell = ev.target;
  console.log('cell.textContent', cell.textContent)
  console.log('!cell.textContent', !cell.textContent)
  if (!cell.textContent) {
    cell.textContent = tttSymbols[symbolsEntered++ % 2];
  } else {
    if (cell.textContent === tttSymbols[0]) {
      cell.textContent = tttSymbols[1];
    } else {
      cell.textContent = '';
    }
  }
  // cell isn't empty, go to next symbol
}