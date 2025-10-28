export default function Buttons({ handleClick }) {
  const buttons = [
    '1','2','3','/',
    '4','5','6','*',
    '7','8','9','-',
    '0','C','+','='
  ]

  return (
    <div className="row g-2">
      {buttons.map((btn, i) => (
        <div key={i} className="col-3">
          <button
            className="btn btn-primary w-100"
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        </div>
      ))}
    </div>
  )
}