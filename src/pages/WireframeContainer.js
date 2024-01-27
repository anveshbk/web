const WireframeContainer = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "921px 20px 30px",
        boxSizing: "border-box",
        textAlign: "center",
        fontSize: "60px",
        color: "#fff",
        fontFamily: "Overlock",
      }}
    >
      <img
        style={{
          width: "1452px",
          position: "absolute",
          margin: "0",
          top: "calc(50% - 544px)",
          left: "calc(50% - 726px)",
          height: "1088px",
          objectFit: "cover",
        }}
        alt=""
        src="/img-20190713-072034-1@2x.png"
      />
      <b
        style={{
          height: "73px",
          position: "relative",
          display: "inline-block",
          zIndex: "1",
        }}
      >
        Coming Soon......
      </b>
    </div>
  );
};

export default WireframeContainer;
