export default function CalculatorResult({ age }) {
  return (
    <div className="results-section d-flex flex-column">
      <h1 className="fw-bolder fst-italic m-0">
        <span className="result-number">{age.years}</span> years
      </h1>
      <h1 className="fw-bolder fst-italic m-0">
        <span className="result-number">{age.months}</span> months
      </h1>
      <h1 className="fw-bolder fst-italic m-0">
        <span className="result-number">{age.days}</span> days
      </h1>
    </div>
  );
}