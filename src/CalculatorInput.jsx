export default function CalculatorInput({ day, setDay, month, setMonth, year, setYear, errors, handleCalculate }) {
  return (
    <>
      <div className="row g-3 mb-0 mb-md-4 input-section">
        <div className="col-4">
          <label className={`form-label text-uppercase fw-bold tracking-widest ${errors.day ? 'text-danger' : 'text-secondary'}`}>Day</label>
          <input 
            type="number" 
            className={`form-control fw-bold fs-4 p-2 p-md-3 ${errors.day ? 'border-danger' : ''}`} 
            placeholder="DD" 
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
          {errors.day && <small className="text-danger fst-italic mt-1 d-block">{errors.day}</small>}
        </div>

        <div className="col-4">
          <label className={`form-label text-uppercase fw-bold tracking-widest ${errors.month ? 'text-danger' : 'text-secondary'}`}>Month</label>
          <input 
            type="number" 
            className={`form-control fw-bold fs-4 p-2 p-md-3 ${errors.month ? 'border-danger' : ''}`} 
            placeholder="MM" 
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
          {errors.month && <small className="text-danger fst-italic mt-1 d-block">{errors.month}</small>}
        </div>

        <div className="col-4">
          <label className={`form-label text-uppercase fw-bold tracking-widest ${errors.year ? 'text-danger' : 'text-secondary'}`}>Year</label>
          <input 
            type="number" 
            className={`form-control fw-bold fs-4 p-2 p-md-3 ${errors.year ? 'border-danger' : ''}`} 
            placeholder="YYYY" 
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          {errors.year && <small className="text-danger fst-italic mt-1 d-block">{errors.year}</small>}
        </div>
      </div>

      <div className="divider-container position-relative my-5">
        <hr className="m-0 border-secondary-subtle" />
        <button 
          className="submit-btn btn rounded-circle position-absolute top-50 end-0 translate-middle-y d-flex justify-content-center align-items-center"
          style={{ zIndex: 5 }}
          onClick={handleCalculate}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
            <g fill="none" stroke="#FFF" strokeWidth="2">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}