export default function Card(props) {
  return (
    <div className="card card-border bg-base-100">
      <div className="card-body">{props.children}</div>
    </div>
  );
}
