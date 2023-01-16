//Check Each row
//Check each Column
//Check each box

function isValidGroup(group: string[]) {
  const existingArray: string[] = []
  for (let x = 0; x < group.length; x++) {
    if (group[x] !== '.') {
      if (existingArray.includes(group[x])) return false
      existingArray.push(group[x])
    }
  }
  return true
}

function isValidSudoku(board: string[][]): boolean {
  const columns: string[][] = [[], [], [], [], [], [], [], [], []]
  const boxes: string[][] = [[], [], [], [], [], [], [], [], []]

  let col1Index = 0
  for (let x = 0; x < board.length; x++) {
    if (!isValidGroup(board[x])) return false

    if (x > 2 && x < 6) {
      col1Index = 3
    }
    if (x > 5) {
      col1Index = 6
    }

    for (let y = 0; y < board[x].length; y++) {
      columns[y].push(board[x][y])
      if (y < 3) {
        boxes[col1Index].push(board[x][y])
      } else if (y < 6) {
        boxes[col1Index + 1].push(board[x][y])
      } else {
        boxes[col1Index + 2].push(board[x][y])
      }
    }
  }

  for (let x = 0; x < columns.length; x++) {
    if (!isValidGroup(columns[x])) return false
  }
  for (let x = 0; x < boxes.length; x++) {
    if (!isValidGroup(boxes[x])) return false
  }

  return true
}

console.log(
  isValidSudoku([
    ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ]),
)
