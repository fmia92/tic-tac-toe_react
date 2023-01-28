export function Winner({ winner, resetGame }) {
    if (winner === null) return null

    const winnerText = winner === false ? 'Draw' : `Winner is:`

    return (
      <section className='winner'>
        <div className='text'>
          <h2>{winnerText}</h2>
          <header>
            {
              winner && <Square>{winner}</Square> 
            }
          </header>
          <footer>
            <button onClick={resetGame}>
              Restart
            </button>
          </footer>
        </div>
      </section>
    )
  }