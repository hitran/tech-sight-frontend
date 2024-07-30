export default function Input({ label, id, style, inputStyle, ...props }) {
  return (
    <div className={`flex flex-col justify-between text-2xl mb-5 ${style}`}>
      <label htmlFor={id} className="text-green mr-3 grow-0">
        {label}
      </label>
      <input
        id={id}
        className={`bg-green text-white p-1 pl-2 grow ${inputStyle}`}
        {...props}
      />
    </div>
  );
}
