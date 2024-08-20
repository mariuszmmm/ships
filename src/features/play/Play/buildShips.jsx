import {randomMinMax} from "./randomMinMax.jsx";
import {getFleet} from "./getFleet.jsx";
import {rotateShip} from "./rotateShip.jsx";

export const buildShips = (board) => {
		let newBoard = board.map(row => row.map(cell => ({...cell})));

		const fleet = getFleet();

		fleet.map((ship) => {
				const shipSize = ship.length;
				let placeForShip = 0;

				while (placeForShip < shipSize) {
					placeForShip = 0;
					let newShip = [];

					const colRandom = randomMinMax(1, 10);
					const rowRandom = randomMinMax(1, 10);
					const shipRotated = rotateShip(ship);

					shipRotated.map((shipItem) => {
						const newItem = {col: colRandom + shipItem.y, row: rowRandom + shipItem.x}

						newShip = [...newShip, newItem]

						const newShipWithInfo = newShip.map((item) => {

							let hasNeighborTop = false;
							let hasNeighborBottom = false;
							let hasNeighborLeft = false;
							let hasNeighborRight = false;

							if (newShip.some((i) => item.col === i.col + 1 && item.row === i.row)) {
								hasNeighborTop = true;
							}
							if (newShip.some((i) => item.col === i.col - 1 && item.row === i.row)) {
								hasNeighborBottom = true;
							}
							if (newShip.some((i) => item.col === i.col && item.row === i.row + 1)) {
								hasNeighborLeft = true;
							}
							if (newShip.some((i) => item.col === i.col && item.row === i.row - 1)) {
								hasNeighborRight = true;
							}

							return {
								...item,
								hasNeighborTop,
								hasNeighborBottom,
								hasNeighborLeft,
								hasNeighborRight
							};
						})

						newShip = [...newShipWithInfo]

					})
// console.log(newShip)

					let tempBoard = newBoard
					newShip.forEach((newShipItem) => {
						console.log(newShipItem)

						const boardWithItems = tempBoard.map((col) => col.map((cell) => {
							console.log(cell)

							if (cell.col.number === newShipItem.col && cell.row.number === newShipItem.row && cell.cell === "empty") {
								placeForShip = ++placeForShip
								return {
									...cell,
									cell: "ship",
									hasNeighborBottom: newShipItem.hasNeighborBottom,
									hasNeighborLeft: newShipItem.hasNeighborLeft,
									hasNeighborRight: newShipItem.hasNeighborRight,
									hasNeighborTop: newShipItem.hasNeighborTop,
								};
							} else {
								return cell;
							}
						}));

						tempBoard = [...boardWithItems]

						if ((placeForShip === shipSize)) {
							tempBoard.forEach((col) => col.forEach((cell) => {
								if (cell.cell === "ship") {
									const boardWithReserved = tempBoard.map((col_) => col_.map((row_) => {
											if (
												((row_.col.number === cell.col.number + 1 &&
														(row_.row.number === cell.row.number)
													) ||
													(row_.col.number === cell.col.number &&
														(row_.row.number === cell.row.number + 1)
													) ||
													(row_.col.number === cell.col.number - 1 &&
														(row_.row.number === cell.row.number)
													) ||
													(row_.col.number === cell.col.number &&
														(row_.row.number === cell.row.number - 1)
													) ||
													(row_.col.number === cell.col.number + 1 &&
														(row_.row.number === cell.row.number + 1)
													) ||
													(row_.col.number === cell.col.number - 1 &&
														(row_.row.number === cell.row.number - 1)
													) ||
													(row_.col.number === cell.col.number - 1 &&
														(row_.row.number === cell.row.number + 1)
													) ||
													(row_.col.number === cell.col.number + 1) &&
													(row_.row.number === cell.row.number - 1)) &&
												row_.cell === "empty") {
												return {...row_, cell: "reserved"}
											} else {
												return row_
											}
										}
									))
									tempBoard = [...boardWithReserved];
									newBoard = [...boardWithReserved]
								}
							}));
						}
					});
				}
			}
		)

		return newBoard;
	}
;