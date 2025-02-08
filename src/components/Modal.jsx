import MenuModal from "./MenuModal";

export default function Modal({ children, isOpen, onClose }) {
  return (
    <ul className="dropdown-content menu bg-base-100 rounded-box z-1 p-2 shadow-sm w-full divide-y divide-gray-600">
      <li className="menu-li" onClick={() => handleTabChange(1)}>
        Vrienden
        <ArrowRight className="w-6 h-6 stroke-white" />
      </li>
      <li className="menu-li" onClick={() => handleTabChange(2)}>
        Betalingen
        <ArrowRight className="w-6 h-6 stroke-white" />
      </li>
      <li className="menu-li" onClick={() => handleTabChange(3)}>
        Afrekenen
        <ArrowRight className="w-6 h-6 stroke-white" />
      </li>
    </ul>
  );
}
