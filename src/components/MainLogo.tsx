import logo from "../assets/main-image.png";

export default function MainLogo() {
  return (
    <>
      <img
        src={logo}
        alt="로고"
        style={{
          maxWidth: "150px",
        }}
      />
      <h1>뜨개로운 인생</h1>
    </>
  );
}
