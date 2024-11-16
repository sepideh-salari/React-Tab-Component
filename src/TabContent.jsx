export default function TabContent({ tabData, activeTab }) {
  return (
    <div className="tab__container">
      <div className="tab__content">
        <h2>{tabData[activeTab].label}</h2>
        <p>{tabData[activeTab].content}</p>
      </div>
    </div>
  );
}
