const Inputs = () => {
  return (
    <div className="flex mt-[55px]">
      <div className="text-center">
        <label className="text-[26px] mb-[24px]">Color</label>
        <br />
        <div className="w-[93px] h-[60px] bg-[#26272A] flex items-center justify-center rounded-[36px] mt-[24px]">
          <input
            className=" bg-inherit w-[50px] h-[50px] rounded-[100%] overflow-hidden  border-none -moz-appearance:none -webkit-appearance:none "
            type="color"
            value={"#EDC42C"}
          />
        </div>
      </div>
      <div className="mx-[39px] text-center">
        <label className="text-[26px] mb-[24px]">QUANTITY</label>
        <br />
        <div className="w-[180px] h-[60px] bg-[#26272A] flex items-center justify-center rounded-[36px] mt-[24px]">
          <h1 className="text-[32px]"> &minus;</h1>
          <input
            type="number"
            placeholder={"2"}
            className="w-[50px] h-[50px] bg-[#26272A] text-center text-[29px] mx-[28px]"
          />
          <h1 className="text-[32px]">&#43;</h1>
        </div>
      </div>
      <div className="text-center">
        {" "}
        <label className="text-[26px] my-[14px]">TOTAL PRICE</label>
        <br />
        <div className="w-[157px] h-[60px] bg-[#26272A] flex items-center justify-center rounded-[36px] mt-[24px]">
          <h1 className="text-[#BDBCBC] text-[28px]">$840</h1>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
