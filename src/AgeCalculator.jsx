import { useState } from 'react';
import CalculatorInput from './CalculatorInput';
import CalculatorResult from './CalculatorResult';
import './AgeCalculator.css'; 

export default function AgeCalculator() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [errors, setErrors] = useState({});
  const [age, setAge] = useState({ years: '--', months: '--', days: '--' });

  const handleCalculate = () => {
    let newErrors = {};
    const currentYear = new Date().getFullYear();
    if (!day) newErrors.day = "This field is required";
    else if (day < 1 || day > 31) newErrors.day = "Must be a valid day";

    if (!month) newErrors.month = "This field is required";
    else if (month < 1 || month > 12) newErrors.month = "Must be a valid month";

    if (!year) newErrors.year = "This field is required";
    else if (year > currentYear) newErrors.year = "Must be in the past";

    if (!newErrors.day && !newErrors.month && !newErrors.year) {
      const inputDate = new Date(year, month - 1, day);
      if (inputDate.getMonth() !== month - 1) {
        newErrors.day = "Must be a valid date";
      }
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const today = new Date();
      const birthDate = new Date(year, month - 1, day);

      let calcYears = today.getFullYear() - birthDate.getFullYear();
      let calcMonths = today.getMonth() - birthDate.getMonth();
      let calcDays = today.getDate() - birthDate.getDate();

      if (calcDays < 0) {
        calcMonths -= 1;
        const previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        calcDays += previousMonthDays;
      }

      if (calcMonths < 0) {
        calcYears -= 1;
        calcMonths += 12;
      }

      setAge({ years: calcYears, months: calcMonths, days: calcDays });
    } else {
      setAge({ years: '--', months: '--', days: '--' });
    }
  };

  return (
    <div className="app-wrapper d-flex justify-content-center align-items-center min-vh-100 p-3">
      <div className="calculator-card bg-white p-4 p-md-5">
        
        <CalculatorInput 
          day={day} setDay={setDay} 
          month={month} setMonth={setMonth} 
          year={year} setYear={setYear} 
          errors={errors} 
          handleCalculate={handleCalculate} 
        />
        <CalculatorResult age={age} />
      </div>
    </div>
  );
}