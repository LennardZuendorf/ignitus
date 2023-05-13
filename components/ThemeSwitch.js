import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])
  return (
    <button
      aria-label="Toggle Dark Mode"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.0005 6.87533C8.72738 6.87533 6.87533 8.72738 6.87533 11.0005C6.87533 13.2737 8.72738 15.1257 11.0005 15.1257C13.2737 15.1257 15.1257 13.2737 15.1257 11.0005C15.1257 8.72738 13.2737 6.87533 11.0005 6.87533ZM21.5885 10.3345L17.5192 8.30197L18.9587 3.98769C19.1521 3.40329 18.5978 2.84897 18.0177 3.04663L13.7034 4.48616L11.6666 0.41252C11.3916 -0.137507 10.6095 -0.137507 10.3345 0.41252L8.30197 4.48186L3.9834 3.04234C3.39899 2.84897 2.84467 3.40329 3.04234 3.9834L4.48186 8.29767L0.41252 10.3345C-0.137507 10.6095 -0.137507 11.3916 0.41252 11.6666L4.48186 13.6991L3.04234 18.0177C2.84897 18.6021 3.40329 19.1564 3.9834 18.9587L8.29767 17.5192L10.3302 21.5886C10.6052 22.1386 11.3873 22.1386 11.6623 21.5886L13.6948 17.5192L18.0091 18.9587C18.5935 19.1521 19.1478 18.5978 18.9501 18.0177L17.5106 13.7034L21.58 11.6709C22.1386 11.3916 22.1386 10.6095 21.5885 10.3345ZM14.8894 14.8894C12.7451 17.0336 9.25592 17.0336 7.11167 14.8894C4.96743 12.7452 4.96743 9.25592 7.11167 7.11167C9.25592 4.96743 12.7451 4.96743 14.8894 7.11167C17.0336 9.25592 17.0336 12.7452 14.8894 14.8894Z"
            fill="url(#paint0_linear_419_101)"
            fillOpacity="0.94"
          />
          <defs>
            <linearGradient
              id="paint0_linear_419_101"
              x1="11.0853"
              y1="-1.52609"
              x2="8.65092"
              y2="22.5482"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FF7C02" />
              <stop offset="1" stopColor="#FEF403" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8201 21.6402C14.1575 21.6402 17.2056 20.1218 19.225 17.6337C19.5237 17.2656 19.198 16.7279 18.7363 16.8159C13.4867 17.8156 8.66592 13.7906 8.66592 8.4914C8.66592 5.43887 10.3 2.63186 12.9558 1.12047C13.3652 0.887501 13.2623 0.266825 12.7971 0.180898C12.1449 0.0606488 11.4832 9.87476e-05 10.8201 0C4.84753 0 0 4.83992 0 10.8201C0 16.7926 4.83992 21.6402 10.8201 21.6402Z"
            fill="url(#paint0_linear_419_99)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_419_99"
              x1="18.931"
              y1="0.476084"
              x2="7.12764"
              y2="24.7038"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#210CAE" />
              <stop offset="1" stopColor="#4DC9E6" />
            </linearGradient>
          </defs>
        </svg>
      )}
    </button>
  )
}
export default ThemeSwitch
