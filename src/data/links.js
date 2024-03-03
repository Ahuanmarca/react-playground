export const CODE_LINKS = {
  audioPlayer: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/ReactHooks/StaleValues/AudioPlayer.jsx',
  clickCounter: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/ClickCounter/ClickCounter.jsx',
  driftingTimers: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/DriftingTimers/DriftingTimers.jsx',
  keyboardInput: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/KeyboardInput/KeyboardInput.jsx',
  languageSelector: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/LanguageSelector/LanguageSelector.jsx',
  loginForm: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/LoginForm/LoginForm.jsx',
  mousePosition: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/MousePosition/MousePosition.jsx',
  fetchingOnEvent: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/ReactHooks/DataFetching/FetchingOnEvent.jsx',
  fetchingOnMount: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/ReactHooks/DataFetching/FetchingOnMount.jsx',
  programmingJokes: 'https://github.com/Ahuanmarca/react-playground/blob/main/src/pages/ReactHooks/DataFetching/ProgrammingJokes.jsx',
};

export const publicApis = {
  publicApis: 'https://api.publicapis.org/entries',
  programmingJokes: 'https://official-joke-api.appspot.com/jokes/programming/random',
  randomUser: 'https://randomuser.me/api/',
  universities: 'http://universities.hipolabs.com/search?country=Spain',
  // View the Bitcoin Price Index (BPI) in real-time.
  coinDesk: 'https://api.coindesk.com/v1/bpi/currentprice.json',
};

export const SIDEBAR_LINKS = [
  {
    category: 'Uncategorized',
    links: [
      { to: '/driftingtimers', title: 'Drifting Timers' },
      { to: '/sortabletable', title: 'Sortable Table' },
      { to: '/languageselector', title: 'Language Selector' },

    ]
  },
  {
    category: 'Clean Up',
    links: [
      { to: '/keyboardinput', title: 'Keyboard Input' },
      { to: '/clickcounter', title: 'Click Counter' },
      { to: '/showmouseposition', title: 'Mouse Position' },
    ],
  },
  {
    category: 'Data Fetching',
    links: [
      { to: '/fetchingonevent', title: 'Fetching on Event' },
      { to: '/fetchingonmount', title: 'Fetching on mount' },
      { to: '/programmingjokes', title: 'Programming Jokes' },
      { to: '/booksearch', title: 'Book Search' },
    ]
  },
];
