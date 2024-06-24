import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Asesoría Personalizada en Línea",
        1000,
        "Desarrollado con OpenAI 🤖",
        2000,
        "Tu Propio Chatbot Asesor 💻",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "40px",
        color: "white",
        display: "inline-block",
        textShadow: "1px 1px 20px #000",
        marginTop: "20px",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;
