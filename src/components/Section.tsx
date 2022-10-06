import React from 'react';

interface Props {
  id: string;
  children?: React.ReactNode;
}

const Section: React.FC<Props> = ({id, children}: Props) => {
  return (
    <div className={`section ${id}`} id={id}>
      {children}
    </div>
  );
};

export default Section;
