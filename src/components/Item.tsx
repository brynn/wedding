import React from 'react';

interface Props {
  title: string | JSX.Element;
  icon?: JSX.Element;
  description?: string;
  subtitle?: string | JSX.Element;
  body?: string | JSX.Element;
}

const Item: React.FC<Props> = ({icon, title, description, subtitle, body}: Props) => {
  return (
    <div className="item">
      {icon}
      <div>
        <h3>
          {title}
          {description && <span className="serif description">{description}</span>}
        </h3>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {body && <p>{body}</p>}
      </div>
    </div>
  );
};

export default Item;
