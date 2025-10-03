const Card = ({ img, title, desc }) => {
  return (
    <>
      <div className="flex items-center justify-center w-[450px] h-[180px] text-center bg-[#e3faf1]  py-[15px] rounded-[10px]">
        <div>
          <div className="mx-auto flex justify-center mb-[10px]">
            <img src={img} alt="" />
          </div>

          <h1 className="text-[20px] font-medium">{title}</h1>

          <p className="whitespace-pre-line">{desc}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
