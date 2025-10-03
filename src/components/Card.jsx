const Card = ({ img, title, desc }) => {
  return (
    <>
      <div className="w-[450px] h-[100px] text-center">
        <div className="mx-auto flex justify-center mb-[10px]">
          <img src={img} alt="" />
        </div>

        <h1 className="text-[20px] font-medium">{title}</h1>

        <p className="whitespace-pre-line">{desc}</p>
      </div>
    </>
  );
};

export default Card;
