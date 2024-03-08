function UIIcon({ icon }: { icon: string }) {
  return <img src={`/assets/icons/${icon}.svg`} alt={icon} width={35} />;
}

export default UIIcon;
