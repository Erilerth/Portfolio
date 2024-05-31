import { FaCheck } from 'react-icons/fa6';

export default function AboutCheck({ name }: { name: string }) {
  return (
    <li>
      <FaCheck className='mr-2 inline h-4 w-4 text-gray-500 dark:text-gray-400' />
      {name}
    </li>
  );
}
