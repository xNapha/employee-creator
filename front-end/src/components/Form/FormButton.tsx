const FormButton = ({ type, children, onClick }: any) => {
  return (
    <button
      type={type}
      className=" bg-emerald-400 rounded-md px-2 py-1 text-white"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FormButton;
