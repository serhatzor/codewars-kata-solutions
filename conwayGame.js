/*
Problem URL
https://www.codewars.com/kata/52423db9add6f6fc39000354
*/

function getGeneration(cells, generations) {
    let nextGeneration = deepCopy(cells);
    for (let g = 0; g < generations; g++) {
      expandRowsAndColumns(nextGeneration);
      nextGeneration = moveNextGeneration(nextGeneration);
    }
    cropRowsAndColumns(nextGeneration);
    return nextGeneration;
  }
  function deepCopy(cells){
    let newCells = [];
    for(let i=0;i<cells.length;i++){
      let row = cells[i];
      newCells[i] = [];
      for(let j=0;j<row.length;j++){
        newCells[i].push(row[j]);
      }
    }
    return newCells;
  }
  function expandRowsAndColumns(cells) {
    cells.unshift(getZeroRow(cells[0].length));
    cells.push(getZeroRow(cells[0].length));
    for (let i = 0; i < cells.length; i++) {
      cells[i].unshift(0);
      cells[i].push(0);
    }
  }
  
  function getZeroRow(count) {
    let row = [];
    for (let i = 0; i < count; i++) {
      row.push(0);
    }
    return row;
  }
  
  function cropRowsAndColumns(cells) {
    removeZeroRows(cells);
    removeZeroColumns(cells);
  }
  
  function removeZeroRows(cells) {
    let rowCount = cells.length;
    for (let r = 0; r < rowCount; r++) {
      let sum = cells[r].reduce((f, s) => f + s, 0);
      if (sum <= 0) {
        cells.splice(r, 1);
        rowCount--;
        r--;
      } else {
        break;
      }
    }
    rowCount = cells.length;
    for (let r = rowCount - 1; r >= 0; r--) {
      let sum = cells[r].reduce((f, s) => f + s, 0);
      if (sum <= 0) {
        cells.splice(r, 1);
      } else {
        break;
      }
    }
  }
  
  function removeZeroColumns(cells) {
    let columCount = cells[0].length;
    for (let c = 0; c < columCount; c++) {
      let sum = 0;
      for (let r = 0; r < cells.length; r++) {
        sum += cells[r][c];
      }
      if (sum <= 0) {
        for (let r = 0; r < cells.length; r++) {
          cells[r].splice(c, 1);
        }
        c--;
        columCount--;
      } else {
        break;
      }
    }
    columCount = cells[0].length;
    for (let c = columCount - 1; c >= 0; c--) {
      let sum = 0;
      for (let r = 0; r < cells.length; r++) {
        sum += cells[r][c];
      }
      if (sum <= 0) {
        for (let r = 0; r < cells.length; r++) {
          cells[r].splice(c, 1);
        }
      } else {
        break;
      }
    }
  }
  
  function moveNextGeneration(cells) {
    let nextGeneration = [];
    for (let r = 0; r < cells.length; r++) {
      nextGeneration[r] = [];
      let currentRow = cells[r];
      for (let c = 0; c < currentRow.length; c++) {
        let currentCellValue = currentRow[c];
        let mooreNeighborhood = getCountByMooreNeighborhood(
          cells,
          r,
          c,
          currentCellValue
        );
        if (currentCellValue == 1) {
          if (mooreNeighborhood < 2 || mooreNeighborhood > 3) {
            currentCellValue = 0;
          }
        } else {
          if (mooreNeighborhood == 3) {
            currentCellValue = 1;
          }
        }
        nextGeneration[r].push(currentCellValue);
      }
    }
    return nextGeneration;
  }
  
  function getCountByMooreNeighborhood(cells, r, c, currentCellValue) {
    let startRow = r - 1;
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      if (startRow < 0) {
        startRow++;
        continue;
      }
      if (startRow > cells.length - 1) {
        break;
      }
      let startColumn = c - 1;
      for (let j = 0; j < 3; j++) {
        if (startColumn < 0) {
          startColumn++;
          continue;
        }
        if (startColumn > cells[startRow].length - 1) {
          break;
        }
        sum += cells[startRow][startColumn];
        startColumn++;
      }
      startRow++;
    }
    return sum - currentCellValue;
  }
  