export function Headline (props) {
  console.log(props); // クロームで検証
  console.log(props.kid); // クロームで検証
  return (
    <>
      <h1>This is {props.title} page!</h1>
      <p>{props.comp}</p>
      <button onClick={props.onClick}>ボタン</button>
    </>
  );
}
