import { ClockHistory, CheckCircle } from "@styled-icons/bootstrap";
import { Payment } from "@styled-icons/fluentui-system-filled";
import { Whatsapp } from "@styled-icons/boxicons-logos";
import Banners from "@shared/components/Banner";

const actions = [
  {
    text: "Entrega Rápida y Segura",
    icon: <ClockHistory className="text-main  mb-2" />,
  },
  {
    text: "Métodos de Pago",
    icon: <Payment className="text-main  mb-2" />,
  },
  {
    text: "Máxima Calidad",
    icon: <CheckCircle className="text-main  mb-2" />,
  },
  {
    text: "¿Necesitas ayuda?",
    icon: <Whatsapp className="text-main  mb-2" />,
  },
];

const banners: React.FC = () => {
  return (
    <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 ">
      {actions.map((action, index) => (
        <Banners key={index} text={action.text} icon={action.icon} />
      ))}
    </div>
  );
};

export default banners;
