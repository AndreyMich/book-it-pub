import Layout from "./components/Layout.jsx";
import {useTranslation} from "react-i18next"
function App() {
    const {t} = useTranslation();
    return (
        <>
            <p>Test</p>
            <p>{t('description.part2')}</p>
        </>

        //<Layout/>


        /*   <div className="flex h-96">
               <div className="bg-teal-200">1</div>
               <div className="min-w-32 bg-blue-200 truncate">lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum</div>
               <div className="flex-grow bg-purple-300">3</div>
           </div>*/


)
}

export default App
