type MenuItemProps = {
  title: string;
  price: number;
  description?: string;
};

export default function MenuItem({ title, price, description }: MenuItemProps) {
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-3">
        <div className="mb-2 text-primaryDarker">{title}</div>
        {description ? (
          <div className="text-sm italic">{description}</div>
        ) : null}
      </div>
      <div className="col-span-1 text-right">
        <span className="text-primaryDarker">
          <sup>$</sup> {price}
        </span>
      </div>
    </div>
  );
}
