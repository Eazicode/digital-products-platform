const Footer = () => {
  const date = new Date()
  return (
    <>
      <div className="h-fit">
        <div className="w-full border-[0.1px] border-gray-200"></div>
        <p className="text-center my-[10px]">{date.getFullYear()} &copy; Digital Platform</p>
      </div>
    </>
  );
};

export default Footer;
