import { ElementType } from "react";

type CardProps = {
  icon: ElementType;
  title: string;
  content: string;
  tint: string;
}

export const Card = ({ icon: Icon, title, content, tint }: CardProps) => (
  <div className='w-80 h-96 px-4 py-2 border-2 mx-4 border-primary-500 rounded-lg bg-primary-500 border-opacity-50 bg-opacity-20'>
    <div className={`my-2 mx-auto w-16 h-16 flex justify-center items-center rounded-full bg-${tint}-700 border-2 border-${tint}-700 border-opacity-50 bg-opacity-40`}>
      <Icon size={32} />
    </div>
    <h3 className="text-slate-300 w-fit mx-auto my-6">{title}</h3>
    <p className="">{content}</p>
  </div>
)