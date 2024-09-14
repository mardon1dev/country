
const IconSearch = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5 11H11.7L11.4 10.7C12.4 9.6 13 8.1 13 6.5C13 2.9 10.1 0 6.5 0C2.9 0 0 2.9 0 6.5C0 10.1 2.9 13 6.5 13C8.1 13 9.6 12.4 10.7 11.4L11 11.7V12.5L16 17.5L17.5 16L12.5 11ZM6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5C11 9 9 11 6.5 11Z" fill="#848484"/>
    </svg>
  )
}


const DarkMode = () => {
  return (   
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_429_11017)">
        <path d="M20.9955 11.7115L22.2448 11.6721C22.2326 11.2847 22.0414 10.9249 21.7272 10.698C21.413 10.4711 21.0113 10.4029 20.6397 10.5132L20.9955 11.7115ZM12.2885 3.00454L13.4868 3.36028C13.5971 2.98873 13.5289 2.58703 13.302 2.2728C13.0751 1.95857 12.7153 1.76736 12.3279 1.75516L12.2885 3.00454ZM20.6397 10.5132C20.1216 10.667 19.5716 10.75 19 10.75V13.25C19.815 13.25 20.6046 13.1314 21.3512 12.9098L20.6397 10.5132ZM19 10.75C15.8244 10.75 13.25 8.17564 13.25 5H10.75C10.75 9.55635 14.4437 13.25 19 13.25V10.75ZM13.25 5C13.25 4.42841 13.333 3.87841 13.4868 3.36028L11.0902 2.64879C10.8686 3.39542 10.75 4.18496 10.75 5H13.25ZM12 4.25C12.0834 4.25 12.1665 4.25131 12.2492 4.25392L12.3279 1.75516C12.219 1.75173 12.1097 1.75 12 1.75V4.25ZM4.25 12C4.25 7.71979 7.71979 4.25 12 4.25V1.75C6.33908 1.75 1.75 6.33908 1.75 12H4.25ZM12 19.75C7.71979 19.75 4.25 16.2802 4.25 12H1.75C1.75 17.6609 6.33908 22.25 12 22.25V19.75ZM19.75 12C19.75 16.2802 16.2802 19.75 12 19.75V22.25C17.6609 22.25 22.25 17.6609 22.25 12H19.75ZM19.7461 11.7508C19.7487 11.8335 19.75 11.9166 19.75 12H22.25C22.25 11.8903 22.2483 11.781 22.2448 11.6721L19.7461 11.7508Z" fill="#292929"/>
      </g>
      <defs>
        <clipPath id="clip0_429_11017">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg> 
  )
}


const LightMode = () => {
  return (
    <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_429_11039)">
<circle cx="12" cy="12" r="4" stroke="#ffffff" strokeWidth="2.5" strokeLinejoin="round"/>
<path d="M20 12H21" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M3 12H4" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M12 20L12 21" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M12 3L12 4" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M17.6569 17.6569L18.364 18.364" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M5.63605 5.63604L6.34315 6.34315" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M6.34314 17.6569L5.63603 18.364" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
<path d="M18.364 5.63604L17.6568 6.34315" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
</g>
<defs>
<clipPath id="clip0_429_11039">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>
  )
}

export {DarkMode, LightMode, IconSearch}