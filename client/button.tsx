export default function Button({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className='btn btn-primary' {...props} />;
}
