export const saveGame = ({board, turn}) => {
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', turn)
}

export const loadGame = () => {
    const board = JSON.parse(window.localStorage.getItem('board'))
    const turn = window.localStorage.getItem('turn')
    return {board, turn}
}

export const resetGameFromStorage = () => {
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}