import { FC } from 'react';

interface Prop {
  setTheme: (theme: 'light' | 'dark') => void;
  theme: string;
}

const Topbar: FC<Prop> = ({ setTheme, theme }) => {
  return (
    <div className='navbar bg-base-100' data-theme={theme}>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='inline-block h-5 w-5 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl normal-case'>Qureos</a>
      </div>
      <div className='form-control'>
        <label className='label cursor-pointer'>
          <span className='label-text mr-5'>Dark Mode</span>
          <input
            type='checkbox'
            className='toggle'
            onChange={(event) =>
              setTheme(event.target.checked ? 'dark' : 'light')
            }
            checked={theme == 'dark'}
          />
        </label>
      </div>
      <div className='dropdown-end dropdown'>
        <label tabIndex={0} className='avatar btn btn-ghost btn-circle'>
          <button className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block h-5 w-5 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z'
              ></path>
            </svg>
          </button>
        </label>
        <ul
          tabIndex={1}
          className='dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow'
        >
          <li>
            <a className='justify-between'>
              Profile
              <span className='badge'>New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
