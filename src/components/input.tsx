import useValue from "../store/value";

const Input = ({ button }: { button: any }) => {
  const { setValue } = useValue((state: any) => state.action);
  const handleChange = (e: any) => {
    setValue(e.target.value.trim());
  };

  return (
    <>
      <div className="m-auto w-2/6 flex h-14">
        <input
          type="text"
          placeholder="Search Authors"
          className="w-9/10 rounded-3xl p-3 pl-6 outline-none rounded-r-none"
          onChange={handleChange}
        />
        {button}
      </div>
    </>
  );
};

export default Input;
