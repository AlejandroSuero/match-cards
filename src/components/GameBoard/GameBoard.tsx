import styles from "@components/GameBoard/GameBoard.module.css";

const cards: number[] = new Array(12).fill(0);

const GameBoard = () => {
  return (
    <main className={styles.board}>
      {cards.map((card, index) => (
        <div key={index} className={styles.card}>
          {card}
        </div>
      ))}
    </main>
  );
};

export default GameBoard;
