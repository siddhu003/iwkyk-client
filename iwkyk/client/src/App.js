import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react' 
import { useDispatch } from 'react-redux'
import './App.css'
import Navbar from './components/navbar/Navbar'
import AllRoutes from './AllRoutes'
//import { useEffect } from 'react'
import {fetchAllQuestions} from './actions/question'
import { fetchAllUsers } from './actions/users'
// import { useState } from 'react'
import { createContext, useState } from 'react'
// import { useCookies } from 'react-cookie'
// import { useMemo } from 'react'
// import {createMuiTheme } from "material-ui/core/styles";
// import {  ThemeProvider, useTheme} from "@material-ui/styles";
// import {  useTheme } from '@material-ui/styles';
// import { ThemeProvider } from "@material-ui/styles";
// // import { createMuiTheme } from '@material-ui/core';
// import { createTheme } from "@material-ui/core";

//import Auth from './pages/Auth/Auth'

export const ThemeContext = createContext(null);

// const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  
  

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])
  
  const [theme, setTheme] = useState("light");
  // const storage = typeof window !== "undefined" ? localStorage.theme : "light";
  // const [storageTheme, setStorageTheme] = useState(storage);

  // //const [mode, setMode] = useState < 'light' | 'dark' > storage;
  // const [mode, setMode] = usePersistState("theme", "light")

  // const colorMode = useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode) =>
  //         prevMode === 'light' ? 'dark' : 'light',
  //       );
  //     },
  //   }),
  //   [],
  // );

  // const theme = useMemo(
  //   () => 
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode],
  // )

  // useEffect(() => {
  //   localStorage.setItem('theme', mode)
  //   setStorageTheme(mode)
  // },[theme,storageTheme,mode])
  
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  }

//   return (
//     <ColorModeContext.Provider value={colorMode}>
//       <ThemeProvider theme={theme}>
//       <div className="App" id={theme}>
//         <Router>
//           <Navbar theme={theme} />
//           {/* <Auth theme={theme}/> */}
//             <AllRoutes theme={theme}/>
//         </Router>
//         </div>
//         </ThemeProvider>
//       </ColorModeContext.Provider>
//   );
// }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className="App" id={theme}>
        <Router>
          <Navbar toggleTheme={toggleTheme} theme={theme} />
          {/* <Auth theme={theme}/> */}
            <AllRoutes toggleTheme={toggleTheme} theme={theme}/>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

// App.post("/forogt-password", async (req, res) => {
//   const { email } = req.body;

//     try {
//         const oldUser = await users.findOne({ email });

//         if (!oldUser)
//         {
//             return res.status(404).json({message:"User doesn't exist."})
//         }

//         const secret = JWT_SECRET + oldUser.password;
//         const token = jwt.login({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: '5m' });

//         const link = `https://stack-overflow.herokuapp.com/reset-password/${oldUser._id}/${token}`;
//         console.log(link)

//     } catch (error) {
        
//     }
// })

export default App;
