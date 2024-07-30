export default function Form({
  children,
  name,
  errorMessage,
  onSubmit,
  style,
}) {
  return (
    <div
      className={`bg-gray shadow-md rounded-lg px-8 py-6 min-w-max ${style}`}
    >
      <h1 className="text-orange text-lg font-bold text-center mb-4">{name}</h1>
      {errorMessage !== null && (
        <div className="text-center mb-5 max-w-72 m-auto">
          <p className="text-red">{errorMessage}</p>
        </div>
      )}
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
}
