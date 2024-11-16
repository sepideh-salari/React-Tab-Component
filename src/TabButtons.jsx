export default function TabButtons({ tabData, activeTab, setActiveTab }) {
  return (
    <div className="tab__header">
      {tabData.map((item, index) => (
        <li
          className={`${index === activeTab && "active"} tab__button`}
          key={item.label}
          onClick={() => setActiveTab(index)}
        >
          {item.label}
        </li>
      ))}
    </div>
  );
}
