export default function StatusAldeia({ total }) {
  let message;
  if (total === 0) {
    message = "A vila está vazia";
  } else if (total >= 1 && total <= 3) {
    message = "Precisamos de mais ninjas";
  } else if (total >= 4 && total <= 7) {
    message = "Time pronto para missões!";
  } else {
    message = "Grande esquadrão em ação!";
  }
  return <div className="status"><p>{message}</p></div>;
}